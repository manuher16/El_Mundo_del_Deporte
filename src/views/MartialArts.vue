<template>
  <v-card flat>
    <v-card-title>
      <v-subheading> Artes Marciales </v-subheading>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col md="3">
          <v-img
            src="https://as01.epimg.net/us/imagenes/2021/02/28/masdeporte/1614535208_091374_1614535961_noticia_normal_recorte1.jpg"
          ></v-img>
        </v-col>
        <v-col>
          Denominadas también sistemas de lucha, consisten en prácticas cuyo
          objetivo es someter o defenderse mediante la técnica. Hay varios
          estilos de artes marciales que excluyen el empleo de armas de fuego y
          otro armamento moderno. Lo que diferencia a las artes marciales de la
          violencia física (peleas callejeras)es la organización de sus técnicas
          en un sistema coherente y la codificación de métodos efectivos. En la
          actualidad las artes marciales se practican por diferentes razones,
          que incluyen el deporte, la salud, la protección personal, el
          desarrollo personal, la disciplina mental, la forja del carácter y la
          autoconfianza. Además, incluye conocimientos relativos a sistemas que
          tradicionalmente se han considerado modalidades deportivas.</v-col
        >
      </v-row>
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col
          ><v-card-text class="font-weight-black">
            Beneficios de practicar una arte marcial</v-card-text
          >
          <ul>
            <li>Asimila la autodefensa.</li>
            <li>
              Aprende disciplina, respeto y sentido de la responsabilidad.
            </li>
            <li>
              Mejora tu carácter, alivia la ansiedad y canaliza tu agresividad.
            </li>
            <li>Aumenta tu confianza y la seguridad en ti mismo.</li>
            <li>Mejora tu salud y tu calidad de vida.</li>
            <li>Trabaja tu concentración y tu paciencia.</li>
            <li>
              Potencia tu coordinación y tu equilibrio haz amigos y aumenta tu
              lista de contactos
            </li>
          </ul></v-col
        >
        <v-col md="3">
          <v-img
            src="https://live.mrf.io/statics/i/ps/www.karateymas.com/wp-content/uploads/2019/07/Tipos-de-Jiu-Jitsu.png?width=1200&enable=upscale"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text>
      Quieres iniciarte en las artes Marciales sin salir de casa? Aprende a
      continuación las principales características de las artes marciales más
      conocidas a nivel mundial. Te explicamos también las técnicas más
      habituales y los beneficios que aporta estas Artes Marciales. Al final de
      cada informacion encontraras un boton donde podras contactarnos y uno de
      nuestros agentes te ayudara con la informacion que necesites.
    </v-card-text>
    <v-card-text>
      A la hora de elegir un arte marcial es muy importante tener en cuenta la
      opinión del niño o niña. En caso contrario cabe la posibilidad de que no
      quiera practicarlo y la búsqueda haya sido en bano. La mejor motivación es
      la de hacer algo que nos guste y eso también funciona con los
      peques.Deseas practicar otro arte marcial, que no se encuentra dentro de
      nuestras categorias, contactanos para solicitar lo que necesites.
    </v-card-text>
    <v-divider></v-divider>
    <v-card-text>
      <ListMartialArts :items="items" />
    </v-card-text>
  </v-card>
</template>

<script>
import ListMartialArts from "../components/Home/ListServices";

