<template>
  <v-app>
    <Navbar />
    <v-main>
      <ButtonContact />
      <v-container fluid class="">
        <router-view />
      </v-container>
    </v-main>
    <ModalServices />
    <Footer />
    <WelcomeModal />
  </v-app>
</template>

<script>
import WelcomeModal from "./components/Home/WelcomeModal";
import Footer from "./components/Navigation/Footer";
import Navbar from "./components/Navigation/Navbar";
import ModalServices from "./components/ModalInfoServices.vue";
import ButtonContact from "./components/buttonContact.vue";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Footer,
    Navbar,
    WelcomeModal,
    ButtonContact,
    ModalServices,
  },
};
</script>
