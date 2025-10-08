<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Plan de acción: definición
      .row.justify-content-center.mb-5.align-items-center(data-aos="fade-right")
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/1.png', alt='')
        .col-sm-12.col-lg-5
            p.mb-0  El plan de acción es una herramienta de gestión que facilita la organización, estructuración y ejecución de actividades orientadas al cumplimiento de objetivos específicos, como la implementación de acciones de mejora. En el ámbito agrícola, constituye un instrumento esencial para garantizar la eficiencia, la sostenibilidad y la competitividad en los distintos procesos del negocio. 
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img.w-75.m-auto(src='@/assets/curso/temas/t3/2.svg', alt='')
        
      .tarjeta.bg-color-4.p-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t2/2.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-2.titcus-1 Video: Plan de acción 
                p.mb-0 Para profundizar en el tema, se invita a consultar el siguiente enlace: 
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=eFJOKJMVsQs" target="_blank")
                  span Ir al sitio
                  i.fas.fa-play
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Características del plan de acción 
      p.mb-5(data-aos="fade-right") Para que un plan de acción en el ámbito agrícola sea efectivo, debe cumplir con una serie de criterios que garanticen su claridad, organización y capacidad de adaptación a las condiciones cambiantes del entorno. Estos criterios permiten estructurar las actividades de manera estratégica, asegurando que los objetivos se alcancen de forma eficiente y medible. A continuación, se presenta las principales características que debe tener un plan de acción, junto con ejemplos aplicados al contexto agrícola. 
      .row.justify-content-center.mb-5.align-items-center(data-aos="fade-right")
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/3.png', alt='')
        .col-sm-12.col-lg-9
          AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
            .row.justify-content-center.align-items.p-2(titulo="Específico ")
              .col-lg-11.mb-lg-0.mb-4
                p.mb-4 Define de manera clara qué se hará, quién lo realizará, cuándo y cómo. Evita generalidades y facilita la ejecución práctica. 
                p.mb-3.fw-bold Ejemplo
                p.mb-5 Instalar un sistema de riego por goteo en el cultivo de arándanos del lote norte, con apoyo del equipo técnico de campo, durante la primera quincena de septiembre, utilizando tubería de 16 mm y goteros auto compensantes a 30 cm de distancia. 
          
            .row.justify-content-center.align-items.p-2(titulo="Temporal")
              .col-lg-11.mb-lg-0.mb-4
                p.mb-4 Establece un marco de tiempo definido para cada actividad, lo que permite controlar el avance y garantizar el cumplimiento de plazos. 
                p.mb-3.fw-bold Ejemplo
                p.mb-5  La siembra de maíz híbrido se realizará entre el 10 y el 20 de agosto, considerando que la ventana óptima de siembra según el pronóstico climático corresponde a ese periodo. 

            .row.justify-content-center.align-items.p-2(titulo="Responsable")
              .col-lg-11.mb-lg-0.mb-4
                p.mb-4 Cada tarea debe asignar un responsable directo, lo que fomenta el compromiso, la organización y la rendición de cuentas. 
                p.mb-3.fw-bold Ejemplo
                p.mb-5  El ingeniero agrónomo Julio Flórez será el responsable de supervisar la fertilización del cultivo de tomate en el invernadero 3 durante el ciclo productivo de septiembre a noviembre. 

            .row.justify-content-center.align-items.p-2(titulo="Secuencial y lógico")
              .col-lg-11.mb-lg-0.mb-4
                p.mb-4 Las actividades deben organizarse en un orden coherente, donde cada etapa prepare el camino para la siguiente.  
                p.mb-3.fw-bold Ejemplo
                p.mb-5  Primero se realizará la preparación del terreno (1 al 5 de agosto), luego la nivelación y análisis de suelo (6 al 8 de agosto), y finalmente la siembra mecanizada (9 al 10 de agosto), asegurando un proceso ordenado en el cultivo de sorgo. 

            .row.justify-content-center.align-items.p-2(titulo="Flexible")
              .col-lg-11.mb-lg-0.mb-4 
                p.mb-4 Debe permitir ajustes ante imprevistos (clima, recursos o mercado), sin perder el enfoque del objetivo. 
                p.mb-3.fw-bold Ejemplo
                p.mb-5 Si las lluvias se adelantan en septiembre, se postergará la aplicación de fungicida en el cultivo de papa para evitar el lavado del producto, reprogramándola según el monitoreo climático.  

            .row.justify-content-center.align-items.p-2(titulo="Medible")
              .col-lg-11.mb-lg-0.mb-4
                p.mb-4 Establece indicadores claros que permitan evaluar el cumplimiento, impacto y efectividad de la acción. 
                p.mb-3.fw-bold Ejemplo
                p.mb-5 Se espera obtener un rendimiento de 80 toneladas por hectárea en el cultivo de caña. El éxito se medirá por el rendimiento final, los costos por hectárea y el porcentaje de pérdidas postcosecha.  
 
      .row.align-items-center.mb-5.titulo-icono
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Etapas del plan de acción 
      
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-6.d-flex.justify-content-center.align-items-center.bg-color-11.p-5
            p.mb-0 La elaboración de un plan de acción en una empresa agrícola implica seguir un proceso estructurado que garantice claridad en los objetivos, eficiencia en la ejecución y sostenibilidad en los resultados. Este proceso facilita organizar las actividades de manera lógica, asignar adecuadamente los recursos disponibles y establecer mecanismos de seguimiento y mejora continua. 
        .col-sm-12.col-lg-6.d-none.d-lg-block.bg-color-6.p-5
          img.w-75.m-auto(src='@/assets/curso/temas/t3/4.svg', alt='')


      p.mb-5(data-aos="fade-right") A continuación, se presentan las etapas esenciales que conforman un plan de acción agrícola: 
      .bg-full-width.bg-fondo-2.mb-0(data-aos="fade-right")
        .p-full-width
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img.w-75.m-auto(src='@/assets/curso/temas/t3/5.png', alt='')
            .col-sm-12.col-lg-9
              SlyderF.circl-arrow.mb-5(columnas="col-md-6 col-lg-6 col-xl-4")
                .tarjeta.bg-color-1.p-4
                  h4.mt-5.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1  Diagnóstico inicial  
                  p.text-center.mb-0  Analizar la situación actual para identificar problemas, brechas y oportunidades en las áreas agrícolas, administrativas, comerciales o ambientales. 
                
                .tarjeta.bg-color-1.p-4
                  h4.mt-5.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1 Definición de objetivos    
                  p.text-center.mb-0 Establecer lo que se busca alcanzar con el plan, asegurando que los objetivos sean SMART (específicos, medibles, alcanzables, relevantes y con tiempo definido). 

                .tarjeta.bg-color-1.p-4
                  h4.mt-5.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1   Identificación de actividades clave 
                  p.text-center.mb-0 Desglosar en acciones concretas y ordenadas todo lo necesario para lograr los objetivos, asegurando que cada actividad tenga un propósito claro. 

                .tarjeta.bg-color-1.p-4
                  h4.mt-5.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1  Asignación de recursos  
                  p.text-center.mb-0 Determinar los recursos humanos, técnicos, financieros y materiales requeridos para ejecutar cada actividad de manera eficiente. 

                .tarjeta.bg-color-1.p-4
                  h4.mt-5.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1  Designación de responsables  
                  p.text-center.mb-0 Identificar las personas o equipos encargados de cada actividad, lo que favorece la coordinación, el liderazgo y la rendición de cuentas. 

                .tarjeta.bg-color-1.p-4
                  h4.mt-5.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1  Elaboración del cronograma  
                  p.text-center.mb-0 Definir un calendario de inicio y fin para cada tarea, considerando la secuencia lógica y las dependencias entre actividades. 

                .tarjeta.bg-color-1.p-4
                  h4.mt-5.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1   Ejecución del plan 
                  p.text-center.mb-0 Poner en marcha las actividades programadas siguiendo el cronograma y garantizando acompañamiento técnico y liderazgo en la gestión. 

                .tarjeta.bg-color-1.p-4
                  h4.mt-5.text-center.bg-color-5.w-fit.px-3.m-auto.mb-4.py-1   Monitoreo, evaluación y ajuste 
                  p.text-center.mb-0 Realizar un seguimiento periódico de los avances mediante indicadores y, de ser necesario, introducir ajustes para optimizar la efectividad del plan. 

      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Tipos de planes de acción 
      .bg-full-width.bg-fondo-3.mb-5(data-aos="fade-right")
        .p-full-width
          .bg-color-12.p-4.br-1
            SlyderA(tipo="b")(data-aos="zoom-in-left")
              .row.justify-content-center.align-items.p-0.p-lg-4.mb-0
                .col-lg-11
                  .row.justify-content-center.mb-0
                    .col-sm-12.col-lg-4.mb-cus
                      .row.align-items-center.mb-5.titulo-icono-2(data-aos="fade-right")
                        .col
                          h3.mb-0.titulo-icono-2-text.px-0.py-2 Operativo
                      p.mb-5 Se centra en las actividades rutinarias y del día a día, como el manejo de cultivos, la operación de maquinaria, la logística de cosecha o la planificación y distribución de insumos. 
                      p.mb-3.fw-bold Ejemplo
                      p.mb-0 #[b Objetivo:] optimizar la eficiencia del sistema de riego por aspersión en el cultivo de lechuga. 

                    .col-sm-12.col-lg-8
                      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
                          p.mb-0 #[b Tabla 3.] Ejemplo plan de acción operativo
                      .tabla-b.color-acento-contenido.mb-0(data-aos="fade-left")
                        table.color-acento-contenido(alt="La tabla presenta un ejemplo de plan de acción operativo enfocado en el uso eficiente del agua. Incluye actividades como revisar aspersores, programar riegos y capacitar al personal. El responsable es el supervisor de campo, con recursos como mano de obra, cronogramas y herramientas. El tiempo estimado es de 2 semanas y los indicadores son la reducción del consumo de agua y la mejora del rendimiento por hectárea.")
                          thead.bg-color-7
                            tr
                              th.h4.w-cus-1 Tipo de recurso
                              th.h4 Descripción
                          tbody
                            tr
                              td.fw-bold.text-left-cus  Actividades
                              td.text-left-cus 
                                ul.lista-ul--color.color-secundario.mb-0
                                  li.d-flex
                                    i.fas.fa-circle-check
                                    p.mb-0  Revisar estado de los aspersores.
                                  li.d-flex
                                    i.fas.fa-circle-check
                                    p.mb-0 Programar riegos por turnos.
                                  li.d-flex
                                    i.fas.fa-circle-check
                                    p.mb-0 Capacitar al personal en uso eficiente del agua.

                            tr
                              td.fw-bold.text-left-cus  Responsable
                              td.text-left-cus  Supervisor de campo.

                            tr
                              td.fw-bold.text-left-cus  Recursos
                              td.text-left-cus  Mano de obra, cronogramas, herramientas, cronómetro.

                            tr
                              td.fw-bold.text-left-cus  Tiempo estimado
                              td.text-left-cus  2 semanas.

                            tr
                              td.fw-bold.text-left-cus  Indicadores
                              td.text-left-cus  Reducción del consumo de agua (litros/ha), mejora del rendimiento por hectárea.
            

              .row.justify-content-center.align-items.p-0.p-lg-4.mb-0
                .col-lg-11
                  .row.justify-content-center.mb-0
                    .col-sm-12.col-lg-4.mb-cus
                      .row.align-items-center.mb-5.titulo-icono-2(data-aos="fade-right")
                        .col
                          h3.mb-0.titulo-icono-2-text.px-0.py-2 Correctivo
                      p.mb-5 Tiene como propósito solucionar problemas ya identificados, tales como la presencia de plagas, bajos niveles de rendimiento productivo o fallas en los procesos de comercialización.
                      p.mb-3.fw-bold Ejemplo
                      p.mb-0 #[b Objetivo:] reducir las pérdidas de producto durante el transporte desde la finca hasta el centro de acopio.

                    .col-sm-12.col-lg-8
                      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
                          p.mb-0 #[b Tabla 4.] Ejemplo plan de acción correctivo
                      .tabla-b.color-acento-contenido.mb-0(data-aos="fade-left")
                        table.color-acento-contenido(alt="La tabla muestra un plan de acción correctivo orientado a mejorar el embalaje y transporte. Incluye actividades como evaluar daños, cambiar cajas y capacitar transportistas. El responsable es el jefe de logística, con recursos como cajas plásticas y manuales de transporte. El tiempo estimado es de 3 semanas y los indicadores son la reducción de pérdidas postcosecha y la satisfacción del cliente final.")
                            thead.bg-color-7
                              tr
                                th.h4.w-cus-1 Tipo de recurso
                                th.h4 Descripción
                            tbody
                              tr
                                td.fw-bold.text-left-cus Actividades
                                td.text-left-cus 
                                  ul.lista-ul--color.color-secundario.mb-0
                                    li.d-flex
                                      i.fas.fa-circle-check
                                      p.mb-0 Evaluar daños en embalaje actual.
                                    li.d-flex
                                      i.fas.fa-circle-check
                                      p.mb-0 Cambiar tipo de cajas por otras más resistentes.
                                    li.d-flex
                                      i.fas.fa-circle-check
                                      p.mb-0 Capacitar a transportistas sobre carga segura.

                              tr
                                td.fw-bold.text-left-cus Responsable
                                td.text-left-cus Jefe de logística.

                              tr
                                td.fw-bold.text-left-cus Recursos
                                td.text-left-cus Nuevas cajas plásticas, manual de transporte seguro, tiempo de capacitación.

                              tr
                                td.fw-bold.text-left-cus Tiempo estimado
                                td.text-left-cus 3 semanas.

                              tr
                                td.fw-bold.text-left-cus Indicadores
                                td.text-left-cus Reducción de pérdidas postcosecha (%), satisfacción del cliente final.

              .row.justify-content-center.align-items.p-0.p-lg-4.mb-0
                .col-lg-11
                  .row.justify-content-center.mb-0
                    .col-sm-12.col-lg-4.mb-cus
                      .row.align-items-center.mb-5.titulo-icono-2(data-aos="fade-right")
                        .col
                          h3.mb-0.titulo-icono-2-text.px-0.py-2 Preventivo
                      p.mb-5 Está orientado a anticiparse a posibles riesgos o contingencias, implementando acciones que reduzcan la probabilidad de que ocurran problemas futuros, como la preparación de drenajes para la temporada de lluvias o el mantenimiento preventivo de equipos.
                      p.mb-3.fw-bold Ejemplo
                      p.mb-0 #[b Objetivo:] prevenir la aparición de plagas en el cultivo de tomate durante la temporada de lluvias. 

                    .col-sm-12.col-lg-8
                      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
                          p.mb-0 #[b Tabla 5.] Ejemplo plan de acción preventivo 
                      .tabla-b.color-acento-contenido.mb-0(data-aos="fade-left")
                        table.color-acento-contenido(alt="La tabla presenta un plan de acción preventivo para el cultivo, con actividades como aplicar bioinsumos, limpiar el follaje e instalar trampas cromáticas. El responsable es el técnico fitosanitario, los recursos incluyen bioinsumos, personal y trampas, con un tiempo estimado de un mes y como indicadores el control de infestación y cumplimiento en la aplicación.")
                            thead.bg-color-7
                              tr
                                  th.h4.w-cus-1 Tipo de recurso
                                  th.h4 Descripción
                            tbody
                              tr
                                td.fw-bold.text-left-cus Actividades
                                td.text-left-cus 
                                  ul.lista-ul--color.color-secundario.mb-0
                                    li.d-flex
                                      i.fas.fa-circle-check
                                      p.mb-0 Aplicación preventiva de bioinsumos.
                                    li.d-flex
                                      i.fas.fa-circle-check
                                      p.mb-0 Limpieza regular del follaje.
                                    li.d-flex
                                      i.fas.fa-circle-check
                                      p.mb-0 Instalación de trampas cromáticas.

                              tr
                                td.fw-bold.text-left-cus Responsable
                                td.text-left-cus Técnico fitosanitario.

                              tr
                                td.fw-bold.text-left-cus Recursos
                                td.text-left-cus Bioinsumos orgánicos, personal de campo, trampas.

                              tr
                                td.fw-bold.text-left-cus Tiempo estimado
                                td.text-left-cus 1 mes (inicio de temporada).

                              tr
                                td.fw-bold.text-left-cus Indicadores
                                td.text-left-cus Niveles de infestación bajo umbral, frecuencia de aplicación cumplida.

              .row.justify-content-center.align-items.p-0.p-lg-4.mb-0
                .col-lg-11
                  .row.justify-content-center.mb-0
                    .col-sm-12.col-lg-4.mb-cus
                      .row.align-items-center.mb-5.titulo-icono-2(data-aos="fade-right")
                        .col
                          h3.mb-0.titulo-icono-2-text.px-0.py-2 Estratégico
                      p.mb-5 Se relaciona con objetivos de largo plazo que buscan garantizar la sostenibilidad, el crecimiento y la competitividad del negocio agrícola. Incluye acciones como la diversificación de cultivos, la obtención de certificaciones de calidad u orgánicas, o la apertura a nuevos mercados.
                      p.mb-3.fw-bold Ejemplo
                      p.mb-0 #[b Objetivo:] desarrollar una línea de productos derivados del café (vino, café tostado y molido, dulces y mermeladas) para ampliar la oferta comercial y acceder a nuevos segmentos de mercado.

                    .col-sm-12.col-lg-8
                      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
                          p.mb-0 #[b Tabla 6.] Ejemplo plan de acción estratégica
                      .tabla-b.color-acento-contenido.mb-0(data-aos="fade-left")
                        table.color-acento-contenido(alt="La tabla muestra un plan de acción estratégico que incluye estudio de mercado, diseño de marca y adquisición de equipos. El responsable es el coordinador de innovación, con recursos como consultores, software y presupuesto. Se estima un tiempo de seis meses y los indicadores son productos desarrollados, ventas iniciales y obtención del registro sanitario.")
                            thead.bg-color-7
                              tr
                                  th.h4.w-cus-1 Tipo de recurso
                                  th.h4 Descripción
                            tbody
                              tr
                                td.fw-bold.text-left-cus Actividades
                                td.text-left-cus 
                                  ul.lista-ul--color.color-secundario.mb-0
                                    li.d-flex
                                      i.fas.fa-circle-check
                                      p.mb-0 Estudio de mercado.
                                    li.d-flex
                                      i.fas.fa-circle-check
                                      p.mb-0 Diseño de etiqueta y marca.
                                    li.d-flex
                                      i.fas.fa-circle-check
                                      p.mb-0 Adquisición de equipo básico de procesamiento.

                              tr
                                td.fw-bold.text-left-cus Responsable
                                td.text-left-cus Coordinador de innovación / agregado de valor.

                              tr
                                td.fw-bold.text-left-cus Recursos
                                td.text-left-cus Consultores externos, software de diseño, presupuesto de inversión.

                              tr
                                td.fw-bold.text-left-cus Tiempo estimado
                                td.text-left-cus 6 meses.

                              tr
                                td.fw-bold.text-left-cus Indicadores
                                td.text-left-cus Nuevos productos desarrollados, ventas iniciales, registro sanitario logrado.

              .row.justify-content-center.align-items.p-0.p-lg-4.mb-0
                .col-lg-11
                  .row.justify-content-center.mb-0
                    .col-sm-12.col-lg-4.mb-cus
                      .row.align-items-center.mb-5.titulo-icono-2(data-aos="fade-right")
                        .col
                          h3.mb-0.titulo-icono-2-text.px-0.py-2 Contingencia
                      p.mb-5 Se elabora para dar respuesta a situaciones de emergencia o imprevistos que puedan afectar el normal desarrollo de la actividad agrícola, como sequías, heladas, brotes de enfermedades o crisis económicas. Este tipo de plan permite reaccionar de manera oportuna y reducir el impacto negativo de los eventos inesperados.
                      p.mb-3.fw-bold Ejemplo
                      p.mb-0 #[b Objetivo:] implementar medidas de respuesta frente a una sequía prolongada que compromete el rendimiento del cultivo de maíz, mediante el uso de sistemas de riego alternativos y prácticas de conservación de humedad en el suelo.

                    .col-sm-12.col-lg-8
                      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
                          p.mb-0 #[b Tabla 7.] Ejemplo plan de acción de contingencia
                      .tabla-b.color-acento-contenido.mb-0(data-aos="fade-left")
                        table.color-acento-contenido(alt="La tabla presenta un plan de acción de contingencia para responder a emergencias climáticas, con actividades como activar riego de emergencia, priorizar parcelas y solicitar apoyos. Los responsables son el encargado de producción y el administrador, con recursos de riego alternativo, presupuesto y gestión institucional. Se ejecuta de forma inmediata y se mide con área rescatada, continuidad productiva y pérdidas mitigadas.")
                            thead.bg-color-7
                              tr
                                  th.h4.w-cus-1 Tipo de recurso
                                  th.h4 Descripción
                            tbody

                              tr
                                td.fw-bold.text-left-cus Actividades
                                td.text-left-cus 
                                  ul.lista-ul--color.color-secundario.mb-0
                                    li.d-flex
                                      i.fas.fa-circle-check
                                      p.mb-0 Activar sistema de riego de emergencia.
                                    li.d-flex
                                      i.fas.fa-circle-check
                                      p.mb-0  Priorizar parcelas clave.
                                    li.d-flex
                                      i.fas.fa-circle-check
                                      p.mb-0  Solicitar apoyo institucional (subsidios o ayudas).

                              tr
                                td.fw-bold.text-left-cus Responsable
                                td.text-left-cus Encargado de producción + administrador general.

                              tr
                                td.fw-bold.text-left-cus Recursos
                                td.text-left-cus Riego alternativo, presupuesto de emergencia, relaciones institucionales.

                              tr
                                td.fw-bold.text-left-cus Tiempo estimado
                                td.text-left-cus Inmediato - según duración del evento climático.

                              tr
                                td.fw-bold.text-left-cus Indicadores
                                td.text-left-cus Porcentaje de área rescatada, continuidad de la producción, nivel de pérdidas mitigadas.





























      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Importancia 
      
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-3
          .bg-color-6.p-4.mb-3.br-1
            p.mb-0 El plan de acción es una herramienta esencial para garantizar el éxito, la eficiencia y la sostenibilidad de las actividades agrícolas. Su importancia se refleja en diversos aspectos clave: 
          
          img.d-none.d-lg-block(src='@/assets/curso/temas/t3/6.png', alt='')
        .col-sm-12.col-lg-9
          AcordionA.activo(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-left")
            .row.justify-content-center.align-items.p-2(titulo="Organiza y estructura el trabajo agrícola: ")
              .col-lg-11.mb-lg-0.mb-4
                p.mb-0 Permite descomponer tareas complejas en actividades claras y ordenadas, facilitando que el equipo conozca qué hacer, cómo y en qué momento. Esto evita la improvisación y favorece una ejecución más eficiente.
            .row.justify-content-center.align-items.p-2(titulo="Facilita la coordinación entre áreas: ")
              .col-lg-11.mb-lg-0.mb-4
                p.mb-0 La actividad agrícola no se limita al trabajo en campo; también integra aspectos administrativos, financieros y comerciales. Un plan de acción bien diseñado asegura que todas estas áreas trabajen de manera alineada, compartiendo objetivos y tiempos.

            .row.justify-content-center.align-items.p-2(titulo="Anticipa problemas y controla desviaciones: ")
              .col-lg-11.mb-lg-0.mb-4
                p.mb-0 La planificación permite identificar con antelación riesgos o limitaciones, estableciendo acciones preventivas o correctivas que evitan que pequeñas dificultades se conviertan en grandes obstáculos.

            .row.justify-content-center.align-items.p-2(titulo="Optimiza el uso de recursos y evita desperdicios: ")
              .col-lg-11.mb-lg-0.mb-4
                p.mb-0 Mediante una asignación adecuada de recursos humanos, materiales y financieros, se reducen costos innecesarios y se mejora la productividad.

            .row.justify-content-center.align-items.p-2(titulo="Contribuye al cumplimiento de la misión y visión empresarial: ")
              .col-lg-11.mb-lg-0.mb-4
                p.mb-0 Las acciones planificadas se alinean con los objetivos estratégicos de la empresa, asegurando que cada esfuerzo impulse el crecimiento y desarrollo sostenible del negocio agrícola.
            
            .row.justify-content-center.align-items.p-2(titulo="Fomenta la toma de decisiones basadas en datos: ")
              .col-lg-11.mb-lg-0.mb-4
                p.mb-0 Al incorporar indicadores y plazos, el plan de acción permite evaluar resultados de manera objetiva, brindando insumos para tomar decisiones informadas y oportunas.
            
            .row.justify-content-center.align-items.p-2(titulo="Impulsa la mejora continua y la sostenibilidad: ")
              .col-lg-11.mb-lg-0.mb-4
                p.mb-0 Gracias al ciclo de seguimiento, evaluación y ajuste, el plan de acción promueve la adaptación constante frente a los cambios del mercado, del entorno ambiental y de las innovaciones tecnológicas, asegurando la permanencia y competitividad del negocio agrícola a largo plazo.
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/1.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2  Componentes  
      
      .titulo-sexto.color-acento-contenido(data-aos="fade-left")
          p.mb-0 #[b Tabla 8.] Componentes del plan de acción 
      .tabla-b.color-acento-contenido.mb-5(data-aos="fade-left")
        table.color-acento-contenido(alt="La tabla describe los componentes básicos de un plan de acción: objetivos que definen la meta, actividades concretas para alcanzarlos, responsables asignados, recursos necesarios, plazos y cronogramas, indicadores de avance y mecanismos de seguimiento y evaluación.")
          thead.bg-color-7 
            tr
              th.h4.w-25 Tipo de recurso
              th.h4 Descripción
          tbody
            tr
              td.fw-bold.text-left-cus Objetivo
              td.text-left-cus Meta clara que se desea alcanzar con el plan. Debe responder al para qué de la acción.

            tr
              td.fw-bold.text-left-cus Actividades
              td.text-left-cus Conjunto de tareas específicas que conducen al logro del objetivo. Cada una debe tener un propósito definido.

            tr
              td.fw-bold.text-left-cus Responsables
              td.text-left-cus Personas, cargos o equipos encargados de realizar cada actividad. Fundamental para el seguimiento y control.

            tr
              td.fw-bold.text-left-cus Recursos necesarios
              td.text-left-cus Insumos, personal, maquinaria, tecnología, financiamiento y tiempo requeridos para ejecutar las acciones.

            tr
              td.fw-bold.text-left-cus Plazos y cronograma
              td.text-left-cus Fechas de inicio, duración y finalización de cada actividad. Puede representarse en tablas o diagramas de Gantt.

            tr
              td.fw-bold.text-left-cus Indicadores
              td.text-left-cus Variables para medir el avance, como rendimiento, ahorro, cumplimiento de fechas, mejora en calidad, etc.

            tr
              td.fw-bold.text-left-cus Seguimiento y evaluación
              td.text-left-cus Herramientas y momentos para verificar el cumplimiento del plan, identificar desvíos y aplicar ajustes.

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-10.bg-color-6.p-5
          .row.justify-content-center
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/7.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0 Es importante entender la diferencia entre plan de acción y acción de mejora, las acciones correctivas son partes puntuales y específicas enfocadas en resolver problemas detectados, mientras que el plan de acción es un marco más amplio y organizado que puede incluir diversas acciones (correctivas y otras) para lograr mejoras o cumplir objetivos. 
  
  
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/8.png', alt='')
        .col-sm-12.col-lg-7
          .tarjetaf.p-4.mb-5
            SlyderA(tipo="b")(data-aos="zoom-in-left")
              .row.justify-content-center.align-items.p-0.p-lg-4
                .col-lg-11
                  h4.mb-3 Acciones de mejora 
                  p.mb-5 Son medidas específicas que se implementan para eliminar la causa raíz de un problema o no conformidad detectada en un proceso, con el fin de evitar que vuelva a ocurrir. 
                  h4.mb-3 Plan de acción 
                  p.mb-0 Es un documento o conjunto organizado de actividades, con responsables, tiempos y recursos definidos, diseñado para alcanzar un objetivo específico o resolver un conjunto de problemas. 
                  
              .row.justify-content-center.align-items.p-0.p-lg-4
                .col-lg-11
                  h4.mb-3 Acciones de mejora 
                  p.mb-5 Son reactivas, ya que se aplican después de identificar un problema o fallo. 
                  h4.mb-3 Plan de acción 
                  p.mb-0 Puede incluir acciones correctivas, preventivas, estratégicas u operativas, y busca una implementación ordenada y coordinada. 
                  
              .row.justify-content-center.align-items.p-0.p-lg-4
                .col-lg-11
                  h4.mb-3 Acciones de mejora 
                  p.mb-5 Su alcance suele ser puntual y dirigido a solucionar una situación particular.
                  h4.mb-3 Plan de acción 
                  p.mb-0 Es proactivo y estructurado, ya que planifica cómo ejecutar las actividades necesarias para mejorar o solucionar situaciones. 
                  
              .row.justify-content-center.align-items.p-0.p-lg-4
                .col-lg-11
                  h4.mb-3 Acciones de mejora 
                  p.mb-5 Ejemplo agrícola: si se detecta que un sistema de riego está causando daños en los cultivos, la acción correctiva puede ser reparar o ajustar el sistema para que funcione adecuadamente. 
                  h4.mb-3 Plan de acción 
                  p.mb-0 Ejemplo agrícola: un plan de acción para mejorar la eficiencia del riego puede incluir la reparación del sistema (acción correctiva), capacitación del personal (acción preventiva), y la adquisición de tecnología para monitoreo. 
                  

  
  
  
  
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
