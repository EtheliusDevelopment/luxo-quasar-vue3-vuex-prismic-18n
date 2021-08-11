<template>
  <q-page class="qpage" padding>
    <PreLoader />
     <LuxuryTravel />

  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { defineComponent } from "vue";
import LuxuryTravel from "../../components/LuxuryTravel";
import { ref } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    LuxuryTravel,
    PreLoader,
  },
  setup() {
    const showNow = ref(false);
    onMounted(() => {
      setTimeout(() => {
        showNow.value = true;
      }, 1500);
      // alert(showNow)
    });

    return {
      showNow,
    };
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
