<template>
  <v-carousel
    height="auto"
    width="100vw"
    hide-delimiter-background
    show-arrows-on-hover
    class="carusel mx-0 px-0"
    cycle
    v-model="page"
    :interval="page == 0 ? 122000 : 5000"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      class="mx-0 px-0"
      width="100vw"
    >
      <VideoPlayer v-if="i === 0" />
      <v-sheet :color="colors[i]" height="100%" v-else>
        <v-img :src="images[i]" contain height="100%">
          <div class="title__card--top">{{ slide }}</div>
        </v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import VideoPlayer from "../video.vue";
export default {
  data: () => ({
    page: 0,
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    images: [
      "https://wallpapercave.com/wp/wp3586864.jpg",
      "https://plustatic.com/2046/conversions/tipos-artes-marciales-social.jpg",
      "https://fondosmil.com/fondo/57083.jpg",
      "https://www.oxigenosport.com/wp-content/uploads/2013/12/Entrenamiento-Personal.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqsF72j1O07xBFNKHDgWhTA-fMtI4_5bZV2g&usqp=CAU",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
  }),
  props: {
    Items: Array,
  },
  components: {
    VideoPlayer,
  },
};
</script>

<style>
.carusel {
  margin: 0;
}
.title__card--top {
  position: relative;
  display: flex;
  width: 100vw;

  font-size: 1.5em;
  justify-content: center;
  align-items: start;
  text-shadow: #000 0px 0px 10px;
  color: white;
}
</style>