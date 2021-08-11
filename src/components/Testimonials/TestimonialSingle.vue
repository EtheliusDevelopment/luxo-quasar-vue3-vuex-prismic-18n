<template>
  <div class="header-block">
    <q-img
      class="img1"
      img-class="img1-luxury"
      :src="single.header_block_img"
      :ratio="16 / 9"
      spinner-color="primary"
      spinner-size="82px"
      height="450px"
    >
      <div class="figcaption">
        <h6 class="text-white">A FULFILLING EXPERIENCE</h6>
        <q-separator color="white" inset />
        <h1 class="text-white text-center">{{ single.header_block_title }}</h1>
      </div>
    </q-img>

    <div class="breadcrumbs">
      <q-breadcrumbs separator="---" class="text-orange" active-color="primary">
        <q-breadcrumbs-el icon="home" />
        <q-breadcrumbs-el label="Components" icon="widgets" to="/" />
        <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
      </q-breadcrumbs>
    </div>
  </div>

  <div class="first-block">
    <div class="sub-section-first">
      <p class="text-center">{{ single.intro }}</p>
      <q-btn
        color="info"
        outline
        label="DOWNLOAD STORY"
        class="q-px-lg q-py-xs q-mt-md"
        size="1.1vw"
        @click="onClick"
        text-color="primary"
      />
    </div>
  </div>

  <div class="second-block">
    <div class="sub-section-first-img bg-primary">
      <q-img
        src="https://placeimg.com/500/300/nature"
        spinner-color="primary"
        spinner-size="82px"
        height="100%"
      />
    </div>

    <div class="sub-section-first bg-info">
      <h2 class="text-primary">Trip Journal</h2>
      <h6 class="text-primary">DATE: JUNE 12TH – JULY 7TH</h6>
      <p>Location:</p>
      <h6 class="itinerary">{{ single.location }}</h6>
    </div>
  </div>

  <div class="third-block">
    <h3 class="text-primary title-block">Date:</h3>
    <h3 class="text-primary title-block">June 12th – July 7 th</h3>

    <div class="location-block">
      <p class="location_cursor">Location:</p>
      <p class="location_itinerary">{{ single.places_bl1 }}</p>
    </div>

    <p>{{ single.first_par_bl1 }}</p>
    <p>{{ single.second_par_bl1 }}</p>
    <p>{{ single.third_par_bl1 }}</p>
    <p>{{ single.fourth_par_bl1 }}</p>

    <q-img
      class="img-third-block"
      src="https://placeimg.com/500/300/nature"
      spinner-color="primary"
      spinner-size="82px"
      height="70vh"
    />
  </div>

  <div class="fourth-block">
    <h3 class="text-primary title-block">Date:</h3>
    <h3 class="text-primary title-block">June 12th – July 7 th</h3>

    <div class="location-block">
      <p class="location_cursor">Location:</p>
      <p class="location_itinerary">{{ single.places_bl2 }}</p>
    </div>

    <p>{{ single.first_par_bl2 }}</p>
    <p>{{ single.second_par_bl2 }}</p>
    <p>{{ single.third_par_bl2 }}</p>

    <q-img
      class="img-third-block"
      src="https://placeimg.com/500/300/nature"
      spinner-color="primary"
      spinner-size="82px"
      height="70vh"
    />
  </div>

  <div class="fifth-block">
    <h3 class="text-primary title-block">Date:</h3>
    <h3 class="text-primary title-block">June 12th – July 7 th</h3>

    <div class="location-block">
      <p class="location_cursor">Location:</p>
      <p class="location_itinerary">{{ single.places_bl1 }}</p>
    </div>

    <p>{{ single.first_par_bl3 }}</p>
    <p>{{ single.second_par_bl3 }}</p>
    <p>{{ single.third_par_bl3 }}</p>
    <p>{{ single.fourth_par_bl3 }}</p>

    <q-img
      class="img-third-block"
      src="https://placeimg.com/500/300/nature"
      spinner-color="primary"
      spinner-size="82px"
      height="70vh"
    />
  </div>

  <div class="sixth-block">
    <h3 class="text-primary title-block">Date:</h3>
    <h3 class="text-primary title-block">June 12th – July 7 th</h3>

    <div class="location-block">
      <p class="location_cursor">Location:</p>
      <p class="location_itinerary">{{ single.places_bl1 }}</p>
    </div>

    <p>{{ single.first_par_bl4 }}</p>
    <p>{{ single.second_par_bl4 }}</p>
    <p>{{ single.third_par_bl5 }}</p>
    <p>{{ single.fourth_par_bl4 }}</p>

    <q-btn
      color="info"
      outline
      label="BACK TO TESTIMONIALS AND REVIEWS"
      class="q-px-lg q-py-xs q-mt-md btn-sixth-block"
      size="1.1vw"
      @click="onClick"
      text-color="primary"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import dbIndex from "../../db_test/testimonialSingle.json";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "Italy Luxury Travel",
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const params = route.params.slug;
    const single = dbIndex.find((val) => val.slug === params);

    single ? null : router.push("/error_404");

    return {
      params,
      single,
      db: ref(dbIndex),
    };
  },
};
</script>

