<template>
  <v-card>
    <v-card-title>
      <v-subheading> Salud </v-subheading>
    </v-card-title>
    <v-divider />
    <v-card-text>
      <ListHealth :items="items" />
    </v-card-text>
  </v-card>
</template>

<script>
import ListHealth from "../components/Home/ListServices.vue";
export default {
  data: () => ({
    items: [
      {
        title: "Nutricionsita",
        description: [
          {
            type: "text",
            image: {
              position: "left",
              src: "https://cdn.euroinnova.edu.es/img/subidasEditor/copia%20de%20disen%CC%83o%20sin%20ti%CC%81tulo%20(55)-1621262627.webp",
            },
            text: "Profecional que ayuda a otras a construir hábitos de alimentación saludables para mejorar la salud y prevenir enfermedades. Brinda consejería nutricional, planifica comidas y programas educativos sobre nutrición. Los nutricionistas también observan los efectos del ambiente en la calidad y seguridad de los alimentos, y en cómo afectan la salud.",
          },
          { type: "subtitle", text: "Beneficios de tener un nutricionista " },
          {
            type: "list",
            list: [
              "Seguir un plan individualizado ",
              "Conocer el origen de los problemas de salud ",
              "Prevenir enfermedades ",
              "Mejorar la relación con la comida ",
              "Disfrutar de un estilo de vida más sano ",
              "Aprender nuevas recetas y habilidades ",
              "Aumenta tu rendimiento.",
            ],
            image: {
              position: "right",
              src: "https://img.europapress.es/fotoweb/fotonoticia_20191015174624_420.jpg",
            },
          },
          {
            type: "text",
            text: "Quieres iniciar un estilo de vida más saludable y cumplir tus objetivos sin salir de casa. Conoce los beneficios que puedes obtener. Pulsa el boton  para contactarnos y uno de nuestros agentes te ayudará con la información que necesites. ",
            bold: true,
          },
        ],
        image:
          "https://gacetamedica.com/wp-content/uploads/2020/06/nutrici%C3%B3n.jpg",
        href: "",
      },
      {
        title: "Fisioterapeuta",
        description: [
          {
            type: "text",
            text: "La Fisioterapia, también conocida como Terapia Física o Terapia Ocupacional es un ramo de la Medicina que se enfoca en la reparación y restauración de la movilidad física de los pacientes que han sufrido algún tipo de trauma físico. ",
            image: {
              position: "left",
              src: "https://cdn.euroinnova.edu.es/img/subidasEditor/3-1626426495.webp",
            },
          },
          { type: "subtitle", text: "Beneficios de la fisioterapia " },
          {
            type: "list",
            list: [
              "Alivia el dolor. ",
              "Previene y controla el deterioro físico. ",
              "Mejora las funciones básicas del organismo. ",
              "Mejora la potencia muscular y la movilidad. ",
              "Con las sesiones de fisioterapia se consigue una mayor flexibilidad.",
              "Realizando sesiones habituales ayuda a prevenir lesiones. ",
              "Es efectivo para el tratamiento de la tendinitis, ligamentos de rodilla o menisco, roturas fibrilares y esguinces de tobillo. ",
            ],
            image: {
              position: "right",
              src: "https://blogs.unitec.mx/content/dam/blogs/imagenes/corp_samara/importancia-de-la-fisioterapia-en-mexico-5-compressor.jpg",
            },
          },
          {
            type: "text",
            text: "Quieres  mejorar tus problemas en articulaciones, tratar alguna lesion o iniciar un estilo de vida más saludable y poder cumplir tus objetivos sin salir de casa. Conoce los beneficios que puedes obtener. Pulsa el botón para contactarnos y uno de nuestros agentes te ayudará con la información que necesites. ",
            bold: true,
          },
        ],
        image:
          "https://www.egarsat.es/wp-content/uploads/2019/09/fisioterapia.jpg",
        href: "",
      },
      {
        title: "Medico General",
        description: [
          {
            type: "text",
            text: "El médico general es el profesional de la medicina que cuenta con los conocimientos y las destrezas necesarias para diagnosticar y resolver con tratamiento medico y con procedimientos sencillos la mayoría de los padecimientos que el ser humano sufre en su vida, desde niño hasta la vejez, con acciones frecuentemente realizadas en el consultorio del medico o en la casa del enfermo. En la última fase de la vida, donde predominan las enfermedades degenerativas que por su cronicidad hacen más necesarios los cuidados permanentes, el apoyo y una buena relación con un médico de familia puede ser la solución sencilla y de bajo costo de la mayoría de estos casos. ",
            image: {
              position: "left",
              src: "https://1.bp.blogspot.com/-SLLr53NKnMw/XoTLByy7q5I/AAAAAAAAGr4/K-OkHbXSCaQSet4gqnH7rdkfM-w-zZthgCLcBGAsYHQ/s1600/Medico-general.jpg",
            },
          },
          {
            type: "subtitle",
            text: "Beneficios de contar con médico a domicilio",
          },
          {
            type: "list",
            list: [
              "Asistencia médica las 24 horas",
              "Ahorra tiempo con un médico a domicilio.",
              "Amplia cobertura.",
              "Atención de emergencia con un médico general.",
              "Ahorra dinero con el servicio de médico a domicilio.",
              "Confidencialidad y privacidad.",
              "Mejora el rendimiento laboral y familiar.",
            ],
            image: {
              position: "right",
              src: "doc_gen_2.jpg",
            },
          },
          {
            type: "text",
            text: "Necesitas asistencia medica sin salir de casa. Conoce los beneficios que puedes obtener con un medico a domicilio. Pulsa el boton  para contactarnos y uno de nuestros agentes te ayudará con la información que necesites. ",
            bold: true,
          },
        ],
        image:
          "data:image/jpeg;base64,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",
        href: "",
      },
      {
        title: "Psicologo",
        description: [
          {
            type: "text",
            text: "El psicólogọ o psicologa es un profecional de la salud mental que interviene en varios de los dominios de la sociedad (educación, salud, social, trabajo, deporte, etc.) para preservar, mantener o mejorar el bienestar o la calidad de vida del individuo y su salud psíquica, desarrollar sus capacidades o favorecer su adecuada convivencia social. ",
            image: {
              position: "left",
              src: "https://inpsique.com/wp-content/uploads/2020/10/Diferencias-entre-psico%CC%81logo-y-psiquiatra.-Inpsique.jpg",
            },
          },
          { type: "subtitle", text: "Beneficios de psicologo en casa " },
          {
            type: "list",
            image: {
              position: "right",
              src: "https://t1.pb.ltmcdn.com/es/posts/2/9/1/como_saber_cuando_ir_al_psicologo_5192_600.jpg",
            },
            list: [
              "Da apoyo emocional.",
              "Promueve el autoconocimiento. ",
              "Otorga herramientas para manejar conflictos. ",
              "Permite encontrar soluciones a los problemas. ",
              "Ayuda a eliminar posibles trastornos. ",
              "Mejora la calidad de vida. ",
            ],
          },
          {
            type: "text",
            text: "Necesitas asistencia medica sin salir de casa. Conoce los beneficios que puedes obtener con un medico a domicilio. Pulsa el boton  para contactarnos y uno de nuestros agentes te ayudará con la información que necesites. ",
            bold: true,
          },
        ],
        image:
          "https://resizer.glanacion.com/resizer/rJEUB4BgT_3Dr4gkJsfbWZoiL08=/879x586/smart/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/X2J6WOZGXRGIRBUHTWGZ5XRK2U.jpg",
        href: "",
      },
    ],
  }),
  components: { ListHealth },
};
</script>

<style>
</style>