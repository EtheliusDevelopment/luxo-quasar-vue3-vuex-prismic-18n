<template>
  <div class="vld-parent">
    <loading
      v-model:active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      background-color="#4c4571"
      opacity= 0.99
      transition="fade"
      loader="bars"
    />

    <!-- <label><input type="checkbox" v-model="fullPage" />Full page?</label>
    <button @click.prevent="doAjax">fetch Data</button> -->
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  props: {
    loaderOn: Boolean,
    loaderNo: Boolean,
  },
  data() {
    return {
      isLoading: true,
      fullPage: true,
    };
  },
  components: {
    Loading,
  },

  methods: {


    loaderOff() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    },
        // doAjax() {
          //     this.isLoading = true;
          //     // simulate AJAX
          //     setTimeout(() => {
          //         this.isLoading = false
          //     }, 5000)
          // },
          // onCancel() {
          //     console.log('User cancelled the loader.')
          // },
  },
  // created() {
  //   this.isLoading = true;
  //   // alert(this.isLoading)
  // },
  mounted() {
    this.loaderOff();
    //  setTimeout(function(){alert(this.isLoading)}, 1000);
  },
  // beforeUpdate() {
  //   this.isLoading = true
  // },

  // updated() {
  //   this.loaderOff();
  // }
};
</script>
