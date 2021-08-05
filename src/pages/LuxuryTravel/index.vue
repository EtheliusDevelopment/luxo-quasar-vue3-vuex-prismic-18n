<template>
  <q-page class="qpage-luxury">
    <PreLoader />

    <div class="header-block">
      <q-img
        class="img1"
        img-class="img1-luxury"
        src="~assets/cinqueterre_luxo.jpg"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
        height="450px"
      >
        <div class="figcaption">
          <h6 class="text-white">LUXURY TRAVEL DESIGNERS</h6>
          <q-separator color="white" inset />
          <h1 class="text-white text-center">PAUL &amp; ANDREA</h1>
          <q-btn color="white" icon="check" outline label="LEARN WHAT WE DO" />
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
        <h2 class="text-primary">
          Meticulusly curated itineraries by Luxoitalia
        </h2>
        <p class="text-primary">
          Choosing Luxo Italia, and relying on our experience, means embarking
          on the trip to Italy that you’ve always dreamed of, experiencing the
          true meaning of luxury in the Bel Paese.
        </p>
        <p class="text-primary">
          Get ready to explore enchanting places, historical landscapes, and
          breathtaking experiences off the beaten path in signature style – not
          to mention staying in Italy’s most luxurious boutique hotels
        </p>
        <p class="text-primary">
          For us, luxury travel means curating exclusive and unforgettable
          experiences that invigorates your heart and mind. We love and savour
          Italy, what it offers, its history. We are passionate about this
          country, and we want to help you share in our passion.
        </p>
        <p class="text-primary">
          Stimulate all your senses. Get some inspiration below:
        </p>
        <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />
      </div>
    </div>

    <div class="second-block" style="border: 2px solid red">
      <div class="q-pa-md">
        <TestComponent />
      </div>
    </div>

    <div class="third-block">
      <q-img
        img-class="col-md-2 test22"
        src="~assets/main_sponsors_index.png"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from "vue";
import TestComponent from '../../components/utils/TestComponent.vue';
import db from '../../db_test'


export default {
  components: {
    PreLoader,
    TestComponent,
  },
  setup() {
    const data = db;
    console.log(db);
    return {
      db,
      slide: ref(1),
      autoplay: ref(true),
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

.header-block .figcaption {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}

.header-block .figcaption h6.text-white {
  margin-bottom: 0;
}

.header-block .figcaption h1.text-white.text-center {
  margin-top: 0;
  margin-bottom: 7vh;
}

hr {
  height: 3px;
  width: 12vw;
  margin-bottom: 2vh;
}

// **********FIRST BLOCK**********
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}
// **********SECOND BLOCK**********
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}
</style>
