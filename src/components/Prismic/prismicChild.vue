<template>
  <div>
    <ul>
     <div class="row">
        <q-card class="my-card col-md-6 q-mr-sm" style="width:40vw;" v-for="(item, index) in dataArray" :key="index" >
        <img :src="item.data.main_image.url" width="150" height="150" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by {{ item.data.titolo_post[0].text }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ item.data.rich_text[2].text }}
        </q-card-section>
      </q-card>
     </div>
      <li v-for="(item, index) in dataArray" :key="index">
        <h3 class="text-pink">{{ item.data.titolo_post }}</h3>

        <q-img
          :src="item.data.main_image.url"
          spinner-color="primary"
          spinner-size="82px"
        />

        <h5 class="text-orange">{{ item.data.rich_text }}</h5>

        <ul>
          <li v-for="(it, index) in item.data.rich_text" :key="index">
            <h3 class="text-fuchsia">{{ it.type }}</h3>
            <h6 class="text-green">{{ it.text }}</h6>
            <h4>{{ it.spans }}</h4>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    dataArray: {
      type: Array,
    },
  },
};
</script>
