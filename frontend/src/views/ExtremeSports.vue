<template>
  <v-card flat>
    <v-card-title>
      <v-subheading> Deportes Extremos </v-subheading>
    </v-card-title>
    <v-card-text>
      A la hora de elegir un deporte extremo es muy importante tener en cuenta
      la opinión del niño o niña. En caso contrario cabe la posibilidad de que
      no quiera practicarlo y la búsqueda haya sido en bano. La mejor motivación
      es la de hacer algo que nos guste y eso también funciona con los peques.
    </v-card-text>
    <v-divider />
    <v-card-text>
      <ListExtremeSports :items="items" />
    </v-card-text>
  </v-card>
</template>

<script>
import ListExtremeSports from "../components/Home/ListServices.vue";
export default {
  data: () => ({
    items: [
      {
        title: "Ciclismo de carretera",
        description: [
          {
            type: "text",
            text: `El ciclismo de ruta, también llamado ciclismo de carretera, es la forma más común y fácil de salir a andar en bicicleta. Es apto para prácticamente cualquier usuario, ya seas principiante o lleves años sobre el sillín… 

Y es que tú mismo puedes marcarte el ritmo, duración y la intensidad de las sesiones. Así como elegir rutas de mayor o menor dificultad. 

No importa si lo haces solo o acompañado, es una forma increíble de estar sano y pasarlo bien. `,
            image: {
              position: "left",
              src: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/08/12/5f16049f94d5a.jpeg",
            },
          },
          { type: "subtitle", text: "BENEFICIOS DEL CICLISMO DE CARRETERA " },
          {
            type: "list",
            image: {
              src: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/12/28/3b1ee7fd-c240-4a2d-814f-9045e1d972af/entrenamiento-ciclismo-carretera",
            },
            list: [
              "Mejora el tono muscular",
              "El ciclismo ayuda a la reducción de la celulitis. ",
              "Mejora el sistema circulatorio ",
              "Con el ciclismo se refuerzan los ligamentos y los tendones. ",
              "Aumenta la capacidad pulmonar",
              "Aumenta el tamaño del corazón y su potencia ",
              "Con el ciclismo eliminamos grasas y con el sudor toxinas.",
              "El ciclismo disminuye la posibilidad de sufrir problemas en la columna o hernias.",
              "Mejora las articulaciones. ",
              "Aumenta el calcio de los huesos. ",
              "La práctica del ciclismo retrasa el envejecimiento.",
            ],
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
        title: "Ciclismo de Montaña",
        description: [
          {
            type: "text",
            text: `El ciclismo de montaña se desarrolla sobre una bicicleta de montaña, o también BTT (Bicicleta Todo Terreno) encima de terrenos montañosos. 

Cabe mencionar que, además se tratan de verdaderos ejercicios de resistencia en los que se emplea el término a los demás terrenos. Entre los terrenos diversos por los que se lleva a cabo esta prueba figuran: arena, lodo, tierra, arroyos, etc. y no sólo eso, sino además, obstáculos como: huecos, piedras, ramas, troncos, acantilados, varias pendientes, etc. `,
            image: {
              position: "left",
              src: "https://hubsports.mx/wp-content/uploads/2020/02/ciclismo-montana-equipo.jpg",
            },
          },
          {
            type: "subtitle",
            text: "BENEFICIOS DEL CICLISMO DE MONTAÑA ",
          },
          {
            type: "list",
            list: [
              "Mejora el tono muscular ",
              "El ciclismo ayuda a la reducción de la celulitis. ",
              "Mejora el sistema circulatorio ",
              "Con el ciclismo se refuerzan los ligamentos y los tendones",
              "Aumenta la capacidad pulmonar ",
              "Aumenta el tamaño del corazón y su potencia ",
              "El ciclismo disminuye la posibilidad de sufrir problemas en la columna o hernias.  ",
              "Mejora las articulaciones. ",
              "Aumenta el calcio de los huesos. ",
              "La práctica del ciclismo retrasa el envejecimiento. ",
            ],
            image: {
              src: "https://elsouvenir.com/wp-content/uploads/2020/05/Ciclismo-de-montana-en-Baja-California-Sur.-Foto-Rancho-Cacachilas.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://images.pexels.com/photos/90454/pexels-photo-90454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        href: "",
      },
      {
        title: "Senderismo",
        description: [
          {
            type: "text",
            text: `El senderismo es un deporte que puede practicar casi todo el mundo, ya que existen rutas para todos los niveles: desde principiantes con escasísima preparación física hasta expertos con recorridos sinuosos, de gran longitud y por terrenos que presentan ciertas dificultades. 

Lo que busca el senderismo es intentar acercar a las personas al medio natural y al conocimiento de la zona a través del patrimonio y los componentes etnográficos y culturales tradicionales, utilizando preponderantemente el método habitual de vías de comunicación, tales como cañadas reales, caminos vecinales y senderos. `,
            image: {
              position: "left",
              src: "https://estaticos.muyinteresante.es/uploads/images/gallery/5f2a75795cafe8053b39bcfc/senderismo-redes.jpg",
            },
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTICAR SENDERISMO " },
          {
            type: "list",
            list: [
              "Mejora de la salud cardiovascular ",
              " Reduce el colesterol malo. ",
              "Incremento de la fuerza general y tonificación muscular del tren inferior. ",
              "Aumento de la densidad ósea",
              "Incrementa el optimismo y reduce la posibilidad de depresiones. ",
              "Mejora la calidad del sueño. ",
              "Control del peso: el senderismo quema unas 400 calorías por hora en una persona de peso medio. ",
            ],
            image: {
              src: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/11/senderismo.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://images.pexels.com/photos/4763005/pexels-photo-4763005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        href: "",
      },
      {
        title: "Montañismo",
        description: [
          {
            type: "text",
            text: `El montañismo es el deporte de caminar y hacer excursiones por las montañas, el montañismo tiene como motivación el destino, la montaña, y por rutas de más dificultad. Si el objetivo del montañero es llegar a la cima de la montaña, podemos definirlo como ascensión, y si ésta requiere técnicas de escalada, lo llamamos alpinismo.  

Montañismo no es solo un deporte, es una actividad recreativa en el que intervienen la exploración del entorno y el amor por la naturaleza. `,
            image: {
              position: "left",
              src: "https://journey.app/blog/wp-content/uploads/2019/02/montanismo-con-poco-presupuesto-journey-app.jpg",
            },
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTICAR MONTAÑISMO " },
          {
            type: "list",
            list: [
              "Mejora de la salud cardiovascular y la circulación. ",
              "Reduce la artritis, el dolor en las articulaciones y las rodillas. ",
              "Aumenta la densidad ósea, que puede aliviar la salud de los huesos y disminuir el riesgo de osteoporosis. ",
              "Fortalece los músculos. ",
              "Disminuye los sentimientos de depresión y aislamiento. ",
              "Aumenta la función cognitiva. ",
              "Mejora la memoria. ",
              "Favorece el tiempo de reacción. ",
            ],
            image: {
              src: "https://www.hola.com/imagenes/estar-bien/20191115153193/practica-montanismo-pareja-lb/0-744-22/AdobeStock_97900242-z.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        href: "",
      },
      {
        title: "Yoga",
        description: [
          {
            type: "text",
            text: `El yoga es una práctica que conecta el cuerpo, la respiración y la mente. Esta práctica utiliza posturas físicas, ejercicios de respiración y meditación para mejorar la salud general. El yoga se desarrolló como una práctica espiritual hace miles de años. Hoy en día la mayoría de las personas en occidente hace yoga como ejercicio y para reducir el estrés. `,
            image: {
              position: "left",
              src: "https://www.hola.com/imagenes/estar-bien/20210507189097/razones-empezar-practicar-yoga/0-949-159/yoga-m.jpg?filter=w500",
            },
          },
          {
            type: "subtitle",
            text: "BENEFICIOS DE PRACTICAR YOGA",
          },
          {
            type: "list",
            image: {
              src: "https://www.viajerosporelmundo.com/wp-content/uploads/2020/06/yoga-transforma-vidas-2.jpg",
            },
            list: [
              "Reducir su presión arterial y su frecuencia cardíaca ",
              "Ayudarle a relajarse ",
              "Mejorar su confianza en usted mismo ",
              "Reducir el estrés ",
              "Mejorar su coordinación ",
              "Mejorar su concentración",
              "Ayudarle a dormir mejor ",
              "Ayudar a la digestión ",
            ],
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://cdn.pixabay.com/photo/2016/11/18/14/15/woman-1834827_1280.jpg",
        href: "",
      },
      {
        title: "Rapel",
        description: [
          {
            type: "text",
            text: "El Rapel es una técnica que permite descender por una pared vertical. A través de un arnés, una soga y un descensor, la persona puede bajar de un modo seguro, logrando sortear un precipicio con relativa facilidad. ",
            image: {
              position: "left",
              src: "http://www.summitpost.org/images/original/355481.JPG",
            },
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTICAR RAPEL " },
          {
            type: "list",
            list: [
              "Quemar la grasa corporal ",
              "Tonificar los músculos ",
              "Aumentar tu resistencia cardiovascular ",
              "Incrementar tu flexibilidad ",
              "Desarrollar tu capacidad de concentración ",
              "Elevar tu autoestima ",
              "Mejorar tu toma de decisiones",
            ],
            image: {
              src: "https://www.revistaoxigeno.es/uploads/s1/23/77/52/8/article-rapel-descenso-55c080aed25c8.jpeg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://cdn.pixabay.com/photo/2021/06/21/19/38/rappelling-6354459_1280.jpg",
        href: "",
      },
      {
        title: "Enduro",
        description: [
          {
            type: "text",
            text: `El Enduro es Modalidad del motociclismo que se realiza en campo abierto, teniendo que sortear todo tipo de obstáculos naturales, como puede ser el barro, árboles, baches, zonas de gravilla, etc. Es una disciplina que se puede practicar como hobby, pudiendo ir únicamente a disfrutar de la experiencia, de los paisajes y de la naturaleza. Además, te aseguramos que liberarás una gran cantidad de estrés. `,
            image: {
              position: "left",
              src: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/10/9/gcctlmkx0eq5wpawxkzs/manuel-lettenbichler-enduro",
            },
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTICAR ENDURO" },
          {
            type: "list",
            list: [
              "MEJORA TU ESTADO FISICO ",
              "AGILIZA TU MENTE, LA MANTIENE DESPIERTO Y JOVEN ",
              "MANTIENE TU VIDA SOCIAL Y LA MEJORA ",
              "TE LLEVA A DESCUBRIR PARAJES INCREÍBLES ",
            ],
            image: {
              src: "https://revistamoto.com/wp_rm/wp-content/uploads/2020/09/1366_2000-4.jpg",
            },
          },
        ],
        image:
          "https://images.pexels.com/photos/358079/pexels-photo-358079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        href: "",
      },
      {
        title: "SKATEBOARDING ",
        description: [
          {
            type: "text",
            text: `El Skateboarding es un deporte que consiste en deslizarse sobre una patineta y a la vez poder realizar diversos trucos, gran parte de ellos elevando la tabla del suelo, haciendo piruetas con ella en el aire. Se practica con un monopatín o patineta, tabla de madera plana y doblada por los extremos que tiene dos ejes y cuatro ruedas, con dos rodamientos en cada una de sus cuatro ruedas, preferentemente en una superficie plana, en cualquier lugar donde se pueda rodar, ya sea en la calle o en los skateparks (parques de patinaje). `,
            image: {
              position: "left",
              src: "https://images.squarespace-cdn.com/content/v1/5a79d837aeb625f12ad4e9b2/1599054986361-FFDAP5L9R3BJGAE9CVI3/Skateboard+England+-+Paul+Scott.jpg?format=1000w",
            },
          },
          {
            type: "subtitle",
            text: "BENEFICIOS DE PRACTICAR SKATEBOARDING   ",
          },
          {
            type: "list",
            list: [
              "Diversion  ",
              "Un alivio para el estres ",
              "Condicion fisica en general ",
              "Mejora el equilibrio  ",
              "Desarrolla la coordinacion  ",
            ],
            image: {
              src: "https://www.reviewsxp.com/blog/wp-content/uploads/2021/06/Where-can-I-watch-skateboarding-on-TV-scaled.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://images.pexels.com/photos/10633/pexels-photo-10633.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        href: "",
      },
      {
        title: "Paracaidismo",
        description: [
          {
            type: "text",
            text: `El paracaidismo es un tipo de salto que se realiza desde las alturas, donde se utiliza un paracaídas en esta técnica para poder suavizar la caída en el aterrizaje. Estos saltos se pueden realizar desde cualquier transporte aéreo como helicópteros, aviones, globos aerostáticos o bien sea desde una montaña. El paracaidismo es realizado con varias finalidades bien sea a modo de recreación o como deporte. En el caso del salto desde un objeto fijo es calificado como un tipo de salto “base”. En el salto el paracaídas puede ser abierto en seguida cuando salen de la aeronave u objeto fijo o puede que la persona decida tener una caída libre dominada antes de abrirlo manualmente. `,
            image: {
              position: "left",
              src: "https://estaticos-cdn.elperiodico.com/clip/d11967d5-5930-4f10-be6a-546c34767991_alta-libre-aspect-ratio_default_0.jpg",
            },
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTICAR PARACAIDISMO " },
          {
            type: "list",
            list: [
              "Alivio del estrés",
              " Beneficios físicos: hacer paracaidismo quema energía y tonifica los músculos ",
              " Enfrenta tus miedos",
              "Desafiarte a ti mismo",
              "Cambia su punto de vista ",
              "Crea confianza ",
              " Rejuvenece mental y físicamente",
            ],
            image: {
              src: "https://driversec.com/wp-content/uploads/2020/02/Otros_Deportes_351729223_105070146_1706x960.jpg",
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
        title: "KAYAKISMO ",
        description: [
          {
            type: "text",
            text: `El kayakismo es un deporte acuático, en el que se va sentado mirando hacia la parte delantera (proa), en el sentido de la marcha. Se palea en un kayak, y consigue el desplazamiento en el agua (propulso) con la ayuda de la pala.  `,
            image: {
              position: "left",
              src: "https://gibellighjalmar.files.wordpress.com/2020/04/kayakismo-deporte-extremo-jesc3bas-gomez.jpg",
            },
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTIKAR KAYAKISMO " },
          {
            type: "list",
            list: [
              "Es un buen ejercicio cardio.",
              "Reduce los niveles de estrés.",
              "Perder peso y aumentar la resistencia.",
              "Mejoras y tonificas los músculos.",
              "Desarrolla la fuerza general del cuerpo.",
              "Mayor coordinación de movimientos. ",
              "Entrenamiento de bajo impacto. ",
            ],
            image: {
              src: "https://i1.wp.com/www.deportesaludable.com/wp-content/uploads/2018/10/kayak-en-familia.jpg?resize=960%2C542&ssl=1",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://images.pexels.com/photos/3413678/pexels-photo-3413678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        href: "",
      },
      {
        title: "Buceo",
        description: [
          {
            type: "text",
            text: `En la actualidad, el buceo se ha convertido en una actividad muy extendida. Aunque tiene diferentes fines (deportivo, de investigación…) el recreativo es uno de los principales, pues lo que se busca es llegar a lo  más profundo del mar y descubrir sus maravillas con la seguridad debida. De ahí que sea uno de los deportes practicados en verano por excelencia. `,
            image: {
              src: "https://as01.epimg.net/deporteyvida/imagenes/2017/06/24/portada/1498309517_958678_1498309663_noticia_normal.jpg",
              position: "left",
            },
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTICAR BUCEO  " },
          {
            type: "list",
            list: [
              "Amplia la capacidad pulmonar. ",
              "Proporciona relajación y tranquilidad. ",
              "Mejora la confianza. ",
              "Ayuda a controlar la ansiedad y el estrés. ",
              "Mejora las habilidades psicomotrices ",
            ],
            image: {
              src: "https://media-cdn.tripadvisor.com/media/photo-s/0f/9a/46/d7/our-family-scuba-diving.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        href: "",
      },
    ],
  }),
  components: { ListExtremeSports },
};
</script>

<style>
</style>