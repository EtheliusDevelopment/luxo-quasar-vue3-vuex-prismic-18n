<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >

    <testComponentPrismic />

<q-btn color="primary" icon="check" label="About" to="/wine-club" />
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
