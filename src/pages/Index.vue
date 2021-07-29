<template>
  <q-page class="main-content">
    <q-img
      src="~assets/img_main_index.jpg"
      spinner-color="primary"
      spinner-size="82px"
    >
      <div class="absolute-top figcaption text-pink-12" style="height: 100%">
        <h1 class="text-white">
          Lorem ipsum dolor etur adipisicing eltatis fac
        </h1>
        <h6 class="text-white">
          Lorem ipsum dolor etur adipisicing eltatis fac
        </h6>
        <q-btn color="white" icon="check" outline label="LEARN WHAT WE DO" />
      </div>
    </q-img>

    <div class="first-block">
      <h2 class="text-primary">
        Lorem ipsum di nove parole parole parole parole
      </h2>
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        eaque earum laborum possimus, corporis dolor sit blanditiis iusto
        recusandae enim fugit porro ratione voluptate omnis quod, fugiat
        praesentium minus voluptatum!
      </p>
      <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />

      <q-img
        img-class="col-md-2 test22"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

      <q-img
        img-class="col-md-2 test22"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />
      <h2 class="text-primary">Lorem ipsum di cienque parole</h2>
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        eaque earum laborum possimus, corporis dolor sit blanditiis iusto
        recusandae enim fugit porro ratione voluptate omnis quod, fugiat
        praesentium minus voluptatum!
      </p>
    </div>

    <div class="second-block">
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
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

    <div class="sub-section-first">
            <h3 class="text-primary">PAUL and ANDREA</h3>
      <h2 class="text-primary">
        Lorem ipsum di nove parole parole parole parole
      </h2>
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        eaque earum laborum possimus, corporis dolor sit blanditiis iusto
        recusandae enim fugit porro ratione voluptate omnis quod, fugiat
        praesentium minus voluptatum!
      </p>
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        eaque earum laborum possimus
      </p>
      <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />
    </div>


    <div class="sub-section-second">
            <h3 class="text-primary">PAUL and ANDREA ED ALTRE CINQUE PAROLE A CASO</h3>
      <h2 class="text-primary">
        Lorem ipsum di nove parole parole parole parole
      </h2>
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        eaque earum laborum possimus, corporis dolor sit blanditiis iusto
        recusandae enim fugit porro ratione voluptate omnis quod, fugiat
        praesentium minus voluptatum!
      </p>
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        eaque earum laborum possimus
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

    <div class="fourth-block">

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

<style>
.figcaption {
  display: flex;
  justify-content: center;
  align-items: center;
}

.first-block {
  padding: 25vw;
  display: grid;
  border-bottom: 2px solid blue;
}
.second-block {
  border-bottom: 2px solid blue;
}
.third-block {
  border-bottom: 2px solid blue;
}
.fourth-block {
  border-bottom: 2px solid blue;
}
</style>
