<template>
  <q-page>
    <PreLoader />

    <div class="header-block">
      <q-img
        class="img1"
        img-class="img1-luxury"
        src="~assets/italiank_lake_luxo.jpg"
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

    <div class="first-block" style="outline: dashed">
      <div class="sub-section-first">
        <div class="header-component">
          <div class="headcaption">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              optio architecto quibusdam quidem, ratione consequatur itaque
              repellat labore eum, autem velit praesentium fugit nam! Neque
              facilis ab unde corrupti odio? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Excepturi optio architecto quibusdam
              quidem, ratione consequatur itaque repellat labore eum, autem
              velit praesentium fugit nam! Neque facilis ab unde corrupti odio?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              optio architecto quibusdam quidem, ratione consequatur itaque
              repellat labore eum, autem velit praesentium fugit nam! Neque
              facilis ab unde corrupti odio?
            </p>
          </div>
          <h3>HEADER COMOPNENT</h3>
        </div>
        <div class="body-component">
          <h3>BODY COMPONENT</h3>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from "vue";

export default {
  components: {
    PreLoader,
  },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
    };
  },
};
</script>

<style lang="scss" scoped>
// **********HEADER BLOCK**********
@media screen and (max-width: 680px) {

  .img1{
    height: 15% !important;
  }

}

@media screen and (max-width: 990px) {

  .img1{
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
  height: 3px;
  width: 12vw;
  margin-bottom: 2vh;
}
// **********FIRST BLOCK**********
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}

.first-block {
}
</style>
