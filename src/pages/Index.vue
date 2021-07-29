<template>
  <q-page class="main-content-index">
    <q-img
      src="~assets/img_main_index.jpg"
      spinner-color="primary"
      spinner-size="82px"
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

    <div class="first-block">
      <q-img
        class="img1"
        img-class="img1-index"
        src="~assets/luxo_img_1_index.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

      <div class="sub-section-first">
        <h2 class="text-primary">
          Lorem ipsum di nove parole parole parole parole
        </h2>
        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem eaque earum laborum possimus, corporis dolor sit
          blanditiis iusto recusandae enim fugit porro ratione voluptate omnis
          quod, fugiat praesentium minus voluptatum!
        </p>
        <q-btn
          color="primary"
          icon="check"
          outline
          label="LEARN WHAT WE DO"
          class="btn-1"
        />
      </div>
    </div>

    <div class="second-block">
      <q-img
        class="img2"
        img-class="img2-index"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

      <q-img
        class="img3"
        img-class="img3-index"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

      <div class="sub-section-first-2">
        <h2 class="text-primary">Need some inspiration?</h2>
        <p class="text-primary p-long-text">
          At Luxo Italia, we pride ourselves in offering our clients luxury private tours of Italy that are exclusive, authentic and that treat each guest as an individual. Our founders, Andrea and Paul, are dedicated to delivering a top quality, guest-centred experience that showcases the beauty of Italy in a way that suits your unique travel style. With a network of the best in Italian hospitality, Andrea and Paul’s vast industry knowledge makes them experts in understanding what it is that each guest needs and how they can best be of service. From new ways to discover much-loved monuments to exploring a side of world famous cities that not everyone is lucky enough to see, we offer guests a real taste of Italy at your own pace.
        </p>
      </div>
    </div>

    <div class="third-block">
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

    <div class="fourth-block">
      <q-img
        class="img4"
        img-class="img4-index"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

      <div class="sub-section-first-3">
        <h3 class="text-primary">PAUL and ANDREA</h3>
        <h2 class="text-primary">
          Lorem ipsum di nove parole parole parole parole
        </h2>
        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem eaque earum laborum possimus, corporis dolor sit
          blanditiis iusto recusandae enim fugit porro ratione voluptate omnis
          quod, fugiat praesentium minus voluptatum!
        </p>
        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem eaque earum laborum possimus
        </p>
        <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />
      </div>
    </div>

    <div class="fifth-block">
      <div class="sub-section-first">
        <h6 class="text-primary">PAUL &amp; ANDREA</h6>
        <h2 class="text-primary">
          Lorem ipsum di nove parole parole parole parole
        </h2>
        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem eaque earum laborum possimus, corporis dolor sit
          blanditiis iusto recusandae enim fugit porro ratione voluptate omnis
          quod, fugiat praesentium minus voluptatum!
        </p>
        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem eaque earum laborum possimus
        </p>
        <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />
      </div>

      <q-img
        img-class="col-md-2 test22"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>

    <div class="six-block">
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
import { ref } from "vue";

export default {
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

.figcaption {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9;
  background: transparent !important;
}

.first-block {
  display: grid;
  grid-template-columns: 40vw 60vw;
  grid-template-rows: 100vh auto;
  border-bottom: 2px solid blue;
  /* grid-template-columns: auto; */
}

.img1-index {
  grid-column: 1;
  grid-row: 1;
}
.img1 {
  position: relative;
  bottom: 12rem;
}
.sub-section-first {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  grid-column: 2;
  grid-row: 1;
  position: absolute;
  padding: 10rem;
}
.btn-1 {
  grid-column: 1/3;
  grid-row: 2;
}
.second-block {
  border-bottom: 2px solid blue;
  display: grid;
  grid-template-columns: 60vw 10vw 30vw;
  grid-template-rows: 10vh 110vh 30vh 50vh;
}
.img2 {
  grid-column: 1/3;
  grid-row: 1/3;
}

.img3 {
  grid-column: 2/4;
  grid-row: 2/4;
}

.img3-index {
  position: relative;
  top: 25vh;
}

.sub-section-first-2 {
  grid-column: 1/4;
  grid-row: 4;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10vw;
}

.p-long-text{
  padding: 0 10vw
}
.third-block {
  border-bottom: 2px solid blue;
}
.fourth-block {
  border-bottom: 2px solid blue;
  display: grid;
  grid-template-columns: 25vw 15vw 75vw;
  grid-template-rows: 10vh 55vh 20vh;
}


.img4 {
  grid-column: 1/3;
  grid-row: 1/3;
}

.sub-section-first-3{
  background-color: $info;
  grid-column: 2/4;
  grid-row: 2/4;
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 18vw;
}




</style>
