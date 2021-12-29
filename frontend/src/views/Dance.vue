<template>
  <v-card flat>
    <v-card-title>
      <v-subheading> Bailes </v-subheading>
    </v-card-title>
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
        description: "ballet",
        image:
          "https://static3.mujerhoy.com/www/multimedia/201812/12/media/cortadas/ballet-kbmB-U601860635051FtH-624x467@MujerHoy.jpg",
        href: "",
      },
      {
        title: "Comtemporaneo",
        description: "ballet",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Danza-Contemporanea-cuatro.jpg/375px-Danza-Contemporanea-cuatro.jpg",
        href: "",
      },
      {
        title: "Urbano",
        description: "ballet",
        image:
          "https://dancemotion.es/wp-content/uploads/2020/09/baile-urbano.jpg",
        href: "",
      },
      {
        title: "Brake Dance",
        description: "ballet",
        image:
          "https://static1.burgosconecta.es/www/multimedia/201909/25/media/cortadas/break-dance-kkBE-U90233957265k6E-1248x770@RC.jpg",
        href: "",
      },
      {
        title: "Popping",
        description: "ballet",
        image:
          "https://conluzpropia.net/wp-content/uploads/2016/11/14-bailar-popping.jpg",
        href: "",
      },
      {
        title: "Afro Dance",
        description: "ballet",
        image:
          "https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/153228/0a78e6ad73019608ead88944c0c3c24fad8fa0cd.XL2.jpg",
        href: "",
      },
      {
        title: "K Pop",
        description: "ballet",
        image:
          "data:image/jpeg;base64,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",
        href: "",
      },
      {
        title: "Danza folclorica",
        description: "ballet",
        image:
          "https://www.cultura.gob.mx/recursos/sala_prensa/fotogaleria/foto_2_ballet_folklorico_imagenes_4_rene_nino.jpg",
        href: "",
      },
      {
        title: "Merengue",
        description: "ballet",
        image:
          "https://conluzpropia.net/wp-content/uploads/2016/11/19-merengue.jpg",
        href: "",
      },
      {
        title: "Salsa",
        description: "ballet",
        image:
          "https://elcomercio.pe/resizer/EgWldo399rx74fkHzeN3yh2tKGE=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/FHZWMNE2KVECVNVKBDCTQSYDWY.jpg",
        href: "",
      },
      {
        title: "Reggaeton",
        description: "ballet",
        image:
          "https://www.lavoz.com.ar/resizer/_IrSx5TNh8zhM6_VzyO6HYty6jk=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GOJUBFGJFJE7BOAEHPRJIYST7A.jpg",
        href: "",
      },
      {
        title: "Punta",
        description: "ballet",
        image:
          "https://1.bp.blogspot.com/-KxUOjQJKvl8/VvHq7wz0DoI/AAAAAAAAFHQ/RwAi6EPBYFgRA4LLKU7ruXfpr-v16Cjww/s1600/maxresdefault%2B%25282%2529.jpg",
        href: "",
      },
      {
        title: "Bachata",
        description: "ballet",
        image:
          "https://www.larepublicaonline.com/wp-content/uploads/2019/12/5-5.jpg",
        href: "",
      },
      {
        title: "Samba",
        description: "ballet",
        image:
          "https://www.lavoz.com.ar/resizer/b5Ht6kKeWhILykgWyPHJXeMZfGY=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/W7K435GPXFALPKGN3HWU6GEFBY.jpg",
        href: "",
      },
      {
        title: "Coreografias para compotemcias",
        description: "ballet",
        image:
          "http://3.bp.blogspot.com/-hFGW0hx0l6U/VDsJsfdW7xI/AAAAAAAAPwI/NMmPCBndXuc/s1600/coreografia-de-15-grupal.jpg",
        href: "",
      },
    ],
  }),
  components: { ListDances },
};
</script>

<style>
</style>