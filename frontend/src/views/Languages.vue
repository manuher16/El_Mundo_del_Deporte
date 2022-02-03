<template>
  <v-card flat>
    <v-card-title>
      <v-subheading>Idomas</v-subheading>
    </v-card-title>

    <v-card-text>
      <v-row>
        <v-col md="2">
          <v-img
            src="https://www.redem.org/wp-content/uploads/2016/07/bilingual_people.png"
            width="300"
            contain
          ></v-img
        ></v-col>
        <v-col
          >No importa a qué edad se aprende un idioma, si desde la niñez o ya
          siendo adulto, se ha comprobado que ser bilingüe es beneficial para el
          desarrollo cognitivo de las personas.</v-col
        >
      </v-row>
    </v-card-text>
    <v-card-subtitle class="text-h6"
      >Beneficios de hablar otro idioma
    </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col>
          <ul>
            <li>Flexivilidad cognitiva</li>
            <li>Pensar en otra lengua ayuda a tomar deciones mas razonables</li>
            <li>Aumneta tu confianza</li>
            <li>Entrena el cerebro</li>
            <li>Da un impulso a tu carrera</li>
            <li>Experimenta nuevas culturas</li>
            <li>Te abrira la mente</li>
            <li>Vivir, trabajar o estudiar en el extranjero</li>
          </ul>
        </v-col>
        <v-col class="justify-end" col="12" md="3">
          <v-img
            src="https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/curiosidades.batanga.com/files/7-interesantes-beneficios-de-hablar-mas-de-una-lengua-y-sus-efectos-en-el-cerebro-2.jpg"
            width="300"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text>
      A la hora de elegir un idioma es muy importante tener en cuenta la opinión
      del niño o niña. En caso contrario cabe la posibilidad de que no quiera
      practicarlo y la búsqueda haya sido en bano. La mejor motivación es la de
      hacer algo que nos guste y eso también funciona con los peques.
    </v-card-text>
    <v-divider />
    <v-card-text>
      <ListLanguage :items="items" />
    </v-card-text>
  </v-card>
</template>

