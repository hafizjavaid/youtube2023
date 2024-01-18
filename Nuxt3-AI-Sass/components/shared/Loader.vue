<template>
  <div class="h-full flex flex-col gap-y-4 items-center justify-center">
    <div class="w-10 h-10 relative animate-spin">
      <img src="/logo.svg" alt="" />
    </div>
    <p v-if="processing" class="text-sm text-muted-foreground">
      MultiGeniX is processing...
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  processing?: boolean;
}

withDefaults(defineProps<Props>(), {
  processing: true,
});
</script>

<style scoped></style>
