<template>
  <q-page>
    <PreLoader />

    <div class="header-block-blog-single">
      <q-img
        class="img1"
        img-class="img1-blog"
        src="~assets/yatch_luxo.jpg"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
        height="600px"
      >
        <div class="absolute-top figcaption">
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

.figcaption {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9;
  background: $info !important;
  height: 100%;
}



div:has(.figcaption) {
  grid-column: 2;
}

// .q-img__content.absolute-full.q-anchor--skip {
//     grid-column: 2;
// }

.img1 {
  display: grid;
  grid-auto-columns: 70% 30%;
}

.img1-blog {
  grid-column: 1;
}

// **********FIRST BLOCK**********
@media screen and (max-width: 990px) {
}

@media screen and (max-width: 990px) {
}

.first-block {
}
</style>
