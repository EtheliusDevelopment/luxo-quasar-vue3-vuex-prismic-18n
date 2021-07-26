<template>
  <h1 class="text-teal text-center">from {{valueProps}} to {{valueProps2}}</h1>
  </template>

<script>
export default {
  props: {
    valueProps: {
      type: Number,
    },
    valueProps2: {
      type: Number
    },
  },

}
</script>


<style lang="scss" scoped>
h1{
  width: 100%;
}
</style>
