<template>
  <v-card flat elevation="0" class="" color="transparent">
    <v-row
      class="justify-start align-start"
      style="justify-content: center; aling-items: center"
    >
      <v-col
        cols="12"
        md="3"
        v-for="(item, i) in items"
        :key="i"
        class="justify-start align-start"
        aling="center"
      >
        <ItemServices :item="item" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ItemServices from "./ItemService";
export default {
  name: "ListServices",
  data() {
    return {};
  },
  props: {
    items: Array,
  },
  methods: {},
  computed: {},
  components: { ItemServices },
};
</script>

<style>
</style>