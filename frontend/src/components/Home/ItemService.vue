<template>
  <v-hover v-slot="{ hover }">
    <v-card
      @click="selectItemForModal"
      widht="350px"
      class="px-0"
      elevation="10"
      flat
      color="transparent"
    >
      <v-expand-transition>
        <v-sheet
          class="d-flex image_card rounded-lg"
          color="transparent"
          width="100%"
          height="250"
        >
          <v-img
            class="
              d-flex
              aling-center
              justify-center
              image-item image-scale
              rounded
            "
            :src="
              item.image
                ? `${item.image}`
                : 'https://image.freepik.com/foto-gratis/caucasico-deporte-pared-abdominal-fondo_1296-394.jpg'
            "
            cover
            :aspect-ratio="hover ? 1.7 : 1"
          >
            <div class="title__card font-weight-black">{{ item.title }}</div>
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
  transform: scale(1.05);
}
.rounded-card {
  border-radius: 10px !important;
}
</style>