<template>
  <v-card flat>
    <v-card-title>
      <v-subheading> Artes Marciales </v-subheading>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <ListMartialArts :items="items" />
    </v-card-text>
  </v-card>
</template>

<script>
import ListMartialArts from "../components/Home/ListServices";

export default {
  data: () => ({
    items: [
      {
        title: "Judo",
        description: "",
        image:
          "https://dogym.es/wp-content/uploads/2017/09/ventajas-entrenar-judo.jpg",
      },
      {
        title: "Taekwondo",
        description: "",
        image:
          "https://www.hobbyaficion.com/wp-content/uploads/2017/08/Equipacion_indispensable_para_hacer_Taekwondo_1024x1024-300x150.jpg",
      },
      {
        title: "Jiu-jitsu",
        description: "",
        image:
          "https://images.pexels.com/photos/7988954/pexels-photo-7988954.jpeg",
      },
      {
        title: "Entrenamiento de Personal Seguridad",
        description: "",
        image:
          "http://www.melider.com.mx/wp-content/uploads/2016/12/Private-security-company-training-by-french-police-02-12-10-13-30.jpg",
      },
      {
        title: "Muay Thai",
        description: "",
        image:
          "https://cdn.pixabay.com/photo/2016/06/11/21/30/sport-1450863_960_720.jpg",
      },
      {
        title: "Kick boxing",
        description: "",
        image:
          "https://www.uniminutoradio.com.co/wp-content/uploads/2017/11/kick.jpg",
      },
      {
        title: "Karate",
        description: "",
        image:
          "https://images.pexels.com/photos/7045726/pexels-photo-7045726.jpeg",
      },
      {
        title: "Aikido",
        description: "",
        image:
          "https://cdn.pixabay.com/photo/2013/06/05/12/38/martial-arts-116543_1280.jpg",
      },
      {
        title: "Boxeo",
        description: "",
        image:
          "https://images.pexels.com/photos/3761725/pexels-photo-3761725.jpeg",
      },
      {
        title: "Fullcontact",
        description: "",
        image:
          "https://1.bp.blogspot.com/-ZN0SJMXEX-4/Wp10IiIcItI/AAAAAAAAEHQ/0Q-qEERhLXc6E6DEV26YLXNwRrh-M4rTgCLcBGAs/s320/hqdefault.jpg",
      },
      {
        title: "Kempo",
        description: "",
        image:
          "https://bloximages.chicago2.vip.townnews.com/syvnews.com/content/tncms/assets/v3/editorial/4/09/4093ce8b-573c-559b-89e0-b18e13b32e43/5d5c55bb68b09.image.jpg?resize=1396%2C1080",
      },
      {
        title: "Lucha",
        description: "",
        image:
          "https://img.olympicchannel.com/images/image/private/t_16-9_1240-700_15x/f_auto/v1538355600/primary/p6jgniwccpcl4784gydx",
      },
      {
        title: "Defensa Personal",
        description: "",
        image:
          "https://www.warriorsbarcelona.com/wp-content/uploads/2021/09/como-aprendo-defensa-personal-1000x600-1.jpg",
      },
      {
        title: "MMA",
        description: "",
        image:
          "https://muchocombate.com/wp-content/uploads/2021/03/1357592540_470223757_1-Mma-artes-marciales-mixtas-kennedy_9c818439-a803-4208-a1df-5b4f1d1aa3e8_2048x.jpg",
      },
    ],
  }),
  components: { ListMartialArts },
};
</script>

<style>
</style>