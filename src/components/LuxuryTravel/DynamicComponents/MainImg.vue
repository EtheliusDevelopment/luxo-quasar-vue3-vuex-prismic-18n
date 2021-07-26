<template>
<q-img
  :src="valueProps"
  :ratio="16/9"
  spinner-color="primary"
  spinner-size="82px"
  class="q-my-xl rounded-borders"
/>

</template>

<script>
export default {
  props: {
    valueProps: {
      type: String,
    },
  },

}
</script>


<style lang="scss" scoped>
h1{
  width: 100%;
}
</style>


