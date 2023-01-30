<template>
  <card>
    <button class="close" @click="store.deleteReview(item)">
      <i class="fas fa-times"></i>
    </button>
    <button class="edit" @click="store.editReview(item)">
      <i class="fas fa-edit"></i>
    </button>
    <div class="num-display">
      {{ item.rating }}
    </div>
    <div class="text-display">
      {{ item.text }}
    </div>
  </card>
</template>

<script setup>
import Card from "./shared/Card.vue";
import { useReviewsStore } from "../stores/reviews";

const store = useReviewsStore();
defineProps({
  item: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
</style>