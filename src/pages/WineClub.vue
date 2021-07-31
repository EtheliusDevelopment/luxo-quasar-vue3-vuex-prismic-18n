<template>
  <q-page>
    <PreLoader />

    <div class="header-block">
      <q-img
        class="img1"
        img-class="img1-luxury"
        src="~assets/wine_club_luxo.jpg"
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
          LoremWINE ipsum di nove parole parole parole parole
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

    <!-- <h1>Wine Club</h1>
   <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorum quidem cupiditate! Atque officiis deserunt necessitatibus. Consectetur ipsam voluptas modi nihil, ullam iusto, sunt iste perferendis doloremque facere, nesciunt ad?</h5> -->
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

  .img1{
    height: 15% !important;
  }

}

@media screen and (max-width: 990px) {

  .img1{
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
// **********SECOND BLOCK**********
</style>
