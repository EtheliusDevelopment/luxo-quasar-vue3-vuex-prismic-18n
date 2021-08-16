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
        <h2 class="text-primary">
          {{ articleTitle }}
        </h2>
        <h6 class="text-white">TAILORED TO YOUR PASSIONS AND TASTES</h6>
        <q-btn color="white" icon="check" outline label="LEARN WHAT WE DO" />
      </div>
    </q-img>
  </div>

  <div class="first-block">
    <div
      class="q-ma-xl blog-par"
      style="word-wrap: break-word"
      v-for="(post, index) in dataContent"
      :key="index"
    >
      <h4
        class="text-info h4-blog-par"
        v-for="(postTit, index) in post.paragraph_title"
        :key="index"
      >
        {{ postTit.text }}
      </h4>

      <p
        class="p-blog-par text-primary"
        v-for="(postPar, index) in post.paragraph_body"
        :key="index"
      >
        {{ postPar.text }}
      </p>

      <q-img
        :src="post.post_image.url"
        :ratio="16 / 9"
        spinner-color="primary"
        spinner-size="82px"
      />
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
      this.bgImg = response.results[0].data.main_img.url;
      this.dataContent = response.results[0].data.post_body;
      this.articleTitle = response.results[0].data.article_title[0].text;
    },
  },
  created() {
    this.getContent();
  },
  setup() {
    const route = useRoute();
    const thisRoute = route.params.slug;
    const dataPost = ref();
    const bgImg = ref();
    const dataContent = ref();
    const articleTitle = ref();

    return {
      thisRoute,
      dataPost,
      bgImg,
      dataContent,
      articleTitle,
    };
  },
};
</script>

<style scoped lang="scss">
// *******TYPO************

.h4-blog-par {
  font-family: "CommutersSans-Regular";
  font-size: 25px;
  letter-spacing: 0.5px;
}

.p-blog-par {
  margin-bottom: 5%;
}

// **********HEADER BLOCK**********

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
.first-block {
  margin: 0 25% 10% 25%;
}

.blog-par {
  margin-bottom: 10%;
}

@media screen and (max-width: 1100px) {
  // *******TYPO************

  .h4-blog-par {
    transform: scale(0.9);
  }
  // **********HEADER BLOCK**********

  .img1 {
    height: 20% !important;
  }
}

@media screen and (max-width: 680px) {
  // *******TYPO************

  .h4-blog-par {
    transform: scale(0.85);
  }

  // **********HEADER BLOCK**********

  .img1 {
    height: 15% !important;
  }
}

.first-block {
}
</style>
