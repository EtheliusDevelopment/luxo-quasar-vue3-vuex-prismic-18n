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
        height="450px"
      >
        <div class="figcaption">
          <h6 class="text-white">TALK WITH US</h6>
          <q-separator color="white" inset />
          <h1 class="text-white text-center">
            The Perfect Italian Journey For You.
          </h1>
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
      <div class="info-component">
        <p class="p-info">
          No matter what your interests and passions, no matter what the season,
          we can bring your perfect trip to life. Simply tell us what you’re
          into, share with us the real reason for your trip, and we’ll bring
          your vision to life.
        </p>

        <h6 class="text-primary process-text">The Process:</h6>

        <p class="p-info">
          <span class="text-info"> Step 1:</span> You tell us what you like, why
          you’re travelling and what you absolutely have to see and do.
        </p>

        <p class="p-info">
          <span class="text-info"> Step 2:</span> We analyse your needs and
          compile an itinerary that is perfectly “you”.
        </p>
        <p class="p-info">
          <span class="text-info"> Step 3:</span> Together we review your custom
          itinerary and fine-tune the details.
        </p>
        <p class="p-info">
          <span class="text-info"> Step 4:</span> We lock the dates down and
          you’re ready to travel – it’s that simple!
        </p>
      </div>

      <div class="contact-card-component bg-info">
        <div class="inner-component">
          <h2 class="text-primary h2-inner-component">Luxo Italia</h2>
          <p class="text-center p-inner-component">
            Via Galla Placidia 12 - Milano, Italy
          </p>
          <p class="text-center p-inner-component">
            Email : info@luxoitalia.com
          </p>
        </div>
      </div>

      <div class="form-component">
        <Form />
      </div>
    </div>
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from "vue";
import Form from "../components/ContactUs/form.vue";

export default {
  components: {
    PreLoader,
    Form,
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

.header-block {
  margin-bottom: 10%;
}

// **********FIRST BLOCK**********

.first-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 35% 30% auto;
  grid-gap: 9%;
  margin: 0 9%;
}

.info-component {
  grid-column: 1;
  grid-row: 1;
}

.contact-card-component {
  grid-column: 1;
  grid-row: 2;
}
.form {
  grid-column: 2;
  grid-row: 1/4;
}

span.text-info {
  font-family: "Commuters-Sans-Bold";
  font-size: 16px !important;
  line-height: 25px !important;
}

.process-text {
  font-family: "Hatton-Medium";
  font-size: 20px;
  line-height: 25px;
  letter-spacing: unset !important;
}

.inner-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 86%;
  border: 5px solid white;
  margin: 5%;
}

.h2-inner-component {
  font-size: 40px !important;
  line-height: 65px !important;
  letter-spacing: 0.5px !important;
}

.p-inner-component {
  font-family: "CommutersSans-Regular" !important;
  font-size: 16px !important;
  line-height: 31px !important;
  letter-spacing: 1px !important;
}

.p-info {
  font-family: "CommutersSans-Regular" !important;
  font-size: 17px !important;
  line-height: 25px !important;
}

.form-component div {
    font-family: 'Commuters-Sans-Bold' !important;
}

@media screen and (max-width: 990px) {
}

@media screen and (max-width: 680px) {
  .img1 {
    height: 15% !important;
  }

  .first-block {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    grid-gap: unset;
  }

  .info-component {
    margin-bottom: 10%;
  }

  .contact-card-component {

    grid-row: 3;
  }

  .form-component{
    grid-row: 2;
    margin-bottom: 10%;
  }



}
</style>
