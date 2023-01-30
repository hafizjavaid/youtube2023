

<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>
<script setup>
import { onMounted } from "vue-demi";
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import { useReviewsStore } from "./stores/reviews";
const store = useReviewsStore();
onMounted(() => {
  store.fetchReviews();
});
</script>