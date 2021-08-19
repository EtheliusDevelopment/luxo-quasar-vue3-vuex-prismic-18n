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
        height="600px"
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
        <h2 class="text-primary text-center">Exclusive Italian Experience</h2>
        <p class="text-center">
          Luxo Italia Wine Club brings to your attention exclusive, hand-picked
          wines from the best Italian wineries. The bottles that you won’t find
          at your local store, delivered directly to your doorstep.
        </p>

        <button class="general-btn-1" style="padding: 1% 2%">
          JOIN THE WINE CLUB NOW !
        </button>
      </div>
    </div>

    <div class="second-block">
      <!-- <q-img
        class="img2-wine-second-block"
        img-class="img2-wine"
        src="~assets/vineyard.jpg"
        :ratio="16 / 9"
      /> -->
      <q-parallax
        src="~assets/vineyard.jpg"
        :speed="0.5"
        style="max-width: 100%; height: 700px"
      >
      </q-parallax>
    </div>

    <div class="third-block">
      <h2 class="text-primary text-center title-third-block">
        What do you need to know about Luxo Italia Wine Club
      </h2>

      <div class="sub-section-first">
        <div class="step-one">
          <div class="card-step">
            <h1 class="text-info h1-card-step">1</h1>
            <q-separator
              spaced
              inset
              vertical
              color="info"
              class="hr-cardstep"
            />
            <h3>CREATED BY WINE LOVERS, FOR WINE LOVERS</h3>
          </div>

          <div class="description-step">
            <h5>
              SPECIALIZING IN VALUE-ORIENTED WINES, LUXO WINE CLUB IS OPEN TO
              ANYONE WHO HAS AN APPRECIATION OF FINE WINE.
            </h5>

            <h5>QUALITY WINES DELIVERED TO YOUR DOORSTEP, GUARANTEED !</h5>
          </div>

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
          <div class="card-step">
            <h1 class="text-info h1-card-step">2</h1>
            <q-separator
              spaced
              inset
              vertical
              color="info"
              class="hr-cardstep"
            />
            <h3>CAREFULLY SELECTED BY OUR WINE CURATOR</h3>
          </div>
          <div class="description-step">
            <h5>
              WINES INCLUDED IN YOUR WINE BOX AREN’T AVAILABLE AT YOUR LOCAL
              STORE OR PROPOSED BY BIG DISTRIBUTORS.
            </h5>

            <h5>
              OUR SOMMELIER PERSONALLY GETS IN TOUCH WITH THE WINE PRODUCER AND
              TASTES THE WINE PRIOR TO DECIDING WHETHER TO INCLUDE IT IN OUR
              SELECTION.
            </h5>
          </div>

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
          <div class="card-step">
            <h1 class="text-info h1-card-step">3</h1>
            <q-separator
              spaced
              inset
              vertical
              color="info"
              class="hr-cardstep"
            />
            <h3>INCLUDES FOOD PAIRING</h3>
          </div>
          <div class="description-step">
            <h5>
              THERE IS JUST ONE SITUATION IN WHICH A GREAT WINE CAN BECOME
              BETTER - WITH THE RIGHT FOOD!.
            </h5>

            <h5>
              OUR SELECTION INCLUDES SUGGESTIONS FOR FOOD PAIRING, IN THE FORM
              OF THE RECIPIES, EASY TO REPLICATE IN YOUR OWN KITCHEN.
            </h5>
          </div>

          <q-img
            class="img-step"
            img-class="img1-step-wine"
            src="~assets/wine_club_luxo.jpg"
            :ratio="16 / 9"
            spinner-color="primary"
            spinner-size="82px"
          />

          <button class="general-btn-1 btn-step" style="padding: 1% 2%">
            JOIN THE WINE CLUB NOW !
          </button>
        </div>
      </div>
    </div>

    <div class="fourth-block">
      <div class="sub-section-first">
        <h2 class="text-primary text-center">Wine Club Membership Plans</h2>

        <h6 class="text-info text-center">
          2 DIFFERENT MEMBERSHIP PLANS TO SUITE YOUR PREFERENCES
        </h6>
        <div class="wine-card-loop">
          <div class="wine-card">
            <q-img
              class="img-step"
              img-class="img1-step-wine"
              src="~assets/ca_del_bosco.png"
              fit="contain"
            />
            <h6 class="h6-wine-card text-center text-primary">CLASSIC</h6>
            <h4 class="h4-wine-card text-center text-info">€ 1100</h4>
            <div class="flex flex-center q-mb-xl">
              <button class="btn-wine-card" @click="fnalert">
                MORE INFORMATION
              </button>
            </div>
          </div>

          <div class="wine-card">
            <q-img
              class="img-step"
              img-class="img1-step-wine"
              src="~assets/ca_del_bosco.png"
              fit="contain"
            />
            <h6 class="h6-wine-card text-center text-primary">PREMIUM</h6>
            <h4 class="h4-wine-card text-center text-info">€ 2350</h4>
            <div class="flex flex-center q-mb-xl">
              <button type="button" class="btn-wine-card" @click="fnalert">
                MORE INFORMATION
              </button>
            </div>
          </div>
        </div>

        <p class="purchase-conditions text-grey text-center">
          Incl. taxes and shipping from Italy. 4-monthly price. Cancel anytime.
        </p>
      </div>
    </div>

    <div class="fifth-block">
      <div class="sub-section-first-4">
        <h2 class="text-primary title-h2">
          What kind of luxury traveler are you?
        </h2>
        <p class="body-p">
          Luxo Italia Wine Club offers two types of memberships – both include
          three shipments (sent in March, June and September), with 6 bottles
          each (18 bottles per year).
        </p>
        <p class="body-p">
          Both membership plans offer a carefully
          chosen selection of the best Italian wines, from award-winning
          wineries, recognized at the local and international level.
        </p>
        <p class="body-p">
         Classic
          membership plan includes the “representative” wines of the winery -
          the favorite picks of the producer. It is a great way to start your
          travel in the world of wine!
        </p>
        <p class="body-p">
          Premium membership plan will satisfy
          every wine connoisseur. Having the standard membership plan as a
          starting point, this membership will bring a true excellent to your
          doorstep. The best vintages, limited editions and hard-to-find blends
          – those are the bottles you will find in your wine box.
        </p>

        <button class="general-btn-1 btn-1" style="padding: 2% 4%">
          DISCOVER THE PLANS
        </button>
      </div>

      <q-img
        class="img5 img-wine-block"
        img-class="img5-index"
        src="~assets/index_luxo_small_village.png"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>

    <div class="sixth-block">
      <h2 class="text-primary text-center h2-title-review">
        What Our Members Are Saying….
      </h2>

      <div class="sub-section-first">
        <div class="members-review">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">So happy!</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>

        <q-separator
          class="separator-sixth-block"
          spaced
          inset
          vertical
          dark
          color="info"
        />

        <div class="members-review">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">So happy!</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>

        <q-separator
          class="separator-sixth-block"
          spaced
          inset
          vertical
          dark
          color="info"
        />

        <div class="members-review">
          <p class="text-center body-review">
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p class="text-center body-review">
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff text-center text-primary">So happy!</p>

          <p class="payoff-echo text-center text-info">Maureen, Florida</p>
        </div>
      </div>
    </div>

    <div class="seventh-block">
      <q-img
        class="img7"
        img-class="img7-wine"
        src="~assets/main_sponsors_index.png"
      />
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
  setup() {
    const fnalert = () => {
      alert("Funziono");
    };
    return {
      fnalert,
    };
  },
});
</script>

