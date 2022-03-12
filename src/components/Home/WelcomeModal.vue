<template>
  <v-dialog v-model="modalWelcome" width="100%" @click="setModalWelcome(false)">
    <v-card
      widht="100%"
      height="auto"
      @click="setModalWelcome(false)"
      class="text-center"
    >
      <v-sheet color="primary">
        <v-card-title>
          <v-spacer />
          <span class="headline white--text text-center">Bienvenidos</span>
          <v-spacer />
        </v-card-title>
      </v-sheet>
      <v-divider />
      <v-card-text class="text-h6">
        <p>Te damos la bienvenida a Mundo Deporte y Mas</p>
      </v-card-text>
      <v-divider />
      <v-card-text class="text-h6">
        <p>Disfruta la experiencia</p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>


<script>
import { mapMutations, mapState } from "vuex";
export default {
  data: () => ({
    showModal: true,
  }),
  computed: {
    ...mapState("modals", ["modalWelcome"]),
  },
  methods: {
    ...mapMutations("modals", ["setModalWelcome"]),
  },
};
</script>

<style>
</style>