<script>
import ListLanguage from "../components/Home/ListServices.vue";
export default {
  data: () => ({
    items: [
      {
        title: "Ingles",
        description: [
          {
            type: "text",
            image: {
              position: "left",
              src: "",
            },
            text: `El inglés es el idioma más exigido en las compañías y empresas, es por esto que se convirtió en la principal herramienta para ampliar las metas profesionales y personales ademas mejorar nuestro acceso a la educación. Nos permitirá no sólo estudiar en el extranjero sino también  acceder a información académica como ensayos y textos científicos publicados en inglés. 

expresarte frente a otros de forma fluída, explicar tus ideas sin tropiezos, con orden y claridad. Es decir, aprendiendo el idioma también potenciamos otras habilidades. `,
          },
          {
            type: "subtitle",
            text: "Porque aprender ingles?",
          },
          {
            type: "list",
            image: {
              position: "left",
              src: "https://upagu.edu.pe/es/wp-content/uploads/2020/05/tapa-oficial-web-ingles.jpg",
            },
            list: [
              "Aumenta la creatividad. ",
              "Mejora el razonamiento.",
              "Ayuda a la resolución de problemas. ",
              "Mejoras las oportunidades en educacion y ambit laboral. ",
              "Aprendes de otras culturas. ",
            ],
          },

          {
            type: "text",
            bold: true,
            text: `Estudia con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://ekuatio.com/wp-content/uploads/importancia-de-aprender-ingles.png",
        href: "",
      },
      {
        title: "Mandarin",
        description: [
          {
            type: "subtitle",
            text: "PORQUE APRENDER MANDARIN ? ",
          },
          {
            type: "text",
            text: `Es el idioma más hablado del planeta. El chino mandarín es el idioma más hablado en el mundo. Lo hablan más de 1000 millones de personas nativas, como en China, este idioma se habla también en otros países como Taiwán, Birmania, Camboya, Filipinas, Indonesia, Malasia, Singapur, Tailandia. `,
            image: {
              position: "left",
              src: "https://larepublica.pe/resizer/RYDoBjoBA3hDeYMtbZ16JRXhR6A=/1250x735/top/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/WFMQ665CZZGBPFE4OS27NUFRKM.jpg",
            },
          },
          { type: "subtitle", text: "Beneificios de aprender otro idioma" },
          {
            type: "text",
            text: `Aprender chino mandarín puede darte acceso a comunicarte con mucha más gente, ejercita tu mente y trabaja mejor a mayor profundidad, ya que ejercitamos los dos hemisferios del cerebro.  `,
            image: {
              position: "right",
              src: "https://academiaeuropea.com/principal/wp-content/uploads/2020/12/Porque-es-el-mejor-momento-para-aprender-chino-1080x675-1.gif",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Estudia con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://www.esl-idiomas.com/sites/default/files/styles/hero_banner_mobile/public/school/hero/esl-mandarin-chinese-taiwan-taipei-taiwan-mandarin-institute-hero.jpg?itok=H2HDxVGr",
        href: "",
      },
      {
        title: "Español",
        description: [
          {
            type: "text",
            image: {
              position: "left",
              src: "https://www.salminter.com/blog/wp-content/uploads/2019/07/260.jpg",
            },
            text: "Es una de las lenguas más habladas. Se estima que el español es la lengua materna de más de 400 millones de personas en todo el mundo, lo que equivale a aproximadamente el seis por ciento de la población mundial. El idioma español (también llamado castellano) es una lengua romance del grupo ibérico. Es uno de los seis idiomas oficiales de la Organización de las Naciones Unidas. ",
          },
          {
            type: "subtitle",
            text: "PORQUE APRENDER ESPAÑOL? ",
          },
          {
            type: "list",
            image: {
              position: "right",
              src: "https://arche-ele.com/wp-content/uploads/2020/11/paises-hispanohablantes.png",
            },
            list: [
              "Aprendes de nuevas culturas ",
              "Disfrutas mas al viajar",
              "Te puedes relacionar con mas personas. ",
            ],
          },
          {
            type: "text",
            bold: true,
            text: `Estudia con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://www.aprendemas.com/es/blog/images/2018/07/profesor_espanol.jpeg",
        href: "",
      },
      {
        title: "Italiano",
        description: [
          {
            type: "text",
            text: "El italiano es la lengua de Dante, Petrarca y Boccaccio, los tres grandes escritores italianos, pero además es el idioma del arte, la historia, como de las ciencias, la gastronomía y el amor, el italiano deriva del latín, como otras lenguas romances como el español, catalán, portugués, francés y rumano y otras más. ",
            image: {
              position: "left",
              src: "https://womenaliaimages.blob.core.windows.net/womenaliathumbnails/28686b9e3a29c24dc6c32aeec9b80aca5DB323/28686b9e3a29c24dc6c32aeec9b80aca5DB323_xl.png",
            },
          },
          {
            type: "subtitle",
            text: "Porque es el idioma del arte ",
          },

          {
            type: "text",
            text: `El idioma italiano es uno de los idiomas oficiales de la Unión Europea, con lo que aprender italiano te abrirá las puertas a muchos organismos internacionales, y también la posibilidad de trabajar en diferentes sectores el turismo, la industria automovilística y la moda asi mismo a nivel educativo.  `,
            image: {
              position: "right",
              src: "https://www.superprof.co/blog/wp-content/uploads/2019/08/Parli-Italiano-4.png",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Estudia con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "data:image/jpeg;base64,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",
        href: "",
      },
      {
        title: "Frances",
        description: [
          {
            type: "text",
            text: `Es la cuarta lengua más hablada en el mundo, el francés es idioma oficial de muchos organismos internacionales como la Cruz Roja, la ONU, la Unesco, el FMI y la Unión Europea. Además las tres ciudades con sedes de instituciones europeas son francófonas: Luxemburgo, Bruselas y Estrasburgo.  `,
            image: {
              position: "left",
              src: "https://www.mueroporviajar.com/wp-content/uploads/2015/10/12828114_s-e1563560606315.jpg",
            },
          },
          {
            type: "subtitle",
            text: "PORQUE HABLAR FRANCES? ",
          },
          {
            type: "paragraph",
            paragraph: [
              "Es una lengua analítica que estructura el pensamiento. ",
              "Desarrolla el espíritu crítico, lo cual es muy útil en las discusiones o en las negociaciones.  ",
              "Es una lengua para aprender otras lenguas. Aprender francés ayuda a aprender otras lenguas, en particular lenguas latinas (español, italiano, portugués o rumano). ",
            ],
            image: {
              position: "right",
              src: "https://viajerosinspirandoviajeros.com/wp-content/uploads/2018/09/hablar-frances-extranjero-aprender-idioma-frases-significado-pronunciacion.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Estudia con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://tecnicasparadocentes.com/wp-content/uploads/2020/11/profesora-frances.jpg",
        href: "",
      },
      {
        title: "Portugues",
        description: [
          {
            type: "text",
            text: `El idioma portugués forma parte de las llamadas lenguas romances, al igual que el francés y el español. Estas son denominadas de esta forma debido a que surgieron del latín vulgar y evolucionaron a través de los siglos para transformarse en los idiomas que hoy conocemos.  `,
            image: {
              position: "left",
              src: "https://static.portugues.com.br/2020/09/portugues.jpg",
            },
          },
          {
            type: "subtitle",
            text: "PORQUE HABLAR PORTUGUES?",
          },
          {
            type: "paragraph",
            paragraph: [
              "Una razón que siempre debes tener en cuenta es que, al aprender un idioma nuevo, obtendrás muchos beneficios para el rendimiento de tu mente, tanto en la memoria como en el desarrollo cognitivo.  ",
              "Apredes habilidades personales que te ayudan a desenvolverte socialmente. ",
            ],
            image: {
              position: "right",
              src: "https://www.vortexmag.net/wp-content/uploads/2021/05/iStock-509370646-portugues-min.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Estudia con maestros certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://www.compartirpalabramaestra.org/sites/default/files/styles/articulos/public/field/image/de-donde-viene-el-portugues.jpg?itok=B4fZI6zb",
        href: "",
      },
    ],
  }),
  components: { ListLanguage },
};
</script>

<style>
</style>