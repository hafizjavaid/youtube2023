

<template>
  <div class="home">
    <div class="container">
      <!-- Reviews Form -->
      <reviews-form />
      <!-- Reviews Stats -->
      <review-stats />
      <!-- Reviews List -->
      <review-list />
    </div>
  </div>
</template>
<script setup>
import ReviewsForm from "../components/ReviewsForm.vue";
import ReviewStats from "../components/ReviewStats.vue";
import ReviewList from "../components/ReviewList.vue";

</script>