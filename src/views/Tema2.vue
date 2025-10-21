<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Recursos de actividades administrativas
      
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t2/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En una empresa agrícola, las actividades administrativas cumplen un papel esencial al permitir planificar, organizar, dirigir y controlar tanto los procesos productivos como los de gestión. Para garantizar que estas funciones se desarrollen de manera eficiente, es indispensable disponer de recursos administrativos adecuados. Dichos recursos se clasifican en distintos tipos según su naturaleza y función, y constituyen la base para una gestión efectiva, sostenible y alineada con los objetivos estratégicos de la organización. 
        

      .tarjeta.bg-color-4.p-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t2/2.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.titcus-1 Video: LOS RECURSOS DE UNA ORGANIZACIÓN explicados con EJEMPLOS 
                p.mb-0 Para profundizar en el tema, se invita a consultar el siguiente enlace: 
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=mUeGnTMjCp0&t=34s" target="_blank")
                  span Ir al sitio
                  i.fas.fa-play

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Tipos de recursos 

      p.mb-5(data-aos="fade-right") La gestión adecuada de los recursos es de gran importancia para una administración eficiente ya que permite mejorar la planificación estratégica, optimizar costos, asegurar el cumplimiento normativo y facilitar la toma de decisiones acertadas, contribuyendo al éxito y sostenibilidad de la empresa agrícola. 
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-9
          img(src='@/assets/curso/temas/t2/3.svg', alt='')

      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 2.] Tipos de recursos
      .tabla-b.color-acento-contenido.mb-5(data-aos="fade-left")
        table.color-acento-contenido(alt="La tabla describe los principales tipos de recursos necesarios en la gestión agrícola: recursos humanos (personal, capacitación y asesoría externa), financieros (presupuesto, inversiones y manejo de créditos), tecnológicos (sistemas de gestión, equipos y conectividad), materiales y físicos (infraestructura, suministros y documentación) e informativos (bases de datos, información de mercado y reportes). Estos recursos facilitan la operación eficiente y la toma de decisiones.")
          thead.bg-color-7 
            tr
              th.h4 Tipo de recurso
              th.h4 Descripción
          tbody
            tr
              td.fw-bold Recursos humanos
              td.text-left-cus 
                ul.lista-ul--color.color-secundario.mb-0
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Personal administrativo: gerentes, contadores, asistentes, analistas y técnicos administrativos.
                  li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Capacitación y desarrollo del equipo para mejorar competencias en gestión, finanzas y administración agrícola.
                  li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Servicios de asesoría externa: consultores legales, contadores, auditores.

            tr
              td.fw-bold Recursos financieros
              td.text-left-cus 
                ul.lista-ul--color.color-secundario.mb-0
                  li.d-flex
                    i.fas.fa-circle-check 
                    p.mb-0 Presupuesto para la operación administrativa, pago de salarios, servicios y suministros.
                  li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Fondos para inversiones en tecnologías administrativas (#[i software], sistemas).
                  li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Control de ingresos y egresos, manejo de créditos y financiamientos.

            tr
              td.fw-bold Recursos tecnológicos
              td.text-left-cus 
                ul.lista-ul--color.color-secundario.mb-0
                  li.d-flex
                    i.fas.fa-circle-check 
                    p.mb-0 Sistemas de gestión administrativa, (Planificación de Recursos Empresariales (ERP), #[i software] contable, hojas de cálculo).
                  li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Equipos informáticos: computadoras, impresoras, dispositivos móviles.
                  li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Conectividad y herramientas digitales para comunicación interna y externa.

            tr
              td.fw-bold Recursos materiales y físicos
              td.text-left-cus 
                ul.lista-ul--color.color-secundario.mb-0
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Infraestructura física: oficinas, mobiliario, archivos.
                  li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Materiales de oficina: papelería, equipos de impresión, suministros varios.
                  li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Documentación y registros: contratos, facturas, reportes.

            tr
              td.fw-bold Recursos informativos
              td.text-left-cus 
                ul.lista-ul--color.color-secundario.mb-0
                  li.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Bases de datos actualizadas sobre proveedores, clientes, normativas legales y financieras.
                  li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Información sobre mercado agrícola, precios, tendencias y competencia.
                  li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Reportes de producción, inventarios y ventas para la toma de decisiones.
           

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2  Características de los recursos en el área administrativa de las empresas agrícolas 
      p.mb-5 Los recursos utilizados en la gestión administrativa de una empresa agrícola presentan una serie de características que los hacen esenciales para el buen funcionamiento organizacional. 
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-8
          img(src='@/assets/curso/temas/t2/4.svg', alt='')


      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-6
            LineaTiempoD.color-secundario
              .row(numero="1" titulo="Limitados")
                .col-sm-12.col-lg-12
                  p.mb-0 Son finitos (personal, presupuesto, tecnología) y requieren una gestión eficiente para optimizar su uso. 
              .row(numero="2" titulo="Específicos")
                .col-sm-12.col-lg-12
                  p.mb-0 Cada recurso tiene un propósito definido, como un #[i software] contable para la gestión financiera. 
              .row(numero="3" titulo="Complementarios")
                .col-sm-12.col-lg-12
                  p.mb-0 Recursos humanos, financieros, tecnológicos y materiales deben integrarse de manera coordinada para cumplir los objetivos administrativos. 
              .row(numero="4" titulo="Planificados")
                .col-sm-12.col-lg-12
                  p.mb-0 Su utilización debe estar basada en un plan estratégico que maximice su aprovechamiento y minimice desperdicios. 
              .row(numero="5" titulo="Adaptables")
                .col-sm-12.col-lg-12
                  p.mb-0 Deben ajustarse a cambios en la organización, el mercado o la normativa legal. 
              .row(numero="6" titulo="Medibles")
                .col-sm-12.col-lg-12
                  p.mb-0 Su efectividad se evalúa mediante indicadores, como productividad, cumplimiento de metas o control presupuestario. 
              .row(numero="7" titulo="Sustentables")
                .col-sm-12.col-lg-12
                  p.mb-0 Deben gestionarse de modo que aseguren la continuidad del negocio y consideren los impactos sociales y ambientales. 
                
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/5.png', alt='')

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-10
          .bg-color-10.py-4.px-4.br-1
            p.mb-0 #[b Nota:] las características de los recursos administrativos reflejan su importancia como activos estratégicos para el adecuado funcionamiento y desarrollo de la empresa agrícola. Una gestión eficiente de estos recursos no solo garantiza la operatividad diaria, sino que también contribuye a optimizar procesos, reducir riesgos y asegurar la competitividad y sostenibilidad del negocio agrícola. 





  </template>

<script>
export default {
  name: 'Tema1',
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
