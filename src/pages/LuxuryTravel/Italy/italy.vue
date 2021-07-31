<template>
  <q-page>
    <PreLoader />

    <div class="header-block">
      <q-img
        class="img1"
        img-class="img1-luxury"
        src="~assets/umbria_luxo.jpg"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
        height="350px"
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

    <div class="first-block" style="outline: dashed">
      <div class="sub-section-first">
        <div class="first-component">
          <p>FIRST component</p>
        </div>

        <div class="second-component">
          <p>FIRST component</p>
        </div>

        <div class="third-component">
          <p>THIRD component</p>
        </div>

        <div class="fourth-component">
          <q-btn color="primary" icon="check" outline label="FOURTH component"/>
        </div>

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

    <div class="third-block" style="outline: dashed">
      <div class="sub-section-first-third">
        <div class="header-component">
          <h3>HEADER COMOPNENT</h3>
        </div>
        <div class="body-component">
          <h3>BODY COMPONENT</h3>
        </div>
      </div>
    </div>

    <div class="fourth-block bg-info" style="outline: dashed">
            <div class="sub-section-first-fourth">
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
        <q-btn color="primary" icon="check" outline label="BOOK NOW" />
        <q-btn color="secondary" icon="check" outline label="CUSTOMIZE THIS TOUR" />
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
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}

.first-block {
}

.sub-section-first {
  display: flex;
  justify-content: space-around;
  margin: 0 5vw;
}
</style>
