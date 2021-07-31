<template>
  <transition>
    <q-page >
      <PreLoader/>

      <div class="header-block">
        <q-img
          class="img1"
          img-class="img1-luxury"
          src="~assets/umbria_luxo.jpg"
          :ratio="16 / 9"
          spinner-color="primary"
          spinner-size="82px"
          height="450px"
        >
          <div class="absolute-top figcaption" style="height: 100%">
            <h1 class="text-white text-center">
              ITALY'S FINEST <br />
              LUXURY EXPERIENCES
            </h1>
            <h6 class="text-white">TAILORED TO YOUR PASSIONS AND TASTES</h6>
            <q-btn
              color="white"
              icon="check"
              outline
              label="LEARN WHAT WE DO"
            />
          </div>
        </q-img>
      </div>

      <div class="first-block" style="outline: dashed;">
      <div class="sub-section-first">
         <!-- Header Quiz -->
      <div class="form-header text-center" style="width: 80vw">
        <h3>TITOLO QUIZ</h3>
        <q-linear-progress
          rounded
          size="20px"
          :value="value"
          color="primary"
          class="q-mt-sm linear-progress"
        />
        <h6>Descrizione Step</h6>
      </div>

      <!-- Form -->
      <div class="form-body" style="width: 480vw">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <Step1 v-if="count == 0" />
          <Step2 v-if="count == 1" />
          <Step3 v-if="count == 2" />
          <Step4 v-if="count == 3" />

          <div>
            <q-btn
              @click="count--"
              v-if="count > 0"
              label="Back"
              type="button"
              color="primary"
            />
            <q-btn
              @click="count++"
              label="Forward"
              type="button"
              color="primary"
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </div>
      </div>
    </div>


    </q-page>
  </transition>
</template>

<script>
import { ref } from "vue";
import Step1 from "../components/Quiz/Step1.vue";
import Step2 from "../components/Quiz/Step2.vue";
import Step3 from "../components/Quiz/Step3.vue";
import Step4 from "../components/Quiz/Step4.vue";
import PreLoader from "src/components/PreLoader.vue";

export default {
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    PreLoader,
  },

  setup() {
    const count = ref(0);
    return {
      count,
      value: 0.325,
      // **COMPONENTI STEP QUIZ
      Step1,
      Step2,
      Step3,
      Step4,
    };
  },
};
</script>

<style lang="scss" scoped>
// **********HEADER BLOCK**********
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}
// **********FIRST BLOCK**********
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}
// **********SECOND BLOCK**********
</style>
