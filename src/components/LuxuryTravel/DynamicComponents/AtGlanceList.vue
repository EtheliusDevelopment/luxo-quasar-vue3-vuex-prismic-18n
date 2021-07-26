<template>
  <ul>
    <li class="text-brown text-left" v-for="(item, index) in valueProps" :key="index">
    {{ item.bullet_point[0].text }}
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
</style>
