<template>
  <div class="container-button-contact-large">
    <v-btn
      rounded
      color="success"
      large
      :href="`https://api.whatsapp.com/send?phone=50489772032&app=facebook&entry_point=page_cta&fbclid=IwAR3BdjioyHiFRGRtRkVpwQB30wB8FEVeCBJio_J2vtHHLV5U49tlfwaII08`"
    >
      Contactanos <v-icon large class="ml-2">mdi-whatsapp</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {};
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