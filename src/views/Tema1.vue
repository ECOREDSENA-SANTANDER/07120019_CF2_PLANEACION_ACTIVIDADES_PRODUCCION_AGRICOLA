<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Acciones de mejora
      .bg-color-3.mb-5(data-aos="fade-right")
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/1.svg', alt='')
          .col-sm-12.col-lg-8.p-cus-1
              p.mb-3 Una acción de mejora es una decisión o intervención planificada que se implementa con el propósito de corregir, optimizar o fortalecer un proceso, práctica o resultado, a partir del análisis de un diagnóstico previo. Su objetivo principal es incrementar la eficiencia, la calidad, la sostenibilidad y la competitividad dentro de una organización. 
              p.mb-0 En el ámbito de una empresa agrícola, una acción de mejora puede comprender desde la optimización de las prácticas de cultivo y la modernización de la gestión administrativa, hasta la incorporación de nuevas tecnologías o la reestructuración de estrategias comerciales. Todo ello debe realizarse teniendo en cuenta la disponibilidad de recursos y la coherencia con los objetivos estratégicos de la organización. 
      
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2  Tipos de acciones de mejora   
      p.mb-5(data-aos="fade-right") Las acciones de mejora se clasifican en diferentes tipos, según el propósito y el enfoque que tengan dentro de la organización agrícola. Conocer estas categorías es esencial para aplicarlas adecuadamente y obtener resultados efectivos. 
      .row.align-items-center.mb-5.titulo-icono-2(data-aos="fade-right")
        .col
          h3.mb-0.titulo-icono-2-text.px-0.py-2  Tipos de acciones de mejora  
      TabsA.color-acento-botones.mb-5(data-aos="fade-right")
        .tarjeta.bg-color-1.p-5(titulo="Acciones correctivas")
          h4 Definición
          p.mb-5 Eliminan las causas de problemas o no conformidades ya detectadas en los procesos, evitando su repetición. Son reactivas. 
          h4 Ejemplo agrícola
          p.mb-0 Si un manejo inadecuado del riego provoca pudrición en raíces de tomate, se ajusta la programación, se reparan los sistemas defectuosos o se cambia la técnica (ej. de aspersión a goteo). 
        .tarjeta.bg-color-1.p-5(titulo="Acciones preventivas")
          h4 Definición
          p.mb-5 Se anticipan a posibles fallos, riesgos o problemas antes de que ocurran, basándose en análisis de riesgos y tendencias. 
          h4 Ejemplo agrícola
          p.mb-0 En cultivos de maíz, se liberan insectos beneficiosos (mariquitas, avispas parasitoides) para prevenir plagas. Además, se refuerza el monitoreo e inspecciones periódicas para reducir el uso de pesticidas químicos.
        .tarjeta.bg-color-1.p-5(titulo="Acciones de mejora continua")
          h4 Definición
          p.mb-5 Son sistemáticas, planificadas y permanentes, buscan perfeccionar gradualmente procesos, productos o servicios, garantizando calidad y competitividad. 
          h4 Ejemplo agrícola
          p.mb-0 Implementar un programa de capacitación trimestral sobre técnicas de cultivo sostenible, manejo integrado de plagas, uso eficiente del agua y tecnologías innovadoras para mejorar rendimiento y sostenibilidad. 
        .tarjeta.bg-color-1.p-5(titulo="Acciones estratégicas")
          h4 Definición
          p.mb-5 Están alineadas con los objetivos de largo plazo y visión empresarial. Buscan transformar, innovar, diversificar y abrir nuevos mercados. 
          h4 Ejemplo agrícola
          p.mb-0 La empresa introduce un nuevo cultivo de alto valor comercial (ej. pitahaya o aguacate) con demanda internacional. Esto requiere inversión en infraestructura, capacitación y marketing, diversificando ingresos y reduciendo riesgos. 
        .tarjeta.bg-color-1.p-5(titulo="Acciones operativas")
          h4 Definición
          p.mb-5 Se enfocan en mejorar las actividades diarias, optimizando recursos, tiempos y métodos para aumentar eficiencia y reducir costos. 
          h4 Ejemplo agrícola
          p.mb-0 Para evitar pérdidas en la cosecha de uvas, se reorganiza la jornada laboral en horas frescas y se mejora la logística de transporte hacia el centro de procesamiento, reduciendo daños y conservando calidad.   
  
  
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Requisitos de funcionamiento 
  
      p.mb-5(data-aos="fade-right") Para que una acción de mejora sea efectiva y cumpla su propósito dentro de una organización, especialmente en una empresa agrícola, debe cumplir con ciertos requisitos fundamentales que aseguren su correcta implementación y seguimiento.
      SlyderF.circl-arrow.mb-5(columnas="col-md-6 col-lg-6 col-xl-4")(data-aos="fade-right")
        .tarjeta.bg-color-4.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/t1/6.svg' alt='')
          h4.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1 Comunicación efectiva 
          p.text-center.mb-0 Informar a los involucrados sobre objetivos, beneficios y responsabilidades, fomentando compromiso y colaboración. 
  
        .tarjeta.bg-color-4.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/t1/7.svg' alt='')
          h4.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1 Monitoreo y seguimiento 
          p.text-center.mb-0 Verificar avances de manera constante, identificar desviaciones y aplicar ajustes oportunos.  
        
        .tarjeta.bg-color-4.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/t1/8.svg' alt='')
          h4.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1 Planificación detallada 
          p.text-center.mb-0 Incluir cronogramas, responsables, recursos necesarios y métodos de ejecución bien estructurados. 
        
        .tarjeta.bg-color-4.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/t1/9.svg' alt='')
          h4.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1 Definición de objetivos y resultados 
          p.text-center.mb-0 Establecer metas específicas, medibles y con plazos definidos que faciliten la evaluación de resultados. 
        
        .tarjeta.bg-color-4.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/t1/3.svg' alt='')
          h4.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1 Diagnóstico confiable y completo 
          p.text-center.mb-0 La acción debe estar sustentada en un análisis claro de la situación actual, identificando causas raíz de problemas o áreas de oportunidad. 
        
        .tarjeta.bg-color-4.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/t1/4.svg' alt='')
          h4.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1 Alineación con la estrategia 
          p.text-center.mb-0 Debe contribuir directamente a los objetivos y planes estratégicos de la empresa, garantizando coherencia y respaldo institucional. 

        .tarjeta.bg-color-4.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/t1/5.svg' alt='')
          h4.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1 Adecuación a los recursos disponibles 
          p.text-center.mb-0 Considerar la capacidad técnica, financiera, humana y material para asegurar la viabilidad de la acción. 
  
  
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Aplicabilidad 
  
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-6.d-none.d-lg-block.bg-color-6.pt-5
          img.w-50.m-auto(src='@/assets/curso/temas/t1/10.svg', alt='')
        .col-sm-12.col-lg-6.d-flex.justify-content-center.align-items-center.bg-color-2.p-5
            p.mb-0 Las acciones de mejora son aplicables en diferentes niveles y áreas dentro de una organización agrícola, siempre que se ajusten a las necesidades detectadas en el diagnóstico y se alineen con los recursos y la estrategia institucional.  
  
      .row.justify-content-start.mb-5(data-aos="fade-right")
        .col-lg-11.position-relative
          .avatar.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/t1/11.svg", alt="alt").img250
          
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t1/12.svg", alt="alt").img100
              .col
                h4 Procesos productivos 
                p.mb-0 Incorporación de técnicas agrícolas avanzadas, manejo eficiente de cultivos, control integrado de plagas y uso racional de insumos y recursos naturales, con el fin de optimizar el rendimiento y garantizar la calidad. 
          
          .crd.crd--avatarHorizontal.bg-color-7.crd.py-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t1/13.svg", alt="alt").img100
              .col
                h4 Gestión administrativa y financiera 
                p.mb-0 Implementación de controles presupuestarios, optimización de costos, digitalización de registros y fortalecimiento de la planificación financiera para garantizar eficiencia y sostenibilidad económica. 
          
          .crd.crd--avatarHorizontal.bg-color-8.crd.py-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t1/14.svg", alt="alt").img100
              .col
                h4 Gestión del talento humano 
                p.mb-0 Capacitación continua, mejora de las condiciones laborales, organización adecuada del trabajo y promoción del compromiso y la motivación del equipo, fortaleciendo el capital humano de la empresa. 
          
          .crd.crd--avatarHorizontal.bg-color-7.crd.py-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t1/15.svg", alt="alt").img100
              .col
                h4 Sostenibilidad ambiental 
                p.mb-0 Aplicación de prácticas agroecológicas, gestión responsable de residuos, conservación del suelo y del agua, y cumplimiento riguroso de las normativas ambientales para asegurar la sostenibilidad del sistema productivo. 
          
          .crd.crd--avatarHorizontal.bg-color-8.crd.py-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t1/16.svg", alt="alt").img100
              .col
                h4 Comercialización y servicio al cliente 
                p.mb-0 Diversificación de canales de venta, desarrollo de estrategias de marketing, mejora en la atención al cliente y fortalecimiento de la imagen corporativa para incrementar la competitividad y presencia en el mercado. 

          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto.d-none.d-lg-block
                figure
                  img(src="@/assets/curso/temas/t1/16.svg", alt="alt").img100
              .col
                h4 Innovación tecnológica 
                p.mb-0 Adopción de tecnologías emergentes y métodos innovadores que impulsen la eficiencia, la productividad y la competitividad de la empresa agrícola en el corto, mediano y largo plazo. 
          

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-10
          .bg-color-3.py-4.px-4.br-2
            p.mb-0 #[b Nota:] la aplicabilidad correcta de las acciones de mejora asegura que los recursos sean utilizados de manera eficiente y que los resultados contribuyan efectivamente al crecimiento sostenible y la competitividad de la empresa agrícola. 


      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Criterios de definición
      
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-5.d-none.d-lg-block.bg-color-6.pt-5
          img.w-75.m-auto(src='@/assets/curso/temas/t1/18.svg', alt='')
        .col-sm-12.col-lg-7.d-flex.justify-content-center.align-items-center.bg-color-2.p-5
            p.mb-0 Para definir de manera adecuada una acción de mejora, es esencial tener en cuenta una serie de criterios que faciliten la selección y planificación de intervenciones efectivas, asegurando su alineación con los objetivos organizacionales y la realidad operativa de la empresa. 

      .bg-full-width.bg-fondo-2.mb-0(data-aos="fade-right")
        .p-full-width
          .row.justify-content-center.mb-5
            .col-sm-12.col-lg-9
              SlyderF.circl-arrow.mb-5(columnas="col-md-6 col-lg-6 col-xl-4")
                .tarjeta.bg-color-1.p-4
                  .row.justify-content-center.mb-4
                    .col-6
                      img(src='@/assets/curso/temas/t1/20.svg' alt='')
                  h4.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1  Relevancia 
                  p.text-center.mb-0 Orientar la acción a resolver problemas críticos o aprovechar oportunidades identificadas en el diagnóstico, asegurando un impacto significativo en los resultados de la empresa. 
                .tarjeta.bg-color-1.p-4
                  .row.justify-content-center.mb-4
                    .col-6
                      img(src='@/assets/curso/temas/t1/21.svg' alt='')
                  h4.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1  Viabilidad 
                  p.text-center.mb-0 Garantizar que la acción sea factible con los recursos disponibles (tiempo, personal, tecnología y presupuesto). 
                .tarjeta.bg-color-1.p-4
                  .row.justify-content-center.mb-4
                    .col-6
                      img(src='@/assets/curso/temas/t1/22.svg' alt='')
                  h4.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1  Impacto esperado 
                  p.text-center.mb-0 Prever los beneficios que generará la acción, priorizando aquellas con mayor potencial de mejora en eficiencia, calidad, rentabilidad o sostenibilidad. 
                .tarjeta.bg-color-1.p-4
                  .row.justify-content-center.mb-4
                    .col-6
                      img(src='@/assets/curso/temas/t1/23.svg' alt='')
                  h4.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1  Alineación estratégica 
                  p.text-center.mb-0 Asegurar que la acción contribuya a los objetivos y planes estratégicos de la organización, garantizando coherencia y apoyo institucional. 
                .tarjeta.bg-color-1.p-4
                  .row.justify-content-center.mb-4
                    .col-6
                      img(src='@/assets/curso/temas/t1/24.svg' alt='')
                  h4.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1  Medible 
                  p.text-center.mb-0 Definir resultados que puedan ser cuantificados o evaluados cualitativamente, lo que facilite su seguimiento y evaluación. 
                .tarjeta.bg-color-1.p-4
                  .row.justify-content-center.mb-4
                    .col-6
                      img(src='@/assets/curso/temas/t1/25.svg' alt='')
                  h4.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1  Simplicidad y claridad 
                  p.text-center.mb-0 Formular la acción de manera precisa, con objetivos definidos y pasos detallados que faciliten su implementación. 
                .tarjeta.bg-color-1.p-4
                  .row.justify-content-center.mb-4
                    .col-6
                      img(src='@/assets/curso/temas/t1/20.svg' alt='')
                  h4.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1  Sostenibilidad 
                  p.text-center.mb-0 Diseñar la acción de forma que pueda mantenerse en el tiempo sin generar impactos negativos o costos excesivos. 
               
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img.w-75.m-auto(src='@/assets/curso/temas/t1/19.png', alt='')

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Objetivos 

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-6.bg-color-2.p-5
          img.w-75.m-auto(src='@/assets/curso/temas/t1/27.svg', alt='Representa las características de los objetivos SMART: deben ser específicos (claros y definidos), medibles (cuantificables), alcanzables (posibles de lograr), realistas (coherentes con los recursos y capacidades) y delimitados en el tiempo (con plazos definidos).')
        .col-sm-12.col-lg-6.d-flex.justify-content-center.align-items-center.bg-color-6.p-5
            p.mb-0 Las acciones de mejora requieren objetivos bien definidos que orienten su diseño, implementación y evaluación. Estos objetivos actúan como una guía para el desarrollo de cualquier proyecto o plan de trabajo y, para ser efectivos, deben ser claros, específicos, medibles, alcanzables, realistas y delimitados en el tiempo, garantizando así su viabilidad y el adecuado seguimiento de los resultados. 

      .row.justify-content-center.cursor-pointer.mb-5(data-aos='fade-right')
        .col-xl-4.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/28.png", alt="")
            .crd_hover_txt--body.text-center
              h4.mb-3 Corregir deficiencias o problemas 
              p.mb-0 Atender las causas raíz de no conformidades o fallas detectadas para evitar su recurrencia y asegurar procesos más estables. 
        .col-xl-4.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .indicador--hover
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/29.png", alt="")
            .crd_hover_txt--body.text-center
              h4.mb-3 Optimizar procesos y recursos 
              p.mb-0 Mejorar la eficiencia operativa mediante un uso adecuado de los recursos, incrementando la productividad y reduciendo costos innecesarios
        .col-xl-4.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .indicador--hover
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/30.png", alt="")
            .crd_hover_txt--body.text-center
              h4.mb-3 Aumentar la calidad 
              p.mb-0 Elevar los estándares de productos, servicios o procesos para satisfacer de forma más efectiva las expectativas de clientes y usuarios. 
      
      .row.justify-content-center.cursor-pointer.mb-5(data-aos='fade-right')
        .col-xl-4.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/31.png", alt="")
            .crd_hover_txt--body.text-center
              h4.mb-3 Fomentar la sostenibilidad 
              p.mb-0 Implementar prácticas con impacto positivo sostenido en el tiempo, abarcando dimensiones económicas, ambientales y sociales. 
        .col-xl-4.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .indicador--hover
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/32.png", alt="")
            .crd_hover_txt--body.text-center
              h4.mb-3 Fortalecer la competitividad 
              p.mb-0 Desarrollar ventajas que diferencien a la organización en el mercado, facilitando la adaptación a cambios y nuevas demandas. 
        .col-xl-4.col-lg-4.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .indicador--hover
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/33.png", alt="")
            .crd_hover_txt--body.text-center
              h4.mb-3 Facilitar el seguimiento y control 
              p.mb-0 Establecer indicadores y parámetros medibles que permitan evaluar avances, resultados y aplicar mejoras de manera continua. 
  
  
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Indicadores 
      
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-3
          .bg-color-2.p-4.br-2
            p.mb-0 Los indicadores son herramientas de medición que permiten evaluar el grado de cumplimiento y el impacto de una acción de mejora. Son parámetros cuantitativos o cualitativos que reflejan el desempeño en relación con los objetivos planteados. 
        .col-sm-12.col-lg-9.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/34.svg', alt='')
  
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.bg-color-4.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/temas/t1/35.svg' alt='')
            h4.text-center.bg-color-9.w-fit.px-3.m-auto.mb-4.py-1 Claros y específicos 
            p.text-center.mb-0 Expresan de manera precisa aquello que se desea medir. 
  
        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.bg-color-4.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/temas/t1/36.svg' alt='')
            h4.text-center.bg-color-9.w-fit.px-3.m-auto.mb-4.py-1 Medibles 
            p.text-center.mb-0 Pueden cuantificarse o evaluarse de forma objetiva.

        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.bg-color-4.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/temas/t1/37.svg' alt='')
            h4.text-center.bg-color-9.w-fit.px-3.m-auto.mb-4.py-1 Relevantes 
            p.text-center.mb-0 Guardan relación directa con la acción de mejora que se implementa. 

        .col-sm-6.col-lg-3.mb-cus
          .tarjeta--boton.bg-color-4.p-4.hcard-1
            .row.justify-content-center.mb-3
              .col-6
                img(src='@/assets/curso/temas/t1/38.svg' alt='')
            h4.text-center.bg-color-9.w-fit.px-3.m-auto.mb-4.py-1 Temporales 
            p.text-center.mb-0 Permiten realizar un seguimiento en periodos definidos para observar avances. 
  
  
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 1.] Ejemplos indicadores
      .tabla-b.color-acento-contenido.mb-0(data-aos="fade-left")
        table.color-acento-contenido(alt="La tabla presenta ejemplos de indicadores aplicados en diferentes áreas de una empresa agrícola. En producción se mide el rendimiento por hectárea, en calidad el porcentaje de productos sin defectos y en recursos la reducción en el consumo de agua. En costos se evalúa la disminución de gastos operativos, en sostenibilidad el porcentaje de residuos reciclados y en satisfacción del cliente el nivel de valoración promedio. Estos indicadores permiten medir el desempeño y orientar acciones de mejora.")
          thead.bg-color-7
            tr
              th Área
              th Indicador
              th Descripción
          tbody
            tr
              td.fw-bold Producción
              td.text-left-cus Rendimiento por hectárea (%).
              td.text-left-cus Incremento del volumen producido por área cultivada.

            tr
              td.fw-bold Calidad
              td.text-left-cus % de productos sin defectos.
              td.text-left-cus Proporción de cosechas que cumplen estándares de calidad.

            tr
              td.fw-bold Recursos
              td.text-left-cus Reducción en consumo de agua (%).
              td.text-left-cus Disminución en litros de agua usados por cultivo.

            tr
              td.fw-bold Costos
              td.text-left-cus Reducción de costos operativos (%).
              td.text-left-cus Porcentaje de ahorro en insumos o mano de obra.

            tr
              td.fw-bold Sostenibilidad
              td.text-left-cus % de residuos reciclados.
              td.text-left-cus Cantidad de residuos gestionados adecuadamente.

            tr
              td.fw-bold Satisfacción cliente
              td.text-left-cus Nivel de satisfacción (escala 1-5).
              td.text-left-cus Evaluación promedio de clientes o consumidores.
  
  
  
  
  
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
