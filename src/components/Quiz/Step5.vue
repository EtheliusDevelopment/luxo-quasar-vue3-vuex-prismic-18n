<template>
  <div class="quiz-layout">
    <div class="wrapper">
      <q-img
        class="wrapped-section wrapped-section-one"
        src="~assets/quiz_countryside.jpg"
        spinner-color="primary"
        spinner-size="82px"
        height="75%"
      >
        <!-- <q-item-section class="radio-quiz">
          <q-radio v-model="color" val="teal" color="teal" />
        </q-item-section> -->
      </q-img>

      <q-item-section avatar class="wrapped-section wrapped-section-two">
        <q-radio v-model="answer" val="teal" color="primary" label="Hideaway" />
      </q-item-section>
    </div>

    <div class="wrapper">
      <q-img
        class="wrapped-section wrapped-section-one"
        src="~assets/quiz_sea.jpg"
        spinner-color="primary"
        spinner-size="82px"
        height="75%"
      >
        <!-- <q-item-section class="radio-quiz">
          <q-radio v-model="color" val="teal" color="teal" />
        </q-item-section> -->
      </q-img>

      <q-item-section avatar class="wrapped-section wrapped-section-two">
        <q-radio v-model="answer" val="red" color="primary" label="Hideaway" />
      </q-item-section>
    </div>

    <div class="wrapper">
      <q-img
        class="wrapped-section wrapped-section-one"
        src="~assets/index_luxo_small_village.png"
        spinner-color="primary"
        spinner-size="82px"
        height="75%"
      >
        <!-- <q-item-section class="radio-quiz">
          <q-radio v-model="color" val="teal" color="teal" />
        </q-item-section> -->
      </q-img>

      <q-item-section avatar class="wrapped-section wrapped-section-two">
        <q-radio v-model="answer" val="blue" color="primary" label="Hideaway" />
      </q-item-section>
    </div>

    <div class="wrapper">
      <q-img
        class="wrapped-section wrapped-section-one"
        src="~assets/quiz_mix.jpg"
        spinner-color="primary"
        spinner-size="82px"
        height="75%"
      >
        <!-- <q-item-section class="radio-quiz">
          <q-radio v-model="color" val="teal" color="teal" />
        </q-item-section> -->
      </q-img>

      <q-item-section avatar class="wrapped-section wrapped-section-two">
        <q-radio
          v-model="answer"
          val="green"
          color="primary"
          label="Hideaway"
        />
      </q-item-section>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      answer: ref(),
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
  width: 25%;
  height: 70vh;
  flex-direction: column;
  margin-left: 3%;
  border: 3px solid #d9c5a0;
  border-radius: 5px;
  padding: 0.4%;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  transition: all 0.2s ease;
  cursor: pointer;
  margin: 2% 6%;

  &:hover {
    box-shadow: unset;
    border: 3px solid #d9c5a080;
  }
}

.wrapped-section-two {
  align-items: center;
  margin-top: 10%;
}

.quiz-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 6%;
}

@media screen and (max-width: 990px) {
}
@media screen and (max-width: 680px) {
  .quiz-layout {
    flex-direction: column;
  }

  .wrapper {
    width: 90%;
    height: 30vh;
  }

  .wrapped-section-two {
    margin-top: 5%;
  }
}
</style>
