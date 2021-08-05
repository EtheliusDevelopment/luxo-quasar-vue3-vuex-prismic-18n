<template>
  <div class="package-loop">
    <q-img
      v-for="(item, index) in db"
      :key="index"
      class="img-package-loop"
      img-class="img-package-loop_img"
      :src="item.img"
      spinner-color="primary"
      spinner-size="82px"
    >
      <div class="figcaption">
        <h6 class="text-white text-center">UMBRIA YOGA RETREAT</h6>
      </div>
    </q-img>
  </div>
</template>

<script>
import db from "../../db_test";

export default {
  components: {},
  setup() {
    const data = db;

    return {
      db,
    };
  },
};
</script>

<style lang="scss" scoped>
.package-loop {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(20vw, auto);
  padding: 3%;

  //--- JUST VISUAL STYLING BELOW
  // margin: 60px auto;
  // max-width: 800px;
}

.figcaption {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  z-index: 9;
  background: transparent !important;
  width: 100%;
  height: 100%;
}

.figcaption h6 {
  margin: unset;
  font-size: 350%;
  line-height: 120%;
}

.img-package-loop {
}
</style>
