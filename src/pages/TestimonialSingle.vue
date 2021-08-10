<template>
  <q-page class="overflow-hidden">
    <PreLoader />

    <div class="header-block">
      <q-img
        class="img1"
        img-class="img1-luxury"
        src="~assets/about_us_luxo.png"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
        height="450px"
      >
        <div class="figcaption">
          <h6 class="text-white">LUXURY TRAVEL DESIGNERS</h6>
          <q-separator color="white" inset />
          <h1 class="text-white text-center">PAUL &amp; ANDREA</h1>
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

    <TesimonialSingle />

  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from "vue";
import TesimonialSingle from "../components/Testimonials/TestimonialSingle.vue"

export default {
  components: {
    PreLoader,
    TesimonialSingle,
     },
  setup() {



    return {

    };
  },
};
</script>

<style lang="scss" scoped>
// **********HEADER BLOCK**********

.figcaption {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}

.figcaption h6.text-white {
  margin: 1% 0 0 0;
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



@media screen and (max-width: 1300px) {
  .title-h2 {
    padding: 0 10% 0 0 !important;
  }
}

@media screen and (max-width: 1100px) {
  .img1 {
    height: 20% !important;
  }

  .img-about {
    height: 100% !important;
  }

  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 5vh;
  }

  // **********FIRST BLOCK**********
  .first-block .sub-section-first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10rem !important;
  }

  .title-h2 {
    padding: 0 10% 0 0 !important;
  }
}

@media screen and (max-width: 680px) {
  .img1 {
    height: 15% !important;
  }
  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 3vh;
  }


}
</style>
