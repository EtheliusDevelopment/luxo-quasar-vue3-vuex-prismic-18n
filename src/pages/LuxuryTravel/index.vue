<template>
  <q-page class="qpage" padding>
    <LuxuryTravel />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LuxuryTravel from "../../components/LuxuryTravel";

export default defineComponent({
  name: "PageIndex",
  components: {
    LuxuryTravel,
  },
});
</script>

<style lang="scss" scoped>

.qpage {
  display: grid;

}

main.q-page.q-layout-padding.qpage {
  grid-template-columns: 20vw 20vw 20vw;
  grid-gap: 11vw;
}


</style>
