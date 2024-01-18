<template>
  <div class="space-y-4 py-4 flex-col flex h-full bg-white shadow-sm border-r">
    <div class="px-3 py-2 flex-1">
      <NuxtLink class="flex items-center pl-3 mb-14" to="/">
        <div class="relative h-8 w-8 mr-4">
          <img src="/logo.svg" alt="" />
        </div>
        <h1 class="text-2xl font-bold">MultiGenX</h1>
      </NuxtLink>
      <div class="space-y-1">
        <NuxtLink
          v-for="route in dashboardLinks"
          :key="route.link"
          :to="route.link"
          class="text-sm group text-primary flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition hover:bg-muted"
          :class="{
            'bg-muted': currentRoute.path === route.link,
          }"
        >
          <div class="flex items-center flex-1 capitalize">
            <Icon :name="route.icon" :class="`h-5 w-5 mr-3 ${route.color}`" />
            {{ route.label }}
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- Counter -->
    <div v-if="!isPro && (!isLoading || !pending)" class="px-3 border-t border-b">
      <div class="bg-white/10 border-0">
        <div class="py-6 px-2">
          <div class="text-center text-sm mb-4 space-y-4">
            <p>{{ user?.apiCount }} / {{ MAX_COUNT }} Free Generations</p>
            <!-- Progress -->
            <Progress v-model="progress" class="w-full" />
          </div>
          <Button @click="store.onOpen" variant="premium" class="w-full">
            Upgrade
            <Icon name="lucide:zap" class="w-4 h-4 ml-2 fill-white" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProModal } from '~/store/useProModal';
const store = useProModal();
const currentRoute = useRoute();
const { data: user, pending } = await useFetch('/api/user', {
  method: 'get',
  key: 'userData',
});

const progress = computed(() => {
  if (user.value && !pending.value) {
    return (user.value.apiCount / MAX_COUNT) * 100;
  }
  return 0;
});

const { data: isPro, pending: isLoading } = await useFetch('/api/stripe/checkStatus');
</script>

<style scoped></style>
