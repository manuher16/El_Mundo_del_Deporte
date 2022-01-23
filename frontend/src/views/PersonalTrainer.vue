<template>
  <v-card flat color=" lighten-1">
    <v-paralax
      src="https://cadenaser00.epimg.net/ser/imagenes/2018/02/26/sociedad/1519663134_599430_1519669121_noticia_normal.jpg"
    >
    </v-paralax>
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
    <v-card-title>Nuestro sistema de Entrenamiento </v-card-title>
    <v-card-text class="my-2 py-0"
      >Está diseñado para garantizarle a usted y a los suyos contar con guardas
      de seguridad profesionales.
    </v-card-text>
    <v-card-text class="my-2 py-0"
      >Está diseñado para garantizarle a usted y a los suyos contar con guardas
      de seguridad profesionales.
    </v-card-text>
    <v-card-text class="my-2 py-0"
      >Según nuestras estadísticas, los guardas de seguridad capacitados tienen
      mayores tasas de productividad y efectividad.
    </v-card-text>
    <v-card-text class="text-h6 my-2 py-0 font-weight-black"
      >Si deseas obtener nuestros servicios contactanos
    </v-card-text>
    <v-row>
      <v-col></v-col>
      <v-col></v-col>
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
        title: "Entrenamiento de musculacion  ",
        image:
          "https://image.freepik.com/foto-gratis/caucasico-deporte-pared-abdominal-fondo_1296-394.jpg",
        description: [
          {
            type: "text",
            image: {
              src: "https://image.freepik.com/foto-gratis/caucasico-deporte-pared-abdominal-fondo_1296-394.jpg",
              position: "left",
            },
            text: `Se utiliza métodos de resistencia, como las pesas, las máquinas de musculación, los bandas de resistencia o el propio peso corporal para trabajar la fuerza muscular y desarrollar los músculos. 

En función del objetivo que tengamos, existen diferentes tipos de rutinas de entrenamiento en lo que a musculación se refiere: fuerza, hipertrofia, resistencia. `,
          },
          {
            type: "subtitle",
            text: " Entrenamiento de fuerza  ",
          },
          {
            type: "text",
            image: {
              position: "right",
              src: "https://mundoentrenamiento.com/wp-content/uploads/2015/05/sentadilla-profunda-702x500.jpg",
            },
            text: "El entrenamiento de fuerza como su nombre indica tiene como objetivo aumentar la fuerza del deportista y para ello se centra en trabajar la potencia del músculo, es decir la capacidad más explosiva de las fibras musculares. ",
          },
          {
            type: "subtitle",
            text: "Entrenamiento de hipertrofia  ",
          },
          {
            type: "text",
            image: {
              position: "left",
              src: "https://www.verywellfit.com/thmb/SoCMj1spaE9pbXlcBGckX0scKY0=/2178x1225/smart/filters:no_upscale()/hip-thrust-exercise--1199620482-e1e7b0f530a2477487fc0006e45fd7c9.jpg",
            },
            text: `Un entrenamiento de hipertrofia tiene como objetivo principal el  aumentar la masa muscular. 

La hipertrofia busca el crecimiento del musculo y de las fibras musculares por lo que tiene ningún sentido trabajar en todo momento a máxima intensidad. `,
          },
          {
            type: "subtitle",
            text: "Entrenamiento de resistencia  ",
          },
          {
            type: "text",
            image: {
              position: "right",
              src: "https://www.cmdsport.com/app/uploads/2018/04/estudio-del-entrenamiento-de-fuerza-para-los-deportes-de-resistencia-1024x700.jpg",
            },
            text: `Es el acondicionamiento de los músculos para resistir un cierto movimiento durante un tiempo, la resistencia muscular es la capacidad de generar tensión dicho anteriormente durante un periodo de tiempo determinado. `,
          },
          {
            type: "subtitle",
            text: "Beneficios de entrenar con pesas  ",
          },
          {
            type: "list",
            image: {
              src: "https://www.sportlife.es/uploads/s1/95/66/57/6/ganar-fuerza-y-musculo-con-la-edad-el-entrenamiento-de-resistencia.jpeg",
            },
            list: [
              "Más fuerza ",
              "Mayor equilibrio ",
              "Reduce el estrés ",
              "Mejora el autoestima ",
              "Ayuda a dormir mejor ",
              " Aumenta la masa muscular ",
              "Huesos más saludables",
              "Mejora la salud del corazón  ",
              "Pérdida de grasa ",
              "Reduce el riesgo de sufrir lesiones ",
              "Quemarás más calorías mientras descansas ",
              "Adherencia a una alimentacion mas saludable ",
              "Mejora la resistencia y también la capacidad cardiovascular",
            ],
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
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