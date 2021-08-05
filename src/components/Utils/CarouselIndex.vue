<template>
 <div class="carousel-index">
    <Carousel :itemsToShow="3.95" :wrapAround="true">
    <Slide v-for="slide in db" :key="slide">
      <div class="carousel__item">


        <q-img
          class="img1"
          img-class="img1-carousel"
          src="~assets/venice-footer-box.png"
          :ratio="16 / 9"
           height="450px"
           no-spinner

        >
          <div class="figcaption">
            <h4 class="title-carousel">{{ slide.title }}</h4>
          </div>
        </q-img>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <!-- <Pagination /> -->
    </template>
  </Carousel>
 </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import dbIndex from "src/db_test/db_pkg_index.json";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const db = dbIndex;

    return {
      db,
    };
  },
});
</script>

<style lang="scss" scoped>
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

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--carousel-color-primary);
  color: var(--carousel-color-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  // padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}

/* *****CUSTOMIZATIONS */

.title-carousel {
  text-transform: uppercase;
  font-size: 1.3rem;
}
</style>
