<template>
  <div style="width:100%">
    <h3 class="text-center">{{title}}</h3>
  </div>

  <p class="text-center" style="width:100%">{{location}}</p>
  <h5 class="text-orange text-center" style="width:100%">
    {{price}}
  </h5>
  <h4 class="text-pink" v-for="(item, index) in bullet_points" :key="index">
       {{item.bullet_point[0].text}}
  </h4>
  <img :src="img_gallery" alt="">
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
      responseData: null,
      title: null,
      location: null,
      price: null,
      img_gallery: null,
      bullet_points: null,
      // mainImage: null,
      postId: this.$route.params.slug
    }
  },
  methods: {
    async getContent() {

      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.getByUID('pacchetti', this.postId );


      this.response = response
      this.responseData = response.data
      this.title = response.data.package_title[0].text
      this.location = response.data.location_title[0].text
      this.price = response.data.price
      this.img_gallery = response.data.other_imgs[0].other_img.url
      this.bullet_points = response.data.at_glance_bullet_point


      // this.response.forEach((el)=>{
      //     console.log(el.data);
      // })

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



<style>

</style>
