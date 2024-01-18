<template>
  <div>
    <div
      v-if="isLoading || pending"
      class="p-8 rounded-lg w-full flex items-center justify-center bg-muted"
    >
      <Loader :processing="false" />
    </div>
    <div v-else class="px-4 lg:px-8 space-y-4">
      <div class="text-mu text-muted-foreground text-sm">
        {{ isPro ? 'You are currently on a Pro Plan' : 'You are on a free Plan' }}
      </div>
      <Button
        @click="manageSubscription"
        v-if="!isPro"
        variant="premium"
        :disabled="isLoading || pending"
      >
        Upgrade
        <Icon name="lucide:zap" class="w-4 h-4 ml-2 fill-white" />
      </Button>
      <Button
        @click="manageSubscription"
        v-else
        class="shadow-none bg-gray-900 text-white"
        :disabled="isLoading || pending"
      >
        Manage Subscription
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const isLoading = ref(false);
const manageSubscription = async () => {
  isLoading.value = true;
  const { data } = await useFetch('/api/stripe');
  console.log(data.value?.url);
  if (data.value) {
    // @ts-ignore
    window.location.href = data.value.url;
  }
  isLoading.value = false;
};

const { data: isPro, pending } = await useFetch('/api/stripe/checkStatus');
</script>

<style scoped></style>
