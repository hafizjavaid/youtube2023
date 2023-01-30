<template>
  <div class="card" :class="{ reverse: reverse }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style  scoped>
.card {
  background: #fff;
  color: #212121;
}
.card.reverse {
  background: #212121;
  color: #fff;
}
</style>