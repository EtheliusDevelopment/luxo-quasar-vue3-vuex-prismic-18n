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
        <div class="absolute-top figcaption" style="height: 100%">
          <h1 class="text-white text-center">
            ITALY'S FINEST <br />
            LUXURY EXPERIENCES
          </h1>
          <h6 class="text-white">TAILORED TO YOUR PASSIONS AND TASTES</h6>
          <q-btn color="white" icon="check" outline label="LEARN WHAT WE DO" />
        </div>
      </q-img>
    </div>

    <div class="first-block" style="outline: dashed">
      <div class="sub-section-first">

        <div class="info-component">
         <h3>INFO COMOPNENT</h3>
        </div>

        <div class="form-component">
         <h3>FORM COMOPNENT</h3>
        </div>

        <div class="contact-card-component">
          <h3>CONTACT CARD COMPONENT</h3>
        </div>

      </div>
    </div>


  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from "vue";

export default {
  components: {
    PreLoader,
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

@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}



// **********FIRST BLOCK**********
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}

.first-block {
}


</style>
