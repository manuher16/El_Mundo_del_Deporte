<template>
  <v-container fluid class="mx-0 px-0">
    <Carousel />
    <v-card flat class="" shaped>
      <v-row class="d-flex justify-center my-2">
        <v-card-title class="text-h4 text-center">Sobre Nosotros</v-card-title>
      </v-row>
      <v-divider />

      <v-row class="d-flex justify-center my-5">
        <v-col
          ><v-card max-width="450" class="" shaped>
            <v-sheet
              color="success"
              height=""
              class="text-center white--text d-flex justify-center aling-center"
            >
              <v-card-title class="text-shadow">
                Vision <v-icon class="mx-2" color="white">mdi-eye</v-icon>
              </v-card-title>
            </v-sheet>
            <v-divider />
            <v-card-text>
              Ser reconocidos a nivel nacional como la mejor empresa con
              instructores capacitados en entrenamiento personal, artes
              marciales, deportes, danza, salud e idiomas.
            </v-card-text>
          </v-card></v-col
        >
        <v-col
          ><v-card max-width="450" class="" shaped>
            <v-sheet
              color="#0251ff"
              height=""
              class="text-center white--text d-flex justify-center aling-center"
            >
              <v-card-title class="text-shadow">
                Misión <v-icon class="mx-2" color="white">mdi-earth</v-icon>
              </v-card-title>
            </v-sheet>
            <v-divider />
            <v-card-text>
              Brindar enseñanza eficiente y de calidad a través de instructores
              capacitados y especializados en cada área así mismo brindar
              oportunidades para el desarrollo profesional y laboral de nuestros
              instructores.
            </v-card-text>
          </v-card></v-col
        ><v-col
          ><v-card max-width="450" class="" shaped>
            <v-sheet
              color="warning"
              height=""
              class="text-center white--text d-flex justify-center aling-center"
            >
              <v-card-title class="text-shadow">
                Valores
                <v-icon class="mx-2" color="white">mdi-handshake</v-icon>
              </v-card-title>
            </v-sheet>
            <v-divider />
            <v-card-text>
              Las virtudes que rigen nuestro actuar: Integridad, compromiso,
              profesionalismo, responsabilidad.
            </v-card-text>
          </v-card></v-col
        >
      </v-row>
      <v-row class="d-flex justify-center my-2">
        <v-card-title class="text-h4 text-center"
          >Nuestros Servicios</v-card-title
        >
      </v-row>
      <v-divider />
      <v-row class="my-3">
        <v-col v-for="(item, index) in services" :key="index" md="4">
          <router-link :to="item.href" class="router-link">
            <v-card :img="item.image" height="250">
              <v-card
                class="d-flex align-end mb-6 justify-center white--text"
                color="transparent"
                flat
                height="100%"
                tile
              >
                <v-card
                  dark
                  class="
                    pa-2
                    text-center text-h4
                    font-weight-bold
                    white--text-transform
                    text-shadow
                  "
                  color="transparent"
                  flat
                >
                  {{ item.title }}
                </v-card>
              </v-card>

              <v-divider />
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-card>
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
    services: [
      {
        title: "Entrenador Personal",
        description: "",
        href: "/entrenador-personal",
        image:
          "https://www.feda.net/wp-content/uploads/2016/10/entrenador-personal.jpg",
      },
      {
        title: "Artes Marciales",
        description: "",
        href: "/arte-marciales",
        image:
          "http://cdn.shopify.com/s/files/1/0646/4097/files/Artes_marciales_para_conseguir_mas_seguridad_en_ti_mismo_2_1024x1024.jpg?v=1600638627",
      },
      {
        title: "Deportes",
        description: "",
        href: "/deportes",
        image:
          "https://www.semanalnews.com/wp-content/uploads/2018/10/sports-associations.jpg",
      },
      {
        title: "Idiomas",
        description: "",
        href: "/idiomas",
        image:
          "https://koe.com.mx/wp-content/uploads/2019/03/Conoce-cuales-son-los-idiomas-con-mayor-demanda-en-Mexico.jpg",
      },
      {
        title: "Arte",
        description: "",
        href: "/arte",
        image:
          "https://media.admagazine.com/photos/618a6acbcc7069ed5077ca7f/master/w_1600%2Cc_limit/68704.jpg",
      },
      {
        title: "Salud",
        description: "",
        href: "/salud",
        image:
          "https://www.udla.edu.ec/wp-content/uploads/2018/04/imagenblogs5485786.jpg",
      },
      {
        title: "Musica",
        description: "",
        href: "/musica",
        image:
          "https://concepto.de/wp-content/uploads/2020/03/musica-e1584123209397.jpg",
      },
      {
        title: "Asesoramiento Legal",
        description: "",
        href: "/asesoramiento-legal",
        image:
          "https://www.esadealumni.net/sites/default/files/inline-images/Asesoramiento%20legal.png",
      },
      {
        title: "Deporte Extremo y Al Aire Libre",
        description: "",
        href: "/deporte-extremos",
        image:
          "https://blog.jeep.com.ec/hubfs/7%20deportes%20extremos%20para%20realizar%20outdoor%20despu%C3%A9s%20de%20la%20cuarentena-1.png",
      },
      {
        title: "Baile",
        description: "",
        href: "/baile",
        image:
          "https://www.lavanguardia.com/files/image_449_253/uploads/2021/04/09/607039c0bd9d1.jpeg",
      },
      {
        title: "Reacreacion Para Empresas",
        description: "",
        href: "/recreacion-empresas",
        image:
          "https://occ-mkt.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2019/11/actividades-recreativas-occmundial.jpg",
      },
    ],
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
<style>
.text-shadow {
  text-shadow: 2px 2px 2px #000;
}
</style>