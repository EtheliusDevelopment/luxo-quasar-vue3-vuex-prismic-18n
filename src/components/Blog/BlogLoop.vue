<template>
<h4 class="text-pink q-ma-xl" v-for="(item, index) in dataResults" :key="index">
  {{item.data.article_title}}
</h4>
  <div class="loop-block">
    <div class="blog-card" v-for="(item, index) in dataResults" :key="index">
      <div class="img-blog-card">
        <q-img
          class="img-blog-card-class"
          src="https://placeimg.com/500/300/nature"
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
      "https://luxobackend.prismic.io/api/v2/documents/search?ref=YRQsWxIAACwADHvw";

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
// ****TYPO*****
.h2-blog-card {
  font-size: 20px;

  padding: 0px 20%;
  line-height: unset;
}
.h2-blog-card::first-letter{

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
  grid-auto-rows: auto;
  grid-gap: 2.5%;
}

// ****BLOG CARD ******

.blog-card {
  border: 2px solid $info;

  height: 70vh;
}
</style>
