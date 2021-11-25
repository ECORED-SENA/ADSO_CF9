export default {
  global: {
    componenteFormativo: 'Validación de documentos',
    descripcionCurso:
      'La validación de documentos son aquellos instrumentos que permiten verificar el estado de un proceso específico de manera detallada, estos son tomados como punto de referencia para tener una acertada toma de decisiones dentro del proceso que se ejecutará o el sistema que se está diseñando.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Informe de análisis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Instrumentos de medición y verificación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Trazabilidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Acosta-Hoyos, L. E. (1972). Guía práctica para la investigación y redacción de informes (Vol. 146). Editorial Paidós.',
      /*link:
        '',*/
    },
    {
      referencia:
        'Ayabaca, L. P., & Bernal, S. M. (2017). Verificación y Validación de Software Software Verification and Validation. Revista Killkana Técnica. Vol, 1(3).',
    },
    {
      referencia:
        'Bichachi, D. S. (2004). El uso de las listas de chequeo (CHECK-LIST) como herramienta para controlar la calidad de las leyes. Recuperado de:',
      link: 'https://claudiabernazza.ar/ssgp/html/pdf/check_list.pdf',
    },
    {
      referencia:
        'Botta, M., de Roig, N. F., & Izaguirre, I. (2002). Tesis, monografías e informes: nuevas normas y técnicas de investigación y redacción. Biblos.',
    },
    {
      referencia:
        'Dorrego, E. (1994). Modelo para la producción y evaluación formativa de medios instruccionales, aplicado al video y al software. Revista de Tecnología Educativa, 12(3), 313-327.',
    },
    {
      referencia:
        'Espinoza Freire, E. E. (2018). Las variables y su operacionalización en la investigación educativa. Parte I. Conrado, 14, 39-49.',
    },
    {
      referencia:
        'Espinoza Montes, C. (2010). Metodología de investigación tecnológica.',
    },
    {
      referencia:
        'Hernandez, F., Roldán, M. L., Vegetti, M. M., Gonnet, S. M., & Leone, H. P. (2015). TracEDaaS: Captura y Trazabilidad de Artefactos del Proceso de Diseño.',
    },
    {
      referencia:
        'López Bartolomé, C. (2014). El desarrollo de <em>software Open Source</em> analizado desde dentro (Bachelor´s thesis).',
    },
    {
      referencia:
        'Pájaro, D. (2002). La formulación de hipótesis. Cinta de Moebio. Revista de Epistemología de Ciencias Sociales, (15).',
    },
    {
      referencia:
        'Pereira, B., Ayaach, F., Quintero, H., Granadillo, I., & Bustamante, J. (2012). Métricas de calidad de software. Calidad Del <em>Software</em>.',
    },
    {
      referencia:
        'Perez Quintero, C. I. (2019). Implementación del modelo Mccall para medir la calidad del software Siplan (Doctoral dissertation).',
    },
    {
      referencia:
        'Romero Alvarado, W. A. (2018). Los instrumentos de verificación y su incidencia en el control de los procesos productivos de la paletera Armijos.',
    },
    {
      referencia:
        'Tabares, M. S., Barrera, A. F., Arroyave, J. D., & Pineda, J. D. (2007). Un método para la trazabilidad de requisitos en el proceso unificado de desarrollo. Revista EIA, (8), 69-82.',
    },
    {
      referencia:
        'Torres, M., Salazar, F. G., & Paz, K. (2019). Métodos de recolección de datos para una investigación.',
    },
  ],
  glosario: [
    {
      termino: 'Capacidad de expansión',
      significado:
        'el grado con que se pueden aumentar el diseño arquitectónico, de datos o procedimental. ',
    },
    {
      termino: 'Complexión',
      significado:
        'el grado con que sé a logrado la implementación total de una función.',
    },
    {
      termino: 'Concisión',
      significado:
        'lo compacto que resulta ser el programa en términos de líneas de código.',
    },
    {
      termino: 'Consistencia',
      significado:
        'el uso de un diseño uniforme y de técnicas de documentación a través del proyecto de desarrollo del <em>software</em>.',
    },
    {
      termino: 'Eficiencia de ejecución',
      significado: 'el rendimiento del funcionamiento de un programa.',
    },
    {
      termino: 'Estandarización de comunicaciones',
      significado:
        'el nivel de empleo de estándares de interfaces, protocolos y anchos de banda.',
    },
    {
      termino: 'Estandarización de datos',
      significado:
        'el empleo de estructuras y tipos de datos estándares a lo largo del programa.',
    },
    {
      termino: 'Exactitud',
      significado: 'la exactitud de los cálculos y del control.',
    },
    {
      termino: 'Facilidad de auditoría',
      significado:
        'la facilidad con la que se puede justificar el cumplimiento de los estándares.',
    },
    {
      termino: 'Formación',
      significado:
        'el grado en que el software ayuda a los nuevos usuarios a manejar el sistema.',
    },
    {
      termino: 'Generalidad',
      significado:
        'la extensión de aplicación potencial de los componentes del programa.',
    },
    {
      termino: 'Independencia del <em>hardware</em>',
      significado:
        'el grado con que se desacopla el <em>software</em> del <em>hardware</em> donde opera.',
    },
    {
      termino: 'Instrumentación',
      significado:
        'el grado con que el programa vigila su propio funcionamiento e identifica los errores que suceden.',
    },
    {
      termino: 'Modularidad',
      significado: 'la independencia funcional de componentes de programa.',
    },
    {
      termino: 'Operatividad',
      significado: 'la facilidad de operación de un programa.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'la capacidad de alcanzar una representación del diseño o un componente real del programa hasta los requisitos.',
    },
    {
      termino: 'Tolerancia al error',
      significado: 'el deterioro causado cuando un programa descubre un error.',
    },
  ],
  complementario: [
    {
      texto:
        'Perez Quintero, C. I. (2019). Implementación del modelo Mccall para medir la calidad del <em>software</em> Siplan (Doctoral dissertation',
      tipo: 'Capítulo de libro',
      descarga: '/downloads/metricas-desarrollo-software.pdf',
    },
    {
      texto:
        'Datko, C., & Carllinni, Y. (2014). Derivación de requisitos y construcción de trazabilidad entre artefactos del proceso de desarrollo. In XLIII Jornadas Argentinas de Informática e Investigación Operativa (43JAIIO)-XVII Concurso de Trabajos Estudiantiles (EST)(Buenos Aires, 2014).',
      tipo: 'PDF',
      descarga: '/downloads/requisitos.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mario Fernando Meneses Calvache',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Deivis Eduard Ramirez Martinez',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de gestión industrial - Regional distrito capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Jesus Atonio Vecino Valero'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      /*{
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },*/
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
