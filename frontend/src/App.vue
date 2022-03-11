<template>
  <v-app>
    <Navbar />
    <v-main>
      <ButtonContact />
      <v-card flat color="rgb(31,107,132,0.48)">
        <v-container fluid class="">
          <router-view />
        </v-container>
      </v-card>
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
  created() {
    localStorage.setItem("modalWelcome", "true");
  },
};
</script>
