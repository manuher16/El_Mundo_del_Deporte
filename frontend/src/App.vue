<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
    <WelcomeModal />
  </v-app>
</template>

<script>
import WelcomeModal from "./components/Home/WelcomeModal";
import Footer from "./components/Navigation/Footer";
import Navbar from "./components/Navigation/Navbar";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Footer,
    Navbar,
    WelcomeModal,
  },
};
</script>
