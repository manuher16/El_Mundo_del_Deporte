<template>
  <v-hover v-slot="{ hover }">
    <v-card
      height="auto"
      widht="350px"
      flat
      class="px-0"
      @click="selectItemForModal"
    >
      <v-expand-transition>
        <v-sheet class="d-flex image_card" width="100%" height="250">
          <v-img
            class="d-flex aling-center justify-center image-item"
            :src="
              item.image
                ? `${item.image}`
                : 'https://image.freepik.com/foto-gratis/caucasico-deporte-pared-abdominal-fondo_1296-394.jpg'
            "
            cover
            :aspect-ratio="hover ? 1.7 : 1"
          >
            <div class="title__card font-weight-black">{{ item.title }}</div>
            <v-expand-transition>
              <v-card-text v-show="hover" class="">
                Las artes marciales mixtas (conocida frecuentemente por sus
                siglas en inglés MMA, de Mixed martial arts) son la combinación
                de técnicas provenientes de distintas artes marciales y deportes
                de combate, generalmente se usa para la competición en el
                deporte de combate pero también para la defensa personal.
              </v-card-text>
            </v-expand-transition>
          </v-img>
        </v-sheet>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    item: Object,
  },
  methods: {
    ...mapMutations("modalInfoService", [
      "showModalInfoService",
      "hideModalInfoService",
      "setContent",
    ]),
    selectItemForModal() {
      this.setContent(this.item);
      this.showModalInfoService();
    },
  },
};
</script>

<style>
.title__card {
  display: flex;
  width: 100%;
  height: 95%;
  font-size: 2em;
  margin-bottom: 10px;
  text-justify: center;
  justify-content: center;
  align-items: end;
  color: white;
  text-shadow: 0px 0px 10px black;
}
.image_card {
}
.image-item:hover {
  scale: 1.5;
}
</style>