<template>
  <div>
    <v-app-bar app color="" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="container-logo">
        <router-link to="/" class="router-link">
          <v-img
            src="/logo.png"
            height="40"
            width="150"
            class="mx-0 px-0"
            contain
          />
        </router-link>
      </div>
      <v-spacer></v-spacer>

      <router-link to="/about" class="router-link text-overline white--text"
        >Conocenos</router-link
      >
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      style="z-index: 100"
      fixed
      top
      temporary
      width="450"
      color="success"
      dark
    >
      <v-card>
        <v-card-title>
          <div class="heading-drawner-menu">
            <div class="heading-drawner-menu-title">
              <v-subheading class="text-uppercase"
                >Mundo deportes y mas HN
              </v-subheading>
            </div>
            <v-btn fab color="error" @click="drawer = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </v-card-title>
      </v-card>

      <v-list>
        <v-list-item-group v-model="group" active-class="">
          <div v-for="(item, index) in drawerMenu" :key="index">
            <router-link :to="item.href" class="router-link">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon large>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">{{
                    item.name
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawerMenu: [
      {
        name: "Entrenador Personal",
        href: "/entrenador-personal",
        icon: "mdi-account-tie",
      },
      {
        name: "Artes Marciales",
        href: "/artes-marciales",
        icon: "mdi-mixed-martial-arts",
      },
      { name: "Deportes", href: "/deportes", icon: "mdi-soccer" },
      { name: "Idiomas", href: "/idiomas", icon: "mdi-account-voice" },
      { name: "Arte", href: "/arte", icon: "mdi-brush" },
      { name: "Baile", href: "/baile", icon: "mdi-dance-ballroom" },
      { name: "Salud", href: "/salud", icon: "mdi-cards-heart-outline" },
      { name: "Musica", href: "/musica", icon: "mdi-music" },

      {
        name: "Asesoreamiento Legal",
        href: "/asesoramiento-legal",
        icon: "mdi-gavel",
      },
      {
        name: "Recreacion para Empresas",
        href: "/deporte-extremos",
        icon: "mdi-domain",
      },
      {
        name: "Deportes Extremos y al aire libre",
        href: "/deporte-extremos",
        icon: "mdi-close",
      },
      {
        name: "Otros",
        href: "/otros",
        icon: "mdi-plus",
      },
      {
        name: "Sobre Nosotros",
        href: "/about",
        icon: "mdi-handshake",
      },
    ],
    group: 0,
    drawer: false,
  }),
  components: {},
};
</script>

<style>
.router-link {
  all: none;
  text-decoration: none;
}
.heading-drawner-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.heading-drawner-menu-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-logo {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
}
</style>