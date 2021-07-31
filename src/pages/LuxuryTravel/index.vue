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
        <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />
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
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
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
// **********SECOND BLOCK**********
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}
</style>
