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

      <div class="first-block">
        <div class="sub-section-first">
          <!-- QUIZ WELCOME PAGE -->
          <div class="starter" v-if="starter">
            <h4>WELCOME TO THE QUIZ</h4>
            <q-btn
              @click="startQuiz"
              class="q-px-lg q-py-xs btn-1"
              size="1.1vw"
              label="START THE QUIZ"
              type="button"
              color="primary"
            />
          </div>
          <!-- QUIZ FLOW -->
          <div class="form-body" v-if="!starter">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <Step1 v-if="count == 0" :step="value" />
              <Step2 v-if="count == 1" :step="value" />
              <Step3 v-if="count == 2" :step="value" />
              <Step4 v-if="count == 3" :step="value" />
              <Step5 v-if="count == 4" :step="value" />
              <Step6 v-if="count == 5" :step="value" />
              <Step7 v-if="count == 6" :step="value" />
              <Step8 v-if="count == 7" :step="value" />
              <Step9 v-if="count == 8" :step="value" />
              <Step10 v-if="count == 9" :step="value" />
            </q-form>
          </div>
          <div class="button-group" v-if="!starter">
            <q-btn
              @click="prevPage"
              v-if="count > 0 && count < 9"
              class="q-px-lg q-py-xs btn-1"
              size="1.1vw"
              label="Back"
              type="button"
              color="primary"
            />
            <q-btn
              @click="nextPage"
              label="Forward"
              class="q-px-lg q-py-xs q-ml-sm"
              size="1.1vw"
              type="button"
              color="primary"
              v-if="count >= 0 && count < 9"
            />
          </div>
        </div>
      </div>
    </q-page>
  </transition>
</template>

<script>
import { ref, watchEffect } from "vue";
import Step1 from "../components/Quiz/Step1.vue";
import Step2 from "../components/Quiz/Step2.vue";
import Step3 from "../components/Quiz/Step3.vue";
import Step4 from "../components/Quiz/Step4.vue";
import Step5 from "../components/Quiz/Step5.vue";
import Step6 from "../components/Quiz/Step6.vue";
import Step7 from "../components/Quiz/Step7.vue";
import Step8 from "../components/Quiz/Step8.vue";
import Step9 from "../components/Quiz/Step9.vue";
import Step10 from "../components/Quiz/Step10.vue";
import StarterStep from "../components/Quiz/StarterStep.vue";

import PreLoader from "src/components/PreLoader.vue";

export default {
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
    Step9,
    Step10,
    StarterStep,
    PreLoader,
  },

  setup() {
    const count = ref(0);
    const value = ref(1 / 9);
    const starter = ref(true);
    watchEffect(() => (value.value = (count.value + 1) / 9));

    return {
      count,
      value,
      starter,

      startQuiz() {
        starter.value = false;
        window.scroll({
          top: 500,
          behavior: "smooth",
        });
        },

      prevPage() {
        count.value--;
        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
          window.scrollTo(0, 350);
        } else {
          window.scrollTo(0, 600);
        }
      },

      nextPage() {
        count.value++;
        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
          window.scrollTo(0, 350);
        } else {
          window.scrollTo(0, 600);
        }
      },
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
