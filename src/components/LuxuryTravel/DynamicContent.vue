<template>

  <Title :valueProps="title"/>
  <SubTitle :valueProps="subtitle"/>
  <Price :valueProps="price"/>
  <Calendar :valueProps="whenFrom" :valueProps2="whenTo"/>
  <IdealLength :valueProps="idealLength"/>
  <AtGlanceList :valueProps="bullet_points"/>
  <AtGlanceExcerpt :valueProps="at_glance_excerpt"/>
  <Itinerary :valueProps="itinerary_field"/>
  <MainImg :valueProps="img_main"/>
  <OtherImg :valueProps="img_gallery"/>



</template>

<script>
import SubTitle from './DynamicComponents/SubTitle.vue';
import Title from './DynamicComponents/Title.vue';
import Price from './DynamicComponents/Price.vue';
import Calendar from './DynamicComponents/Calendar.vue';
import AtGlanceList from './DynamicComponents/AtGlanceList.vue';
import IdealLength from './DynamicComponents/IdealLength.vue';
import AtGlanceExcerpt from './DynamicComponents/AtGlanceExcerpt.vue';
import Itinerary from './DynamicComponents/Itinerary.vue';
import MainImg from './DynamicComponents/MainImg.vue';
import OtherImg from './DynamicComponents/OtherImg.vue';





export default {
  name: 'Italy Luxury Travel',
  components : {
    Title,
    SubTitle,
    Price,
    Calendar,
    AtGlanceList,
    IdealLength,
    AtGlanceExcerpt,
    Itinerary,
    MainImg,
    OtherImg,

  },
  data() {
    return {
      // Initialize "response"
      response: null,
      spinner: false,
      responseData: null,
      title: null,
      subtitle: null,
      price: null,
      idealLength: null,
      at_glance_excerpt: null,
      itinerary_field: null,
      whenFrom: null,
      whenTo: null,
      img_main: null,
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
      this.subtitle = response.data.location_title[0].text
      this.price = response.data.price
      this.img_gallery = response.data.other_imgs[0].other_img.url
      this.img_main = response.data.main_img.url
      this.bullet_points = response.data.at_glance_bullet_point
      this.whenFrom = response.data.from
      this.whenTo = response.data.to
      this.idealLength = response.data.ideal_length
      this.at_glance_excerpt = response.data.at_glance_excerpt[0].text
      this.itinerary_field = response.data.itinerary_field




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
