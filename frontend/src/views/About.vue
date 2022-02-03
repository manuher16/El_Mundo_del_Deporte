<template>
  <v-container fluid class="">
    <v-card flat class="" shaped>
      <v-row class="d-flex justify-center my-2">
        <v-card-title class="text-h4 text-center">Sobre Nosotros</v-card-title>
      </v-row>
      <v-divider />
      <v-row class="d-flex justify-center my-5">
        <v-card max-width="450" class="" shaped>
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
        </v-card>
      </v-row>
      <v-row class="d-flex justify-center my-5">
        <v-card max-width="450" class="" shaped>
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
            instructores capacitados en entrenamiento personal, artes marciales,
            deportes, danza, salud e idiomas.
          </v-card-text>
        </v-card>
      </v-row>
      <v-row class="d-flex justify-center my-5">
        <v-card max-width="450" class="" shaped>
          <v-sheet
            color="warning"
            height=""
            class="text-center white--text d-flex justify-center aling-center"
          >
            <v-card-title class="text-shadow">
              Valores <v-icon class="mx-2" color="white">mdi-handshake</v-icon>
            </v-card-title>
          </v-sheet>
          <v-divider />
          <v-card-text>
            Las virtudes que rigen nuestro actuar: Integridad, compromiso,
            profesionalismo, responsabilidad.
          </v-card-text>
        </v-card>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
