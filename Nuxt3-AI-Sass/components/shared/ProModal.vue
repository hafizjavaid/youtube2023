<template>
  <Dialog :open="store.isOpen" @update:open="store.onClose">
    <DialogContent>
      <DialogHeader>
        <DialogTitle class="flex justify-center items-center flex-col gap-y-4 pb-2">
          <div class="flex items-center gap-x-2 font-bold text-xl">
            Upgrade to MultiGenX
            <Badge variant="premium" class="uppercase text-sm py-1"> Pro </Badge>
          </div>
        </DialogTitle>
        <DialogDescription class="text-center pt-2 space-y-2 text-zinc-900 font-medium">
          <Card
            v-for="tool in tools"
            :key="tool.link"
            @click="$router.push(`${tool.link}`)"
            class="p-3 flex items-center justify-between border-black/5"
          >
            <div class="flex items-center gap-x-4">
              <div :class="`p-2 w-fit rounded-md ${tool.bgColor}`">
                <Icon :name="tool.icon" :class="`h-8 w-8 ${tool.color}`" />
              </div>
              <div class="font-semibold">
                {{ tool.label }}
              </div>
            </div>
            <Icon name="lucide:check" class="w-5 h-5" />
          </Card>
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button @click="onSubscribe" variant="premium" size="lg" class="w-full">
          Upgrade
          <Icon name="lucide:zap" class="w-4 h-4 ml-2 fill-white" />
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { useProModal } from '~/store/useProModal';
const store = useProModal();
const onSubscribe = async () => {
  const { data } = await useFetch('/api/stripe');
  console.log(data.value?.url);
  if (data.value) {
    // @ts-ignore
    window.location.href = data.value.url;
  }
};
</script>

<style scoped></style>
