<template>
  <q-page>
    <PreLoader />

    <div class="header-block">
      <q-img
        class="img1"
        img-class="img1-luxury"
        src="~assets/about_us_luxo.png"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
        height="450px"
      >
        <div class="figcaption">
          <h6 class="text-white">LUXURY TRAVEL DESIGNERS</h6>
          <q-separator color="white" inset />
          <h1 class="text-white text-center">PAUL &amp; ANDREA</h1>
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
          Lorem ipsum di nove parole parole parole parole
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

    <div class="second-block">
      <div class="sub-section-first">
        <h2 class="text-primary">
          Lorem ipsum di nove parole parole parole parole
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

      <q-img
        img-class="col-md-2 test22"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />
    </div>

    <div class="third-block">
      <h2 class="text-primary">Who We Are</h2>

      <q-img
        img-class="col-md-2 test22"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />
      <div class="sub-section-first">
        <h4 class="text-primary">PAUL LEWIS</h4>
        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem
          eaque voluptate omnis quod,
        </p>
        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quos exercitationem, distinctio aut molestiae optio, iure placeat
          commodi aperiam, in provident. Consectetur cumque earum unde expedita
          aperiam vitae, eveniet delectus!
        </p>
        <p class="text-primary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad officia
          porro rem suscipit, modi at sit totam beatae nemo, laboriosam
          consectetur nostrum aliquam accusantium voluptates, doloribus deleniti
          maxime sint blanditiis?
        </p>
        <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />
      </div>

      <div class="sub-section-second">
        <h4 class="text-primary">PAUL LEWIS</h4>
        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem
          eaque voluptate omnis quod,
        </p>
        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quos exercitationem, distinctio aut molestiae optio, iure placeat
          commodi aperiam, in provident. Consectetur cumque earum unde expedita
          aperiam vitae, eveniet delectus!
        </p>
        <p class="text-primary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad officia
          porro rem suscipit, modi at sit totam beatae nemo, laboriosam
          consectetur nostrum aliquam accusantium voluptates, doloribus deleniti
          maxime sint blanditiis?
        </p>
        <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />
      </div>

      <q-img
        img-class="col-md-2 test22"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

      <q-btn color="primary" icon="check" outline label="TALK WITH US" />
    </div>

    <div class="fourth-block">
      <q-img
        img-class="col-md-2 test22"
        src="~assets/venice-bg.jpg"
        spinner-color="primary"
        spinner-size="82px"
      />

      <div class="sub-section-first">
        <h2 class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h2>
        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Exercitationem
          eaque voluptate omnis quod,
        </p>
        <p class="text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quos exercitationem, distinctio aut molestiae optio, iure placeat
          commodi aperiam, in provident. Consectetur cumque earum unde expedita
          aperiam vitae, eveniet delectus!
        </p>

        <q-btn color="primary" icon="check" outline label="LEARN WHAT WE DO" />
      </div>
    </div>
  </q-page>
</template>

<script>
import PreLoader from "src/components/PreLoader.vue";
import { ref } from "vue";

export default {
  components: { PreLoader },
  setup() {
    return {};
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

// .fade-enter-from {
//   opacity: 0;
// }
// .fade-enter-to {
//   opacity: 1;
// }
// .fade-enter-active {
//   transition: opacity 2s ease;
// }
</style>
