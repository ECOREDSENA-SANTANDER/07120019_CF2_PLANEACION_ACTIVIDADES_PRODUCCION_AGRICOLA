<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del CF',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los tipos de acciones de mejora y los recursos con que se cuentan para elaborar un plan de acción.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'Una acción de mejora es una decisión o intervención planificada que se implementa para corregir, optimizar o fortalecer un proceso, práctica o resultado, a partir del análisis de un diagnóstico previo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta indica que comprende conceptos de acciones de mejora y recursos, necesarios para efectuar programación de los mismos mediante plan de acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Las acciones correctivas están dirigidas a eliminar las causas de problemas o no conformidades ya detectadas en los procesos, para evitar que se repitan.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta indica que comprende conceptos de acciones de mejora y recursos, necesarios para efectuar programación de los mismos mediante plan de acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Las acciones de mejora corporativas están alineadas con los objetivos organizacionales de largo plazo y la visión empresarial.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta indica que comprende conceptos de acciones de mejora y recursos, necesarios para efectuar programación de los mismos mediante plan de acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'La comunicación efectiva no hace parte de los requisitos de funcionamiento de las acciones de mejora.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta indica que comprende conceptos de acciones de mejora y recursos, necesarios para efectuar programación de los mismos mediante plan de acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Uno de los criterios de definición de una acción de mejora es que sea medible, ya que es esencial que los resultados de la acción puedan ser cuantificados o evaluados cualitativamente, para facilitar su seguimiento y evaluación.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta indica que comprende conceptos de acciones de mejora y recursos, necesarios para efectuar programación de los mismos mediante plan de acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Las acciones de mejora deben tener objetivos claros y específicos que orienten su diseño, implementación y evaluación.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta indica que comprende conceptos de acciones de mejora y recursos, necesarios para efectuar programación de los mismos mediante plan de acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'El presupuesto para la operación administrativa, pago de salarios, servicios y suministros, hace parte de los recursos financieros de la empresa.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta indica que comprende conceptos de acciones de mejora y recursos, necesarios para efectuar programación de los mismos mediante plan de acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'El plan de acción es una herramienta de gestión que permite organizar, estructurar y ejecutar una serie de actividades orientadas a alcanzar objetivos específicos, como la implementación de acciones de mejora.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta indica que comprende conceptos de acciones de mejora y recursos, necesarios para efectuar programación de los mismos mediante plan de acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Una de las características del plan de acción es que sea específico, que defina de manera clara qué se hará, con quién, cuándo y cómo, evita generalidades, facilitando la ejecución.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta indica que comprende conceptos de acciones de mejora y recursos, necesarios para efectuar programación de los mismos mediante plan de acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Las acciones correctivas son partes puntuales y específicas enfocadas en resolver problemas detectados, mientras que el plan de acción es un marco más amplio y organizado que puede incluir diversas acciones (correctivas y otras) para lograr mejoras o cumplir objetivos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta indica que comprende conceptos de acciones de mejora y recursos, necesarios para efectuar programación de los mismos mediante plan de acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
