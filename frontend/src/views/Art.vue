<template>
  <v-card flat>
    <v-card-title><v-subheading>Artes</v-subheading></v-card-title>
    <v-card-text>
      <ListArts :items="items" />
    </v-card-text>
  </v-card>
</template>

<script>
import ListArts from "../components/Home/ListServices.vue";
export default {
  data: () => ({
    items: [
      {
        title: "Artes plasticas",
        description: [
          {
            type: "text",
            text: `Cuando hablamos de artes plásticas, nos referimos a las técnicas de elaboración de obras de arte en las cuales se utilizan materiales y elementos susceptibles de ser moldeados, modificados o transformados por el artista. Dichos elementos se consideran por ende recursos plásticos, ya que le sirven al artista de materia prima para expresar su perspectiva, imaginación o visión específica de lo real.  

Las artes plásticas ocupan actualmente uno de los principales rubros artísticos de los museos, y son, junto con las artes escénicas, la literatura, el cine, la música y la fotografía, las máximas expresiones contemporáneas`,
            image: {
              position: "left",
              src: "https://concepto.de/wp-content/uploads/2014/09/escultura-e1551137949221.jpg",
            },
          },
          {
            type: "subtitle",
            text: "BENEFICIOS DE LAS ARTES PRACTICAS  ",
          },
          {
            type: "list",
            list: [
              "Disfrutan las producciones. Lo más importante de las artes plásticas es que se disfruta mientras se llevan a cabo su trabajo. ",
              "Creatividad individual.",
              "Descubren el mundo.",
              "Conciencia corporal y coordinación motora.",
              "Ayuda a la autoestima. ",
              "Tiempo de calidad entre padres e hijos.",
            ],
            image: {
              src: "http://www.murcia.com/noticias/fotos/05082019027285.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://www.wikihow.com/images_en/thumb/c/cc/Make-a-Clay-Pot-Step-25-Version-4.jpg/550px-nowatermark-Make-a-Clay-Pot-Step-25-Version-4.jpg",
        href: "",
      },
      {
        title: "Teatro",
        description: [
          {
            type: "text",
            text: `El teatro es una de las actividades culturales y artísticas más antiguas que conoce la humanidad. Es una de las artes escénicas, es decir, aquellas que tienen lugar sobre un escenario, y consiste en la recreación de una o varias historias de distinta índole mediante actores, discursos, música y escenografía. 

El teatro ha sido cultivado a lo largo de la historia con muy distintos fines, pero siempre comprendido como una herramienta para comunicar ideas masivamente. De hecho, los antiguos griegos lo empleaban como un instrumento de educación religiosa y ciudadana, poniendo en escena sus mitos y sus célebres tragedias. 

Se trata, pues, de una forma de arte muy versátil, que combina el ejercicio intelectual con la representación de situaciones graciosas, conmovedoras, impactantes, etc. Existen formas muy variadas de representación teatral, algunas de las cuales ni siquiera tienen lugar dentro de un teatro, sino en la calle, y algunas incluso exigen la participación del público.  `,
            image: {
              position: "left",
              src: "https://encolombia.com/wp-content/uploads/2021/07/La-Musica-y-el-Teatro.jpg",
            },
          },
          { type: "subtitle", text: "BENEFICIOS DEL TEATRO " },
          {
            type: "list",
            list: [
              "Fomenta la creatividad.",
              "Aumenta la empatía.",
              "Desarrolla las habilidades psicomotrices.",
              "Mejora la agilidad mental.",
              "Ayuda a reflexionar sobre la forma de comunicación.",
              "Mejora el desarrollo personal.",
              "Requiere orden y compromiso.",
              "Descubre un nuevo entorno. ",
            ],
            image: {
              position: "right",
              src: "https://www.caracteristicas.co/wp-content/uploads/2018/10/teatro-5-e1583803340193.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "data:image/jpeg;base64,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",
        href: "",
      },
      {
        title: "Pintura y Dibujo",
        description: [
          {
            type: "text",
            text: `Dibujar y pintar no significa lo mismo. Por su naturaleza física, el dibujo es un subconjunto de las manifestaciones artísticas conocidas como pintura, pero no forma parte de la pintura como técnica de representación. El dibujo es el arte de representar gráficamente objetos sobre una superficie plana; es base de toda creación plástica y es un medio convencional para expresar la forma de un objeto mediante líneas o trazos. En la pintura, la estructura de los planos se logra mediante masas coloreadas. 

Las técnicas de pintar y dibujar pueden confundirse, porque las herramientas son en ocasiones las mismas. Sin embargo la técnica es distinta: pintar involucra la aplicación de pigmentos, generalmente mediante un pincel, que son esparcidos sobre un lienzo, y el dibujo es la delineación en una superficie, generalmente papel. En otras palabras, el acto de pintar utiliza la mancha como recurso comunicativo mientras que el dibujo utiliza la línea. `,
            image: {
              position: "left",
              src: "https://www.thehobbymaker.com/wp-content/uploads/2019/04/Pintamonas-clases-de-dibujo-pintura-en-Madrid-oleo-carboncillo-acuarela-acrilico-ilustracion-1-800x600.jpg",
            },
          },
          {
            type: "subtitle",
            text: `BENEFICIOS DE APRENDER A DIBUJAR O PINTAR`,
          },
          {
            type: "list",
            list: [
              "Mejora tu capacidad creativa. ",
              "Mejora tu forma de comunicarte",
              "Reduce los niveles de estrés. ",
              "Capacidad de mejora. ",
              "Aprendizaje: descubrir técnicas y materiales.",
              "Diversión y entretenimiento.  ",
            ],
            image: {
              src: "https://www.superprof.mx/blog/wp-content/uploads/2019/12/diferentes-tecnicas-para-dibujar.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://images.pexels.com/photos/542555/pexels-photo-542555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        href: "",
      },
      {
        title: "Fotografia",
        image:
          "https://definicion.de/wp-content/uploads/2009/06/fotografia-1.jpg",
        description: [
          {
            type: "text",
            text: `La palabra fotografía se deriva de los vocablos de origen griego: phos (luz) y grafis(escritura), lo cual significa escribir o dibujar con luz. La fotografía es la técnica  de captar imágenes permanentes con una cámara, por medio de la acción foto química de la luz o de otras formas de energía radiante, para luego reproducirlas en un papel especial. 

Vivimos en un mundo visual, donde cada vez cobran mayor protagonismo las imágenes que las palabras. Son muchas las razones que pueden haberte traído hasta la fotografía, desde querer inmortalizar tus recuerdos, hasta querer expresarte a través de una imagen. 

Todas y cada una de esas posibles razones argumentan en cierta medida por qué la fotografía es uno de los hobbies más completos que encontrarás. `,
            image: {
              position: "left",
              src: "https://static.eldiario.es/clip/71d118ff-5ef2-449c-be8a-6c321304fa70_16-9-aspect-ratio_default_0.jpg",
            },
          },
          { type: "subtitle", text: "BENEFICIOS DE FOTOGRAFIA COMO HOBBIE " },
          {
            type: "list",
            list: [
              "Nos Permite Inmortalizar a Nuestros Seres Queridos ",
              "Nos Ayuda a Revivir Momentos ",
              "Complementa a Otras Aficiones ",
              "Nos Motiva a Viajar y Visitar Nuevos Lugares ",
              "Te Permite Ver el Mundo desde Perspectivas Diferentes ",
              "Te Ayuda a Conectar con Tu Entorno ",
              "Impulsa Tu Creatividad ",
              "Entrena Tu Paciencia y Atención ",
              "No Tiene Por Qué Ser Caro ",
              "Siempre Hay Cosas que Aprender ",
              "Es Bueno para Tu Salud ",
              "Es una Oportunidad para Conocer Gente Nueva ",
              "Puede Convertirse en Tu Trabajo ",
              "Nos Sirve para Documentar ",
              "Tiene Poder para Cambiar el Mundo",
              "Es Divertida y eso ayuda a bajar los niveles de estrés ",
            ],
            image: {
              src: "https://web.serplus.es/wp-content/uploads/2021/06/BCLEJSVCKASHZNCKS.jpeg",
            },
          },
        ],
      },
    ],
  }),
  components: { ListArts },
};
</script>

<style>
</style>