<template>
  <div  v-for="(item, index) in response" :key="index" :class="`loop-div loop-div-${index}`">
     <q-item class="qitem" clickable :to="'/luxury-travel/italy/'+ (item.uid).toString()">
        <!-- <p class="q-py-xl q-px-xl">{{item.data.package_title[0].text}}</p> -->
        <img :src="item.data.main_img.url" alt="" width="200">
        <h6>{{item.data.package_title[0].text}}</h6>
     </q-item>
  </div>
</template>

<script>


export default {
  name: 'Italy Luxury Travel',
  components : {

  },
  data() {
    return {
      // Initialize "response"
      response: null,
      spinner: false,
      // longText: null,
      // mainImage: null,
      // postId: this.$route.params.id
    }
  },
  methods: {
    async getContent() {

      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type','pacchetti')
      );


      this.response = response.results;
      this.response.forEach((el)=>{
          console.log(el.data);
      })

    }
  },
  created() {
    // Call the API query method
    this.getContent()


    // this.spinner = true;
    // console.log(this.spinner)
    //   setTimeout(()=>{
    //     this.spinner = false;
    //     console.log(this.spinner)
    //   },3000);


  }
}
</script>



<style lang="scss" scoped>
.qitem{
  flex-direction: column;
  outline: dashed;
}
</style>>




