<template>
  <v-app>
    <Navbar />
    <v-main>
      <Contact />
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
import Contact from "./components/ButtonFloatContact";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Footer,
    Navbar,
    WelcomeModal,
    Contact,
  },
};
</script>
