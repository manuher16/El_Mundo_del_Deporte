<template>
  <v-fab-transition>
    <v-btn
      color="success"
      absolute
      fab
      large
      dark
      bottom
      right
      class="v-btn--example"
    >
      <v-icon>mdi-share-variant</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {};
</script>
<style>
/* This is for documentation purposes and will not be needed in your application */
#lateral .v-btn--example {
  top: 0;
  position: absolute;
  margin: 0 0 16px 16px;
  z-index: 99;
}
</style>