<style lang="scss" scoped>
// **********HEADER BLOCK**********

.figcaption {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}

.figcaption h6.text-white {
  margin: 1% 0 0 0;
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

.first-block .sub-section-first {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5% 17.5rem;
}

.first-block {
  margin-bottom: 2%;
}

.title-first-block {
  padding: 0 13%;
  line-height: 60px;
}

// *******SECOND BLOCK***************

.second-block {
  display: grid;
  grid-template-columns: 1fr 20% 1.3fr;
  grid-auto-rows: 10vh 65vh 18vh;
  margin-bottom: 10%;
}

.sub-section-first {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 35%;
  grid-column: 2/4;
  grid-row: 1/3;
}

.sub-section-first-img {
  grid-column: 1/3;
  grid-row: 2/4;
}

// ********THIRD BLOCK ************
.third-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.location-block {
  display: flex;
  width: 100%;
  justify-content: center;
}

.location_cursor {
  transform: scale(1.5);
  margin-right: 7%;
}
.location_itinerary {
  transform: scale(1.5);
}

// ********FOURTH BLOCK ************
.fourth-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.location-block {
  display: flex;
  width: 100%;
  justify-content: center;
}

.location_cursor {
  transform: scale(1.5);
  margin-right: 7%;
}
.location_itinerary {
  transform: scale(1.5);
}

// ********FIFTH BLOCK ************
.fifth-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.location-block {
  display: flex;
  width: 100%;
  justify-content: center;
}

.location_cursor {
  transform: scale(1.5);
  margin-right: 7%;
}
.location_itinerary {
  transform: scale(1.5);
}

// ********SIXTH BLOCK ************
.sixth-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.location-block {
  display: flex;
  width: 100%;
  justify-content: center;
}

.location_cursor {
  transform: scale(1.5);
  margin-right: 7%;
}
.location_itinerary {
  transform: scale(1.5);
}

@media screen and (max-width: 1100px) {
  .img1 {
    height: 20% !important;
  }

  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 5vh;
  }

  // **********FIRST BLOCK**********

  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 5vh;
  }

  // **********FIRST BLOCK**********
  .first-block .sub-section-first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5% 5% !important;
  }

  .title-h2 {
    padding: 0 10% 0 0 !important;
  }
}

@media screen and (max-width: 680px) {
  .img1 {
    height: 15% !important;
  }
  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 3vh;
  }
  // **********FIRST BLOCK**********
  .first-block .sub-section-first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 2rem !important;
  }
  .img1 {
    height: 15% !important;
  }
  .figcaption h1.text-white.text-center {
    margin-top: 0;
    margin-bottom: 3vh;
  }
}
</style>
