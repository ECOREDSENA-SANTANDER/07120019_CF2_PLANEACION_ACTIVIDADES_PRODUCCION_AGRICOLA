<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-7
        .row.justify-content-center.mb-4
          .col-sm-12.col-lg-9
              p.mb-0 En el contexto actual del sector agrícola, caracterizado por su dinamismo y la constante evolución de las demandas del mercado, la gestión eficiente y estratégica de las empresas resulta indispensable para garantizar su sostenibilidad y competitividad. En este escenario, la implementación de acciones de mejora constituye una herramienta clave para identificar, analizar y corregir deficiencias en los procesos productivos, administrativos y comerciales, lo que permite optimizar el uso de recursos, elevar la calidad de los productos y fortalecer la posición de la empresa en el mercado. 
          .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/intro/1.svg', alt='')

        .bg-color-1.p-4.br-1
          p.mb-0 El éxito de estas acciones depende en gran medida de la adecuada administración de los recursos administrativos, entre los que se incluyen el capital humano, financiero, tecnológico y material. Estos recursos no solo aseguran la operatividad cotidiana, sino que también representan el soporte fundamental para la planificación, el control y la toma de decisiones. Tales procesos adquieren especial relevancia en un entorno agrícola sujeto a factores externos como la variabilidad climática, las fluctuaciones de precios y las crecientes exigencias regulatorias. 
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.png', alt='')



    .row.justify-content-center.align-items-center.mb-5
      .col-sm-12.col-lg-5
        .bg1.p-3.mb-lg-0.mb-4
          p.mb-0.mb-lg-2.my-0.my-lg-1 Para lograr que las mejoras propuestas se traduzcan en resultados tangibles, es indispensable contar con un plan de acción estructurado que organice de manera lógica y temporal las actividades a desarrollar, asigne responsabilidades definidas, incorpore indicadores de seguimiento y contemple mecanismos de evaluación. Este plan actúa como una hoja de ruta que orienta a la empresa en la implementación eficaz de sus estrategias, asegurando coherencia con los objetivos institucionales y flexibilidad frente a los cambios del entorno. 
      .col-sm-12.col-lg-7
        .bg-color-2.p-5.br-1
          .row.justify-content-center.align-items-center
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img(src='@/assets/curso/temas/intro/3.svg')
            .col-sm-12.col-lg-8
              p.mb-0 En conjunto, la integración de acciones de mejora, la gestión eficiente de los recursos administrativos y un plan de acción sólido constituyen pilares esenciales para fortalecer la eficiencia operativa, la sostenibilidad y la resiliencia de las empresas agrícolas, contribuyendo así a su desarrollo integral y al bienestar de las comunidades que dependen de ellas. 

    .bg-full-width.bg-fondo-1.mb-0(data-aos="fade-right")
      .p-full-width
        .row.justify-content-center.align-items-center           
          .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
