<template>
  <q-page class="main-content-index">
    <PreLoader />

    <div class="header-block">
      <q-img
        class="imgMain"
        img-class="imgMain-index"
        src="~assets/img_main_index.jpg"
        spinner-color="primary"
        spinner-size="82px"
      >
        <div class="absolute-top figcaption" style="height: 100%">
          <h1 class="text-white text-center h1-header-block">
            Italy’s Finest <br />
            Luxury Experiences
          </h1>
          <h6 class="text-white">TAILORED TO YOUR PASSIONS AND TASTES</h6>
          <q-btn
            class="q-px-lg q-py-lg"
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
          <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
          <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
        </q-breadcrumbs>
      </div>
    </div>

    <div class="first-block">
      <div class="sub-section-first">
        <h2 class="text-primary text-center">
          Luxury private tour of Italy and custom experiences
        </h2>
        <p class="text-center p-first-block">
          A special and unique time to create wonderful memories with the people
          you love the most. So don’t limit your expectations and dreams! An
          exclusive visit to the secret rooms of the Vatican. A private vineyard
          experience in Tuscany led by the owners. We will design your perfect
          italian luxury travel together.
        </p>
        <p class="text-center p-first-block">
          We are here to listen to your travel interests and special needs, then
          we will plan a detailed itinerary togheter and take care of all the
          pre-trip arrangements. You’ll save time on planning complex
          itineraries, all kinds of bookings, and being frustrated.
        </p>
        <q-btn
          class="q-px-lg q-py-lg btn-1"
          color="primary"
          outline
          label="LEARN WHAT WE DO"
        />
      </div>
    </div>

    <div class="second-block">
      <q-img
        class="img2"
        img-class="img2-index"
        src="~assets/luxo_img_1_index.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

      <q-img
        class="img3"
        img-class="img3-index"
        src="~assets/fori_imperiali_roma_luxo.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>

    <div class="second-block-add">
      <div class="sub-section-first-2">
        <h2 class="text-primary text-center">Need some inspiration?</h2>
        <p class="text-center p-first-block">
          At Luxo Italia, we pride ourselves in offering our clients luxury
          private tours of Italy that are exclusive, authentic and that treat
          each guest as an individual. Our founders, Andrea and Paul, are
          dedicated to delivering a top quality, guest-centred experience that
          showcases the beauty of Italy in a way that suits your unique travel
          style. With a network of the best in Italian hospitality, Andrea and
          Paul’s vast industry knowledge makes them experts in understanding
          what it is that each guest needs and how they can best be of service.
          From new ways to discover much-loved monuments to exploring a side of
          world famous cities that not everyone is lucky enough to see, we offer
          guests a real taste of Italy at your own pace.
        </p>
      </div>
    </div>

    <div class="third-block">
      <Carouselindex />
    </div>

    <div class="fourth-block">
      <q-img
        class="img4"
        img-class="img4-index"
        src="~assets/index_luxo_partners.png"
        spinner-color="primary"
        spinner-size="82px"
      />

      <div class="sub-section-first-3">
        <div class="text-sub-section-first-3">
          <h6 class="text-primary subtitle-h6">PAUL &amp; ANDREA</h6>
          <h2 class="text-primary title-h2">
            Your Personal Luxury Travel Designers
          </h2>
          <p class="text-primary body-p">
            We do not just create luxury vacations in Italy, but rather
            extraordinary and unique life experiences. Each of our luxury tours
            is different simply because our travelers arranged it with us. For
            this reason, our objective is to provide you with a friendly, unique
            and warm personal approach to discussing, creating, and planning
            every detail of your travel.
          </p>
          <p class="text-primary body-p">
            During your entire luxury tour, you will travel with local experts,
            who have a deep love for their country and are proud to share the
            hidden luxury gems of Italy with you. Are you ready to experience
            the most beautiful and captivating trip of your life?
          </p>
          <q-btn
            class="q-px-lg q-py-lg btn-1 body-btn"
            color="primary"
            outline
            label="START PLANNING"
          />
        </div>
      </div>
    </div>

    <div class="fifth-block">
      <div class="sub-section-first-4">
        <h6 class="text-primary">
          HELP US CREATE THE MOST BEAUTIFUL SCRIPT FOR YOUR HOLIDAY
        </h6>
        <h2 class="text-primary">What kind of luxury traveler are you?</h2>
        <p class="text-primary">
          We do not just create luxury vacations in Italy, but rather
          extraordinary and unique life experiences. Each of our luxury tours is
          different simply because our travelers arranged it with us. For this
          reason, our objective is to provide you with a friendly, unique and
          warm personal approach to discussing, creating, and planning every
          detail of your travel.
        </p>
        <p class="text-primary">
          During your entire luxury tour, you will travel with local experts,
          who have a deep love for their country and are proud to share the
          hidden luxury gems of Italy with you. Are you ready to experience the
          most beautiful and captivating trip of your life?
        </p>
        <q-btn
          class="q-px-lg q-py-lg btn-1"
          color="primary"
          outline
          label="START THE QUIZ"
        />
      </div>

      <q-img
        class="img5"
        img-class="img5-index"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>

    <div class="sixth-block">
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
import PreLoader from "src/components/PreLoader.vue";
import Carouselindex from "src/components/Utils/CarouselIndex.vue";

