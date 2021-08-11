<template>
  <h5 class="text-primary text-center">{{ params }}</h5>
  <h6 class="text-red text-center">{{ single }}</h6>
</template>

<script>
import { ref } from "vue";
import dbIndex from "../../db_test/testimonialSingle.json";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "Italy Luxury Travel",
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const params = route.params.slug;
    const single = dbIndex.find((val) => val.slug === params);

    single ? null : router.push("/error_404");

    return {
      params,
      single,
      db: ref(dbIndex),
    };
  },
};
</script>

<style></style>
