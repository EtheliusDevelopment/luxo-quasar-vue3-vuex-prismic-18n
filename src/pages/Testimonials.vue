<template>
  <q-page class="qpage-testimonials">
    <PreLoader />

    <div class="header-block">
      <q-img
        class="img1"
        img-class="img1-luxury"
        src="~assets/bg-header-1.png"
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
        <h2 class="text-primary">Read about our clients’ travel stories</h2>
        <p class="text-primary">
          Every travel experience that our clients have with us inevitably
          becomes a story, and it is because it remains indelible and
          unforgettable in their eyes and especially in their hearts.
        </p>
        <p class="text-primary">
          Many have wanted to share with us how beautiful their luxury holiday
          experience was and tell us why it was so special for them.
        </p>
        <p class="text-primary">
          There are several and varied experiences, from art to those dedicated
          to outdoor activities or immersing yourself in the most beautiful
          Italian cities, without forgetting the well-being and comfort of the
          luxury hotels and resorts that we choose and that characterize every
          story.
        </p>
      </div>
    </div>

    <div class="second-block" style="border: 2px solid red">
      <div class="q-pa-md">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel>
      </div>
    </div>

    <div class="third-block" style="border: 2px solid red">
      <q-carousel
        v-model="slide_second"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        prev-icon="arrow_left"
        next-icon="arrow_right"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        arrows
        height="300px"
        class="bg-purple text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
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
      slide_second: ref("style"),
      lorem:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
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

// **********FIRST BLOCK**********
.first-block .sub-section-first {
  display: flex;
  width: 100%;
  min-height: 60vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

// **********THIRD BLOCK**********
.third-block {
    padding: 6%;
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
// **********SECOND BLOCK**********
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}
</style>