<style lang="scss" scoped>
// **********HEADER BLOCK**********
@media screen and (min-width: 1580px) {
  .figcaption {
    padding-bottom: 3% !important;
  }
}

.figcaption {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 6%;
}

.figcaption h6.text-white {
  margin-bottom: 0;
}

.figcaption h1.text-white.text-center {
  margin-top: 0;
  margin-bottom: 7vh;
}

.header-block hr {
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
  padding: 0 18rem;
}

.first-block {
  margin-top: 4%;
  margin-bottom: 6%;
}

// **********SECOND BLOCK**********
.img2-wine-second-block {
  height: 75vh;
}

// **********THIRD BLOCK**********

.third-block {
  margin-bottom: 17%;
  margin-top: 7%;
}

.title-third-block {
  padding: 0px 20%;
}

.step-one {
  display: grid;
  grid-template-columns: 54% minmax(auto, 47%);
  grid-template-rows: 10% 40% 50% 10%;
  grid-gap: 5%;
  margin-bottom: 10%;
  margin-right: 10%;
  margin-left: 6%;
}

.step-two {
  display: grid;
  grid-template-columns: 54% minmax(auto, 47%);
  grid-template-rows: 10% 40% auto 10%;
  grid-gap: 5%;
  margin-bottom: 10%;
  margin-right: 10%;
  margin-left: 6%;
}

.step-three {
  display: grid;
  grid-template-columns: 54% minmax(auto, 47%);
  grid-template-rows: 10% 40% auto 10%;
  grid-gap: 5%;
  margin-bottom: 10%;
  margin-right: 10%;
  margin-left: 6%;
}

.card-step {
  width: 95%;
  grid-column: 1;
  grid-row: 2;
  display: flex;
  justify-content: space-evenly;
  border: 2px solid $info;
  margin-left: 6%;
}

.card-step h3 {
  font-family: "Hatton-Medium";
  color: #4c4571;
  font-size: 30px !important;
  line-height: 1.5;
}

.description-step {
  width: 95%;
  grid-column: 1;
  grid-row: 3;
  margin-left: 6%;
}

.img-step {
  grid-column: 2;
  grid-row: 1/5;
}

