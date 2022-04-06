<template>
  <div class="container-button-contact-large">
    <v-btn rounded color="success" :href="`${contact}`">
      Contactanos <v-icon large class="ml-2">mdi-whatsapp</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    contact: process.env.VUE_APP_TELEPHONE_CONTACT,
  }),
  created() {
    console.log(this.contact, process.env);
  },
};
</script>

<style>
.container-button-contact-large {
  position: fixed;
  top: 90%;
  right: 100px;
  width: 100px;
  height: 100px;
  z-index: 99;
}
.container-button-contact-small {
  position: fixed;
  top: 90%;
  right: -10px;
  width: 100px;
  height: 100px;
  z-index: 99;
}
</style>