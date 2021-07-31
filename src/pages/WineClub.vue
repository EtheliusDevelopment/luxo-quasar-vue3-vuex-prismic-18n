<template>
  <q-page >
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
          <div class="absolute-top figcaption" style="height: 100%">
            <h1 class="text-white text-center">
              ITALY'S FINEST <br />
              LUXURY EXPERIENCES
            </h1>
            <h6 class="text-white">TAILORED TO YOUR PASSIONS AND TASTES</h6>
            <q-btn
              color="white"
              icon="check"
              outline
              label="LEARN WHAT WE DO"
            />
          </div>
        </q-img>
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
      <p class="text-primary">earum laborum possimus, corporis dolor sit blanditiis iusto
        recusandae enim  </p>
      <p class="text-primary">fugit porro ratione</p>
      <p class="text-primary">Exercitationem
        eaque voluptate omnis quod, fugiat
        praesentium minus voluptatum!</p>
      <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />
     </div>

    </div>


   <!-- <h1>Wine Club</h1>
   <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorum quidem cupiditate! Atque officiis deserunt necessitatibus. Consectetur ipsam voluptas modi nihil, ullam iusto, sunt iste perferendis doloremque facere, nesciunt ad?</h5> -->
  </q-page>
</template>

<script>
import PreLoader from 'src/components/PreLoader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    PreLoader,
  }
})
</script>

<style lang="scss" scoped>
// **********HEADER BLOCK**********
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}
// **********FIRST BLOCK**********
// **********SECOND BLOCK**********
</style>
