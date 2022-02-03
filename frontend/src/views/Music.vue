<template>
  <v-card flat>
    <v-card-title><v-subheading> Musica</v-subheading></v-card-title>
    <v-card-text>
      <v-row>
        <v-col md="3">
          <v-img
            src="https://concepto.de/wp-content/uploads/2020/03/musica-e1584123209397.jpg"
            contain
          />
        </v-col>
        <v-col>
          Se puede describir a la Música como un conjunto de sonidos y
          silencios, organizados de una manera particular, y regidos por los
          preceptos del ritmo, la melodía y armonía. Sin embargo, ésta
          definición no alcanza. Es una forma de comunicación y manifestación
          del ser humano, una expresión artística producto de la cultura, que
          puede evocar sensaciones y emociones.
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-title>Beneficios de la música </v-card-title>
    <v-card-text>
      El aprendizaje de la Música desarrolla:
      <v-row>
        <v-col>
          <ul>
            <li>La creatividad</li>
            <li>La valoración individual.</li>
            <li>Fomenta el trabajo en equipo</li>
            <li>La inteligencia emocional y la sensibilidad.</li>
            <li>
              Estimula las capacidades motoras, cognitivas, afectivas,
              introspectivas, perceptivas de las personas
            </li>
          </ul>
        </v-col>
        <v-col md="2">
          <v-img
            contain
            src="https://www.hola.com/imagenes/ninos/2017070596737/canciones-infantiles-instrumentos-musicales-hk/0-467-59/canciones-infantiles1-z.jpg"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text>
      A la hora de elegir es muy importante tener en cuenta la opinión del niño
      o niña. En caso contrario cabe la posibilidad de que no quiera practicarlo
      y la búsqueda haya sido en bano. La mejor motivación es la de hacer algo
      que nos guste y eso también funciona con los peques.
    </v-card-text>
    <v-divider />
    <v-card-text>
      <ListMusic :items="items" />
    </v-card-text>
  </v-card>
</template>

