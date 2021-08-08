<template>
  <h1>STEP 5</h1>

  <div class="wrapper">
    <q-img
      class="wrapped-section wrapped-section-one"
      src="~assets/index_luxo_small_village.png"
      spinner-color="primary"
      spinner-size="82px"
    >
      <!-- <q-item-section class="radio-quiz">
          <q-radio v-model="color" val="teal" color="teal" />
        </q-item-section> -->
    </q-img>

    <q-item-section avatar class="wrapped-section wrapped-section-two">
      <q-radio v-model="color" val="teal" color="primary" />
    </q-item-section>

    <q-item-section class="text-center wrapped-section-three">
      <q-item-label>Hideaway</q-item-label>
    </q-item-section>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      color: ref("cyan"),
    };
  },
};
</script>

<style lang="scss" scoped>
.radio-quiz {
  width: 100%;
  height: 100%;
}

.wrapper {
  flex-direction: column;
  margin-left: 3%;
  width: 5%;
  border: 3px solid #d9c5a0;
  border-radius: 5px;
  padding: 0.4%;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  transition: all .2s ease;


  &:hover {
    box-shadow: unset;
    border: 4px solid #d9c5a080;;
  }
}

.wrapped-section-two {
  align-items: center;
  margin-top: 10%;
}
</style>
