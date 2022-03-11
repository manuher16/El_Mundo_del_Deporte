<template>
  <v-card class="text-center" width="100%" flat color="transparent">
    <LazyYoutube
      ref="lazyVideo"
      src="https://www.youtube.com/watch?v=-BTp0MGMSn8"
      maxwidth="800"
      autoplay
      showTitle
      aspectRatio="16:9"
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
  created() {
    setTimeout(() => {
      console.log(this.$refs.lazyVideo);
      this.$refs["lazyVideo"]["playVideo"]();
    }, 2000);
  },
};
</script>

<style>
</style>