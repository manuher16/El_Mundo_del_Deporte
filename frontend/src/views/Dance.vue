<template>
  <v-card flat>
    <v-card-title>
      <v-subheading> Bailes </v-subheading>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col md="3">
          <v-img
            src="https://p4.wallpaperbetter.com/wallpaper/538/775/721/ballet-dance-dancing-drama-wallpaper-preview.jpg"
            contian
          ></v-img>
        </v-col>
        <v-col>
          El baile es una forma de expresión que puede practicarse a cualquier
          edad. Se trata de una de la mejor manera de mantenerse en forma,
          facilitar el movimiento muscular sin darse cuenta y disfrutar de una
          terapia eficaz tanto para el cuerpo como para el alma.
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-title>Beneficios de la danza </v-card-title>
    <v-card-text>
      <v-row>
        <v-col>
          Estimula la práctica de ejercicio físico
          <ul>
            <li>Provoca buen humor</li>
            <li>Combate el estreñimiento</li>
            <li>Favorece el riego sanguíneo</li>
            <li>Mejora el sistema cardiovascular</li>
            <li>Produce bienestar en cuerpo y mente</li>
            <li>Favorece la comunicación y expresión</li>
            <li>Fortalecen los pies, piernas y brazos.</li>
            <li>Favorece la relación con otras personas</li>
            <li>Es válida para personas de cualquier edad</li>
            <li>Ayuda a mantener una correcta postura al caminar</li>
            <li>
              La variedad de coreografías estimula la creatividad y flexibilidad
            </li>
            <li>
              Es recomendable para mujeres en la etapa de menopausia debido a
              sus beneficios para los huesos
            </li>
            <li>
              Es recomendable para mujeres con dolencias de espalda o en la zona
              lumbar
            </li>
          </ul>
        </v-col>
        <v-col md="4">
          <v-img
            src="https://cdn.blackpoolgrand.co.uk/app/uploads/2018/01/Russian-Ballet-Swan-Lake.jpg"
            contian
          />
        </v-col>
      </v-row>
      <v-card-text>
        A la hora de elegir un baile es muy importante tener en cuenta la
        opinión del niño o niña. En caso contrario cabe la posibilidad de que no
        quiera practicarlo y la búsqueda haya sido en bano. La mejor motivación
        es la de hacer algo que nos guste y eso también funciona con los peques.
        Deseas practicar otro baile o danza, que no se encuentra dentro de
        nuestras categorias, contactanos para solicitar lo que necesites.
      </v-card-text>
    </v-card-text>
    <v-divider />
    <v-card-text>
      <ListDances :items="items" />
    </v-card-text>
  </v-card>
</template>

