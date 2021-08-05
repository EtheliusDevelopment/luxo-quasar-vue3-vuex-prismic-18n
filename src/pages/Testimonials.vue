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

    <div class="second-block-carousel">
      <CarouselTestimonials />
    </div>

    <div class="third-block-carousel">
      <CarouselTestimonialsFb />
    </div>
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from "vue";
import CarouselTestimonials from "../components/Utils/CarouselTestimonials.vue";
import CarouselTestimonialsFb from "../components/Utils/CarouselTestimonialsFb.vue";

export default {
  components: {
    PreLoader,
    CarouselTestimonials,
    CarouselTestimonialsFb,
  },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      slide_second: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
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

// **********SECOND BLOCK**********
.second-block-carousel {
  padding: 0 1rem;
}

// **********THIRD BLOCK**********

.third-block-carousel {
  margin: 6%;
  border: 2px solid $info;
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
// **********SECOND BLOCK**********
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}
</style>
