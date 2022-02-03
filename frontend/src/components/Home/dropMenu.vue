<template>
  <div class="text-center drop_menu">
    <v-menu offset-y open-on-hover class="">
      <template v-slot:activator="{ on, attrs }">
        <router-link
          color=""
          dark
          v-bind="attrs"
          v-on="on"
          class="drop_menu"
          :href="href ? href : ''"
        >
          {{ label }}<v-icon v-if="!button">mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list v-if="!button">
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
  props: {
    label: String,
    icon: String,
    button: Boolean,
    href: String,
  },
};
</script>

<style>
.drop_menu {
  box-shadow: none;
  z-index: 100;
}
</style>