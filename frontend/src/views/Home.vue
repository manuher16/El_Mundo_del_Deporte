<template>
  <v-container fluid class="mx-0 px-0">
    <Carousel />
    <v-card>
      <ListServices />
    </v-card>
  </v-container>
</template>

<script>
import Carousel from "../components/Home/Carousel.vue";
import ListServices from "../components/Home/ListServices.vue";
export default {
  name: "Home",
  data: () => ({
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
  }),
  components: { ListServices, Carousel },
};
</script>
