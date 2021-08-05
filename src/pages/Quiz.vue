<template>
  <transition>
    <q-page>
      <PreLoader />

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
          <div class="figcaption">
            <h6 class="text-white">LUXURY TRAVEL DESIGNERS</h6>
            <q-separator color="white" inset />
            <h1 class="text-white text-center">PAUL &amp; ANDREA</h1>
            <q-btn
              class="q-px-lg q-py-xs btn-1"
              size="1.1vw"
              color="white"
              outline
              label="LEARN WHAT WE DO"
            />
          </div>
        </q-img>

        <div class="breadcrumbs">
          <q-breadcrumbs
            separator="---"
            class="text-orange"
            active-color="primary"
          >
            <q-breadcrumbs-el icon="home" />
            <q-breadcrumbs-el label="Components" icon="widgets" to="/" />
            <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
          </q-breadcrumbs>
        </div>
      </div>

      <div class="first-block" style="outline: dashed">
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
                  class="q-px-lg q-py-xs btn-1"
                  size="1.1vw"
                  label="Back"
                  type="button"
                  color="primary"
                />
                <q-btn
                  @click="count++"
                  label="Forward"
                  class="q-px-lg q-py-xs q-ml-sm"
                  size="1.1vw"
                  type="button"
                  color="primary"
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
@media screen and (max-width: 680px) {
  .img1 {
    height: 15% !important;
  }
}

@media screen and (max-width: 990px) {
  .img1 {
    height: 20% !important;
  }
}

.figcaption {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}

.figcaption h6.text-white {
  margin-bottom: 0;
}

.figcaption h1.text-white.text-center {
  margin-top: 0;
  margin-bottom: 7vh;
}

hr {
  height: 2px;
  width: 20%;
  margin: 2%;
}
// **********FIRST BLOCK**********
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}
// **********SECOND BLOCK**********
</style>
