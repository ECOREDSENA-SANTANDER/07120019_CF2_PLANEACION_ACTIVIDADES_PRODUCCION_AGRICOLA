export default {
  global: {
    Name: 'Acciones de mejora y programación de recursos.',
    Description:
      'Este componente formativo tiene como propósito fortalecer las capacidades de análisis y toma de decisiones en el contexto de una empresa agrícola. Busca que los aprendices desarrollen la habilidad de identificar y proponer acciones de mejora a partir del diagnóstico de los procesos administrativos, considerando la disponibilidad de recursos y asegurando su coherencia con la estrategia organizacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Acciones de mejora',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Recursos de actividades administrativas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de acción: definición',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Recursos de actividades administrativas',
      referencia:
        'Ultreras-Rodríguez, A., Olguín-Martínez, C. M., Cervantes-Martínez, L., & Chávez-Hernández, A. (2024, 15 de noviembre). La planificación de recursos empresariales y su incidencia en la gestión organizacional en empresas mexicanas. Koinonía, 9(18), 119–137.',
      tipo: 'Artículo',
      link:
        'https://ve.scielo.org/pdf/raiko/v9n18/2542-3088-raiko-9-18-119.pdf',
    },
    {
      tema: 'Recursos de actividades administrativas',
      referencia:
        'Proyectoplus. (s.f.). Gestión eficiente de los recursos de una empresa.',
      tipo: 'Web',
      link: 'https://proyecto.plus/empresas/recursos-de-una-empresa/',
    },
    {
      tema: 'Acciones de mejora',
      referencia:
        'Córdova Calderón, F. A. (2019, 15 de enero). Guía metodológica para gestionar buenas prácticas administrativas: Sistema de Gestión de la Calidad – Secretarías y Unidades. Administrativas (Revisión 01). Universidad Nacional Autónoma de México, Secretaría Administrativa, Dirección General de Servicios Administrativos.',
      tipo: 'PDF',
      link:
        'https://www.abogadogeneral.unam.mx/sites/default/files/archivos/RepositorioCont/6_Dependencias/147_DireccionGeneraldeServiciosAdministrativos/66_Guiametodologicaparagestionarbuenaspracticasadm.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'medida que elimina la causa de una no conformidad detectada.',
    },
    {
      termino: 'Acción preventiva',
      significado: 'medida para evitar que ocurra una no conformidad futura.',
    },
    {
      termino: 'Mejora continua',
      significado: 'proceso permanente de optimización de procesos.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'capacidad de lograr resultados con el menor uso de recursos.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'evaluación de una situación para identificar fortalezas y debilidades.',
    },
    {
      termino: 'No conformidad',
      significado: 'incumplimiento de un requisito establecido.',
    },
    {
      termino: 'Indicador',
      significado:
        'valor que permite medir el avance o el resultado de una acción.',
    },
    {
      termino: 'Seguimiento',
      significado: 'revisión periódica del avance de las actividades.',
    },
    {
      termino: 'Resultado',
      significado: 'efecto final obtenido tras una acción o proceso.',
    },
    {
      termino: 'Planificación',
      significado:
        'proceso de organizar actividades para alcanzar un objetivo.',
    },
    {
      termino: 'Cronograma',
      significado: 'calendario de ejecución de actividades.',
    },
    {
      termino: 'Responsable',
      significado: 'persona asignada a ejecutar o coordinar una tarea.',
    },
    {
      termino: 'Presupuesto',
      significado: 'asignación financiera para ejecutar un plan.',
    },
    {
      termino: 'Retroalimentación',
      significado: 'información que se utiliza para mejorar el desempeño.',
    },
    {
      termino: 'Capacitación',
      significado: 'proceso de formación del personal.',
    },
    {
      termino: 'Alcance',
      significado: 'límite o cobertura de una acción o proyecto.',
    },
    {
      termino: 'Estrategia',
      significado:
        'plan de acción diseñado para alcanzar un objetivo a largo plazo.',
    },
    {
      termino: 'Impacto',
      significado:
        'efecto generado por una acción en el contexto organizacional.',
    },
    {
      termino: 'Optimización',
      significado: 'mejor uso posible de los recursos disponibles.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'capacidad de mantener procesos a largo plazo con equilibrio ambiental, social y económico.',
    },
  ],
  referencias: [
    {
      referencia:
        'Castrillón Garzón, M. (2008). Planeación estratégica. Universidad Nacional Abierta y a Distancia – UNAD.',
    },
    {
      referencia: 'Concepto. (2025). Recursos de una empresa.',
      link: 'https://concepto.de/recursos-de-una-empresa/',
    },
    {
      referencia:
        'Ecofusion. (s. f.). Estrategias para promover la sostenibilidad en la agricultura comunitaria. Ecofusion.top.',
      link:
        'https://ecofusion.top/estrategias-para-promover-la-sostenibilidad-en-la-agricultura-comunitaria/',
    },
    {
      referencia:
        'Mendoza González, Y. P., & Quintero Barreto, E. (2022). Elaboración de un plan estratégico para la formalización y operación de la empresa agrícola. El Encanto [Trabajo de grado, Universidad EAN]. Repositorio Universidad EAN.',
      link:
        'https://repository.universidadean.edu.co/server/api/core/bitstreams/3505b168-17b3-4b5e-82ba-14d34aa8feac/content',
    },
    {
      referencia: 'Economía planificada. (2023). Recursos de una empresa.',
      link:
        'https://economiaplanificada.com/recursos-de-una-empresa/#google_vignette',
    },
    {
      referencia:
        'La Patria. (s. f.). Qué es una acción de mejora: conceptos y aplicaciones prácticas. La Patria.',
      link:
        'https://www.lapatria.com/emprendiendo/accion-mejora-conceptos-aplicaciones',
    },
    {
      referencia: 'Lifeder. (2021). Recursos de una empresa.',
      link: 'https://www.lifeder.com/recursos-empresa/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jenny Rocio Reyes Acevedo',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Teran Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
