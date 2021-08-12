<template>
  <div
    v-for="(item, index) in response"
    :key="index"
    :class="`loop-div loop-div-${index}`"
  >
    <q-item
      class="qitem"
      clickable
      :to="'/luxury-travel/italy/' + item.uid.toString()"
    >
      <h3 class="text-info"></h3>
      <img class="imgRid" :src="item.data.main_img.url" alt="" width="200" />
      <h6 class="fluidText">{{ item.data.package_title[0].text }}</h6>
      <h2 class="text-red">
        {{ current }}
      </h2>
    </q-item>
  </div>

  <div
    class="pagination"
    style="display: flex; justify-content: center; margin-top: 10%"
  >
    <q-pagination v-model="current" :max="5" direction-links boundary-links />
  </div>
</template>

<script>
export default {
  name: "Italy Luxury Travel",
  components: {},
  data() {
    return {
      // Initialize "response"
      response: null,
      spinner: false,
      current: 2,
      // longText: null,
      // mainImage: null,
      // postId: this.$route.params.id
    };
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "pacchetti"))
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
  created() {
    // Call the API query method
    this.getContent();

    // this.spinner = true;
    // console.log(this.spinner)
    //   setTimeout(()=>{
    //     this.spinner = false;
    //     console.log(this.spinner)
    //   },3000);
  },
};
</script>

<style lang="scss" scoped>
.qitem {
  flex-direction: column;
  outline: dashed;
  align-items: center;
}

.imgRid {
  width: 60%;
}

.fluidText {
  font-size: 1.3rem;
}
@media screen and (max-width: 680px) {
  .imgRid {
    width: 100%;
  }
  .fluidText {
    font-size: 0.9rem;
  }
}
</style>
>
