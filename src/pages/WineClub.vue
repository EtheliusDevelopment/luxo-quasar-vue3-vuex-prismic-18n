<template>
  <q-page>
    <PreLoader />

    <div class="header-block">
      <q-img
        class="img1"
        img-class="img1-wine"
        src="~assets/wine_club_luxo.jpg"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
        height="450px"
      >
        <div class="figcaption">
          <h6 class="text-white">WINE CLUB</h6>
          <q-separator color="white" inset />
          <h1 class="text-white text-center">Uncork. Taste. Enjoy.</h1>
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
        <h2 class="text-primary">Exclusive Italian Experience</h2>
        <p>
          Luxo Italia Wine Club brings to your attention exclusive, hand-picked
          wines from the best Italian wineries. The bottles that you won’t find
          at your local store, delivered directly to your doorstep.
        </p>

        <q-btn
          class="btn-first-block"
          color="primary"
          icon="check"
          outline
          label="JOIN THE WINE CLUB NOW !
"
        />
      </div>
    </div>

    <div class="second-block">
      <q-img
        class="img2"
        img-class="img2-wine"
        src="~assets/vineyard.jpg"
        :ratio="16 / 9"
      />
    </div>

    <div class="third-block">
      <h2 class="text-primary text-center title-third-block">
        What do you need to know about Luxo Italia Wine Club
      </h2>

      <div class="sub-section-first">
        <div class="step-one">
          <div class="card-step">img sep</div>
          <h5 class="descrition-step">
            SPECIALIZING IN VALUE-ORIENTED WINES, LUXO WINE CLUB IS OPEN TO
            ANYONE WHO HAS AN APPRECIATION OF FINE WINE. QUALITY WINES DELIVERED
            TO YOUR DOORSTEP, GUARANTEED !
          </h5>
          <q-img
            class="img-step"
            img-class="img1-step-wine"
            src="~assets/wine_club_luxo.jpg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
        </div>

         <div class="step-two">
          <div class="card-step">img sep h3</div>
          <h5 class="descrition-step">
            SPECIALIZING IN VALUE-ORIENTED WINES, LUXO WINE CLUB IS OPEN TO
            ANYONE WHO HAS AN APPRECIATION OF FINE WINE. QUALITY WINES DELIVERED
            TO YOUR DOORSTEP, GUARANTEED !
          </h5>
          <q-img
            class="img-step"
            img-class="img1-step-wine"
            src="~assets/wine_club_luxo.jpg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
        </div>

         <div class="step-three">
          <div class="card-step">img sep</div>
          <h5 class="descrition-step">
            SPECIALIZING IN VALUE-ORIENTED WINES, LUXO WINE CLUB IS OPEN TO
            ANYONE WHO HAS AN APPRECIATION OF FINE WINE. QUALITY WINES DELIVERED
            TO YOUR DOORSTEP, GUARANTEED !
          </h5>
          <q-img
            class="img-step"
            img-class="img1-step-wine"
            src="~assets/wine_club_luxo.jpg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />
        </div>


      </div>
    </div>
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    PreLoader,
  },
});
</script>

<style lang="scss" scoped>
// **********HEADER BLOCK**********
@media screen and (max-width: 680px) {
  .img1 {
    height: 15% !important;
  }
}

@media screen and (max-width: 990px) {
  .img1 {
    height: 20% !important;
  }
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

.first-block {
  margin-bottom: 8%;
}

.first-block .sub-section-first {
  display: flex;
  width: 100%;
  padding: 0 10%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.btn-first-block {
  margin-top: 5% !important;
}
// **********SECOND BLOCK**********
.img2-wine {
  height: 50%;
}

// **********THIRD BLOCK**********

.title-third-block {
  padding: 0px 20%;
}
</style>
