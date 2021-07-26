<template>
  <q-page class="flex flex-center" padding>
    <LuxuryTravel />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import LuxuryTravel from '../../components/LuxuryTravel'

export default defineComponent({
  name: 'PageIndex',
  components : {
    LuxuryTravel
  }
})
</script>
