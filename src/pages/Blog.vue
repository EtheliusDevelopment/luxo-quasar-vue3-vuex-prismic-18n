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
          <h6 class="text-white">AMAZING STORIES</h6>
          <q-separator color="white" inset />
          <h1 class="text-white text-center">Blog</h1>
          <q-btn
            class="q-px-lg q-py-xs"
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
        <div class="header-component">
          <div class="headcaption">
            <p class="text-primary">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </p>
          </div>
          <div class="head-main">
            <ul class="head-navigation">
              <li>ALL</li>

              <li>Sea</li>

              <li>Lake</li>

              <li>Montain</li>

              <li>Wine</li>

              <li>Islands</li>

              <li>Food</li>

              <li>Art</li>

              <li>Yatch</li>

              <li>Wedding</li>

              <li>Hotel</li>
            </ul>
          </div>
        </div>
        <q-separator
          spaced
          inset
          vertical
          color="primary"
          class="separator-block"
        />
        <div class="body-component">
          <TestComponent />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from "vue";
import TestComponent from "../components/Utils/TestComponent.vue";

export default {
  components: {
    PreLoader,
    TestComponent,
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
@media screen and (max-width: 990px) {
  .img1 {
    height: 20% !important;
  }

  .figcaption h1.text-white.text-center {
  margin-top: 0;
  margin-bottom: 5vh !important;
}
}


@media screen and (max-width: 680px) {
  .img1 {
    height: 15% !important;
  }

  .figcaption h1.text-white.text-center {
  margin-top: 0;
  margin-bottom: 3vh !important;
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

.first-block {
  display: grid;
}

.headcaption {
  display: flex;
  width: 100%;
  padding: 10%;
  justify-content: center;
  align-items: center;
}

.separator-block {
  margin-right: 5% !important;
  margin-left: 5% !important;
  height: 1px;
  width: 90%;
}

.head-navigation {
  list-style: none;
  display: flex;
  width: 100%;
  padding: 0 10%;
  justify-content: space-between;
}
</style>
