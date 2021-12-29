<template>
  <v-carousel
    cycle
    height="450"
    hide-delimiter-background
    show-arrows-on-hover
    class="carusel"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet :color="colors[i]" height="100%">
        <v-img :src="images[i]" contain height="100%">
          <div class="title__card--top">{{ slide }}</div>
        </v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
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
};
</script>

<style>
.carusel {
  margin: 0;
}
.title__card--top {
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 1.5em;
  justify-content: center;
  align-items: start;
  text-shadow: #000 0px 0px 10px;
  color: white;
}
</style>