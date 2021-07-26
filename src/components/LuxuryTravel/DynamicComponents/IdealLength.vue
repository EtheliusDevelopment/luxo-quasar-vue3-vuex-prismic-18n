<template>
  <h1 class="text-pink text-center">{{valueProps}}</h1>
  </template>

<script>
export default {
  props: {
    valueProps: {
      type: Number,
    },
  },

}
</script>


<style lang="scss" scoped>
h1{
  width: 100%;
}
</style>
