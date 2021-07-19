<template>
  <q-page class="flex flex-center">
    <testComponentPrismic/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import testComponentPrismic from '../components/Prismic/testComponentPrismic.vue'

export default defineComponent({
  name: 'PageIndex',
  components: {
    testComponentPrismic
  },
  setup () {

    return {
    testComponentPrismic
  }
  },
})
</script>
