<template>
  <v-card>
    <v-card-title
      ><v-subheading>Asesoreamiento Legal</v-subheading></v-card-title
    >
    <v-card-text>
      <v-row>
        <v-col md="3">
          <v-img src="https://www.blita.com/hubfs/abogado%20blog.png" />
        </v-col>
        <v-col>
          Entre todos tipos de asesoría, la asesoría legal es la que se encarga
          de atender los asuntos jurídicos y asesorar en los trámites que
          implican la aplicación de leyes, reglamentos y normas. Por supuesto,
          una asesoría jurídica también es fundamental para solucionar los
          problemas de índole legal y realizar los procesos requeridos en el
          menor tiempo posible. Examinar los documentos, asegurar que tus
          actividades son completamente lícitas y ahorrarte así los conflictos a
          tiempo.
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text
      >Necesitas asistencia en procesos judiciales o asesoria para tu empresa.
      Contamos con asesores especializados que te ayudaran en lo que necesites,
      contactanos pulsando el boton para mayor informacion.
    </v-card-text>
    <v-divider />

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