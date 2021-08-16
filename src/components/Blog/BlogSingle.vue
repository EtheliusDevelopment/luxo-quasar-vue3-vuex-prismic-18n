<template>
  <div class="header-block-blog-single">
    <q-img
      class="img1"
      img-class="img1-blog"
      :src="bgImg"
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
  <h3>{{bgImg}}</h3>
  <code class="text-pink" style="word-wrap: break-word" v-for="(post, index) in dataPost" :key="index">
    {{ post.data.main_img.url }}
    </code>

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
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at("my.blog.uid", this.thisRoute)
      );
      console.log(response);
      this.dataPost = response.results;
      this.bgImg = response.results[0].data.main_img.url
    },
  },
  created() {
    this.getContent();
  },
  setup() {
    const route = useRoute();
    const thisRoute = route.params.slug;
    const dataPost = ref();
    const bgImg = ref()

    return {
      thisRoute,
      dataPost,
      bgImg,
    };
  },
};
</script>

<style scoped lang="scss">
// **********HEADER BLOCK**********

@media screen and (max-width: 680px) {
}

@media screen and (max-width: 990px) {
  .img1 {
    height: 20% !important;
  }
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
@media screen and (max-width: 1100px) {
  // **********HEADER BLOCK**********

  .img1 {
    height: 20% !important;
  }
}

@media screen and (max-width: 680px) {
  // **********HEADER BLOCK**********

  .img1 {
    height: 15% !important;
  }
}

.first-block {
}
</style>