<script>
import ListDances from "../components/Home/ListServices";
export default {
  data: () => ({
    items: [
      {
        title: "Ballet",
        description: [
          {
            type: "text",
            text: `El ballet clásico es una forma de danza cuyos movimientos se basan en el control total y absoluto del cuerpo. 

Los expertos recomiendan iniciar con esta danza clásica a los tres o cuatro años en unos niveles bajos de dificultad, para posteriormente ir aumentándola. En esta etapa pueden reforzar su desarrollo psicomotor, de modo que van adquiriendo equilibrio y coordinación. `,
            image: {
              position: "left",
              src: "https://news.microsoft.com/wp-content/uploads/prod/sites/41/2020/08/141112_AustralianBallet7293.jpg",
            },
          },
          { type: "subtitle", text: "Beneficios del ballet " },
          {
            type: "text",
            text: "El ballet, además de arte, es un deporte para todos que cuenta con múltiples y positivos beneficios tanto físicos como psíquicos; algunos de estos son: ",
          },
          {
            type: "list",
            image: {
              src: "https://img.remediosdigitales.com/7f360f/pexels-cottonbro-6719014/450_1000.jpeg",
            },
            list: [
              "Ayuda al desarrollo de la psicomotricidad, a la agilidad y coordinación de los movimientos.",
              "Desarrolla la expresión corporal, el oído y la memoria. ",
              "Favorece la concentración y enseña el valor de la disciplina. ",
              "El baile estimula la circulación sanguínea y el sistema respiratorio. ",
              "Contribuye a corregir malas posturas.  ",
              "Ayuda a ganar elasticidad. ",
              "Colabora en el desarrollo muscular y la forma de la columna. ",
              "Permite mejorar el equilibrio, los reflejos y la agilidad de movimientos",
              "Aumenta la resistencia física.  ",
              "Desarrolla el ritmo. ",
            ],
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://static3.mujerhoy.com/www/multimedia/201812/12/media/cortadas/ballet-kbmB-U601860635051FtH-624x467@MujerHoy.jpg",
        href: "",
      },
      {
        title: "Comtemporaneo",
        description: [
          {
            type: "text",
            image: {
              position: "left",
              src: "https://tiposdebailes.net/wp-content/uploads/2019/09/danza-contemporanea-baile.jpg",
            },
            text: `Mientras el ballet clásico apostaba por las formas estilizadas y convencionales, la danza contemporánea irrumpió con formas más agresivas, que representaran tanto lo hermoso como lo feo de la vida. Fue en contra de los cánones tradicionales, al no requerir de un atuendo homogéneo, o incorporar superficies y ambientes diferentes a la coreografía.`,
          },
          { type: "subtitle", text: "Beneficios de la danza contenporanea " },
          {
            type: "list",
            list: [
              "Armoniza tu cuerpo, mente y alma. ",
              "Ayuda a expresar a tu yo verdadero. ",
              "Fortalece la autoestima.",
              "Mejora tu relación con tu cuerpo. ",
              "Libera el estrés y relaja el cuerpo.",
              "Mejora la calidad de tu respiración. ",
              "Mejora la postura. ",
              "Mejora tu salud física. ",
            ],
            image: {
              src: "https://www.cenart.gob.mx/wp-content/uploads/2017/06/tempograduac-1030x579.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Danza-Contemporanea-cuatro.jpg/375px-Danza-Contemporanea-cuatro.jpg",
        href: "",
      },
      {
        title: "Urbano",
        description: [
          {
            type: "text",
            text: "El baile urbano o baile callejero (en inglés, urban dance o street dance) es un estilo de baile, independientemente del país de origen, el cual evolucionó fuera de los estudios de baile en cualquier espacio abierto disponible como calles, fiestas de baile, fiestas de barrio, parques, patios escolares, raves y clubes ",
            image: {
              position: "left",
              src: "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2015/04/29/221955.jpg",
            },
          },
          { type: "subtitle", text: "Beneficios de la danza urbana " },
          {
            type: "text",
            image: {
              position: "right",
              src: "https://yuupiyu.com/wp-content/uploads/2019/03/Baile-Urbano.jpg",
            },
            text: `Con este tipo de baile se desarrollan  

la coordinación  

 el sentido del ritmo, mejora la capacidad cardiovascular, 

 la agilidad de movimientos,  

el equilibrio y la flexibilidad. `,
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://dancecommunitylaura.files.wordpress.com/2018/11/jc3b2jpjopoj.jpg",
        href: "",
      },
      {
        title: "Brake Dance",
        description: [
          {
            type: "text",
            image: {
              src: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/10/11/8e9ca35b-f25c-426a-bb40-338feabff9cb/world-urban-games-2019-shigekix-freeze",
              position: "left",
            },
            text: "Es la danza hip hop por excelencia, uno de los elementos originales de esta cultura. También llamado b-boying, este estilo de baile comienza en los populares barrios del Bronx, Queens y Brooklyn . Se caracteriza por el trabajo de suelo, los movimientos acrobáticos, o el uso de freezes (quedarse ‘congelado’ en un movimiento durante unos segundos) ",
          },
          {
            type: "subtitle",
            text: "Beneficios del breakdance",
          },
          {
            type: "list",
            image: {
              src: "https://www.guatemala.com/fotos/201801/break-885x500.jpg",
              position: "right",
            },
            list: [
              "Desarrollo de de la creatividad y la imaginación",
              "Mejora la autoestima y la expresión. ",
              "Aumento de la confianza en uno mismo. ",
              "Mejora la coordinacion y el equilibrio ",
              "Aumento de la fuerza y la flexibilidad ",
            ],
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://static1.burgosconecta.es/www/multimedia/201909/25/media/cortadas/break-dance-kkBE-U90233957265k6E-1248x770@RC.jpg",
        href: "",
      },
      {
        title: "Popping",
        description: [
          {
            type: "text",
            text: "El popping es un estilo de baile callejero surgido  en el que se contraen los musculos del cuerpo creando un efecto «robótico». Esto se hace continuamente al ritmo de una canción y en combinación con diversos movimientos y posturas. ",
            image: {
              position: "left",
              src: "http://mywaydance.com/media/mce_filebrowser/2014/03/11/popping-teacher1_1.jpg",
            },
          },
          {
            type: "subtitle",
            text: "Beneficios de la danza popping ",
          },
          {
            type: "text",
            text: `Aprender su práctica y la forma de elaborar nuevas coreografías 

Los efectos visuales de este estilo de baile llaman mucho la atención. esto aumentará tu capacidad para aprender nuevas coreografías y podrás hacerlo de una manera más rápida y mejor ejecutada. `,
          },
          {
            type: "list",
            list: [
              "Expresarte a través del baile ",
              "Mejorará tu forma física ",
              "Mejorará tu coordinación ",
              "Mejorará tu coordinación ",
            ],
            image: {
              src: "https://www.ecured.cu/images/6/6c/Baile_Popping_01.jpeg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://conluzpropia.net/wp-content/uploads/2016/11/14-bailar-popping.jpg",
        href: "",
      },
      {
        title: "Afro Dance",
        description: [
          {
            type: "text",
            text: `Corriente artística resultante del encuentro de las danzas de la África negra con el mundo occidental, la danza africana agrupa en su seno todas las danzas tradicionales, así como las danzas de raíces africanas derivadas de este encuentro (afro-jazz, danza de expresión africana, danza afro-contemporánea, danza moderna `,
            image: {
              position: "left",
              src: "https://www.ootlah.com/wp-content/uploads/2020/10/maxresdefault-1.jpg",
            },
          },
          { type: "subtitle", text: "Beneficios de la danza afro dance " },
          {
            type: "list",
            list: [
              "Ayuda a quemar calorías",
              "Corrige malas posturas.",
              "Aumenta la movilidad de la columna vertebral.",
              "Ejercita todo el cuerpo.",
              "Mejora la autoestima. ",
              "Fortalece la confianza.",
              "Libera el estrés. ",
              "Mejora la coordinación del cuerpo. ",
              "Es divertida.",
              "Mejora la flexibilidad.",
              "Oxigena. ",
            ],
            image: {
              src: "https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/153228/0a78e6ad73019608ead88944c0c3c24fad8fa0cd.XL2.jpg",
            },
            text: `La danza afro dance es una danza que se caracteriza por su estilo de movimiento y su ritmo.`,
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/153228/0a78e6ad73019608ead88944c0c3c24fad8fa0cd.XL2.jpg",
        href: "",
      },
      {
        title: "K Pop",
        description: [
          {
            type: "text",
            text: `K-POP, abreviación de Korean popular music, en inglés o música popular coreana en español. Es un género musical que incluye diversos estilos como la música dance electrónica, hip hop, rap, rock, R&B, etc. y que se refiere específicamente a la música popular de Corea del Sur. 

Las principales canciones de los artistas están convencionalmente acompañadas por una coreografía, que a menudo incluye un movimiento clave del baile, conocido como el “punto”, para que coincida con las características o la letra de la canción. `,
            image: {
              position: "left",
              src: "https://lh3.googleusercontent.com/OGz7dDnqfFBRukOCasaL016OhzMEEbdzpqcLuW8vVZk5M-Yck0mPPiqYNX7wHfE7MrgMGOF15ptE2qhhfxIDyI3lWCeP5kfo=w1200-h630-rj-pp-e365",
            },
          },
          { type: "subtitle", text: "BENEFICIOS DE EL BAILE K POP " },
          {
            type: "list",
            list: [
              "Combate el Estrés ",
              "Mejora la Memoria ",
              "Ayuda al Corazón ",
              "Flexibilidad, Agilidad y Coordinación ",
              "Te Ayuda en la Perdida de Peso ",
            ],
            image: {
              src: "https://thesmartlocal.com/korea/wp-content/uploads/2020/07/K-pop-Dance-Cover-Image-scaled.jpg",
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
        title: "Danza Folklorica",
        description: [
          {
            type: "text",
            text: `El folklore o folclore hace referencia a las creencias, prácticas y costumbres que son tradicionales de un pueblo o cultura. Esto incluye a los relatos, las artesanías, la música y los bailes, por ejemplo. La danza, por otra parte, es la acción de bailar, es decir, la ejecución de movimiento al ritmo de la música. 

Estas dos definiciones nos permiten acercarnos al concepto de danza folklórica, que son los bailes típicos y tradicionales de una cultura. La danza folklórica suele realizarse por tradición (no es un arte innovador) y puede ser bailada por cualquier hombre y mujer (no es exclusividad de los bailarines profesionales, aunque pueden existen grupos profesionales de danza folklórica). `,
            image: {
              position: "left",
              src: "https://i.pinimg.com/originals/31/3b/a3/313ba3a3e1af3576b5a862f1727f9e0e.jpg ",
            },
          },
          {
            type: "subtitle",
            text: "Beneficios de la danza folklórica",
          },
          {
            type: "list",
            list: [
              "Favorece el desarrollo físico y emocional. ",
              "Contribuye a mantener la condición física. ",
              "Corrige anomalías de la postura. ",
              "Estimula la creatividad. ",
              "Impulsa la expresión corporal. ",
              "Da rigor y confianza.",
              "Fomenta la memorización con el aprendizaje de coreografías.",
              "Aprendes mas sobre la cultura de diferentes paises  ",
            ],
            image: {
              src: "https://i1.wp.com/www.marcahonduras.hn/wp-content/uploads/2020/07/baile-danza-folklorica-Honduras-7.jpg?resize=1024%2C576&ssl=1",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://www.cultura.gob.mx/recursos/sala_prensa/fotogaleria/foto_2_ballet_folklorico_imagenes_4_rene_nino.jpg",
        href: "",
      },
      {
        title: "Merengue",
        description: [
          {
            type: "text",
            text: `El merengue es uno de los bailes sociales el baile más accesibles dentro del repertorio de la música tropical. Tiene un ritmo fácil de seguir y sus pasos son sencillos. Casi siempre se baila en pareja, ya sea en una fiesta o en una discoteca. 

De fama internacional, el merengue es el baile y género musical oficial de la República Dominicana. Al igual que otros bailes tropicales como la salsa, el baile del merengue nace de la fusión entre lo africano y lo europeo. `,
            image: {
              position: "left",
              src: "https://www.larepublica.ec/wp-content/uploads/2016/12/Captura-de-pantalla-2016-12-23-a-las-18.27.09-678x381.png",
            },
          },
          { type: "subtitle", text: " BENEFICIOS DE PRACTICAR MERENGUE " },
          {
            type: "list",
            list: [
              "Previene la obesidad ",
              "Controla el azúcar y el colesterol ",
              "Mejora la memoria ",
              "Evita las enfermedades cardiovasculares ",
              "Reduce el estrés ",
              "Combate la depresión ",
              "Corrige la postura ",
              "Mayor flexibilidad ",
              "Mejora la autoestima ",
            ],
            image: {
              src: "https://i.ytimg.com/vi/LRIpkHuCagw/maxresdefault.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://conluzpropia.net/wp-content/uploads/2016/11/19-merengue.jpg",
        href: "",
      },
      {
        title: "Salsa",
        description: [
          {
            type: "text",
            image: {
              position: "left",
              src: "https://www.dondeir.com/wp-content/uploads/2016/08/concurso-de-baile-a.jpg",
            },
            text: `La salsa es uno de los bailes sociales latinos más populares. Se baila al ritmo de la música que lleva el mismo nombre. Es un baile de pareja, pero también se puede bailar en solo. Fue creada por puertorriqueños, cubanos y otros hispanoamericanos. Sus pasos tienen influencias africanas y europeas. `,
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTICAR SALSA " },
          {
            type: "list",
            list: [
              "Ayuda a mantener buena postura corporal al caminar y al estar parado tu equilibrio también será mejor. ",
              "Potencia la coordinación y equilibrio del cuerpo y y la mente. ",
              "Mejora tu condición física, quemas calorías y tonificarás tu cuerpo ya que pone en ritmo a tu corazón y reduce los niveles de colesterol. ",
              "Aumentará la seguridad y confianza en ti mismo y mejorará tu autoestima.",
              "Si tienes pareja compartirá una intimidad de los unirá más y si no tienes, seguro conocerás a una. ",
              "Incrementa la generación de Endorfinas por lo tanto aumenta tu vitalidad y te hace una persona más feliz. ",
            ],
            image: {
              src: "https://img.maspormas.com/2017/05/Bachata-P.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://elcomercio.pe/resizer/EgWldo399rx74fkHzeN3yh2tKGE=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/FHZWMNE2KVECVNVKBDCTQSYDWY.jpg",
        href: "",
      },
      {
        title: "Reggaeton",
        description: [
          {
            type: "text",
            text: `El reggaetón es un género musical que tiene sus orígenes en los años 90. Nace como fenómeno underground entre las barriadas rurales de Panamá y Puerto Rico, como una variante del reggae y el Hip-Hop en español, influenciado por ritmos latinos y tomando como base rítmica el danceHall reggae mejor conocido como dembow originario de Jamaica. 

Se lo asocia a una forma de bailar “sensual” y provocativa, con los cuerpos muy pegados, que a través de los movimientos de cintura y cadera generan lo que se llama perreo (doggy style). O sea, bailar reggaeton. `,
            image: {
              position: "left",
              src: "https://e.radio-grpp.io/medium/2016/07/13/220422_193234.jpg",
            },
          },
          { type: "subtitle", text: "Beneficios de bailar reggeton " },
          {
            type: "list",
            list: [
              "Libera el estres ",
              "Quema grasas ",
              "Mejora la actividad cardiovascular ",
              "Mejora la autoestima ",
              "Mejora la coordinación y equilibrio",
              "Fortalece la resistencia ",
              "Reduce la presión arterial y colesterol ",
            ],

            image: {
              src: "https://diariolibre.blob.core.windows.net.optimalcdn.com/images/binrepository/maxresdefault_13165077_20200205085234.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://www.lavoz.com.ar/resizer/_IrSx5TNh8zhM6_VzyO6HYty6jk=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GOJUBFGJFJE7BOAEHPRJIYST7A.jpg",
        href: "",
      },
      {
        title: "Punta",
        description: [
          {
            type: "text",
            text: `Si hay algo que nos identifica como hondureños es el baile que popularmente conocemos como punta. Esta danza de origen garífuna se ha extendido por toda Honduras y ha traspasado fronteras, esto se debe a los alegres ritmos que emanan de sus instrumentos musicales. Hay que destacar que por su rico valor cultural ha sido declarado Patrimonio de la Humanidad por la Unesco. `,
            image: {
              position: "left",
              src: "https://www.honduras.com/wp-content/uploads/2020/08/marca-pa%C3%ADs-Honduras-La-punta-baile-garifuna.jpg",
            },
          },
          { type: "subtitle", text: "Beneficios de bailar punta " },
          {
            type: "list",
            list: [
              "Mejora el sistema cardiovascular ",
              "Mejora la coordinacion y equilibrio ",
              "Reduce el estres ",
              "Impulsa la expresion corporal ",
              "Conecta con una danza de expresión cultural",
            ],
            image: {
              src: "https://wa-dani.com/wp-content/uploads/2017/09/punta-800x560.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://1.bp.blogspot.com/-KxUOjQJKvl8/VvHq7wz0DoI/AAAAAAAAFHQ/RwAi6EPBYFgRA4LLKU7ruXfpr-v16Cjww/s1600/maxresdefault%2B%25282%2529.jpg",
        href: "",
      },
      {
        title: "Bachata",
        description: [
          {
            type: "text",
            text: `La bachata es un género musical bailable originario de la República Dominicana, dentro de lo que se denomina folclore urbano. Está considerado como un derivado del bolero rítmico, con influencias de otros estilos como el son cubano y el merengue. `,
            image: {
              position: "left",
              src: "https://pasoapasolaspalmas.com/wp-content/uploads/2019/12/slider-3-low.jpg",
            },
          },
          {
            type: "subtitle",
            text: "Beneficios de bailar bachata ",
          },
          {
            type: "list",
            list: [
              "Aumentará tu autoestima ",
              "Mejorarás tu estado de ánimo ",
              "Previene el envejecimiento cerebral y aumenta la agilidad mental. ",
              "Estarás más sano y en forma consume muchas calorías",
              "Mejorará la salud de nuestro corazón",
            ],
            image: {
              src: "https://media.istockphoto.com/photos/young-woman-and-a-man-teaching-salsa-and-bachata-picture-id1168607558?k=20&m=1168607558&s=612x612&w=0&h=fdgfvAPcEwPp30uSSaFANmypiQPIcYER7oK3ta1wR0U=",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://www.larepublicaonline.com/wp-content/uploads/2019/12/5-5.jpg",
        href: "",
      },
      {
        title: "Samba",
        description: [
          {
            type: "text",
            image: {
              position: "left",
              src: "https://guiadelbuenvivir.com/Media/guiadelbuenvivir/dayvo/samba%20baile.jpg",
            },
            text: `Su nombre ya resulta evocador, suena a ritmo, a movimientos de cadera y a fiesta y en eso, precisamente, consiste su esencia. La samba es una danza de raíces africanas y fueron los esclavos negros los que la llevaron a Brasil, pero hablar de samba como icono, como principal representante, es hablar de Río de Janeiro.`,
          },
          { type: "subtitle", text: "Beneficios de bailar samba" },
          {
            type: "list",
            list: [
              "Ayuda a mantenernos más derechos y a aliviar tensiones del cuello, hombros y espalda",
              "Bailar samba desestresa, divierte, relaja, quita la ansiedad la depresión. ",
              "Ayuda a bajar de peso.",
              "Favorece el corazón.",
              "Mantiene los músculos fuertes.",
            ],
            image: {
              src: "https://pedroguillenhuayllasco.files.wordpress.com/2017/02/la-samba-emblemc3a1tica-identidad-del-brasil-pgh.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://www.lavoz.com.ar/resizer/b5Ht6kKeWhILykgWyPHJXeMZfGY=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/W7K435GPXFALPKGN3HWU6GEFBY.jpg",
        href: "",
      },
      {
        title: "Coreografias Para Compotencias",
        description: [
          {
            type: "text",
            text: `La coreografía (literalmente «escritura de la danza», también llamada composición), es el arte de crear estructuras en las que suceden movimientos. El término composición también puede referirse a la navegación o conexión de estas estructuras de movimientos. La estructura de movimientos puede ser considerada como la coreografía. `,
            image: {
              position: "left",
              src: "https://d2ihb3jisuaxvo.cloudfront.net/wp-content/uploads/2020/04/13171552/coreografias-videos-musicales-1024x585.jpg",
            },
          },
          { type: "subtitle", text: "Beneficios de bailar coreografias" },
          {
            type: "list",
            list: [
              "Se trabaja la coordinación. ",
              "Es un entrenamiento aeróbico. ",
              "Activa la circulación. ",
              "Reduce el estrés. ",
              "Da amplitud a los movimientos.",
              "Ayuda a tomar conciencia corporal respecto al espacio",
              "Reduce el colesterol.",
              "Previene la osteoporosis. ",
              "Favorece la flexibilidad. ",
              "Mejora la confianza y la autoestima",
              "Ayuda a liberar endorfinas.",
              "Contribuye a descubrir el ritmo en el cuerpo.",
              "Sirve como expresión corporal. ",
              "Favorece la extroversión ",
            ],
            image: {
              src: "https://www.noraemagazine.com/wp-content/uploads/2017/08/maxresdefault.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con coreografos concidos a nivel nacional e internacional. Contactanos para obtener más información.  `,
          },
        ],
        image:
          "https://www.sonica.mx/u/fotografias/m/2021/10/7/f608x342-11807_41530_0.jpg",
        href: "",
      },
    ],
  }),
  components: { ListDances },
};
</script>

<style>
</style>