<script>
import ListMusic from "../components/Home/ListServices.vue";
export default {
  data: () => ({
    items: [
      {
        title: "Violin",
        description: [
          {
            type: "text",
            text: "El violín es un instrumento de cuerda frotada tocado con un arco. Cuenta con cuatro cuerdas tensadas cuya afinación es Mi, la, re, sol (desde la cuerda más delgada a la más gruesa). Este instrumento es muy dinámico, cuenta con gran flexibilidad y versatilidad en su rango tonal. ",
            image: {
              position: "left",
              src: "https://generationstudy.com/wp-content/uploads/2020/02/Learn-Violin-Lessons.jpg",
            },
          },
          { type: "subtitle", text: "Beneficios de tocar violin " },
          {
            type: "list",
            list: [
              "Facilita la interacción social. ",
              "Desarrolla valores extra e intrapersonales.  ",
              "Combate los niveles de estrés.",
              "Fortalece la memoria.  ",
              "Ayuda en el autocontrol y disciplina.",
              "Incrementa la confianza en sí mismo. ",
              "Aporta un nuevo enfoque sobre la historia y la cultura. ",
              "Estimula las sensibilidad humana y la intelectualidad.",
              "Se adquieren conocimientos mientras podemos divertirnos de forma sana. ",
            ],
            image: {
              src: "https://dnan0fzjxntrj.cloudfront.net/Pictures/480xAny/1/6/3/6163_beginnerviolinlessons.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://images.pexels.com/photos/111287/pexels-photo-111287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        href: "",
      },
      {
        title: "Guitarra electrica",
        description: [
          {
            type: "text",
            text: "La guitarra eléctrica es un tipo de guitarra en la que, a diferencia de la guitarra española y la guitarra acústica, su caja no hace resonancia, por lo que el sonido se produce indirectamente por inducción eléctrica y a través de un Amplificador de guitarra o también a través de un Pedal de efectos. ",
            image: {
              position: "left",
              src: "https://s3-us-west-1.amazonaws.com/cdn.schoolofrock.com/img/lesson-callout/intermediateguitarlessons1527031042.jpg",
            },
          },
          {
            type: "subtitle",
            text: "Beneficios de tocar guitarra electrica ",
          },
          {
            type: "list",
            list: [
              "Ejercita diariamente la memoria. ",
              "Aumenta la confianza. ",
              "Favorece las relaciones sociales. ",
              "Fomenta el desarrollo creativo. ",
              "Desarrolla correctamente el lenguaje. ",
              "Reduce los riesgos de sufrir depresión  ",
              "Ayuda a mejorar la postura corporal. ",
            ],
            image: {
              src: "https://cdn.schoolofrock.com/img/lesson-callout-750w/guitarforbeginners1527031002.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://images.pexels.com/photos/379962/pexels-photo-379962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        href: "",
      },
      {
        title: "Bateria",
        description: [
          {
            type: "text",
            text: "La batería es un instrumento musical que pertenece a la familia de percusión. Este equipo estándar se usa en la música pop, el blues, el jazz, el rock, el heavy metal (en casi todos los géneros musicales), convirtiéndose, por tanto, en un instrumento indispensable para muchas agrupaciones musicales. ",
            image: {
              position: "left",
              src: "https://w0.peakpx.com/wallpaper/466/186/HD-wallpaper-man-playing-drum-set.jpg",
            },
          },
          { type: "subtitle", text: "Beneficios de tocar bateria " },
          {
            type: "list",
            list: [
              "Ayuda a la expresión ",
              "Incrementa su capacidad de concentración y atención ",
              "Estimula la creatividad ",
              "Mejora sus reflejos ",
              "Le inculca constancia y disciplina ",
            ],
            image: {
              src: "https://i.ytimg.com/vi/pUcVA9BnSCY/maxresdefault.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "data:image/jpeg;base64,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",
        href: "",
      },
      {
        title: "Bajo",
        description: [
          {
            type: "text",
            text: "El bajo eléctrico es instrumento de cuerda pulsada, similar a la guitarra pero la zona en donde están las cuerdas es más larga. Tiene cuatro cuerdas y un sonido más grave que la guitarra. ",
            image: {
              position: "left",
              src: "https://www.escuelamusicapipolopez.com/wp-content/uploads/2018/03/clases-de-bajo-768x384.jpg",
            },
          },
          { type: "subtitle", text: "Beneficios de practicar bajo" },
          {
            type: "list",
            list: [
              "Desarrolla el cerebro y la inteligencia. Aprender a tocar un instrumento ayuda al desarrollo del cerebro de los niños y jóvenes. ",
              "Mejora el estado anímico: es una forma de estar entretenido y sentirse realizado, por lo que puede ayudar a mejorar el humor.",
              "Ayuda a expresarse: la música es una forma de expresión, por lo que puede ayudar a personas tímidas o que tienen dificultades para expresar sus emociones o sentimientos. ",
              "Nos ayuda a conocernos: la música es una forma de autoconocimiento preciosa, conectamos con nuestro yo interior y conectamos de una forma muy particular con nuestro instrumento, como si nada más existiese ",
            ],
            image: {
              src: "https://media.istockphoto.com/photos/closeup-photo-of-bass-guitar-player-picture-id651209608?k=20&m=651209608&s=612x612&w=0&h=AiB7XH40Akl40uf8alG9Imq4CQA-4wGAx8mvd4TOAKM=",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://images.pexels.com/photos/7502607/pexels-photo-7502607.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        href: "",
      },
      {
        title: "Flauta",
        description: [
          {
            type: "text",
            text: "Una flauta es un instrumento musical que produce sonido cuando una corriente de aire se dirige contra el borde de un agujero, lo que hace que el aire dentro del cuerpo del instrumento vibre. La mayoría de las flautas son tubulares, pero algunas son globulares u otras formas. ",
            image: {
              position: "left",
              src: "https://saforguia.com/upload/images/12_2020/36_tipos-de-flautas-aprender-a-tocar.jpg",
            },
          },
          { type: "subtitle", text: "Beneficios de tocar flauta " },
          {
            type: "list",
            list: [
              "Mejora la coordinación de los dedos. ",
              "Aumenta la capacidad respiratoria.",
              "Mejora la coordinación entre la vista y las manos.  ",
              "Ayuda a disminuir los niveles de estrés.",
              "Mejora las habilidades cognitivas ya que estimula la memoria.",
              "Desarrolla su capacidad matemática, ya que tiene que contar notas y ritmos. ",
              "Mejora su capacidad lectora y de comprensión. ",
              "Se incrementa la capacidad de concentración ya que tienen que pensar en la nota, su ritmo, su duración, y cómo interpretarla.",
            ],
            image: {
              src: "https://www.educaciontrespuntocero.com/wp-content/uploads/2020/03/69976629_m-scaled-1.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://cdn.pixabay.com/photo/2018/01/18/12/39/music-3090204_1280.jpg",
        href: "",
      },
      {
        title: "Teclado",
        description: [
          {
            type: "text",
            text: "Un instrumento de teclado es un instrumento musical que se toca presionando teclas. Las teclas controlan un mecanismo que produce el sonido. En algunos de los instrumentos las cuerdas producen el sonido. En otros casos, se impulsa aire por el interior de tubos para producir el sonido. Un tercer grupo usa métodos electrónicos para producir sonido. Los principales tipos de instrumentos de teclado son el clavicordio, el clavecín, el piano y el órgano. ",
            image: {
              position: "left",
              src: "https://image.freepik.com/foto-gratis/hombre-tocando-sintetizador-teclado-musical-electronico-manos_43263-1423.jpg",
            },
          },
          { type: "subtitle", text: "Beneficios de practicar Teclado" },
          {
            type: "list",
            list: [
              "La práctica musical estimula y moldea el cerebro como ninguna otra actividad. ",
              "Aumenta las habilidades cognitivas.",
              "Incrementa la productividad y concentración.  ",
              "Ejercita la memoria.  ",
              "Mejora la capacidad de resolución de problemas.",
              "Desarrolla el pensamiento crítico. ",
              "Las personas que aprenden música suelen tener mejores habilidades lingüísticas, sintácticas, vocabulario más amplio y mayor comprensión lectora.  ",
              "Despierta el interés y autonomía en los procesos de aprendizaje. ",
            ],
            image: {
              src: "http://www.hola.com/imagenes/ninos/2017071096931/tocar-piano-canciones-infantiles-hk/0-468-515/canciones-infantiles1-z.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://images.pexels.com/photos/8520462/pexels-photo-8520462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        href: "",
      },
      {
        title: "Guitarra",
        description: [
          {
            type: "text",
            text: `Guitarra que no utiliza amplificación eléctrica; especialmente, la de cuerdas finas de metal, que produce un sonido brillante y metálico. `,
            image: {
              position: "left",
              src: "https://s1.eestatic.com/2020/03/24/imprescindibles/marcas_destacadas-branded_content-amazon_477213669_149016481_1024x576.jpg",
            },
          },
          { type: "subtitle", text: "Beneficios de tocar guitarra " },
          {
            type: "list",
            list: [
              "La guitarra como medio de expresión. Tocar la guitarra es hablar, crear, componer… expresar lo que ocurre dentro de tu cabeza y de tu corazón. Y dejarte llevar… A veces es incluso más fácil hablar a través de ella. ",
              "Salud física y mental. La música es terapéutica. Reduce el dolor físico y emocional ",
              "Libera estres ",
              "Mejora la creatividad y la concentración. ",
              "Estimula la actividad cerebral y mejora la inteligencia.",
              "Puedes tocar la guitarra en cualquier lugar",
            ],
            image: {
              src: "https://sologuitarras.com/wp-content/uploads/2020/05/aprender-a-tocar-guitarra-800x520.jpeg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://media.istockphoto.com/photos/guitar-teacher-teaching-boy-to-play-guitar-in-music-school-picture-id1130955976?b=1&k=6&m=1130955976&s=170667a&w=0&h=_sZNViDT--gX7vrrshfzjhkGUWsxJ4s5dFju17SbjZw=",
        href: "",
      },
      {
        title: "Saxofon",
        image:
          "https://static.vix.com/es/sites/default/files/btg/7-espectaculares-canciones-con-epicos-momentos-con-saxofon.jpg",
        description: [
          {
            type: "text",
            text: "El saxofón o saxo es un instrumento  musical de viento-madera que se fabrica de latón o metal y con boquilla de caña, muy similar al clarinete. De hecho su inventor intentaba crear una especie de clarinete de metal para conseguir modificaciones de sonoridad. ",
            image: {
              position: "left",
              src: "https://content.app-sources.com/s/28860800263691606/uploads/Stock_Images/saxophone-3246650-6956926.jpg",
            },
          },
          {
            type: "subtitle",
            text: "Beneficios de practicar Saxofon",
          },
          {
            type: "list",
            list: [
              "Tocar el saxo te permitirá expresarte ",
              "Es un instrumento muy versátil ",
              "Es uno de los instrumentos más sociales ",
              "Ayuda a la memoria  ",
              "Aumenta tu conciencia de sonido",
              "Mejora tu respiración  ",
              "Aprender a tocar el saxo es una gran oportunidad que te ofrece muchos beneficios, incluyendo una mejor coordinación y una reducción del estrés. ",
            ],
            image: {
              src: "https://instrumentosmusicales10.net/wp-content/uploads/2017/03/C%C3%B3mo-tocar-el-Saxof%C3%B3n.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
      },
      {
        title: "Canto",
        image:
          "https://thumbs.dreamstime.com/b/el-m%C3%BAsico-se-comunica-con-los-estudiantes-de-forma-distante-mediante-videollamada-profesor-explica-activamente-diferentes-temas-198942917.jpg",
        description: [
          {
            type: "text",
            text: "El concepto de canto, que proviene del vocablo latino cantus, refiere al acto y la consecuencia de cantar: esta acción, que puede ser desarrollada por un ser humano o un animal, consiste en generar sonidos que resultan melodiosos y, por lo general, agradables al oído de las personas.",
            image: {
              position: "left",
              src: "https://elizabethdolinska.com/wp-content/uploads/2018/09/clases-de-canto-en-madrid-025.jpg",
            },
          },
          { type: "subtitle", text: "Beneficios de cantar " },
          {
            type: "list",
            list: [
              "Cantar segrega endorfinas ",
              "Sirve para descargar tensiones ",
              "Ayuda a mejorar la respiración ",
              "Mejora el sistema cardiovascular ",
              "Limpia las vías respiratorias ",
              "Ayuda a memorizar ",
              "Ayuda a conectar con los demás ",
            ],
            image: {
              src: "https://cdn.schoolofrock.com/img/lesson-callout-750w/singingadvanced1527032566.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
      },
    ],
  }),
  components: { ListMusic },
};
</script>

<style>
</style>