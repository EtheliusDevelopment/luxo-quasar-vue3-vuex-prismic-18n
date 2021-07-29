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
  padding: 5vw;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5vw;
}

@media screen and (max-width: 680px) {
  main.q-page.q-layout-padding.qpage {
    padding: 5vw;
    grid-template-columns: auto;
    grid-gap: 5vw;
  }
}
</style>
