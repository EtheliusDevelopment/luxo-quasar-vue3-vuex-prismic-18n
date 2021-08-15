<template>
  <h4
    class="text-pink q-ma-xl"
    v-for="(item, index) in dataResults"
    :key="index"
  >
    {{ item.data.main_img.url }}
  </h4>
  <div class="loop-block">
    <div class="blog-card" v-for="(item, index) in dataResults" :key="index">
      <div class="img-blog-card">
        <q-img
          class="img-blog-card-class"
          :src="item.data.main_img.url"
          :ratio="16 / 9"
          spinner-color="primary"
          spinner-size="82px"
        />
      </div>

      <h2 class="text-primary h2-blog-card">
        {{ item.data.article_title[0].text }}
      </h2>

      <p class="p-blog-card">
        In the past year we’ve spent a lot of time dreaming and planning, and if
        we’ve learnt anything…..
      </p>

      <q-btn
        class="btn-blog-card"
        color="info"
        flat
        label="READ MORE"
        @click="onClick"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { api } from "boot/axios";

export default {
  setup() {
    const dataBlog = ref(null);
    const dataResults = ref(null);

    const endPoint =
      "https://luxobackend.cdn.prismic.io/api/v2/documents/search?ref=YRkXHRIAAC4A4F15";

    api.get(`${endPoint}&q=[[at(document.type, +"blog")]]`).then(
      (response) => {
        dataBlog.value = response.data;
        dataResults.value = response.data.results;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    return {
      dataBlog,
      dataResults,
    };
  },
};
</script>

<style lang="scss" scoped>


h4.text-pink.q-ma-xl {
    word-wrap: break-word;
}
// ****TYPO*****
.h2-blog-card {
  font-size: 20px;
  padding: 0px 20%;
  line-height: unset;
}
.p-blog-card {
  padding: 0px 10%;
  line-height: unset;
}

// *** LOOP BLOCK ****

.loop-block {
  display: grid;
  grid-template-columns: 31.66% 31.66% 31.66%;
  grid-auto-rows: auto;
  grid-gap: 2.5%;
}

// ****BLOG CARD ******

.blog-card {
  border: 2px solid $info;

  height: 70vh;
}

@media screen and (max-width: 1100px) {
  // ****TYPO*****

  .h2-blog-card {
    transform: scale(0.9);

    padding: 0px 20%;
    transform: scale(0.9);
  }
  .p-blog-card {
    transform: scale(0.9);
  }
}

@media screen and (max-width: 680px) {
  // ****TYPO*****

  .h2-blog-card {
    transform: scale(0.85);
    padding: 0px 5%;
    transform: scale(0.85);
    text-align: center;
  }
  .p-blog-card {
    transform: scale(0.85);
    padding: unset;
  }

  // *** LOOP BLOCK ****

  .loop-block {
    display: grid;
    grid-template-columns: 100%;
  }
}
</style>
