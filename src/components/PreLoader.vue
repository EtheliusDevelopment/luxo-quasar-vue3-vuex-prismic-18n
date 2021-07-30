<template>
  <div class="vld-parent">
    <loading
      @addProductToCompare="ChangeT($event)"
      v-model:active="loaderOn"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
      background-color="#4c4571"
      opacity="0.9"
    />

    <!-- <label><input type="checkbox" v-model="fullPage" />Full page?</label>
    <button @click.prevent="doAjax">fetch Data</button> -->
  </div>
</template>

<script>
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';

  export default {
    props: {
      loaderOn: Boolean,
      loaderNo: Boolean,
    },
      data() {
          return {
              isLoading: false,
              fullPage: true
          }
      },
      components: {
          Loading
      },



      methods: {
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
          loaderOff() {
              setTimeout(() => {
                    this.isLoading = false
                }, 1500)
          },
            ChangeT(data) {
          alert(data)

    },
      },
       created() {
         this.isLoading = true
        // alert(this.isLoading)
      },
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

  }
</script>
