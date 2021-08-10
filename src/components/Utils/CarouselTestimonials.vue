<template>
  <Carousel :items-to-show="1.8" :wrap-around="true">
    <Slide v-for="slide in db" :key="slide">

      <div class="carousel__item">


         <q-img
            class="img-carousel-testimonials-1"
            img-class="img1-carousel-testimonials"
            :src="slide.img"
            :ratio="16 / 9"
            height="95vh"

          >
            <div class="figcaption">
              <h4 class="title-carousel">{{ slide.title }}</h4>
            </div>
          </q-img>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import dbIndex from "src/db_test/db_carousel.json";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
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

<style scoped lang="scss">
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
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
