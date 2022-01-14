<template>
  <v-card>
    <v-card-title
      ><v-subheading>Asesoreamiento Legal</v-subheading></v-card-title
    >
    <v-card-text><List :items="items" /></v-card-text>
  </v-card>
</template>

<script>
import List from "../components/Home/ListServices.vue";
export default {
  data: () => ({
    items: [
      {
        title: "Abogado",
        description: "",
        image:
          "https://i0.wp.com/blog.lemontech.com/wp-content/uploads/2021/05/dia-del-abogado-internacional.jpeg?resize=733%2C488&ssl=1",
        href: "",
      },
    ],
  }),
  components: {
    List,
  },
};
</script>

<style>
</style>