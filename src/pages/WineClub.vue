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

    <div class="first-block" style="outline: dashed">
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

    <div class="second-block" style="outline: dashed">
      <q-img
        class="img2"
        img-class="img2-wine"
        src="~assets/vineyard.jpg"
        :ratio="16 / 9"
      />
    </div>

    <div class="third-block" style="outline: dashed">
      <h2 class="text-primary text-center title-third-block">
        What do you need to know about Luxo Italia Wine Club
      </h2>

      <div class="sub-section-first">
        <div class="step-one">
          <div class="card-step" style="outline: dashed">
            <h1>1</h1>
            <q-separator spaced inset vertical color="black" />
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
          <div class="card-step" style="outline: dashed">
            <h1>2</h1>
            <q-separator spaced inset vertical color="black" />
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
          <div class="card-step" style="outline: dashed">
            <h1>3</h1>
            <q-separator spaced inset vertical color="black" />
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

          <q-btn
            class="btn-step"
            color="primary"
            outline
            label="JOIN THE WINE CLUB NOW !"
          />
        </div>
      </div>
    </div>

    <div class="fourth-block" style="outline: dashed">
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
            <h6 class="h6-wine-card">CLASSIC</h6>
            <h4 class="h4-wine-card">€ 1100</h4>
            <button class="btn-wine-card">MORE INFORMATION</button>
          </div>

          <div class="wine-card">
            <q-img
              class="img-step"
              img-class="img1-step-wine"
              src="~assets/ca_del_bosco.png"
              fit="contain"
            />
            <h6 class="h6-wine-card">PREMIUM</h6>
            <h4 class="h4-wine-card">€ 2350</h4>
            <button class="btn-wine-card">MORE INFORMATION</button>
          </div>
        </div>

        <p class="purchase-conditions text-grey text-center">
          Incl. taxes and shipping from Italy. 4-monthly price. Cancel anytime.
        </p>
      </div>
    </div>

    <div class="fifth-block" style="outline: dashed">
      <q-img
        class="img-5"
        img-class="img1-fifth-block"
        src="~assets/wine_club_luxo.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

      <div class="sub-section-first">
        <h2 class="text-primary">Discover Our Plans</h2>

        <p class="p-plans">
          Luxo Italia Wine Club offers two types of memberships – both include
          three shipments (sent in March, June and September), with 6 bottles
          each (18 bottles per year).
        </p>

        <p class="p-plans">
          Both membership plans offer a carefully chosen selection of the best
          Italian wines, from award-winning wineries, recognized at the local
          and international level.
        </p>

        <p class="p-plans">
          Classic membership plan includes the “representative” wines of the
          winery - the favorite picks of the producer. It is a great way to
          start your travel in the world of wine!
        </p>

        <p class="p-plans">
          Premium membership plan will satisfy every wine connoisseur. Having
          the standard membership plan as a starting point, this membership will
          bring a true excellent to your doorstep. The best vintages, limited
          editions and hard-to-find blends – those are the bottles you will find
          in your wine box.
        </p>

        <q-btn color="primary" outline label="DISCOVER THE PLANS" />
      </div>
    </div>

    <div class="sixth-block">

      <h2 class="text-primary text-center">Discover Our Plans</h2>

      <div class="sub-section-first">

        <div class="members-review">
          <p>
            I just wanted to share my experience with my friends and family, to
            show them what is it - to be an Italian. And then I found the Luxo
            wine club.
          </p>

          <p>
            The wine selection, gifts, the community itself - is a literal
            experience of Italy I wanted to share with my family!
          </p>

          <p class="payoff">So happy!</p>

          <p class="payoff-echo">Maureen, Florida</p>
        </div>

        <q-separator class="separator-sixth-block" spaced  inset vertical dark color="info" />

        <div class="members-review">
          <p>
            This might be one of the best ways on how to taste wine and identify
            what you like/don’t like ……
          </p>

          <p>
            All the wines are delicious. It was ideal for us to get a taste of
            the region/country. Super informative… Couldn’t speak more highly of
            it.
          </p>

          <p class="payoff">Fantastic Wines!</p>

          <p class="payoff-echo">George, New York</p>
        </div>

        <q-separator class="separator-sixth-block" spaced  inset vertical dark color="info" />

        <div class="members-review">
          <p>
            Luxo Italia Wine Club is really fantastic, in which it is possible
            to find not only a wide choice of fine wines, but a large number of
            wines known to a few connoisseurs.
          </p>

          <p>
            This is the most evocative, refined and cultured Wine Club I ever
            joined.
          </p>

          <p class="payoff">The Most Refined Wine Club</p>

          <p class="payoff-echo">Patti, San Francisco</p>
        </div>

      </div>

    </div>

    <div class="seventh-block" style="outline: dashed">
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

.header-block hr {
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

.step-one {
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 10% 40% auto;
  grid-gap: 1vw;
  margin-bottom: 10%;
}
.step-two {
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 10% 40% auto;
  grid-gap: 1vw;
  margin-bottom: 10%;
}

.step-three {
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 10% 40% auto 10%;
  grid-gap: 1vw;
  margin-bottom: 10%;
}

.card-step {
  width: 100%;
  grid-column: 1;
  grid-row: 2;
  display: flex;
}

.card-step h3 {
  font-size: 1.1rem;
  line-height: 1.5;
}

.description-step {
  grid-column: 1;
  grid-row: 3;
  border: 2px solid red;
}

.description-step h5 {
  line-height: 1.5;
  font-size: 0.83rem;
}

.img-step {
  grid-column: 2;
  grid-row: 1/5;
}

.btn-step {
  grid-column: 1;
  grid-row: 4;
}

// **********FOURTH BLOCK**********

.wine-card-loop {
  display: flex;
  justify-content: center;
}

.wine-card {
  border: 2px solid $info;
  width: 25%;
  margin: 0 2%;
}

// **********FIFTH BLOCK**********
.fifth-block {
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 120vh;
  margin: 0 1%;
}

.fifth-block .img-5 {
  grid-column: 1;
}
.fifth-block .sub-section-first {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  padding: 5rem;
}

// **********SIXTH BLOCK**********

.sixth-block{
  border: 2px solid $info;
  margin: 0 1%;
}
.sixth-block .sub-section-first {
  display: flex;

}

.separator-sixth-block{

}
</style>
