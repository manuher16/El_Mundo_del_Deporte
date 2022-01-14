<template>
  <v-card flat>
    <v-card-title class="text-h4"> Entrenador Personal</v-card-title>
    <v-divider></v-divider>
    <v-card-subtitle></v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col md="2">
          <v-img
            width="100%"
            contain
            src="https://cadenaser00.epimg.net/ser/imagenes/2018/02/26/sociedad/1519663134_599430_1519669121_noticia_normal.jpg"
          />
        </v-col>
        <v-col md="9">
          Un entrenador personal es un profesional del fitness, cualificado en
          actividad física, que prescribe ejercicios, motiva y fija metas de
          forma individualizada, teniendo en cuenta las condiciones físicas y
          los objetivos de cada uno de sus clientes. El éxito del entrenamiento
          personal se debe, en primer lugar, a los beneficios y satisfacción
          obtenidos por la atención personalizada a cada cliente
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-subtitle>
      <v-subheading class="text-h6"
        >Ventajas de tener un entrenador personal
      </v-subheading>
    </v-card-subtitle>
    <v-row>
      <v-col md="9"
        ><v-card-text class="my-2 py-0"
          >Aumento de motivación que transmite este profesional en su cliente,
          ya que le impulsa a seguir un programa de entrenamiento de manera
          consistente y constante.
        </v-card-text>
        <v-card-text class="my-2 py-0"
          >Aquel que contrata un entrenador personal se asegura de obtener los
          mejores resultados posibles, lo que tiene como consecuencia una mayor
          eficacia del tiempo invertido en su entrenamiento.
        </v-card-text>
        <v-card-text class="my-2 py-0"
          >Un personal trainer se esforzará en mejorar la técnica de su cliente,
          hacer que este supere los estados de estancamiento y enseñarle todos
          los aspectos necesarios para que logre entrenar por su cuenta sin
          necesidad de un monitor.
        </v-card-text>
        <v-card-text class="my-2 py-0"
          >Este profesional del fitness vigilará la postura y la forma de
          ejecutar los ejercicios de aquel al que esté asesorando, lo que en
          definitiva es una garantía para entrenar de la forma más segura
          posible.
        </v-card-text></v-col
      >
      <v-col md="3">
        <v-img
          width="100%"
          src="https://backtobasics4lifefitness.com.au/wp-content/uploads/2020/06/Male-personal-trainer-supporting-male-with-weight-lifting-in-studio-Melbourne.jpg"
        />
      </v-col>
    </v-row>

    <v-card-text>
      <ListTrainer :items="items" />
    </v-card-text>
  </v-card>
</template>

<script>
import ListTrainer from "../components/Home/ListServices.vue";
export default {
  data: () => ({
    items: [
      {
        title: "Entrenador personal ",
        description: [
          {
            type: "text",
            image: {
              src: "data:image/jpeg;base64,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",
              position: "left",
            },
            text: `Un entrenador personal es un profesional del fitness, cualificado en actividad física, que prescribe ejercicios, motiva y fija metas de forma individualizada, teniendo en cuenta las condiciones físicas y los objetivos de cada uno de sus clientes.   

El éxito del entrenamiento personal se debe, en primer lugar, a los beneficios y satisfacción obtenidos por la atención personalizada a cada cliente `,
          },
          {
            type: "subtitle",
            text: " Ventajas de tener un entrenador personal ",
          },
          {
            type: "list",
            image: {
              src: "https://backtobasics4lifefitness.com.au/wp-content/uploads/2020/06/Male-personal-trainer-supporting-male-with-weight-lifting-in-studio-Melbourne.jpg",
            },
            list: [
              "Aumento de motivación que transmite este profesional en su cliente, ya que le impulsa a seguir un programa de entrenamiento de manera consistente y constante. ",
              "Aquel que contrata un entrenador personal se asegura de obtener los mejores resultados posibles, lo que tiene como consecuencia una mayor eficacia del tiempo invertido en su entrenamiento. ",
              "Un personal trainer se esforzará en mejorar la técnica de su cliente, hacer que este supere los estados de estancamiento y enseñarle todos los aspectos necesarios para que logre entrenar por su cuenta sin necesidad de un monitor.",
              "Este profesional del fitness vigilará la postura y la forma de ejecutar los ejercicios de aquel al que esté asesorando, lo que en definitiva es una garantía para entrenar de la forma más segura posible. ",
            ],
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://backtobasics4lifefitness.com.au/wp-content/uploads/2020/06/Male-personal-trainer-supporting-male-with-weight-lifting-in-studio-Melbourne.jpg",
        href: "",
      },
    ],
  }),
  components: {
    ListTrainer,
  },
};
</script>

<style>
</style>