.btn-step {
  grid-column: 1;
  grid-row: 4;
  width: 50%;
  margin-left: 6%;
}

.h1-card-step {
  font-family: "Hatton-Medium";
  font-size: 140px;
  padding: 0 8%;
  margin-top: 14%;
}
.description-step h5 {
  font-family: "CommutersSans-Regular" !important;
  font-size: 17px !important;
  line-height: 25px !important;
  opacity: 0.8;
}

.hr-cardstep {
  margin-right: 10% !important;
  height: 75% !important;
  align-self: center !important;
}

.step-one .card-step {
  height: 110%;
}

// **********FOURTH BLOCK**********
.fourth-block {
  margin-bottom: 15%;
}

.wine-card-loop {
  display: flex;
  justify-content: center;
}

.wine-card {
  border: 2px solid $info;
  width: 25%;
  margin: 0 2%;
}

.h6-wine-card {
  font-family: "CommutersSans-Regular";
}
.h4-wine-card {
  font-size: 55px;
  font-family: "Hatton-Medium";
}

.btn-wine-card {
  border: none;
  background-color: transparent;
  border-bottom: 2px solid #4c4571;
  color: #4c4571;
  font-family: "Commuters-Sans-Bold";
  padding-bottom: 2%;
  position: relative;
  bottom: 5%;
  cursor: pointer;
}

.purchase-conditions {
  margin-top: 2%;
}

// **********FIFTH BLOCK**********
.fifth-block {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: minmax(110vh, auto);
  grid-gap: 6%;
  margin: 0 6% 10% 6%;
}

.sub-section-first-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 2;
  margin-right: 6%;
}

.img5 {
  grid-column: 1;
  grid-row: 1;
}

h6.text-primary.subtitle-h6 {
  padding: 0 30% 0 0 !important;
}

.title-h2 {
  padding: 0 45% 0 0 !important;
  line-height: 65px;
  margin-bottom: 5% !important;
  padding: 0 47% 0 0 !important;
  letter-spacing: 1px !important;
}

.body-p {
  margin-left: 5%;
}

.body-btn {
  margin-left: 5%;
}

.btn-1 {
  align-self: flex-start;
  margin-top: 4%;
  margin-left: 5%;
}

// **********SIXTH BLOCK**********

.sixth-block {
  border: 2px solid $info;
  margin: 0 6% 10% 6%;
}
.sixth-block .sub-section-first {
  display: flex;
}

.payoff {
  font-family: "Hatton-Medium";
  font-size: 20px;
  margin-bottom: 0;
  margin-top: 10%;
}

.payoff-echo {
  font-size: 17px;
  margin-bottom: 20%;
}

.body-review {
  font-family: "CommutersSans-Regular";
  font-size: 17px;
  padding: 0 15%;
}

.h2-title-review {
  margin-bottom: 5%;
  margin-top: 5%;
}

.separator-sixth-block {
}

@media screen and (max-width: 1100px) {
  // **********FIRST BLOCK**********
  .first-block .sub-section-first {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10rem !important;
  }

  .title-h2 {
    padding: 0 10% 0 0 !important;
  }

  .img1 {
    height: 20% !important;
  }

  // ****THIRD BLOCK *********

  // ****FLUID TEXT TEST******
  .card-step h3 {
    transform: scale(0.9);
  }
  .h1-card-step {
    transform: scale(0.9);
  }
  .description-step h5 {
    transform: scale(0.9);
  }

  // **********FOURTH BLOCK**********

  // ****FLUID TEXT TEST******

  .h6-wine-card {
    transform: scale(0.9);
  }
  .h4-wine-card {
    transform: scale(0.9);
    font-size: 50px;
  }
}

@media screen and (max-width: 680px) {
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

  // *******THIRD BLOCK*****

  .img-step {
    display: none !important;
  }

  .step-one {
    grid-template-columns: auto !important;
    grid-template-rows: auto !important;
  }

  .step-two {
    grid-template-columns: auto !important;
    grid-template-rows: auto !important;
  }

  .step-three {
    grid-template-columns: auto !important;
    grid-template-rows: auto !important;
  }

  // ****FLUID TEXT TEST******
  .card-step h3 {
    transform: scale(0.8);
  }
  .h1-card-step {
    transform: scale(0.8);
  }
  .description-step h5 {
    transform: scale(0.8);
  }

  // **********FOURTH BLOCK**********

  // ****FLUID TEXT TEST******

  .h6-wine-card {
    transform: scale(0.8);
  }
  .h4-wine-card {
    transform: scale(0.8);
  }

  // **********FIFTH BLOCK**********
  .fifth-block {
    grid-template-columns: auto;
    grid-template-rows: 25% auto;
  }

  .sub-section-first-4 {
    grid-column: 1;
    grid-row: 2;
  }

  // **********SIXTH BLOCK**********
  .sixth-block .sub-section-first {
    display: flex;
    flex-direction: column;
  }
}
</style>
