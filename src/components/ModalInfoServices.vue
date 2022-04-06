<template>
  <v-dialog
    v-model="modalInfoService"
    v-if="modalInfoService"
    persistent
    class="mx-0"
    max-width="900"
  >
    <v-card>
      <v-sheet :color="content.color ? content.color : 'black'">
        <v-card-text class="text-h5 white--text text-uppercase">
          {{ content.title }}
        </v-card-text>
      </v-sheet>
      <v-divider />
      <div v-for="(line, index) in content.description" :key="index">
        <div v-if="line.type == 'paragraph'">
          <v-row class="ma-2">
            <v-col md="8" class="">
              <v-card-text
                v-for="(text, index) in line.paragraph"
                :key="index"
                class="my-1 py-0"
              >
                {{ text }}
              </v-card-text></v-col
            >
            <v-col
              md="4"
              :class="`${
                line.image.position == 'left' ? 'order-first' : 'order-2'
              } `"
            >
              <v-img :src="line.image.src" width="100%" contain></v-img>
            </v-col>
          </v-row>
        </div>

        <v-card-text
          v-if="line.type == 'text' && !line.image"
          :class="`${line.bold ? 'font-weight-bold' : ''}`"
          >{{ line.text }}</v-card-text
        >
        <v-card-text v-if="line.type == 'text' && line.image">
          <v-row>
            <v-col
              cols="12"
              md="3"
              v-if="line.image.position == 'left'"
              class="image-modal"
            >
              <v-img :src="line.image.src" width="100%" cover
            /></v-col>
            <v-col :class="`${line.bold ? 'font-weight-bold' : ''}`">{{
              line.text
            }}</v-col>
            <v-col
              cols="12"
              md="3"
              v-if="line.image.position == 'right'"
              class="image-modal"
            >
              <v-img
                :src="line.image.src"
                width="100%"
                cover
                class="image-modal"
            /></v-col>
          </v-row>
        </v-card-text>
        <v-card-text v-if="line.type == 'list' && !line.image">
          <ul>
            <li v-for="(item, index) in line.list" :key="index">
              {{ item }}
            </li>
          </ul>
        </v-card-text>
        <v-card-text v-if="line.type == 'list' && line.image">
          <v-row>
            <v-col cols="12" md="8">
              <ul>
                <li v-for="(item, index) in line.list" :key="index">
                  {{ item }}
                </li>
              </ul></v-col
            >
            <v-col cols="12" md="4">
              <v-img :src="line.image.src" width="100%" contain></v-img>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-subtitle
          v-if="line.type == 'subtitle'"
          class="text-h5 text-uppercase"
          >{{ line.text }}</v-card-subtitle
        >
      </div>

      <v-divider />
      <v-card-actions>
        <v-btn color="success" large :href="`${contact}`"
          >Contactanos <v-icon large>mdi-whatsapp</v-icon></v-btn
        >
        <v-spacer /><v-btn
          color="error"
          text
          large
          @click="hideModalInfoService"
          >Cerrar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    contact: process.env.VUE_APP_TELEPHONE_CONTACT,
  }),
  computed: {
    ...mapState("modalInfoService", ["modalInfoService", "content"]),
  },
  methods: {
    ...mapMutations("modalInfoService", [
      "showModalInfoService",
      "hideModalInfoService",
    ]),
  },
};
</script>

<style>
.image-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>