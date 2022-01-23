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
              "Puedes estudiar en el extranjero Estudiar en el extranjero tiene muchas ventajas, pero ¿cómo se relaciona con hablar inglés? Cuando hablamos de licenciaturas y posgrados en el extranjero, a veces tendemos a pensar en universidades e institutos estadounidenses y británicos, sin embargo, y a pesar de que hablar inglés efectivamente te abre sus puertas, también puedes conseguir oportunidades en escuelas de otros países o regiones de habla no inglesa.",
              "Mejoras tus oportunidades laborales ¿Sabías que 25% de trabajos requieren de personas que hablen inglés para interactuar con personas de otros países? Así lo asegura una encuesta realizada por Reuters. Pero, ¿por qué inglés y no otro idioma? Bueno, porque más de 375 millones de personas hablan inglés para negocios aunque este no sea su idioma materno.",
            ],
          },
          {
            type: "list",
            list: [
              `Te da acceso a miles de documentos 

La mayor parte de los contenidos en internet son en inglés. Estamos hablando de alrededor de un 25.2% , respecto al casi 8% que hay en español. A pesar de que el contenido escrito puede traducirse desde el navegador, el resultado no es el mejor en cuanto a gramática. `,
              `Fortalece tu cerebro 

Esto es difícil de comprender hasta que no lo experimentas por ti mismo, pero al dominar otra lengua, tu cerebro trabaja de forma distinta. Diversos estudios han comprobado que el cerebro bilingüe es capaz de concentrarse mejor, aprender con mayor facilidad y dedicarse a varias tareas a la vez. `,
              `Te ayuda a empatizar 

Aprender una lengua es conocer otra cultura. Esa es otra de las ventajas de saber inglés más destacadas porque ayuda al entendimiento, la aceptación y el respeto de la diversidad del mundo`,

              `Tienes más opciones de turismo 

Si bien puedes viajar a cualquier parte del mundo sin obligación de saber inglés o la lengua local, hablar inglés te facilita las cosas, empezando por los vuelos y los aeropuertos. `,
              `El mayor beneficio de hablar inglés: cumplir tus sueños`,
            ],
            image: {
              src: "https://www.buscouniversidad.com.ar/orientacion/wp-content/uploads/2021/04/No-tendr%C3%A1s-que-viajar.png",
            },
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
            text: `Podrás trabajar en un país que no deja de innovar. 

Según el Índice Mundial de Innovación, China se coloca entre las 20 primeras economías innovadoras del mundo, ocupando el puesto 17. 

El Chino Mandarín es la segunda lengua en muchos países asiáticos. 

Como en China, este idioma se habla también en otros países como Taiwán, Birmania, Camboya, Filipinas, Indonesia, Malasia, Singapur, Tailandia. Por lo que, si te surge una oportunidad de trabajo allí, podrás adaptarte mucho más rápido. 

 

Te convierte en un candidato muy atractivo para las empresas que trabajan con China. 

La burocracia, las relaciones entre socios y clientes, o el desarrollo de una correcta política de recursos humanos hacen muy necesario el conocimiento del chino mandarín para el éxito de cualquier empresa que trabaja con China. 

Es el idioma más hablado del planeta. 

El chino mandarín es el idioma más hablado en el mundo. Lo hablan más de 1000 millones de personas nativas. `,

            image: {
              position: "left",
              src: "https://larepublica.pe/resizer/RYDoBjoBA3hDeYMtbZ16JRXhR6A=/1250x735/top/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/WFMQ665CZZGBPFE4OS27NUFRKM.jpg",
            },
          },
          {
            type: "text",
            text: `La población china es la principal consumidora del sector de lujo. 

Según un estudio de Nielsen, 350 millones de chinos son potenciales clientes de lujo. De hecho, los millennials chinos son, según el último informe de consumo de Bain & Co los que más gastan en productos de lujo del mundo. Así que si quieres dedicarte al sector de moda y lujo, ya sabes! 

Amplía tu agenda de contactos 

China tiene la mayor población del mundo con aproximadamente 1,386 miles de millones (2017). Así pues, aprender chino mandarín puede darte acceso a comunicarte con mucha más gente 

Ejercita tu mente y trabaja mejor 

Según diferentes estudios, está comprobado que aprender chino mandarín nos permite trabajar a mayor profundidad, ya que ejercitamos los dos hemisferios del cerebro. 

El mayor beneficio de hablar Mandarin: “cumplir tus sueños” `,
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
            type: "subtitle",
            text: "PORQUE APRENDER ESPAÑOL? ",
          },
          {
            type: "text",
            text: `Es una de las lenguas más habladas. \n

Se estima que el español es la lengua materna de más de 400 millones de personas en todo el mundo, lo que equivale a aproximadamente el seis por ciento de la población mundial. Por este motivo, si nos basamos en el número de hablantes nativos, el español es oficialmente la segunda lengua más hablada, posicionándose por delante del inglés. 

 

Mejorará tus perspectivas de empleo.

En el mercado mundial actual, el conocimiento de un segundo idioma puede ser un activo tanto para las empresas como para los empleados. Las empresas siempre están interesadas en contar con trabajadores que puedan ayudarles con el comercio internacional, y el español es especialmente valioso en la situación actual. `,

            image: {
              position: "left",
              src: "https://www.salminter.com/blog/wp-content/uploads/2019/07/260.jpg",
            },
          },
          {
            type: "text",
            image: {
              position: "right",
              src: "https://www.salminter.com/blog/wp-content/uploads/2016/01/123.jpg",
            },
            text: `Disfrutarás más de tus viajes .

Viajar es una de las experiencias más enriquecedoras que puedas tener, pero la experiencia será mucho mejor si hablas español. 

Podrías trabajar o estudiar en el extranjero .

Viajar por placer es apasionante, pero aprender español también te abre la posibilidad de trabajar en un país de habla hispana o de estudiar en una institución académica con sede española. Salir de tu zona de confort y pasar largas temporadas en un país extranjero puede ayudarte a que te desarrolles profesional y personalmente. 

Puede mejorar tu dominio de la lengua materna .

Lo creas o no, los estudios han demostrado que aprender un segundo idioma puede hacer que el estudiante mejore el dominio de su lengua materna. Si lo piensas un poco, esto tiene mucho sentido, ya que aprender un segundo idioma requiere que la persona reflexione sobre la teoría linguística, o ‘las reglas’. 

 

Fortalece tu cerebro.

Esto es difícil de comprender hasta que no lo experimentas por ti mismo, pero al dominar otra lengua, tu cerebro trabaja de forma distinta. Diversos estudios han comprobado que el cerebro bilingüe es capaz de concentrarse mejor, aprender con mayor facilidad y dedicarse a varias tareas a la vez. 

El mayor beneficio de hablar Español es“cumplir tus sueños” `,
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
            type: "subtitle",
            text: "Porque es el idioma del arte ",
          },
          {
            type: "text",
            text: `El italiano es la lengua de Dante, Petrarca y Boccaccio, los tres grandes escritores italianos, pero además es el idioma del arte, la historia, como de las ciencias, la gastronomía y el amor. Las mujeres italianas son conocidas por su belleza y los hombres italianos por su masculinidad, hablar italiano te dará muchas más oportunidades en el amor, si lo que buscas es conocer a tu media naranja en Italia. 

Para trabajar.

El idioma italiano es uno de los idiomas oficiales de la Unión Europea, con lo que aprender italiano te abrirá las puertas a muchos organismos internacionales, y también la posibilidad de trabajar en diferentes empresas italiana tan famosas como: FIAT, Alitalia, Pirelli, Olivetti, Ducatti o Mediaset. Una economía enfocada principalmente a tres sectores, el turismo, la industria automovilística y la moda. Así que si trabajas o quieres trabajar en alguno de esos sectores, necesitarás en algún momento de tu vida tener nociones de italiano. `,

            image: {
              position: "left",
              src: "https://womenaliaimages.blob.core.windows.net/womenaliathumbnails/28686b9e3a29c24dc6c32aeec9b80aca5DB323/28686b9e3a29c24dc6c32aeec9b80aca5DB323_xl.png",
            },
          },
          {
            type: "text",
            text: `Para ir de vacaciones.

Todos tenemos algún conocimiento del Imperio Romano o del Renacimiento Italiano, o bien sea a través de las películas y series que hemos visto, o bien por el estudio de la historia en el colegio, instituto o universidad. Es por ello, que en nuestras retinas se guardan monumentos tan fastuosos como el Coliseo, la Torre de Pisa, el Vaticano o la ciudad de Venecia. Nunca es mal momento para escaparse a un país que recibe millones de visitantes al año y conocer sus mejores lugares. Visitar los encantos de Italia hablando italiano será mucho más enriquecedor. 

 

Por el mundo de la moda, el diseño y el arte. 

Si te gusta el diseño,en todas sus vertientes, Italia es tu país. No sólo hablamos de moda, que también, pero el diseño abarca marcas de coches como Fiat o el interiorismo como Magis. Ciudades como Milán o Roma son los máximos exponentes de esta faceta de los italianos, donde además son centros industriales de la moda "made in Italy" y el "prêt-à-porter", competiendo mano a mano con los franceses. 

Para aprender mas sobre su la gastronomia, cine, musica Italiana y disfrutarla en su maximo esplendor  `,
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
            type: "subtitle",
            text: "PORQUE HABLAR FRANCES? ",
          },
          {
            type: "text",
            text: `Es la cuarta lengua más hablada en el Mundo. 

Más de 200 millones de personas hablan francés en los 5 continentes, 68 estados y gobiernos se declaran francófonos por todo el mundo y en 33 países el francés es su idioma oficial. 

Tienes mayor acceso al mercado laboral. 

Aprender francés te ayudará a mejorar tus oportunidades laborales y desarrollar tu carrera profesional. `,
            image: {
              position: "left",
              src: "https://www.mueroporviajar.com/wp-content/uploads/2015/10/12828114_s-e1563560606315.jpg",
            },
          },
          {
            type: "text",
            text: `Es la lengua de las Relaciones Internacionales. 

Te abre las puertas del Mundo. El francés es idioma oficial de muchos organismos internacionales como la Cruz Roja, la ONU, la Unesco, el FMI, o la Unión Europea. Además las tres ciudades con sedes de instituciones europeas son francófonas: Luxemburgo, Bruselas y Estrasburgo. Así que si quieres hacer carrera diplomática o de relaciones públicas, también te será útil. 

La lengua del amor. 

Aprender francés conlleva, primero, el placer de aprender una lengua bella, rica y melódica, a menudo llamada la lengua del amor. El francés es también una lengua analítica que estructura el pensamiento y desarrolla el espíritu crítico, lo cual es muy útil en las discusiones o en las negociaciones. 

Una lengua para aprender otras lenguas. 

Aprender francés ayuda a aprender otras lenguas, en particular lenguas latinas (español, italiano, portugués o rumano), pero también inglés, ya que el francés ha proporcionado más de un 50% del vocabulario inglés actual. 

El mayor beneficio de hablar Frances es“cumplir tus sueños” `,
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
            type: "subtitle",
            text: "PORQUE HABLAR PORTUGUES?",
          },
          {
            type: "text",
            text: `Destaca entre la multitud.

Aunque cada vez más personas decide aprender un segundo o tercer idioma, pocos eligen el portugués, a pesar de ser un idioma muy hablado. Si lo dominas, contarás con una destreza única que te distinguirá de los demás. 

. Es relativamente fácil de aprende. 

Obviamente, aprender cualquier idioma requiere de mucho trabajo, pero el portugués es relativamente fácil de aprender. No hace falta aprender un nuevo alfabeto, como habría que hacer, por ejemplo, con el ruso, el japonés o el árabe. Y, si ya hablas español o francés, el portugués comparte mucho vocabulario con esos dos idiomas. También tiene una estructura similar a la del inglés. 

Es una puerta de acceso a un tercer (y a un cuarto) idioma 

Por otro lado, aprender portugués como segundo idioma hace que sea más fácil aprender el resto de las lenguas romances. Se puede seguir con el italiano, el francés o incluso el rumano. Al ser idiomas que también evolucionaron a partir del latín, su aprendizaje resulta más sencillo. `,
            image: {
              position: "left",
              src: "https://static.portugues.com.br/2020/09/portugues.jpg",
            },
          },
          {
            type: "text",
            text: `Es uno de los idiomas más hablados en Internet. 

El portugués es el quinto idioma más utilizado en Internet, ya que los usuarios de habla portuguesa y las páginas escritas en portugués están aumentando rápidamente. Hay muchas oportunidades en el mundo digital para los aspirantes a creadores de contenido y escritores que sean capaces de expresarse perfectamente en portugués; además de amplias audiencias (y empleadores) que demandan esos contenidos, sobre todo en Brasil. 

Para que tu currículum sobresalga. 

Emociona a tu futuro empleador con un currículum que incorpore el dominio de un idioma poco habitual, aunque demandado, como el portugués. Tu dominio del portugués demostrará de inmediato que te entusiasma aprender y asumir riesgos. A las empresas de una mayoría de sectores les encantará que puedas 

Para hacer amigos. 

El aprendizaje de un idioma es una experiencia inmersiva, así que también lograrás hacer amigos rápido. Tus compañeros de clase o maestros se convertiran en tu familia durante la experiencia. `,
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