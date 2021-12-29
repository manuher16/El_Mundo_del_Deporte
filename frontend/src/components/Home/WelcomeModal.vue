<template>
  <v-dialog v-model="modalWelcome" width="100%">
    <v-card widht="100%" height="auto">
      <v-card-title>
        <span class="headline">Bienvenidos</span>
      </v-card-title>
      <v-card-text>
        <p>lorem ips our</p>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="setModalWelcome(false)">
          Cerrar
        </v-btn>
      </v-card-actions>
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