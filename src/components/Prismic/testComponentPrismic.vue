<template>
  <div>
    <h1>Here's your raw API response:</h1>
    <pre id="app" v-html="JSON.stringify(response, null, 2)"></pre>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // Initialize "response"
      response: null
    }
  },
  methods: {
    async getContent() {
      // Query the API and assign the response to "response"
      const response = await this.$prismic.client.query('')
      this.response = response.results;
    }
  },
  created() {
    // Call the API query method
    this.getContent()
  }
}
</script>
