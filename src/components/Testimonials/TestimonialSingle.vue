<template>
  <h1>Hola da TestimonialTemplate</h1>


 <div class="text-info q-ml-xl" style="width: 20vw; height:20vh">
   <q-item to="/about"  >
    <h3>ciao</h3>
     </q-item>
  </div>


  <code>{{params}}</code>
  <h3 class="text-red">{{single}}</h3>
</template>

<script>
import { ref  } from 'vue';
import dbIndex from '../../db_test/testimonialSingle.json'
import { useRoute, useRouter  } from 'vue-router'



export default {

  name: 'Italy Luxury Travel',
  setup(props) {

      const route = useRoute()
      const router = useRouter()
      const params = route.params.slug
      const single = dbIndex.find(val => val.slug === params)

      single ? null : router.push("/error_404")

      return {
        params,
        single,
        db: ref(dbIndex),
      }
  }

}


</script>

<style></style>
