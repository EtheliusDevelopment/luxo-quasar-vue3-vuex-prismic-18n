<template>
  <ul>
    <li
      class="text-brown text-left"
      v-for="(item, index) in valueProps"
      :key="index"
    >
      <h4>{{ item.itinerary_title[0].text }}</h4>
      <p v-for="(item2, index) in item.itinerary_paragraph" :key="index">
        {{ item2.text }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    valueProps: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  width: 100%;
}
ul {
  list-style: none;
}
</style>
