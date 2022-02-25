<template>
  <v-card flat class="">
    <LazyYoutube
      src="https://www.youtube.com/watch?v=TcMBFSGVi1c"
      max-width="100%"
      autoplay
      showTitle
      height="100%"
      customTitle=""
    />
  </v-card>
</template>

<script>
import { LazyYoutube } from "vue-lazytube";

export default {
  name: "YourComponent",
  components: {
    LazyYoutube,
  },
};
</script>

<style>
</style>