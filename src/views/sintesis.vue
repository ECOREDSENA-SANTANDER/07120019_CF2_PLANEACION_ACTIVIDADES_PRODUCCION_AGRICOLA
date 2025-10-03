<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La implementación de un plan de acción en una empresa agrícola constituye la formalización de las acciones de mejora derivadas de diagnósticos organizacionales, técnicos o productivos. Este instrumento, estructurado de manera lógica y secuencial, permite transformar observaciones o problemas detectados en intervenciones concretas orientadas al cumplimiento de los objetivos institucionales. Su diseño integra componentes fundamentales como el diagnóstico del problema, la definición de objetivos claros, la identificación de actividades específicas, la asignación de responsables, los plazos de ejecución, los indicadores de seguimiento y los recursos necesarios, garantizando así una gestión eficiente, medible y flexible frente a los resultados. En este proceso, los recursos administrativos desempeñan un papel central, ya que abarcan el talento humano capacitado, el presupuesto financiero, las herramientas tecnológicas y la infraestructura material que, en conjunto, hacen posible la puesta en marcha y sostenibilidad de las acciones planificadas. Una adecuada gestión de estos recursos permite optimizar tiempos, reducir costos, coordinar equipos y fundamentar las decisiones en información confiable. En síntesis, la articulación entre un plan de acción bien estructurado y el apoyo estratégico de los recursos administrativos fortalece la capacidad de la empresa agrícola para adaptarse, innovar y mejorar de manera continua, asegurando su competitividad y sostenibilidad a largo plazo. 
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En el componente acción de mejora y programación de recursos se presentan las acciones de mejora, sus tipos, objetivos, criterios de aplicación y los indicadores que permiten medirlas. También se describen los recursos administrativos de la empresa, sus tipos y características. Con esta información, se puede elaborar un plan de acción para programar los recursos, detallando sus etapas, componentes y la importancia para la eficiencia de la empresa agrícola.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