export default {
  components: {
    PreLoader,
    Carouselindex,
  },

  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
// **********HEADER BLOCK***********

@media screen and (max-width: 1100px) {
  .h1-header-block {
    font-size: 45px !important;
    line-height: 50px !important;
  }

  .first-block {
    grid-template-columns: 56vw 40vw !important;
    grid-template-rows: 30vh 35vw !important;
  }

  h2.text-primary {
    padding: 0 15% !important;
  }
  .p-first-block {
    padding: 0 10% !important;
  }

  .img1-index {
    grid-column: 1;
    grid-row: 1;
    object-fit: contain;
    position: 50% 50%;
  }

  .img1 {
    bottom: 6rem !important;
    display: none;
  }

  .sub-section-first {
    position: unset !important;
    padding: unset !important;
    grid-column: 1/3 !important;
    grid-row: 1 !important;
    margin: 30% 0.75rem 0 0.75rem;
  }

  .img3-index {
    object-position: 15% 50% !important;
  }

  .second-block {
    grid-template-rows: 0.185fr 2.1fr 0.55fr !important;
  }
}

@media screen and (max-width: 680px) {
  figcaption {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 9;
    background: transparent !important;
  }

  .imgMain-index {
    height: 85%;
  }

  .first-block {
    display: grid;
    grid-template-columns: auto !important;
    grid-template-rows: auto !important;

    /* grid-template-columns: auto; */
  }

  .img1-index {
    grid-column: 1/3;
    grid-row: 1;
    object-fit: contain;
    position: 50% 50%;
  }
  .img1 {
    bottom: 5rem !important;
    display: none;
  }
  .sub-section-first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    grid-column: 1/3 !important;
    grid-row: 1 !important;
    position: unset !important;
    padding: 0 2% !important;
    margin: unset;
  }

  .btn-1 {
    grid-column: 1/3;
    grid-row: 2;
  }
  h2.text-primary {
    padding: 0 5% !important;
  }
  .p-first-block {
    padding: 0 5% !important;
  }
  .second-block {
    display: grid;
    grid-template-columns: auto !important;
    grid-template-rows: auto !important;
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
    object-position: 15% 50% !important;
  }

  .sub-section-first-2 {
    grid-column: 1/4;
    grid-row: 4;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 2% !important;
  }

  .p-long-text {
    padding: 0 10vw;
  }
  .third-block {
  }

  .q-img.q-img--menu.img3 {
    display: none !important;
  }
  .fourth-block {
    grid-template-columns: auto !important;
    grid-template-rows: auto !important;
    margin-bottom: 30% !important;
  }

  .img4 {
    grid-column: 1/3;
    grid-row: 1/3;
  }

  .sub-section-first-3 {
    background-color: $info;
    grid-column: 2/4;
    grid-row: 2/4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .fifth-block {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 70vh;
    padding: 10vw 5vw;
  }

  .sub-section-first-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 1;
  }

  .img5 {
    grid-column: 2;
  }

  .sixth-block {
    padding: 0 5vw 5vw 5vw;
  }

  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active {
    transition: opacity 2s ease;
  }

  .fade-leave-from {
    opacity: 1;
  }
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave-active {
    transition: opacity 4s ease;
  }

  .h1-header-block {
    font-size: 30px !important;
    line-height: 35px !important;
  }

  .img4 {
    display: none !important;
}

.text-sub-section-first-3 {
  margin-left: 5% !important;
  padding: 5% 0 !important;
}

}

// ********HEADER BLOCK*********
.h1-header-block {
  font-family: Hatton-Semibold;
  font-size: 60px;
  line-height: 60px;
}

h2.text-primary {
  padding: 0 25%;
}

.p-first-block {
  padding: 0 17%;
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
  grid-template-rows: 80vh auto;
  margin-bottom: 10%;

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
  grid-column: 2;
  grid-row: 1;
  position: absolute;
  padding: 6rem;
}
.btn-1 {
  grid-column: 1/3;
  grid-row: 2;
}

// *********SECOND BLOCK ********
.second-block {
  display: grid;
  grid-template-columns: 2fr 0.3fr 1fr;
  grid-template-rows: 25vh 90vh 25vh;
}

// *********SECOND BLOCK ADD********
.second-block-add {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
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
  object-position: 15% 50% !important;
}

.sub-section-first-2 {
  grid-column: 1/4;
  grid-row: 4;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10vw;
}

.p-long-text {
  padding: 0 10vw;
}
.third-block {
  padding: 0 5rem;
  margin-bottom: 15%;
}
.fourth-block {
  display: grid;
  grid-template-columns: 34% 10% 56%;
  grid-template-rows: 10vh 80vh 20vh;
  margin-bottom: 10%;
}

.title-h2 {
  padding: 0 45% 0 0 !important;
  line-height: 65px !important;
  margin-bottom: 2% !important;
}

.body-p {
  margin-left: 5%;
}

.body-btn{
  margin-left: 5%;
}

.text-sub-section-first-3 {
  margin-left: 5%;

}

.img4 {
  grid-column: 1/3;
  grid-row: 1/3;
}

.sub-section-first-3 {
  background-color: $info;
  grid-column: 2/4;
  grid-row: 2/4;
  display: grid;
  grid-template-columns: 10vw auto;
}
.text-sub-section-first-3 {
  grid-column: 2;
}

.fifth-block {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 70vh;
  padding: 10vw 5vw;
}

.sub-section-first-4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1;
}

.img5 {
  grid-column: 2;
}

.sixth-block {
  padding: 0 5vw 5vw 5vw;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 2s ease;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 4s ease;
}
</style>
