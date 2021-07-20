<template>
  <div>
    <h1>Here's your raw API response:</h1>
    <q-spinner-clock v-if="spinner!=false" color="teal" size="4rem" />
    <pre id="app" v-html="JSON.stringify(response, null, 2)"></pre>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // Initialize "response"
      response: null,
      spinner: false
    }
  },
  methods: {
    async getContent() {

      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query('')
      this.response = response.results[0].data;



    }
  },
  created() {
    // Call the API query method
    this.getContent()
    this.spinner = true;
    console.log(this.spinner)
      setTimeout(()=>{
        this.spinner = false;
        console.log(this.spinner)
      },3000);


  }
}
</script>
