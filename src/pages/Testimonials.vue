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
      <div class="absolute-top figcaption" style="height: 100%">
        <h1 class="text-white text-center">
          ITALY'S FINEST <br />
          LUXURY EXPERIENCES
        </h1>
        <h6 class="text-white">TAILORED TO YOUR PASSIONS AND TASTES</h6>
        <q-btn color="white" icon="check" outline label="LEARN WHAT WE DO" />
      </div>
    </q-img>
    </div>

    <div class="first-block">
      <div class="sub-section-first">
        <h2 class="text-primary">
          Lorem ipsum di nove parole parole parole parole
        </h2>
        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem
          eaque voluptate omnis quod,
        </p>
        <p class="text-primary">
          earum laborum possimus, corporis dolor sit blanditiis iusto recusandae
          enim
        </p>
        <p class="text-primary">fugit porro ratione</p>
        <p class="text-primary">
          Exercitationem eaque voluptate omnis quod, fugiat praesentium minus
          voluptatum!
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


  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from 'vue'

export default {
  components: {
    PreLoader,
  },
    setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
};
</script>


<style lang="scss" scoped>
// **********HEADER BLOCK**********
// **********FIRST BLOCK**********
// **********SECOND BLOCK**********
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}
</style>