export default {
  data: () => ({
    items: [
      {
        title: "Judo",
        color: "#bb4040",
        description: [
          {
            type: "text",
            image: {
              src: "https://conceptodefinicion.de/wp-content/uploads/2017/03/Judo.jpg",
              position: "left",
            },
            text: `Sistema de combate sin armas, de origen japonés, hoy principalmente practicado como deporte, en que dos contendientes luchan cuerpo a cuerpo con el objetivo de derribar e inmovilizar en el suelo al adversario aprovechando la fuerza y el impulso de este. 

El Judo es camino de la flexibilidad o también llamado camino de la suavidad, fue fundado por Jigoro Kanō en 1882. El sensei Kano quiso recoger la esencia de las antiguas escuelas de jujitsu, junto a otras artes de lucha practicadas en el momento en Japón y fundirlas en una sola, el Kodokan. `,
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTICAR JUDO " },
          {
            type: "list",
            list: [
              "Promueve la interacción social. ",
              "Enfatiza la atención plena. ",
              "Desarrolla el equilibrio. ",
              "Mejora la fuerza. ",
              "Fomenta la coordinación. ",
              "Alterna entre ejercicio de baja, moderada y de alta intensidad. ",
              "Mejora la flexibilidad ",
              "Bajar de peso ",
              "Aumenta la capacidad de defensa ",
              "Mejora la concentracion ",
              "Fomenta valores ",
              "Desarrolla Confianza ",
            ],
            image: {
              src: "https://78884ca60822a34fb0e6-082b8fd5551e97bc65e327988b444396.ssl.cf3.rackcdn.com/up/2019/02/ijf-03-1550476738-1550476738.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://dogym.es/wp-content/uploads/2017/09/ventajas-entrenar-judo.jpg",
      },
      {
        title: "MMA",
        color: "#a10d0d",
        description: [
          {
            type: "text",
            image: {
              src: "https://media.gq.com.mx/photos/5ee7a1df85180fb067834185/master/pass/MMA.jpg",
              position: "left",
            },
            text: `Las MMA o Artes Marciales Mixtas son la fusión de diferentes estilos de artes marciales tradicionales. Los mejores aspectos de disciplinas como el boxeo, jiu jitsu brasilero, lucha, kickboxing, muay thai, karate y judo, se mezclaron para formar un estilo de combate efectivo y completo,en las cuales se permiten las patadas, puñetasos, derrives, luxaciones, extrangulacioes entre otras cosa en donde dos atletas se enfrentan en una jaula bajo reglas estrictas que los protegen de daños severos, pero que a la vez permiten tanta acción que han convertido a las MMA en el deporte de mayor crecimiento a nivel mundial. `,
          },
          {
            type: "subtitle",
            text: "BENEFICIOS DE PRACTICAR ARTES MARCIALES ",
          },
          {
            type: "list",
            image: {
              src: "https://dmxg5wxfqgb4u.cloudfront.net/styles/card/s3/image/2021-05/GettyImages-1282037188.jpg?VersionId=null&h=199d8c1f&itok=ZCFF99wB",
            },
            list: [
              "Tener un vida diciplicada",
              "Ayuda a mejorar nuestor organismo",
              "Herramienta de autodefensa",
              "Controlador del temperamento",
              "Aumento de la musculatura",
              "Mejorar la capacidad cardiovascular",
              "Mejorar el estado de animo",
              "Superar limites",
            ],
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://muchocombate.com/wp-content/uploads/2021/03/1357592540_470223757_1-Mma-artes-marciales-mixtas-kennedy_9c818439-a803-4208-a1df-5b4f1d1aa3e8_2048x.jpg",
      },
      {
        title: "Taekwondo",
        color: "#16606a",
        description: [
          {
            type: "text",
            image: {
              position: "left",
              src: "https://img.olympicchannel.com/images/image/private/t_16-9_3200/primary/rerz7idjxa5vgdwoqosf",
            },
            text: ` Sistema de combate sin armas, , hoy principalmente deporte, en que dos contendientes utilizan golpes secos dados con los puños y con los pies y en el que se han desarrollado las técnicas de salto; los combates constan de tres períodos de dos minutos cada uno. Taekwondo es un término que procede del coreano y que hace referencia a un arte marcial del mismo origen. Este deporte combina técnicas del kung fu, el karate-do y otras disciplinas más antiguas. `,
          },
          {
            type: "subtitle",
            text: "BENEFICIOS DE PRACTICAR TAEKWONDO ",
          },
          {
            type: "list",
            list: [
              "Permite mantenerse en forma.",
              `Reduce las posibilidades de sufrir desde obesidad hasta problemas de tipo cardiovascular. 
`,
              "Aumenta de manera considerable lo que son los reflejos. ",
              "Se considera que en el caso de los niños y adolescentes les ayuda a adquirir un hábito saludable como es el deporte, además de valores tales como el respeto, el esfuerzo o la disciplina, entre otros. ",
            ],
            image: {
              src: "https://as01.epimg.net/deporteyvida/imagenes/2019/12/14/portada/1576325688_785673_1576325945_noticia_normal.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://www.hobbyaficion.com/wp-content/uploads/2017/08/Equipacion_indispensable_para_hacer_Taekwondo_1024x1024-300x150.jpg",
      },
      {
        title: "Jiu-jitsu",
        color: "#2966ff ",
        description: [
          {
            type: "text",
            text: `El jiu jitsu es un sistema de defensa mediante el combate en Japón. No necesita de armas ya que dos personas se dedican a luchar cuerpo a cuerpo mediante diferentes combinaciones de llaves para poder lograr que el contrincante se rinda. 

Solo necesita la aplicación de estas combinaciones, así como dar golpes con las diferentes extremidades, puede luchar tanto con los codos, las manos y los pies todo es válido cuando se trata de esta lucha. 

Es un sistema de defensa muy practicado en diferentes partes del mundo, las personas tienden a practicarlos como uso de defensa personal.`,
            image: {
              position: "left",
              src: "https://mui.today/__export/1631906260936/sites/mui/img/2021/09/17/posiciones-jiu-jitsu-brasileno-principiantes.jpg_736634335.jpg",
            },
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTICAR JIUJITSU  " },
          {
            type: "list",
            list: [
              "Seguridad: permite estar más seguro en las calles, con menos miedo a un ataque, y también mejorar la autoestima. ",
              "Mentalidad más fuerte: a través de la concentración y la paciencia, también se siente más paz interior y tranquilidad. ",
              "Mentalidad más fuerte: a través de la concentración y la paciencia, también se siente más paz interior y tranquilidad. ",
              "Adquirir respeto: este deporte enseña a respetar a la otra persona, así como responsabilidad, compañerismo y humildad.",
              "Controla el estrés: en este deporte se practican muchos ejercicios aeróbicos y anaeróbicos, lo que elimina las tensiones, que reduce los niveles de estrés y de ansiedad. ",
            ],
            image: {
              src: "https://mott.social/wp-content/uploads/2019/04/1-3.png",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://images.pexels.com/photos/7988954/pexels-photo-7988954.jpeg",
      },
      {
        title: "Defensa Personal",
        color: "#487e99",
        description: [
          {
            type: "text",
            image: {
              src: "https://www.bienestarfitness.com/wp-content/uploads/2019/01/razones-para-hacer-defensa-personal.jpg",
              position: "left",
            },
            text: `La defensa personal consiste en la serie de medios de que una persona se vale para repeler un ataque contra ella, para salvaguardar su integridad física y/o sus bienes. La ley protege la defensa personal y exime de responsabilidad cuando la defensa ejercida ha sido realizada frente a una provocación injusta y los medios empleados hayan sido acordes a la ofensa recibida. Esta figura legal se denomina legítima defensa. 

La persona puede defenderse de un ataque violento usando palos, gas pimienta, armas blancas, como puede ser un cuchillo; o armas de fuego, como es el caso de un revólver; o utilizar su propio cuerpo, para lo cuál existen una serie de técnicas para hacer los golpes más certeros y los movimientos de evasión más eficientes `,
          },
          {
            type: "subtitle",
            text: "BENEFICIOS DE PRACTICAR DEFENSA PERSONAL ",
          },
          {
            type: "list",
            image: {
              src: "https://unisalia.com/wp-content/uploads/2019/02/curso-de-defensa-personal.jpg",
            },
            list: [
              "Promueve la diciplina  ",
              "Aumenta la seguridad en ti mismo.",
              "Te permite conocerte a ti mismo Esto implica conocer tus límites, resistencia y motivaciones.",
              "Te permite conocerte a ti mismo Esto implica conocer tus límites, resistencia y motivaciones.",
              "Practicar defensa personal te hará darte cuenta de que puedes valerte perfectamente por ti mismo y que eres capaz de hacer muchísimas cosas que antes ni siquiera imaginabas.",
              "Aprendes a prevenir Cuando estás alerta a tu entorno y sabes que la mejor pelea es la que se evita, podrás prevenir en muchos casos un ataque.",
              "Te ayuda a mantener una mente sana El deporte en general y la defensa personal en especial, te ayudarán a mantener la mente en un perfecto equilibrio con tu cuerpo. ",
              "Eres capaz de defenderte si es necesario La defensa personal te ayudará a estar preparado para actuar eficazmente en caso de ser necesario.",
              "Mejora tu condición física y tu salud La defensa personal no solo te ayuda a desarrollar un cuerpo tonificado y fuerte, también mejora tu salud cardiovascular y capacidad pulmonar, fortalece tus huesos, ayuda al funcionamiento de las articulaciones y mejora el metabolismo en general.",
            ],
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://www.warriorsbarcelona.com/wp-content/uploads/2021/09/como-aprendo-defensa-personal-1000x600-1.jpg",
      },
      {
        title: "Entrenamiento de Personal Seguridad",
        description: [
          {
            type: "text",
            image: {
              src: "http://www.melider.com.mx/wp-content/uploads/2016/12/Private-security-company-training-by-french-police-02-12-10-13-30.jpg",
              position: "left",
            },
            text: `El hecho de que la ley no tenga un requisito específico para el entrenamiento del guarda de seguridad, no significa que no deba completarse. 

El entrenamiento de los guardas es responsabilidad de la compañía de seguridad privada y debe realizarse para maximizar el desempeño general del guarda de seguridad.  

La formación de guardas de seguridad privados es una inversión que vale la pena pagar porque traerá beneficios para todos en un futuro. `,
          },
          { type: "subtitle", text: "VENTAJAS DE TENER PERSONAL ENTRENADO " },
          {
            type: "list",
            list: [
              "Tener el entrenamiento para tomar decisiones difíciles durante circunstancias estresantes no solo aumentará la eficiencia del desempeño del guarda de seguridad, sino que también optimizará la seguridad de las empresas en las que brinda sus servicios ",
              "Los agentes de seguridad capacitados tienen menos probabilidades de lesionarse mientras trabajan. ",

              "El entrenamiento de los guardas de seguridad hace que los guardas de seguridad se vuelvan más atentos a los detalles y estén alertas mientras trabajan. ",
            ],
            image: {
              src: "https://www.elmundo.es/elmundo/imagenes/2019/02/12/5c6f9b8c9f8f9.jpeg",
            },
          },
          {
            type: "subtitle",
            text: "Nuestro sistema de Entrenamiento ",
          },
          {
            type: "text",
            text: `Está diseñado para garantizarle a usted y a los suyos contar con guardas de seguridad profesionales. 

Poseemos nuestro propio sistema de capacitación individualizado para cada uno de nuestros colaboradores, atendiendo sus necesidades de desarrollo. 

Según nuestras estadísticas, los guardas de seguridad capacitados tienen mayores tasas de productividad y efectividad.  `,
          },
          {
            type: "text",
            bold: true,
            text: `Si deseas obtener nuestros servicios contactanos  `,
          },
        ],
        image:
          "http://www.melider.com.mx/wp-content/uploads/2016/12/Private-security-company-training-by-french-police-02-12-10-13-30.jpg",
      },
      {
        title: "Muay Thai",
        color: "#e3d227",
        description: [
          {
            type: "text",
            text: `El muay thai, arte marcial también conocida como boxeo tailandés, es un deporte de contacto y una de las disciplinas más utilizadas en las artes marciales mixtas (MMA). ‘Muay’ significa ‘combate’ o ‘lucha’ y a quienes lo practican se les conoce como ‘nak muay’ o, si son occidentales, ‘nak muay farang’. Se practica de pie, mediante golpes con técnicas combinadas de brazos, piernas, pies, rodillas, y codos, además de barridos, lanzamientos y sujeciones. 

El muay thai tiene su origen en otra variante tradicional, el muay boran, que data del año 200 antes de Cristo. Concebido por monjes budistas, incluye figuras, técnicas a mano abierta, luxaciones, lanzamientos y derribos. `,
            image: {
              position: "left",
              src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Muay_Thai_Fight_Us_Vs_Burma_%2880668065%29.jpeg",
            },
          },
          {
            type: "subtitle",
            text: "Beneficios de practicar Muay Thai ",
          },
          {
            type: "list",
            image: {
              src: "https://okdiario.com/img/2019/11/20/muay-thai-para-mujeres.jpg",
            },
            list: [
              "Mejora notable en nuestro cuerpo.",
              "La practica de este arte marcial acelera el metabolismo por tanto quema grasa e incrementa la fuerza y mejora la agilidad.",
              "En hombres y mujeres",
              "Sirve para defensa personal , lo que da al practicante seguridad y confianza",
              "Una vida mas diciplinada",
              "Da orden y estabilidad emocional",
              "Ayuda a combatir el estres",
              "Mentalmente enseña a desafiar sus límites y combatir sus miedos",
              "El Muay thai no enseña a ser violento o abusivo; por el contrario, infunde muchos valores positivos a sus practicantes aparte de promover en ellos un estilo de vida saludable. ",
            ],
          },

          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://cdn.pixabay.com/photo/2016/06/11/21/30/sport-1450863_960_720.jpg",
      },
      {
        title: "Kick boxing",
        color: "#ca0f2e",
        description: [
          {
            type: "text",
            image: {
              position: "left",
              src: "https://nicmma.files.wordpress.com/2016/05/kickboxing.jpg?w=640",
            },
            text: `Es un deporte que mezcla técnicas del boxeo con artes marciales para combinar la fuerza y resistencia en un ejercicio calificado de aeróbico. La práctica de este ejercicio puede ser tanto en un ring, como en un gimnasio, y las tácticas que se utilizan están consideradas de autodefensa. Las técnicas que se emplean son principalmente para desorientar y posteriormente derrotar al oponente.Su estilo de pelea se basa como su nombre lo dice en patada y golpe  `,
          },
          {
            type: "subtitle",
            text: "BENEFICIOS DE PRACTICAR KICK BOXING",
          },
          {
            type: "list",
            list: [
              "Es un excelente ejercicio aeróbico que te ayuda a quemar grasa. ",
              "Tonifica el cuerpo. ",
              "Mejora el equilibrio y coordinación. ",
              "Aprendes importantes técnicas de defensa personal. ",
              "Sus movimientos y golpes son un excelente liberador de estrés. ",
              "El kick boxing para mujeres te da fortaleza, empoderamiento y confianza, que proyectarás en todos los aspectos de tu vida",
            ],
            image: {
              src: "http://tribunalocal.com/wp-content/uploads/2019/11/kic.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://www.uniminutoradio.com.co/wp-content/uploads/2017/11/kick.jpg",
      },
      {
        title: "Karate",
        description: [
          {
            type: "text",
            text: `El Karate es un arte marcial japonésbasada en algunos estilos de las artes marciales chinas, y en menor medida en otras disciplinas provenientes del sureste asiático proveniente de Okinawa. en el que se permiten puñetazos, patadas, golpes de codo y rodilla así como los golpes de mano abierta (o «manos cuchillo»). 

Puede practicarse como arte (budō), defensa personal o deporte de combate. `,
            image: {
              position: "left",
              src: "https://quieroserdeportista.com/wp-content/uploads/2021/04/Karate3.jpg",
            },
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTICAR KARATE  " },
          {
            type: "text",
            image: {
              position: "right",
              src: "https://i0.wp.com/karateyalgomas.com/wp-content/uploads/2017/04/2017-04-07-karate-thumbnail.jpg?fit=1060%2C600&ssl=1",
            },
            text: `Practicar Karate fortalece la mente, desarrolla compostura, un proceso de pensamiento más claro, una mayor conocimiento sobre las capacidades mentales de uno y una mayor seguridad en uno mismo. Fortalece el cuerpo entero, mejora la coordinación, hace reflejos más rápidos, construye resistencia y la salud en general". 

Por otra parte, señala que valora elementos como la “cortesía, la integridad, humildad, justicia, honor y auto-control”. `,
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://images.pexels.com/photos/7045726/pexels-photo-7045726.jpeg",
      },
      {
        title: "Aikido",
        color: "#e2781e ",
        description: [
          {
            type: "text",
            image: {
              position: "left",
              src: "https://www.saludterapia.com/images/saludterapia/glosario/aikido/aikido.jpg",
            },
            text: `Hablamos de un arte marcial japonés que consiste en el combate sin armas para enfrentar uno o varios adversarios que pueden estar armados o desarmados. 

En contraposición a otras artes marciales, el aikido pretende buscar la disuasión del adversario para neutralizar sus intenciones negativas. Más que la derrota, se trata de evitar la agresividad del rival mediante luxaciones derrivos y movimientos sin violencia. `,
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTICAR AIKIDO " },
          {
            type: "list",
            list: [
              "Mejorar la flexibilidad del cuerpo y tonifica los músculos ",
              "Fortalecer el equilibrio y la coordinación ",
              "Favorecer la circulación sanguínea ",
              "Estimular las articulaciones ",
              "Prevenir la artritis, la artrosis y otros problemas articulares ",
              "Mejorar la postura y fortalecer la columna ",
              "Prevenir el estrés ",
              "Relajar las articulares para prevenir contracturas ",
              "Aprender a controlar la respiración como efecto saludable ",
              "Desarrollar los reflejos y aumenta la elasticidad ",
              "Mantener un cuerpo joven ",
            ],
            image: {
              src: "https://live.mrf.io/statics/i/ps/www.karateymas.com/wp-content/uploads/2019/11/Estilos-del-aikido.png?width=1200&enable=upscale",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://cdn.pixabay.com/photo/2013/06/05/12/38/martial-arts-116543_1280.jpg",
      },
      {
        title: "Boxeo",
        color: "#c02020",
        description: [
          {
            type: "text",
            image: {
              position: "left",
              src: "https://i0.wp.com/lospleyers.com/wp-content/uploads/2019/04/canelo-alvarez-busca-mejor-boxeador-historia-e1556327369762.jpg?fit=3639%2C2125&quality=80&ssl=1",
            },
            text: `El boxeo también conocido como box o  pugilismo, es uno de los deportes más antiguo al igual que la lucha. Este es un deporte de contacto, en el que dos personas combaten utilizando solamente sus puños los cuales se cubren con un guante especial. El objetivo del boxeo es golpear la mayor cantidad de veces al contrincante por encima de cintura y dentro del cuadrilátero. `,
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTICAR BOXEO " },
          {
            type: "list",
            list: [
              "Aumentará tu resistencia física. ",
              "Mejora tu salud cardiovascular.  ",
              "Fortalecerás y definirás los músculos sin ganar peso extra. ",
              "Con la liberación de endorfinas u hormonas de la felicidad, obtendrás un mayor bienestar.  ",
              "Conseguirás reducir la sensación de estrés y aumentará tu autoestima.",
              "Conseguirás quemar un gran número de calorías. ",
              "Aumentarán tus reflejos y mejorará tu toma de decisiones. ",
            ],
            image: {
              src: "https://i.ytimg.com/vi/tiHvCdWO79Y/maxresdefault.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://images.pexels.com/photos/3761725/pexels-photo-3761725.jpeg",
      },
      {
        title: "Fullcontact",
        color: "#4db6b7",
        description: [
          {
            type: "text",
            image: {
              position: "left",
              src: "https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2018/11/30/node_17233/196120/public/2018/11/30/B9717775581Z.1_20181130004528_000%2BGCHCGGPHF.2-0.jpg?itok=tX1a1paG1559178998",
            },
            text: `Es un deporte de combate similar al boxeo y otras artes marciales, donde los participantes además de los golpes de puño emplean patadas y barridos del karate y el taekwondo. La meta es la puesta fuera de combate o nocaut (K. O.: knock out). Es similar al deporte de combate kick boxing, con la diferencia de que no se permite patear los muslos del oponente, de modo que todos los golpes y patadas solamente son permitidos arriba de la cintura. `,
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTICAR FULLCONTACT " },
          {
            type: "list",
            list: [
              "Quemas calorías y defines músculos.",
              "Incrementas tu fuerza.",
              "Mejoras tu resistencia cardiopulmonar.  ",
              "Practicas otros ejercicios.  ",
              "Aumentas tu coordinación.",
              "Aumentas tu concentración.  ",
              "Aprendes una técnica de defensa personal.  ",
              "Elevas tu autoestima.  ",
              "Por último, destacar su  papel desestresante.  ",
            ],
            image: {
              src: "http://www.kfbc-clichy.fr/wp-content/uploads/2011/10/Full_contact_-_Picord_VS_Mabel_01-289x300.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://1.bp.blogspot.com/-ZN0SJMXEX-4/Wp10IiIcItI/AAAAAAAAEHQ/0Q-qEERhLXc6E6DEV26YLXNwRrh-M4rTgCLcBGAs/s320/hqdefault.jpg",
      },
      {
        title: "Kempo",
        color: "#4ca823",
        description: [
          {
            type: "text",
            image: {
              src: "https://www.artesmarciales24.top/wp-content/uploads/2018/08/Kenpo-americano.jpg",
              position: "left",
            },
            text: `El Kenpo Karate es un arte marcial de tipo híbrido o mixto, que se caracteriza por el uso de sucesiones rápidas de golpes de manos. Estos golpes tienen un doble propósito, primero el abrumar al contrario y tratar de garantizar que al menos un golpe haya cumplido su objetivo, todo en una rápida combinación de golpes. `,
          },
          { type: "subtitle", text: "BENEFICIOS DE PRACTICAR KEMPO " },
          {
            type: "list",
            list: [
              "Es un sistema que logra positivos beneficios fisicos y mentales: agudiza los reflejos, enseña a controlar la respiracion, mejora el tono muscular y la fuerza. ",
              "Brinda confianza y seguridad en el practicante asi como paciencia, tranquilidad y serenidad. ",
              "Otorga la habilidad suficiente para manejar y enfrentar circunstancias adversas. ",
              "Provoca en el practicante el control suficiente sobre las mociones. ",
              "Da al cuerpo un buen acondicionamiento y coordinacion. ",
              "Desarrolla la condicion alerta. ",
              "Acelera las reacciones. ",
              "Se aprende a ver el peligro, a sentirlo y a enfrentarlo sin temor. ",
            ],
            image: {
              src: "https://recursos.mec.edu.py/kiwix/wikipedia_es_all_maxi/I/m/American_Kenpo_Double_Punch.jpg",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://bloximages.chicago2.vip.townnews.com/syvnews.com/content/tncms/assets/v3/editorial/4/09/4093ce8b-573c-559b-89e0-b18e13b32e43/5d5c55bb68b09.image.jpg?resize=1396%2C1080",
      },
      {
        title: "Lucha",
        color: "#f0d70a ",
        description: [
          {
            type: "text",
            image: {
              src: "https://img.olympicchannel.com/images/image/private/t_16-9_3200/primary/p6jgniwccpcl4784gydx",
              position: "left",
            },
            text: `Lucha Grecorromana. Es un deporte en el cual cada participante intenta derrotar al rival sin el uso de golpes. El objetivo consiste en ganar el combate haciendo caer al adversario al suelo y manteniendo los dos hombros fijos sobre el tapiz o ganando por puntuación mediante la valoración de las técnicas y acciones conseguidas sobre el adversario. `,
          },
          {
            type: "subtitle",
            text: "BENEFICIOS DE PRACTICAR LUCHA GRECORROMANA ",
          },
          {
            type: "text",
            text: `Durante la preparación del luchador se deben tener en cuenta los éxitos y fracasos surgidos en la dinámica de la vida, las cuales pueden aumentar considerablemente la fuerza de voluntad, por ello con una dirección pedagógica adecuada, se puede educar en los niños, adolescentes y jóvenes la cualidad de no traumatizarse ante las dificultades, sino que justamente se esfuercen en vencerlas. El luchador se siente orgulloso cuando puede sobreponerse con su fuerza de voluntad a los fracasos. 

Como consecuencia de esto, la mayoría de los luchadores son audaces, valientes y decididos, enfrentando las dificultades de la vida cotidiana. Por ello cuando se analiza con profundidad este aspecto, los valores morales predominan por encima de cualquier argumentación negativa o especulativa. `,
            image: {
              src: "https://as01.epimg.net/masdeporte/imagenes/2016/08/18/juegosolimpicos/1471538174_464527_1471538552_noticia_normal_recorte1.jpg",
              position: "right",
            },
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://img.olympicchannel.com/images/image/private/t_16-9_1240-700_15x/f_auto/v1538355600/primary/p6jgniwccpcl4784gydx",
      },
      {
        title: "Lima Lama",
        color: "#ff0901",
        description: [
          {
            type: "text",
            image: {
              position: "left",
              src: "https://www.todaslasartesmarciales.com/wp-content/uploads/2021/05/lima-lama.png",
            },
            text: `El lima lama es un arte marcial letal que consiste en movimientos similares a una danza por su fluidez y ritmo intrínsecos. La mayoría de sus movimientos son con las manos, de allí su significado, aproximadamente el 60% de su currículo consiste en técnicas y movimientos de mano.También contiene movimientos de control y derribe así como pelea con palo y cuchillo.  

Lo interesante del lima lama es que proviene de la Polinesia y se le conoce como la mano de la sabiduría. Los principios de esta técnica son el honor y la dignidad de la región a la que se pertenece, así como promulgar la fe y el respeto hacia los demás. `,
          },
          {
            type: "subtitle",
            text: "BENEFICIOS DE PRACTICAR LIMA LAMA",
          },
          {
            type: "list",
            image: { src: "./lima-lama-3.png" },
            list: [
              "Aprende diciplina,leatad y autocontrol de su propia energia",
              "La practica de autodefensa le otorga fuerza en los huesos , musculos y articulaciones",
              "Ayuda a la concentracion",
              "aporta agilidad y flexibilidad",
              "mejora la respitacion, el funcinamiento del corazón, del sistema inmunológico",
              "Ayuda a canalizar el exceso de energia",
              "Fomenta el autoestima",
            ],
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image: "./lima-lama.png",
      },

      {
        title: "Tai-Chi",
        color: "#ff0901",
        description: [
          {
            type: "text",
            image: {
              position: "left",
              src: "https://s.yimg.com/ny/api/res/1.2/SDNAixX4jbkC1u1exgTTmg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTQ0Mg--/https://s.yimg.com/uu/api/res/1.2/n3.T.5EDKxcoVaq90VcUhA--~B/aD03MDc7dz0xNTM1O2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/c5de582f003e8dbb3ad657536a2c0a0c",
            },
            text: `Si estás buscando una manera de reducir el estrés, considera el tai chi. Originalmente desarrollado para la defensa personal, el taichi ha evolucionado hasta convertirse en una forma elegante de ejercicio que ahora se utiliza para la reducción del estrés y una variedad de otras afecciones de salud. A menudo descrito como meditación en movimiento, el tai chi promueve la serenidad mediante movimientos suaves y fluidos. El tai chi es de bajo impacto y ejerce un esfuerzo mínimo sobre los músculos y las articulaciones, lo que lo hace generalmente seguro para todas las edades y niveles de estado físico.`,
          },
          {
            type: "subtitle",
            text: "BENEFICIOS DE tai chi ",
          },
          {
            type: "list",
            image: { src: "https://okdiario.com/img/2019/11/25/tai-chi.jpg" },
            list: [
              "Menos estrés, ansiedad y depresión. ",
              "Mejor estado de ánimo. ",
              "Mayor capacidad aeróbica. ",
              "Aumento de la energía y la resistencia. ",
              "Mayor flexibilidad, equilibrio y agilidad. ",
              "Más fuerza y definición muscular. ",
            ],
          },
          {
            type: "text",
            bold: true,
            text: `Entrena con instructores certificados y especializados en el area que te guiarán paso a paso para cumplir tus objetivos.`,
          },
        ],
        image:
          "https://static5.depositphotos.com/1001030/513/i/600/depositphotos_5134249-stock-photo-woman-in-white-suit-makes.jpg",
      },
    ],
  }),
  components: { ListMartialArts },
};
</script>

<style>
</style>