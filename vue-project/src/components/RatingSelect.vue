<template>
  <ul class="rating">
    <li v-for="n in 10" :key="`rating-${n}`">
      <input
        type="radio"
        :id="`num${n}`"
        name="rating"
        :value="n"
        :checked="selected === n"
        v-model="selected"
      />
      <label :for="`num${n}`">
        {{ n }}
      </label>
    </li>
  </ul>
</template>

<script >
export default {
  name: "RatingSelect",
  data() {
    return {
      selected: this.rating,
    };
  },

  props: {
    rating: {
      type: Number,
    },
  },
  watch: {
    selected(newVal) {
      this.$emit("setRating", newVal);
    },
    rating(newVal) {
      this.selected = newVal;
    },
  },
};
</script>

