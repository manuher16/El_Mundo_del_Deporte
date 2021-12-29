<template>
  <v-card flat>
    <v-card-title>
      <div class="heading-drawner-menu">
        <div class="heading-drawner-menu-title">
          <v-subheading class="text-uppercase"> Deportes </v-subheading>
        </div>
      </div>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <ListSport :items="items" />
    </v-card-text>
  </v-card>
</template>

<script>
import ListSport from "../components/Home/ListServices";
export default {
  data: () => ({
    items: [
      {
        title: "Atletismo",
        description: "",
        image:
          "https://concepto.de/wp-content/uploads/2015/03/atletismo-e1550017721661.jpg",
      },
      {
        title: "Tennis",
        description: "",
        image: "https://guiafitness.com/wp-content/uploads/Tenis-1000x600.jpg",
      },
      {
        title: "Baloncesto",
        description: "",
        image: "https://guiafitness.com/wp-content/uploads/baloncesto.jpg",
      },
      {
        title: "Voliball",
        description: "",
        image:
          "https://images.pexels.com/photos/6180388/pexels-photo-6180388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        title: "Tennis de Mesa",
        description: "",
        image:
          "https://images.pexels.com/photos/976873/pexels-photo-976873.jpeg",
      },
      {
        title: "Badminton",
        description: "",
        image:
          "https://images.pexels.com/photos/4966373/pexels-photo-4966373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        title: "Gimnasia",
        description: "",
        image:
          "https://images.pexels.com/photos/6572605/pexels-photo-6572605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        title: "Natacion",
        description: "",
        image:
          "https://images.pexels.com/photos/8688531/pexels-photo-8688531.jpeg",
      },
      {
        title: "Beisball",
        description: "",
        image:
          "https://images.pexels.com/photos/896567/pexels-photo-896567.jpeg",
      },
      {
        title: "Futbol",
        description: "",
        image:
          "https://www.elheraldo.co/sites/default/files/styles/width_1180/public/articulo/2020/09/07/lionel-messi-entrenamiento-barcelona.jpg?itok=vXj5zIPi",
      },
      {
        title: "Balon Mano",
        description: "",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Handball_07.jpg/413px-Handball_07.jpg",
      },
      {
        title: "Futbol Americano",
        description: "",
        image:
          "https://images.pexels.com/photos/159515/football-american-football-runner-player-159515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      },
      {
        title: "Ajedrez",
        description: "",
        image: "https://criterio.hn/wp-content/uploads/2021/09/ajedrez.jpg",
      },
    ],
  }),
  components: { ListSport },
  created() {
    this.items.sort();
  },
};
</script>

<style>
</style>