<template>
  <v-container fluid>
    <v-card width="100%" flat>
      <v-card-content>
        <Sport v-if="service == 'deportes'" />
        <MartialArts v-if="service == 'artes-marciales'" />
        <Health v-if="service == 'salud'" />
        <Dance v-if="service == 'baile'" />
        <Languages v-if="service == 'idiomas'" />
        <ExtremeSports v-if="service == 'deporte-extremos'" />
        <Art v-if="service == 'arte'" />
        <Music v-if="service == 'musica'" />
        <LegalAdvice v-if="service == 'asesoramiento-legal'" />
        <PersonalTrainer v-if="service == 'entrenador-personal'" />
      </v-card-content>
    </v-card>
    <ModalServices />
  </v-container>
</template>

<script>
import Sport from "./Sports.vue";
import MartialArts from "./MartialArts.vue";
import Health from "./Health.vue";
import Dance from "./Dance.vue";
import Languages from "./Languages.vue";
import ExtremeSports from "./ExtremeSports.vue";
import Art from "./Art.vue";
import Music from "./Music.vue";
import LegalAdvice from "./LegalAdvice.vue";
import ModalServices from "../components/ModalInfoServices.vue";
import PersonalTrainer from "./PersonalTrainer.vue";
export default {
  data: () => ({
    service: "",
  }),
  created() {
    this.service = this.$route.params.service;
  },
  components: {
    Languages,
    Sport,
    MartialArts,
    Health,
    Dance,
    ExtremeSports,
    Art,
    Music,
    LegalAdvice,
    ModalServices,
    PersonalTrainer,
  },
};
</script>

<style>
</style>