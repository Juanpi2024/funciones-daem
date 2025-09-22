import type { Section } from '../types';

export const SECTIONS: Section[] = [
  {
    id: 'introduccion',
    title: '1. Introducción',
    subSections: [
      {
        id: 'intro-content',
        title: 'Introducción',
        description: [
          'El presente manual tiene por objeto ser utilizado como material de consulta y apoyo para uso permanente del Director DAEM PARRAL, Directores y Directoras de Establecimientos educacionales municipalizados, Jefes de Unidad Técnica Pedagógica, Comunal y Jefes de UTP de Establecimientos educacionales, Docentes y todos quienes pertenezcan e interactúen con cada Unidad Educativa comunal.',
          'Este manual pretende ser una guía que orienta la organización administrativa de cada Establecimiento de Educación Municipal de Parral, con el propósito de implementar estructuras organizativas funcionales, con líneas claras de autoridad y toma de decisiones oportunas, así mismo establecer la definición de funciones y tareas, de las diferentes unidades administrativas.',
          'El presente instrumento de gestión se fundamenta en la necesidad de definir y profesionalizar el rol de los integrantes del equipo directivo y del equipo de gestión, cuyo objetivo es desarrollar el mejoramiento continuo de sus procesos pedagógicos y administrativos en pos de una gestión Educativa eficiente y eficaz, descrita en el Proyecto Educativo del Colegio, estableciendo en la gestión escolar estándares de desempeño y ámbitos de responsabilidad, en el marco de la Buena Dirección, el Marco de la Buena Enseñanza y en el contexto del marco legal vigente, a su haber la Ley N° 19.979 sobre Evaluación del Desempeño de docentes directivos y técnico-pedagógicos y otros como la 19.464, 19.410 y 19.070.',
          'Al mismo tiempo tiene como propósito, dar a conocer y clarificar las tareas y funciones de todo el personal, Docentes y Asistentes de la educación, para, de ese modo, promover procesos de mejoramiento de la calidad de la educación, y del logro de aprendizajes educativos de todos los alumnos y alumnas, así como de la obtención de resultados institucionales y de la satisfacción del conjunto de la comunidad educativa.',
          'De manera complementaria promueve roles y funciones de acercamiento al Sistema de Aseguramiento de la Calidad de la Gestión Escolar, como también indicar cuáles son los ámbitos de competencia en que los profesionales deben centrar su desarrollo profesional.',
        ],
      },
    ],
  },
  {
    id: 'siglas',
    title: '2. Siglas / Acrónimos',
    subSections: [
      {
        id: 'siglas-content',
        title: 'Siglas / Acrónimos',
        definitions: [
            { term: 'ACLE', definition: 'Actividades Curriculares de Libre Elección.' },
            { term: 'BRP', definition: 'Bono de Reconocimiento Profesional.' },
            { term: 'DAEM', definition: 'Departamento de Administración de Educación Municipal.' },
            { term: 'DEPROV', definition: 'Departamento Provincial de Educación.' },
            { term: 'FAGEM', definition: 'Fondo de Apoyo a la Gestión Municipal de Educación.' },
            { term: 'HPV', definition: 'Habilidades para la vida.' },
            { term: 'JECD', definition: 'Jornada Escolar Completa.' },
            { term: 'JUNAEB', definition: 'Junta de Auxilio Escolar y Becas.' },
            { term: 'MINEDUC', definition: 'Ministerio de Educación de Chile.' },
            { term: 'PAC', definition: 'Programa de apoyo compartido.' },
            { term: 'PADEM', definition: 'Plan Anual de Desarrollo Educativo Municipal.' },
            { term: 'PEI', definition: 'Proyecto Educativo Institucional.' },
            { term: 'PIE', definition: 'Programa Integración Escolar.' },
            { term: 'PME', definition: 'Plan de mejoramiento educativo.' },
            { term: 'PSP', definition: 'Planes de Superación Profesional.' },
            { term: 'SCAP', definition: 'Sistema de cálculo de asignación de perfeccionamiento.' },
            { term: 'SECREDUC', definition: 'Secretaría Regional Ministerial de Educación.' },
            { term: 'SEP', definition: 'Subvención Escolar Preferencial.' },
            { term: 'TDA', definition: 'Trastorno de Déficit Atencional.' },
            { term: 'TEL', definition: 'Trastorno Específico del Lenguaje.' },
        ]
      },
    ],
  },
  {
    id: 'documentos-aplicables',
    title: '3. Documentos Aplicables',
    subSections: [
      {
        id: 'doc-app-content',
        title: 'Documentos Aplicables',
        list: [
            { id: 'a)', text: 'Estatuto Docente;' },
            { id: 'b)', text: 'Manual de Convivencia Escolar;' },
            { id: 'c)', text: 'Plan Integral de Seguridad Escolar;' },
            { id: 'd)', text: 'Código del Trabajo;' },
            { id: 'e)', text: 'Marco para la Buena Dirección / Criterios para el Desarrollo Profesional y evaluación del Desempeño, Ministerio de Educación.' },
        ]
      },
    ],
  },
  {
    id: 'marco-legal',
    title: '4. Marco Legal',
    subSections: [
      {
        id: 'marco-legal-content',
        title: 'Marco Legal',
        description: 'La Educación en Chile y la función de ejercer la educación se encuentra regulada por diversos cuerpos legales vigentes, los cuales han sido considerados en la elaboración de este Manual de Cargos y Funciones. Entre la normativa vigente encontramos:',
        list: [
            { id: 'a)', text: 'Ley 20.370, Establece Ley General de Educación.' },
            { id: 'b)', text: 'Ley 19.070, Establece Estatuto Docente.' },
            { id: 'c)', text: 'Ley 19.979, Modifica el régimen de jornada escolar completa diurna y otros cuerpos legales.' },
            { id: 'd)', text: 'Decreto Fuerza de Ley N° 453/1992, Aprueba Reglamento del Estatuto Docente (Ley 19.070).' },
            { id: 'e)', text: 'Decreto Fuerza de Ley N° 1 de 1996, Modifica, Sistematiza y Refunde el Estatuto Docente.' },
            { id: 'f)', text: 'Ley 19.410, Modifica Ley 19.070.' },
            { id: 'g)', text: 'Ley 19.471, Modifica Ley 19.410.' },
            { id: 'h)', text: 'Decreto Fuerza de Ley N° 2 de 1998, Modifica Subvención a los Establecimientos Educacionales.' },
            { id: 'i)', text: 'Ley 20.201, Modifica DFL N° 2 de 1998.' },
            { id: 'j)', text: 'Ley 20.248, Establece la Ley Subvención Escolar Preferencial (SEP).' },
            { id: 'k)', text: 'Ley 19.464, Establece Normas para aumento de Remuneraciones para Personal no Docente de Establecimientos Educacionales.' },
            { id: 'l)', text: 'Decreto N° 524-1990 // reformulado 2006, Reglamento General de Organización y funcionamiento de los Centros de Alumnos de Establecimientos Educacionales de Educación Básica, en su segundo ciclo y de Educación Media, reconocidos oficialmente por el Ministerio de Educación.' },
            { id: 'm)', text: 'Ley 20.536, sobre violencia escolar.' },
            { id: 'n)', text: 'Ley 20.501, calidad y equidad de la educación.' },
            { id: 'o)', text: 'Decreto 352, Reglamenta Ejercicio de la Función Docente.' },
            { id: 'p)', text: 'Decreto Supremo N°170, del 2009, Programa de Integración Escolar.' },
            { id: 'q)', text: 'Decreto N° 24, Reglamenta consejos escolares.' },
        ]
      },
    ],
  },
  {
    id: 'perfiles-competencias',
    title: '5. Perfiles de Competencias Conductuales',
    subSections: [
      {
        id: 'perfiles-chart',
        title: 'Visualización de Competencias Clave',
        chart: 'competency',
        description: 'El siguiente gráfico radar ilustra las 12 competencias conductuales fundamentales que se esperan del personal, destacando un perfil ideal y equilibrado para el desempeño en el entorno educativo.'
      },
      {
        id: 'perfiles-content',
        title: 'Perfiles de Competencias Conductuales para Personal de los Establecimientos Educacionales',
        nestedSections: [
          {
            id: '5-1',
            title: '5.1. Compromiso ético-social',
            description: 'Capacidad de influir en la cultura del establecimiento actuando en forma coherente tanto con los valores del Proyecto Educativo Institucional y como con los principios declarados en el Estatuto Docente.',
            list: [
              { id: 'a)', text: 'Transmite, promueve y practica los valores del Proyecto Educativo Institucional;' },
              { id: 'b)', text: 'Se compromete con la institución;' },
              { id: 'c)', text: 'Se compromete con el entorno social y cultural del establecimiento.' },
            ]
          },
          {
            id: '5-2',
            title: '5.2. Orientación a la calidad',
            description: 'Capacidad de mantener una orientación y un desempeño profesional que refleje el esfuerzo por hacer sus tareas con eficiencia y calidad.',
            list: [
              { id: 'a)', text: 'Realiza un trabajo de calidad de acuerdo a las normas establecidas.' },
              { id: 'b)', text: 'Se orienta al mejoramiento continuo.' },
              { id: 'c)', text: 'Asegura resultados de alta calidad.' },
              { id: 'd)', text: 'Alinea su trabajo con la Visión institucional (Aplicable sólo a directivos docentes).' },
            ]
          },
          {
            id: '5-3',
            title: '5.3. Autoaprendizaje',
            description: 'Habilidad para buscar, asimilar y compartir nuevos conocimientos potenciando su desarrollo personal y profesional.',
            list: [
                { id: 'a)', text: 'Se mantiene actualizado en los nuevos desarrollos de su área.' },
                { id: 'b)', text: 'Se compromete con su propia formación.' },
                { id: 'c)', text: 'Profundiza en temas de su especialidad y hace transferencia a su trabajo de aula.' },
                { id: 'd)', text: 'Desarrolla su autoestima profesional.' },
            ]
          },
          {
            id: '5-4',
            title: '5.4. Liderazgo',
            description: 'Capacidad para articular los recursos personales de los miembros del equipo de trabajo, para que actúen con eficacia y efectividad en situaciones profesionales, de acuerdo a los estándares del establecimiento.',
            list: [
                { id: 'a)', text: 'Aplica la visión en su trabajo.' },
                { id: 'b)', text: 'Mejora las prácticas de la escuela.' },
                { id: 'c)', text: 'Asume responsabilidad.' },
                { id: 'd)', text: 'Desarrolla a otros.' },
                { id: 'e)', text: 'Impulsa la innovación.' },
            ]
          },
          {
            id: '5-5',
            title: '5.5. Liderazgo Pedagógico',
            description: 'Capacidad de motivar y comprometer activamente a los estudiantes con su proceso de aprendizaje y las actividades de la institución.',
            list: [
                { id: 'a)', text: 'Desarrolla la capacidad de compromiso en sus estudiantes.' },
                { id: 'b)', text: 'Desarrolla motivación de logro.' },
                { id: 'c)', text: 'Desarrolla autocontrol y autodisciplina en los estudiantes.' },
                { id: 'd)', text: 'Promueve la participación.' },
                { id: 'e)', text: 'Incentiva la innovación.' },
            ]
          },
          {
            id: '5-6',
            title: '5.6. Responsabilidad',
            description: 'Capacidad para comprometerse con el cumplimiento de las tareas encomendadas.',
            list: [
                { id: 'a)', text: 'Se compromete con los objetivos de trabajos o proyectos.' },
                { id: 'b)', text: 'Entrega los resultados a tiempo.' },
                { id: 'c)', text: 'Provee apoyo, supervisión y se responsabiliza por las tareas que ha delegado (Aplicable sólo a directivos docentes.)' },
                { id: 'd)', text: 'Asume responsabilidad por los errores cometidos por su equipo de trabajo (Aplicable sólo a directivos docentes.)' },
            ]
          },
          {
            id: '5-7',
            title: '5.7. Relaciones Interpersonales',
            description: 'Capacidad para generar relaciones que promuevan un ambiente de trabajo cordial, colaborativo y cooperativo.',
            list: [
                { id: 'a)', text: 'Mantiene un trato cordial con todas las personas.' },
                { id: 'b)', text: 'Se comunica efectivamente.' },
                { id: 'c)', text: 'Establece redes de colaboración.' },
                { id: 'd)', text: 'Demuestra apoyo y confianza en el trabajo conjunto.' },
                { id: 'e)', text: 'Hace contactos con personas e instituciones fuera de la comunidad escolar (Aplicable sólo a docentes directivos y jefes de departamento.)' },
            ]
          },
          {
            id: '5-8',
            title: '5.8. Negociar y resolver conflictos',
            description: 'Capacidad para facilitar el logro de acuerdos que cuenten con el apoyo y aprobación de todos los involucrados.',
            list: [
                { id: 'a)', text: 'Afronta los conflictos y busca soluciones.' },
                { id: 'b)', text: 'Demuestra capacidad de negociación.' },
                { id: 'c)', text: 'Toma decisiones.' },
            ]
          },
          {
            id: '5-9',
            title: '5.9. Trabajo en equipo',
            description: 'Capacidad para trabajar efectiva e interrelacionadamente, para alcanzar los objetivos de la organización escolar.',
            list: [
                { id: 'a)', text: 'Facilita el logro de los objetivos.' },
                { id: 'b)', text: 'Involucra a otras personas en el logro de los objetivos y toma de decisiones.' },
                { id: 'c)', text: 'Hace aportes importantes para los resultados del equipo.' },
                { id: 'd)', text: 'Cumple con los compromisos contraídos.' },
            ]
          },
          {
            id: '5-10',
            title: '5.10. Adaptación al cambio',
            description: 'Capacidad para realizar oportunamente los ajustes necesarios en los objetivos y metas con el fin de mantener el nivel de eficiencia.',
            list: [
                { id: 'a)', text: 'Entiende el cambio de escenario o contexto.' },
                { id: 'b)', text: 'Tiene una actitud flexible frente a los cambios.' },
                { id: 'c)', text: 'Ajusta su comportamiento a nuevas demandas.' },
            ]
          },
          {
            id: '5-11',
            title: '5.11. Asertividad',
            description: 'Capacidad para declarar en forma oportuna y con honestidad lo que se piensa y siente, cuidando la relación con los otros.',
            list: [
                { id: 'a)', text: 'Aborda las situaciones de conflicto con seguridad y tranquilidad.' },
                { id: 'b)', text: 'Se muestra seguro de sí mismo.' },
                { id: 'c)', text: 'Solicita ayuda cuando es necesario.' },
            ]
          },
          {
            id: '5-12',
            title: '5.12. Iniciativa e Innovación',
            description: 'Capacidad para formular activamente nuevos planteamientos que se adelanten a los cambios del entorno, tomando decisiones oportunas con criterio propio.',
            list: [
                { id: 'a)', text: 'Capacidad de reacción.' },
                { id: 'b)', text: 'Aporta alternativas innovadoras a la solución de los problemas.' },
                { id: 'c)', text: 'Actúa con creatividad.' },
                { id: 'd)', text: 'Anticipa los cambios de contexto.' },
            ]
          },
        ]
      },
    ],
  },
  {
    id: 'funciones-personal',
    title: '6. Funciones del Personal de la Unidad Educativa',
    subSections: [
      {
        id: 'org-chart',
        title: 'Estructura Organizacional',
        chart: 'org_chart',
        description: 'La siguiente estructura jerárquica muestra las líneas de autoridad y reporte dentro de la unidad educativa, desde el Director DAEM hasta el personal de apoyo.'
      },
      {
        id: '6-1',
        title: '6.1. Funciones en el marco para la Buena Dirección / Criterios para el desarrollo profesional y evaluación de desempeño',
        description: [
          'El Marco para la Buena Dirección intenta reconocer el complejo rol del director y los docentes que cumplen funciones directivas y técnicas pedagógicas en la actualidad, que es ejercer con propiedad el liderazgo y gestión del establecimiento educativo que dirige.',
          'Este rol implica convertirse en un:',
        ],
        list: [
            { id: '•', text: 'animador pedagógico;' },
            { id: '•', text: 'mediador;' },
            { id: '•', text: 'motivador;' },
            { id: '•', text: 'comunicador;' },
            { id: '•', text: 'gestor de medios y recursos, para trabajar en colaboración con otros, en el logro de aprendizajes educativos de los alumnos y de resultados institucionales.' },
        ],
        accordionItems: [
            {
                title: 'a) Área de Liderazgo',
                content: [
                    'Esta área incorpora habilidades y competencias que permiten dar direccionalidad y coherencia al proyecto educativo institucional del mismo. En particular, el liderazgo escolar es visto en el Marco de la Buena Dirección está orientado a que:',
                    '• El director y equipo directivo ejercen liderazgo y administran el cambio al interior de la escuela;',
                    '• El director y equipo directivo comunican sus puntos de vista con claridad y entienden las perspectivas de otros actores;',
                    '• El director y equipo directivo aseguran la existencia de información útil para la toma de decisiones oportuna y la consecución de resultados educativos;',
                    '• El director y equipo directivo son capaces de administrar conflictos y resolver problemas;',
                    '• El director y equipo directivo difunden el proyecto educativo y aseguran la participación de los principales actores de la comunidad educativa en su desarrollo.',
                    '“El liderazgo escolar no es una característica exclusiva del rol de director, sino que es deseable en todos los actores que asumen la responsabilidad sobre una tarea, o contribuyen a generar visiones de cambio. En este sentido, los criterios contenidos en este ámbito, son también aplicables al conjunto de profesionales de la educación que cumple funciones docente-directivas y técnico-pedagógicas".'
                ].join('\n\n')
            },
            {
                title: 'b) Área de Gestión Curricular',
                content: [
                    'El objetivo último de todo establecimiento educativo es el aprendizaje de sus alumnos y por ende la implementación y evaluación del curriculum. En ese sentido, las actividades contenidas en esta área se orientan a que:',
                    '• El director y equipo directivo conocen los marcos curriculares de los respectivos niveles educativos, el Marco de la Buena Enseñanza y los mecanismos para su evaluación;',
                    '• El director y equipo directivo organizan eficientemente los tiempos para la implementación curricular en aula;',
                    '• El director y equipo directivo establecen mecanismos para asegurar la calidad de las estrategias didácticas en el aula;',
                    '• El director y equipo directivo aseguran la existencia de mecanismos de monitoreo y evaluación de la implementación curricular y de los resultados de aprendizaje en coherencia con el Proyecto Educativo Institucional.',
                ].join('\n\n')
            },
            {
                title: 'c) Gestión de recursos',
                content: [
                    'Se refiere a los procesos directivos de obtención, distribución y articulación de recursos humanos, financieros y materiales necesarios para alcanzar las metas de aprendizaje y desarrollo del establecimiento educativo. En particular, los criterios relativos a la gestión de personas consideran acciones destinadas a la implementación de estrategias de mejoramiento de recursos humanos, desarrollo del trabajo en equipo y la generación de un adecuado ambiente de trabajo. Respecto a los criterios que dan cuenta de la gestión de recursos materiales y financieros, este dominio hace referencia a la obtención de recursos y su adecuada administración. Las actividades contenidas en esta área se orientan a que:',
                    '• El director y equipo directivo administran y organizan los recursos del establecimiento en función de su proyecto educativo institucional y de los resultados de aprendizaje de los estudiantes;',
                    '• El director y equipo directivo desarrollan iniciativas para la obtención de recursos adicionales, tanto del entorno directo como de otras fuentes de financiamiento, orientados a la consecución de los resultados educativos e institucionales;',
                    '• El director y equipo directivo motivan, apoyan y administra el personal para aumentar la efectividad del establecimiento educativo;',
                    '• El director y equipo directivo generan condiciones institucionales apropiadas para el reclutamiento, selección, evaluación y desarrollo del personal del establecimiento.',
                ].join('\n\n')
            },
            {
                title: 'd) Gestión del Clima Organizacional y Convivencia',
                content: [
                    'El clima organizacional es uno de los factores que más aporta al buen funcionamiento de una escuela; y, al mismo tiempo, es uno de los factores en los que el director y equipo directivo puede influir más directamente. Un buen clima laboral favorece la motivación y el compromiso de la comunidad educativa en el aprendizaje organizacional. En ese sentido, el dominio de gestión del clima organizacional y convivencia persigue relevar el rol del director en la generación de climas organizacionales adecuados para potenciar el proyecto educativo y los logros de aprendizaje de los estudiantes. Los criterios considerados en este ámbito de acción directiva, promueven la colaboración al interior del establecimiento y la conformación de redes de apoyo al mismo en su entorno. Las actividades contenidas en esta área se orientan a que:',
                    '• El director y equipo directivo promueven los valores institucionales y un clima de confianza y colaboración en el establecimiento para el logro de sus metas;',
                    '• El director y equipo directivo promueven un clima de colaboración entre el establecimiento educacional, los estudiantes y los padres y apoderados;',
                    '• El director y equipo directivo garantizan la articulación de la definición del proyecto educativo institucional con las características del entorno;',
                    '• El director y equipo directivo se relacionan con instituciones de su comunidad, para potenciar el proyecto educativo institucional y los resultados de aprendizaje de los estudiantes, generando redes de apoyo pertinentes;',
                    '• El director y equipo directivo informan a la comunidad y sostenedor los logros y necesidades del establecimiento.',
                ].join('\n\n')
            }
        ]
      },
      {
        id: '6-2',
        title: '6.2. Funciones generales del personal de los establecimientos educacionales',
        description: 'Todo el personal de los establecimientos educacionales estará obligado a respetar y cumplir las siguientes normas:',
        list: [
            { id: 'a)', text: 'Realizar el trabajo conveniente con el fin de lograr que el establecimiento pueda cumplir adecuadamente los fines de la educación.' },
            { id: 'b)', text: 'Realizar personalmente la labor convenida de acuerdo con las normas e instrucciones del Ministerio de Educación y del Empleador, según corresponda.' },
            { id: 'c)', text: 'Desempeñar su labor con diligencia y colaborar a la mejor marcha del proceso educacional del establecimiento y de la comuna.' },
            { id: 'd)', text: 'Guardar la debida lealtad y respeto hacia el establecimiento donde se desempeña y hacia el empleador y sus representantes.' },
            { id: 'e)', text: 'Dar aviso oportuno al empleador o a quien corresponda, de su ausencia por causa justificada.' },
            { id: 'f)', text: 'Respetar los controles de entrada y salida.' },
            { id: 'g)', text: 'Mantener sobriedad y corrección en el desempeño de su función, propias del personal de un establecimiento educacional.' },
            { id: 'h)', text: 'Mantener en todo momento relaciones jerárquicas deferentes con jefes, compañeros de trabajo, subalternos y alumnos.' },
            { id: 'i)', text: 'Velar por los intereses de los establecimientos en que trabajen, evitando pérdidas, deterioro o gastos innecesarios.' },
            { id: 'j)', text: 'Comunicar, dentro de 48 horas de sucedido, todo cambio en los antecedentes personales para ser anotados en el contrato de trabajo, especialmente el cambio de domicilio.' },
        ]
      },
      {
        id: '6-3',
        title: '6.3. Rol del Director / Directora',
        description: 'El Ministerio de Educación promovió cambios significativos en el proyecto de reforma a la Ley JEC, Nº19.532. Dicho proyecto aprobado por el parlamento y publicado como ley N° 19.979 el 6 de noviembre de 2004, señala entre otros aspectos, las atribuciones y funciones de los directores de establecimientos educacionales. Concretamente, esta Ley señala que la función principal del director consiste en conducir y liderar el proyecto educativo institucional, además de gestionar administrativa y financieramente el establecimiento cuando se le hayan transferido tales atribuciones, según la legalidad vigente. Las atribuciones de los directores de establecimientos educacionales que este documento legal expone se plantean en el ámbito pedagógico, administrativo y financiero; aunque los últimos dos pueden ser encomendados.',
        accordionItems: [
            {
                title: 'En lo pedagógico',
                content: [
                    'a) Formular, hacer seguimiento y evaluar las metas y objetivos del establecimiento, los planes y programas de estudio y las estrategias para su implementación.',
                    'b) Organizar, orientar y observar las instancias de trabajo técnico - pedagógico y de desarrollo profesional de los docentes del establecimiento.',
                    'c) Adoptar las medidas para que los padres o apoderados reciban regularmente información sobre el funcionamiento del establecimiento y el progreso de sus hijos.'
                ].join('\n\n')
            },
            {
                title: 'En lo administrativo',
                content: [
                    'a) Organizar y supervisar el trabajo de los docentes y del personal del establecimiento educacional, según Ley N° 19.464.',
                    'b) Proponer el personal a contrata y de reemplazo, tanto el docente como el regido por la Ley N°19.464.',
                    'c) Promover una adecuada convivencia en el establecimiento y participar en la selección de sus profesores.',
                    'd) Cada director de establecimiento municipalizado establecerá compromisos de desempeño, con su sostenedor, en base a las metas institucionales y metas de desarrollo profesional.'
                ].join('\n\n')
            },
            {
                title: 'En lo financiero',
                content: 'a) Asignar, administrar y controlar los recursos en los casos que se le haya otorgado esa facultad por el sostenedor, según la Ley sobre Delegación de Facultades (Ley N° 19.410). La cual es modificada por ley N° 19.979 de la siguiente forma: “A solicitud de los directores de establecimientos educacionales administrados por municipalidades o corporaciones municipales de educación, los Alcaldes deberán delegar en dichos directores facultades especiales para percibir y administrar los recursos a que se refiere el artículo 22, siguiente en conformidad a los procedimientos que más adelante se señalan. La Alcaldesa sólo podrá denegar esta solicitud por motivos fundados y con acuerdo del Concejo Municipal”.'
            }
        ]
      },
      { id: '6-4', title: '6.4. Funciones del Sub Director', description: 'Hay algunos establecimientos educacionales que cuentan con el cargo de Sub Director; El Subdirector académico es el colaborador inmediato del Director, y conjuntamente con él, responsable ante las autoridades del Ministerio de Educación; Planea, organiza, ejecuta, controla y evalúa el desarrollo académico de la institución acompañando al personal docente en los diseños de actividades, estrategias, metodologías y criterios de evaluación; El Subdirector tiene la capacidad de proyectar una imagen positiva de la institución en aquellos lugares a los que asiste; Demuestra que valora el aporte de los sistemas políticos, sociales y culturales al establecimiento; Hace contactos con las instituciones de la comuna para establecer redes de apoyo para el establecimiento; Contribuye al desarrollo del entorno comunal; Tiene las atribuciones siguientes funciones:',
        list: [
            { id: 'a)', text: 'Representar al colegio en su calidad de miembro de la Dirección;' },
            { id: 'b)', text: 'Difundir el PEI y asegurar la participación de la comunidad educativa y el entorno;' },
            { id: 'c)', text: 'Asegurar la existencia de información útil para la toma oportuna de decisiones;' },
            { id: 'd)', text: 'Formar parte del Consejo Académico;' },
            { id: 'e)', text: 'Administrar los recursos de su área en función del PEI;' },
            { id: 'f)', text: 'Colaborar en la asignación de los docentes y en la elaboración de horarios;' },
            { id: 'g)', text: 'Coordinar los servicios académicos y el personal que está directamente al servicio de ellos: Biblioteca, material didáctico, audiovisuales, laboratorios y otros;' },
            { id: 'h)', text: 'Presentar al Director o Directora, las necesidades del material didáctico de las áreas;' },
            { id: 'i)', text: 'Atender los reclamos o inquietudes de los estudiantes y de los padres de familia, en el aspecto académico;' },
            { id: 'j)', text: 'Reemplazar al Director o Directora, en sus ausencias, con todas las atribuciones de dicho cargo;' },
            { id: 'k)', text: 'Atender a los padres de familia, acudientes, profesores y estudiantes cuando las consultas sean de su competencia;' },
            { id: 'l)', text: 'Conceder permiso de salida del Colegio al personal docente y educando a su cargo en caso de urgencia;' },
            { id: 'm)', text: 'Cooperar con la Dirección en la evaluación y supervisión del trabajo realizado por el personal docente y administrativo y hacer recomendaciones necesarias;' },
            { id: 'n)', text: 'Organizar y supervisar las pruebas evaluativas y exámenes;' },
            { id: 'o)', text: 'Colaborar con la Directora en la planificación y desarrollo de las actividades que dentro y fuera del Colegio se realicen;' },
            { id: 'p)', text: 'Colaborar con la Directora en la política educativa establecida por el Colegio;' },
            { id: 'q)', text: 'Representar a la Directora en aquellas funciones que le asigne o delegue.' }
        ]
      },
      {
        id: '6-5',
        title: '6.5. Funciones Secretaria de Dirección',
        list: [
          { id: 'a)', text: 'Desarrollar su trabajo en estrecha y leal colaboración con la Dirección y toda la Comunidad Educativa, manteniendo la reserva debida y necesaria sobre el contenido de asuntos de índole privado.' },
          { id: 'b)', text: 'Ejecutar el cargo con la mayor acuciosidad y puntualidad, cumpliendo las tareas que le asigne la Dirección del Colegio.' },
          { id: 'c)', text: 'Atender al público con cortesía y corrección, evitando largas conversaciones sobre asuntos ajenos a su quehacer.' },
          { id: 'd)', text: 'Recibir y comunicar en forma breve los llamados telefónicos. (En aquellos llamados de mayor importancia para la Dirección, U. T. P. o Inspectoría dejará constancia escrita, con fecha, hora, nombre y motivo del llamado).' },
          { id: 'e)', text: 'Responder todos los oficios y correspondencias desde el Establecimiento y los diferentes organismos educativos y autoridades.' },
          { id: 'f)', text: 'Confeccionar circulares, planillas certificados y anotar en los registros pertinentes del caso.' },
          { id: 'g)', text: 'Es la única encargada del computador de secretaría.' },
          { id: 'h)', text: 'Recibir correspondencia y distribuirla oportunamente.' },
          { id: 'i)', text: 'Confeccionar los informes semestrales, certificados anuales y las actas finales, en estrecha coordinación con U. T. P.' }
        ]
      },
      {
        id: '6-6',
        title: '6.6. Funciones del Personal de secretaria',
        list: [
          { id: 'a)', text: 'Atender el teléfono.' },
          { id: 'b)', text: 'Entregar información sobre el establecimiento previa autorización de la Directora a apoderados alumnos y personal.' },
          { id: 'c)', text: 'Tomar recados telefónicos y transferirlos al destinatario.' },
          { id: 'd)', text: 'Mantener en buen estado el libro de Reclamos y Sugerencias.' },
          { id: 'e)', text: 'Mantener el aseo del sector donde desarrollan su labor diaria.' },
          { id: 'f)', text: 'Vigilar que al establecimiento no ingresen personas no autorizadas.' },
          { id: 'g)', text: 'Mantener al día el registro de crónica.' },
          { id: 'h)', text: 'Informar a los postulantes de todo lo que requiere para la entrevista.' },
          { id: 'i)', text: 'Rendir diariamente el dinero y documentación recibida.' },
          { id: 'j)', text: 'Mantener al día libro contable de subvención compartida.' },
          { id: 'k)', text: 'Al término de la jornada, revisar que se encuentren todos los libros de clase guardados.' }
        ]
      },
      {
        id: '6-7',
        title: '6.7. Funciones de la Unidad Técnica Pedagógica',
        description: [
            'La U.T.P. funcionará como la instancia pedagógica de coordinación que integrará y canalizará acciones educativas que armonicen el trabajo pedagógico en función de los objetivos y metas propuestas en el colegio.',
            'Las funciones técnico-pedagógicas son aquellas de carácter profesional de nivel superior que, sobre la base de una formación y experiencia docente específica para cada función, se ocupan respectivamente de los siguientes campos de apoyo o complemento de la docencia: orientación educacional y vocacional, supervisión pedagógica, planificación curricular, evaluación del aprendizaje, investigación pedagógica, coordinación de procesos de perfeccionamiento docente y otras análogas que por decreto reconozca el Ministerio de Educación, previo informe de los organismos competentes (Ley 19.070, Art. 8).',
            'Los profesionales de la educación que cumplan funciones de Subdirector, Inspector General y Jefe Técnico serán de exclusiva confianza del director del establecimiento educacional (Ley 20.501, Art. 34C).',
            'La Unidad Técnico Pedagógica:'
        ],
        list: [
            { id: 'a)', text: 'Fortalece el trabajo técnico pedagógico del docente en el aula, asesorándolo con apoyo oportuno y efectivo.'},
            { id: 'b)', text: 'Promover el trabajo en equipo colaborativo, participativo y organizado.'},
            { id: 'c)', text: 'Facilitar el perfeccionamiento y capacitación de los docentes.'},
            { id: 'd)', text: 'Orientar estrategias innovadoras y creativas a los problemas educativos.'},
            { id: 'e)', text: 'Confrontar planes y programas con evaluaciones y o exposiciones de temas específicos.'},
            { id: 'f)', text: 'Revisar resultados evaluativos semestrales y anuales analizando y destacando los logros obtenidos con los alumnos.'},
            { id: 'g)', text: 'Supervisar el trabajo docente en los aspectos y técnicos administrativos con el objetivo de optimizar las prácticas pedagógicas para un mejor resultado en la obtención de aprendizajes.'},
            { id: 'h)', text: 'Organizar talleres con profesores al interior de la escuela con el objetivo de mejorar continuamente nuestras prácticas pedagógicas.'},
            { id: 'i)', text: 'Propiciar períodos de capacitación para los docentes al inicio, término durante el año escolar.'},
            { id: 'j)', text: 'Coordinar las prácticas de observación y profesionales, solicitadas a la escuela asignando horarios y funciones según necesidades del colegio y solicitudes de la institución educativa que la solicita.'},
            { id: 'k)', text: 'Elaborar y programar la aplicación de evaluaciones exploratorias del aprendizaje con los alumnos.'},
            { id: 'l)', text: 'Coordinar un equipo pedagógico encargado de tabular, analizar e informar oportunamente los resultados de las evaluaciones aplicadas proponiendo remediales para las dificultades y asegurando la pertinencia de los logros.'},
            { id: 'm)', text: 'Calendarizar las actividades del año escolar con la participación del equipo docente-directivo.'},
            { id: 'n)', text: 'Coordinar y propiciar las reuniones de Consejos Escolares brindando las facilidades para la exposición de acuerdos tomados por los integrantes del consejo.'},
            { id: 'o)', text: 'Supervisar clases de aula o en terreno evaluando aspectos necesarios para el logro de los objetivos propuestos.'},
        ]
      },
      {
        id: '6-8',
        title: '6.8. Funciones del Inspector (a) General',
        description: 'Es el (la) responsable inmediato de la organización, coordinación y supervisión del trabajo armónico y eficiente de los distintos estamentos de la escuela. Los profesionales de la educación que cumplan funciones de Subdirector, Inspector General y Jefe Técnico serán de exclusiva confianza del director del establecimiento educacional (Ley 20.501, Art. 34C). Según el Perfil de Competencias realizado por Educar Chile, el Inspector General debe:',
        list: [
            { id: 'a)', text: 'Establecer lineamientos educativo-formativos al interior de los diferentes niveles.'},
            { id: 'b)', text: 'Difundir el PEI y asegurar la participación de la comunidad educativa y el entorno.'},
            { id: 'c)', text: 'Gestionar el clima organizacional y la convivencia.'},
            { id: 'd)', text: 'Asegurar la existencia de información útil para la toma oportuna de decisiones.'},
            { id: 'e)', text: 'Gestionar el personal.'},
            { id: 'f)', text: 'Coordinar y ejecutar el proceso de admisión de alumnos.'},
            { id: 'g)', text: 'Planificar y coordinar las actividades de su área.'},
            { id: 'h)', text: 'Administrar los recursos de su área en función del PEI.'},
            { id: 'i)', text: 'Coordinar aspectos disciplinarios de la labor docente.'},
            { id: 'j)', text: 'Administrar la disciplina del alumnado.'},
            { id: 'k)', text: 'Se ocupa de desarrollar las políticas formativas de la institución, yendo más allá de la realización de actividades aisladas.'},
            { id: 'l)', text: 'Motiva y ejecuta proyectos innovadores que integren los aprendizajes, alineando el currículo con el PEI.'},
            { id: 'm)', text: 'Está presente en las actividades escolares, interesándose y participando, dando valor a todo tipo de aprendizajes.'},
            { id: 'n)', text: 'Está abierto a escuchar las consultas de los estudiantes profesores y apoderados, siendo ampliamente reconocido/a por ello.'},
            { id: 'o)', text: 'Crea una comunidad altamente comprometida con los principios y valores del Proyecto Educativo Institucional.'},
            { id: 'p)', text: 'Compromete a los actores claves de la comunidad (profesores y estudiantes) en la Difusión del PEI.'},
            { id: 'q)', text: 'Involucra activamente al sostenedor en la difusión del PEI y la Planificación Estratégica.'},
            { id: 'r)', text: 'Conquista la confianza de los profesores y el personal por la transparencia de sus decisiones.'},
            { id: 's)', text: 'Desarrolla una cultura de altas expectativas en las capacidades de los profesores para cambiar positivamente.'},
            { id: 't)', text: 'Establece una política de evaluación de desempeño clara e informada con fines de desarrollo profesional.'},
            { id: 'u)', text: 'Establece incentivos al desempeño docente de acuerdo al cumplimiento de metas personales.'},
            { id: 'v)', text: 'Logra que todas las personas utilicen los procedimientos para el manejo de la información, minimizando la pérdida o mal uso de ella.'},
            { id: 'w)', text: 'Compromete a toda la comunidad escolar en el respeto por la información oportuna, pertinente y veraz.'},
            { id: 'x)', text: 'Logra mantener los canales de comunicación abiertos y transparentes.'},
            { id: 'y)', text: 'Usa diversidad de estrategias para promover el desarrollo profesional de los profesores y mejorar el proceso de enseñanza aprendizaje.'},
            { id: 'z)', text: 'Incentiva la innovación y el emprendimiento.'},
            { id: 'aa)', text: 'Establece un clima de cooperación para que los profesores acepten la responsabilidad colectiva de mejorar los procesos de aprendizaje.'},
            { id: 'bb)', text: 'Ayuda a todos los miembros de la escuela a involucrarse con las metas de la escuela.'},
            { id: 'cc)', text: 'Requiere que los docentes rindan cuentas por su desempeño a fin de apoyar el logro de las metas de la Institución educativa.'},
            { id: 'dd)', text: 'Organiza con gran eficiencia las diferentes etapas del proceso de selección e inducción.'},
            { id: 'ee)', text: 'Entrega información completa a los Profesores Jefes de los estudiantes que se incorporan a su curso.'},
            { id: 'ff)', text: 'Incorpora a otras instituciones relevantes de la comuna en la difusión del proceso de matrícula.'},
            { id: 'gg)', text: 'Involucra a los miembros del área en un trabajo de planificación cooperativo con otras áreas.'},
            { id: 'hh)', text: 'Promueve la planificación de todas las actividades, el monitoreo y su evaluación, como una práctica habitual del establecimiento.'},
            { id: 'ii)', text: 'Verifica que su planificación esté coordinada con las planificaciones de las otras áreas, estableciendo un estilo de trabajo cooperativo.'},
            { id: 'jj)', text: 'Genera fuentes de recursos a partir del mismo trabajo del área.'},
            { id: 'kk)', text: 'Implementa procedimientos para ahorrar recursos.'},
            { id: 'll)', text: 'Relaciona el costo de los recursos utilizados y los aprendizajes logrados: estudio costo-beneficio.'},
            { id: 'mm)', text: 'Ayuda habitualmente a los profesores a encontrar soluciones prácticas y eficientes.'},
            { id: 'oo)', text: 'Mantiene el buen ánimo y el buen trato aún en situaciones de conflicto.'},
            { id: 'pp)', text: 'Incentiva la responsabilidad de los profesores reconociendo sus méritos públicamente.'},
            { id: 'qq)', text: 'Ejerce un reconocido liderazgo en su relación con los profesores, quienes respetan sus opiniones y ponen en práctica sus recomendaciones.'},
            { id: 'rr)', text: 'Logra que los alumnos comprendan el concepto de autocuidado como actitud de vida.'},
            { id: 'ss)', text: 'Conoce por su nombre a todos los estudiantes y ubica a sus padres.'},
            { id: 'tt)', text: 'Investiga a fondo las situaciones de conflicto, para hacer una buena mediación.'},
            { id: 'uu)', text: 'Ejerce una influencia positiva en los estudiantes, quienes respetan los acuerdos y tienen confianza en su profesor.'},
            { id: 'vv)', text: 'Acompaña a los estudiantes en situaciones informales tales como: recreos, salidas a terreno, competencias etc., estableciendo relaciones cordiales y de ayuda.'},
            { id: 'ww)', text: 'Aplica encuestas de satisfacción implementando mejoras a partir de sus resultados.'},
        ]
      },
      {
        id: '6-9',
        title: '6.9. Funciones del Docente',
        description: 'De acuerdo a lo dispuesto en el artículo 6 del Estatuto Docente, la "función docente" es aquella de carácter profesional de nivel superior, que lleva a cabo directamente los procesos sistemáticos de enseñanza y educación; lo que incluye el diagnóstico, planificación, ejecución y evaluación de los mismos procesos y de las actividades educativas generales y complementarias que tienen lugar en las unidades educacionales de nivel Pre-básico, básico y medio. Para los efectos del referido estatuto se entiende por:',
        list: [
            { id: '•', text: 'Docencia de aula: la acción o exposición personal directa realizada en forma continua y sistemática por el docente, inserta dentro del proceso educativo. La hora docente de aula es de 45 minutos como máximo.'},
            { id: '•', text: 'Actividades curriculares no lectivas: aquellas labores educativas complementarias de la función docente de aula tales como administración de la educación; actividades anexas o adicionales a la función docente propiamente tal;', subItems: [
                'jefatura de curso;',
                'actividades co-programáticas y culturales;',
                'actividades extraescolares; actividades vinculadas con organismos o acciones propias del quehacer escolar;',
                'actividades vinculadas con organismos o instituciones del sector que incidan directa o indirectamente en la educación y las análogas que sean establecidas por un decreto del Ministerio de Educación.'
            ]},
            { id: '', text: 'Docente es el profesor titulado como tal o autorizado en conformidad a la ley, que tiene a su cargo el desempeño de funciones docentes de acuerdo con los fines y objetivos de educación del establecimiento, de su curso y especialidad o asignatura.'},
            { id: '', text: 'El Docente deberá diseñar e implementar actividades educativas formuladas según los planes y programas, motivando estrategias innovadoras para el buen resultado de los aprendizajes en los alumnos.'},
            { id: '', text: 'El Rol del Docente propiamente tal será:'},
            { id: 'a)', text: 'Planificar, desarrollar y evaluar sistemáticamente el proceso de aprendizaje en las asignaturas que le corresponden.'},
            { id: 'b)', text: 'Fomentar hábitos y valores en los alumnos, mediante el ejemplo.'},
            { id: 'c)', text: 'Cumplir los horarios de clases y de colaboración correspondiente.'},
            { id: 'd)', text: 'Mantener al día libros de clases y otros documentos registrando oportunamente y en forma precisa la información solicitada.'},
            { id: 'e)', text: 'Mantener comunicación oportuna con los apoderados de los alumnos dando a conocer el desarrollo del niño en su proceso escolar, atendiendo al apoderado cuando se requiera.'},
            { id: 'f)', text: 'Respetar y seguir el procedimiento en caso de accidentes de los alumnos de acuerdo a lo señalado en el Reglamento Interno.'},
            { id: 'g)', text: 'Responsabilizarse de las actividades de los alumnos en su horario de clase, asegurándose que cumplan lo señalado en el Reglamento Interno con respecto a esta materia.'},
            { id: 'h)', text: 'Velar por los bienes de la escuela y responsabilizarse por los que se le asignan.'},
            { id: 'i)', text: 'Asistir y participar en los consejos técnicos y administrativos.'},
            { id: 'j)', text: 'Resguardar la presentación del libro de clases, manteniéndolo limpio, ordenado y sin borrones.'},
            { id: 'k)', text: 'Avisar oportunamente de cualquier actividad extra programática y responsabilizarse de los requerimientos de estos eventos.'},
            { id: 'l)', text: 'Solicitar materiales y multicopiados a lo menos con 48 horas hábiles de antelación a la jefatura técnico-pedagógica.'},
            { id: 'm)', text: 'Corregir y aconsejar actitudes en sus alumnos, incentivando el respeto, la participación y la colaboración en las asignaturas.'},
            { id: 'n)', text: 'Promover permanentemente la buena imagen de nuestra unidad educativa.'},
            { id: 'o)', text: 'Promover el acercamiento de los alumnos a la educación de continuidad.'},
            { id: 'p)', text: 'Integrar y responsabilizar a la familia en el proceso formativo de sus pupilos.'},
        ]
      },
      {
        id: '6-10',
        title: '6.10. Funciones del Docente Profesor jefe del curso',
        description: 'El profesor jefe de curso, es el docente de aula que tiene la responsabilidad del proceso educativo y orientador de un grupo de estudiantes destinados a un curso. Corresponde al profesor jefe de curso las siguientes funciones:',
        list: [
            { id: 'a)', text: 'Guiar y tutor de sus alumnos en lo vocacional, educacional y personal.'},
            { id: 'b)', text: 'Capaz de adaptarse a los cambios que ocurren en el medio, debe ser un ejemplo de vida para sus alumnos.'},
            { id: 'c)', text: 'Organizar y asesorar las actividades de consejo de curso.'},
            { id: 'd)', text: 'Informarse oportunamente sobre rendimiento y disciplina escolar de sus alumnos.'},
            { id: 'e)', text: 'Informarse oportunamente a los padres y apoderados sobre rendimiento y disciplina de sus pupilos.'},
            { id: 'f)', text: 'Asegurar un clima positivo de comunicación y trabajo con sus apoderados, mediante reuniones y talleres mensuales.'},
            { id: 'g)', text: 'Tener capacidad para mantener una comunicación fluida con los docentes del curso.'},
            { id: 'h)', text: 'Cumplir con sus obligaciones administrativas.'},
            { id: 'i)', text: 'Atender en forma personalizada a los apoderados segundo horario estipulado.'},
            { id: 'j)', text: 'Vivenciar valores como la responsabilidad, puntualidad, lealtad, respeto e identidad con la unidad educativa.'},
            { id: 'k)', text: 'Demostrar en su desempeño profesional ecuanimidad al emitir opiniones y juicios sobre los alumnos.'},
            { id: 'l)', text: 'Otras inherentes al cargo, dispuestas por la dirección del establecimiento.'},
            { id: 'm)', text: 'Coordinar su labor con el equipo directivo, profesores de subsectores y/o de especialidad, paradocente y con los padres y apoderados del curso.'},
            { id: 'n)', text: 'Responsabilizarse de la labor administrativa de su curso.'},
            { id: 'o)', text: 'Confeccionar y mantener actualizado los antecedentes de los alumnos.'},
            { id: 'p)', text: 'Ingresar los antecedentes y calificaciones de los estudiantes que ingresen a su curso durante el año escolar.'},
            { id: 'q)', text: 'Mantener actualizada y ordenada la base de datos de su curso.'},
            { id: 'r)', text: 'Confeccionar los documentos que sean pertinente en relación a su labor de orientación, de jefe de curso y técnico administrativa del curso cuando sea necesario.'},
            { id: 's)', text: 'Revisar periódicamente las hojas de vida y las calificaciones de su curso, con el propósito que adopte medidas administrativas que correspondan a una labor preventiva.'},
            { id: 't)', text: 'Atender a los estudiantes y apoderados de su curso para ello se destinaran dos horas semanales de las horas de colaboración.'},
            { id: 'u)', text: 'Organizar y asesorar a los subcentros de padres y apoderados y mantenerlos informados de los logros académicos, comportamiento, atrasos y asistencia de sus pupilos.'},
            { id: 'v)', text: 'Generar una red de comunicación con la Directiva de apoderados y/o alumnos del curso para citar a reunión de apoderados, además de la citación de Inspectoría General.'},
            { id: 'w)', text: 'Preparar la reunión de apoderados con la Directiva del curso y generar un proyecto de curso.'},
            { id: 'x)', text: 'Realizar la reunión de apoderados según indicaciones de orientación, destinando tiempo para los temas propios del curso.'},
            { id: 'y)', text: 'En todas las reuniones de apoderados deberá entregar un panorama global del curso para la labor preventiva.'},
            { id: 'z)', text: 'Citar y atender en el día que corresponde el horario de atención de apoderados a los apoderados ausentes en las reuniones de subcentro.'},
            { id: 'aa)', text: 'Planificar y desarrollar una efectiva orientación educacional siguiendo las orientaciones de los programas de orientación en horas de consejo de curso (www.mineuc.cl/curriculum).'},
            { id: 'bb)', text: 'Responsabilizarse por desarrollar una efectiva jefatura de curso a través de la preocupación, seguimiento, atención individual y oportuna de los estudiantes a su cargo, velando por:'},
            { id: 'cc)', text: 'El bienestar, salud, y asistencia social de los estudiantes.'},
            { id: 'dd)', text: 'El rendimiento académico, asistencia a clases, atrasos y presentación personal derivando en forma oportuna a quien corresponda, dejando registro y plan remedial.'},
            { id: 'ee)', text: 'El cumplimiento de los horarios de clases y permanencia en el colegio.'},
            { id: 'ff)', text: 'Cumplimiento de los lineamientos del manual de convivencia, reglamento interno y de evaluación.'},
            { id: 'gg)', text: 'El cuidado del mobiliario, ornato, aseo y presentación de la sala de clases de su curso.'},
            { id: 'hh)', text: 'Un trabajo conjunto con Inspector General, jefe de U. T. P. y Orientador, para lograr los objetivos educativos del colegio.'},
        ]
      },
      {
        id: '6-11',
        title: '6.11. Funciones de los Profesores de Educación Física',
        description: 'Además de cumplir con las funciones generales de los docentes los profesores de Educación Física tendrán como deberes:',
        list: [
            { id: 'a)', text: 'Supervisar el uso del vestuario adecuado para la actividad (uniforme de gimnasia) y los hábitos de higiene posteriores al desarrollo de su clase.' },
            { id: 'b)', text: 'Deben permanecer en todo momento con los estudiantes.' },
            { id: 'c)', text: 'Garantizar las condiciones de seguridad en que los alumnos desarrollen la actividad (dentro o fuera del colegio).' },
            { id: 'd)', text: 'Trasladar a los alumnos desde la sala de clases hasta donde se efectúan las actividades, para que una vez finalizadas estas, concluir la clase en la sala respectiva.' },
            { id: 'e)', text: 'Desarrollar actividades educativas no físicas, para aquellos alumnos que por razones médicas estén escusados de la actividad física.' },
            { id: 'f)', text: 'Supervisar y controlar el vestuario de los alumnos en camarines y duchas.' },
            { id: 'g)', text: 'Responsabilizarse por los materiales e implementos utilizados en su clase.' },
            { id: 'h)', text: 'Asignar supervisar y evaluar los trabajos teóricos de los alumnos que estén impedidos de realizar actividad física.' },
            { id: 'i)', text: 'Informar a la dirección de toda situación extraordinaria ocurrida en el transcurso de su clase.' }
        ]
      },
      {
        id: '6-12',
        title: '6.12. Contrataciones en los establecimientos educacionales a través de SEP',
        nestedSections: [
          {
            id: '6-12-a',
            title: 'a) Docente - Apoyo en Gestión Curricular',
            description: 'Los docentes de apoyo a la gestión curricular pueden ser parte o no de la dotación docente del establecimiento. En caso de haber participado del proceso de evaluación docente tienen que al menos haber obtenido la calificación de "competente" Las funciones a desempeñar dicen relación con:',
            list: [
              { id: '•', text: 'Preparación, planificación de la enseñanza.' },
              { id: '•', text: 'Reflexión pedagógica.' },
              { id: '•', text: 'Evaluación y monitoreo de los procesos de enseñanza-aprendizaje.' },
              { id: '•', text: 'Participación en instancias de actualización docente.' },
            ]
          },
          {
            id: '6-12-b',
            title: 'b) Docente - Reforzamiento Educativo',
            description: 'Los docentes que presten servicios de reforzamiento educativo y que hayan participado del proceso de evaluación docente teniendo al menos la calificación de “competente”. Pueden desarrollar esta tarea personal ya contratado en la escuela, siempre y cuando no supere las 44 horas semanales. El profesor del curso junto al Jefe Técnico del establecimiento, definirán la planificación de los objetivos, contenidos y actividades indicadas para el alumnado que necesita refuerzo educativo: los(as) alumnos(as) y áreas a reforzar con énfasis en lenguaje y matemática y con especial atención a los alumnos prioritarios con rezago y talentosos, en el marco de las siguientes funciones:',
            list: [
              { id: '•', text: 'Trabajo personalizado con los niños(as) fuera del horario normal de clases.' },
              { id: '•', text: 'Realizar un seguimiento individualizado de cada alumno o alumna y aportar la información necesaria para posterior evaluación.' },
              { id: '•', text: 'Colaboración con el profesor de área en el seguimiento y evaluación del progreso del alumnado.' },
              { id: '•', text: 'Elaboración de materiales y recursos educativos destinados al alumnado, al profesorado y a las familias con el fin de facilitar y potenciar su implicación en la tarea educativa.' },
              { id: '•', text: 'El docente de reforzamiento educativo, bajo ninguna circunstancia podrá reemplazar al docente a cargo de una asignatura o subsector de aprendizaje.' },
            ]
          },
          {
            id: '6-12-c',
            title: 'c) Monitor(a) de Aula',
            description: 'Las personas que desempeñaran labores de monitor de aula no requieren poseer un título profesional, sin embargo deben demostrar experiencia, estar cursando la carrera de pedagogía o bien poseer competencias necesarias para desarrollar tareas de ayudante del profesor(a). El profesor y éste con el Jefe Técnico del establecimiento definirán las actividades a realizar en el marco de las siguientes funciones:',
            list: [
              { id: '•', text: 'Apoyo en actividades directas con los niños(as).' },
              { id: '•', text: 'Ayudar a la profesora en el desarrollo de las actividades en el aula.' },
              { id: '•', text: 'Ayudar al desarrollo de las tareas escolares.' },
              { id: '•', text: 'Acompañar a salidas a terreno.' },
              { id: '•', text: 'Ayudar a la organización y disciplina del curso.' },
              { id: '•', text: 'Apoyo a tareas de organización de curso y trabajo escolar.' },
              { id: '•', text: 'Preparación de materiales didáctico.' },
              { id: '•', text: 'Ayudar a la organización de las salas de clase, contextualización de aula.' },
              { id: '•', text: 'Ordenar, mantener y resguardar el material didáctico.' },
              { id: '•', text: 'Revisar tareas, corregir y marcar cuadernos.' },
              { id: '•', text: 'Apoyo al docente en elaboración de informes por alumno(a).' },
            ]
          },
          {
            id: '6-12-d',
            title: 'd) Educador(a) Tradicional',
            description: 'Las personas que desempeñan la labor de educador(a) tradicional deben poseer una acreditación que lo habilite como tal, quien deberá desarrollar funciones de apoyo al docente de aula en la contextualización de contenidos culturales y lingüísticos en el marco de la implementación del Sector de Lengua Indígena, en Educación Intercultural Bilingüe. El educador(a) tradicional deberá realizar las siguientes actividades:',
            list: [
              { id: '•', text: 'Apoyar la incorporación de los contenidos culturales y lingüísticos del pueblo originario al que pertenece, para la realización de acciones propuestas en el sector de lengua indígena, por el docente en el establecimiento y/o desarrollar talleres conjuntos de lengua y cultura indígena.' },
              { id: '•', text: 'Participar en las reuniones que disponga el establecimiento, el Microcentro EIB y/o el profesor mentor relacionadas con la planificación en el establecimiento.' },
              { id: '•', text: 'Definir en conjunto con el (la) docente encargado y/o directivo de la escuela:', subItems: ['a. horario,', 'b. materiales y', 'c. planificación del trabajo a realizar con los estudiantes.'] },
              { id: '•', text: 'Resguardar el material didáctico intercultural que elabore o utilice al apoyar una unidad o clase del sector de lengua indígena.' },
              { id: '•', text: 'Registrar, en conjunto con el docente de curso, en el libro de clases, las acciones a desarrollar en el sector de lengua indígena y en el ámbito intercultural.' },
            ]
          },
          {
            id: '6-12-e',
            title: 'e) Psicopedagogo(a)',
            description: 'La función del psicopedagogo(a) apunta fundamentalmente a realizar intervenciones dirigidas a ayudar a superar las dificultades y problemas que encuentran los alumnos(as) cuando llevan a cabo nuevos aprendizajes, asesorando en cuestiones metodológicas a los docentes. El trabajo desarrollado por el psicopedagogo(a) requiere de la coordinación con el profesor directamente, así como con el jefe técnico, orientador educacional y psicólogo del establecimiento. Algunas de las funciones serían:',
            list: [
                {id: '•', text: 'Valoración psicopedagógica o diagnóstico de posibles alumnos con necesidades educativas especiales.'},
                {id: '•', text: 'Asesoramiento general de cómo atender la diversidad y los alumnos con necesidades educativas especiales dentro del aula.'},
                {id: '•', text: 'Asesoramiento general en la realización del proyecto curricular o las programaciones de aula.'},
                {id: '•', text: 'Realización de planes de trabajo individual para aquellos alumnos con algún tipo de dificultad concreta.'},
                {id: '•', text: 'Realización de trabajo grupal para aquellos grupos o clases que muestran alguna dificultad común en relación al aprendizaje.'},
                {id: '•', text: 'Apoyo al profesor en la elaboración de las adaptaciones curriculares y asesoramiento en la aplicación práctica y evaluación de las mismas.'},
                {id: '•', text: 'Creación de material de refuerzo específico y adaptado.'},
                {id: '•', text: 'Asesoramiento a las familias mediante tutorías individualizadas.'},
                {id: '•', text: 'Intervención directa con el alumno o grupo de alumnos.'},
                {id: '•', text: 'Realización de charlas de formación general a profesorado y padres.'},
            ]
          },
          {
            id: '6-12-f',
            title: 'f) Psicólogo(a)',
            description: 'El psicólogo(a) de preferencia debe contar con la especialidad de psicólogo educacional debidamente acreditada ante el MINEDUC y poseer competencias para intervenir en los ámbitos personal, familiar, organizacional, institucional, socio-comunitario y educativo en general. Las tareas que desarrolla el psicólogo(a) deben estar en coordinación con los docentes, equipo directivo, en especial con el orientador educacional y asistente social del establecimiento. Tiene un papel fundamental en el proceso educativo, ya que sus conocimientos sobre el proceso madurativo psicológico del niño les acredita para participar en el desarrollo de programas y actividades de formación para niños con ciertas necesidades, tanto sociales, de orientación psicológica, atención de padres y/o apoderados. Dentro de las tareas del profesional, cabe mencionar el mejoramiento de la convivencia y gestión del clima escolar, redundando en:',
            list: [
                {id: '•', text: 'Fortalecimiento del consejo escolar.'},
                {id: '•', text: 'Fortalecimiento de las familias y de los apoderados en el vínculo educativo y afectivo con los y las alumnas y la escuela.'},
                {id: '•', text: 'Establecer comunicación con las familias y apoderados, siendo fundamental que conozcan el desempeño tanto académico como socio emocional de sus niños(as).'},
                {id: '•', text: 'Ayudar a buscar soluciones a los problemas tanto académicos como conductuales que surgen en niños, adolescentes.'},
                {id: '•', text: 'Buscar soluciones sobre problemas de disciplina, respeto y tolerancia.'},
                {id: '•', text: 'Fomentar y favorecer la implementación de la orientación educativa en los centros de enseñanza para guiar a padres y profesores, y de manera especial a los estudiantes, para que éstos se conozcan así mismos y sepan cuáles son sus posibilidades en cuánto al aprendizaje.'},
                {id: '•', text: 'Se involucran con el personal docente, docente-directivo, asistentes de la educación y padres de familia para la integración de estudiantes con necesidades educativas especiales, en coordinación con los profesionales del proyecto de integración del establecimiento.'},
                {id: '•', text: 'Con especial atención a los(as) alumnos(as) prioritarios, sin que ello implique el desatender al resto del alumnado.'},
            ]
          },
          {
            id: '6-12-g',
            title: 'g) Asistente Social',
            description: 'Las funciones y tareas del asistente social deben estar en coordinación con el equipo directivo del establecimiento en especial el orientador educacional y psicólogo. Debe contribuir a:',
            list: [
                {id: '•', text: 'La integración de los alumnos(as) y sus familias a la unidad educativa a través de diversas acciones que permiten fortalecer, desarrollar y modificar, preventivamente posibles problemáticas detectadas en el grupo familiar, a fin de lograr una inserción dentro del sistema de redes que ofrece el Estado a nivel de la comuna, y consecuentemente obtener beneficios para así mejorar la calidad de vida de los estudiantes del establecimiento educacional.'},
                {id: '•', text: 'La detección y atención de las necesidades familiares de los(as) alumnos(as) prioritarios y los no prioritarios del establecimiento la escuela en la que se desempeña, de modo de asegurar un buen desarrollo de los alumnos(as).'},
                {id: '•', text: 'Apoyar en la detección y permanencia de los alumnos prioritarios del establecimiento, teniendo a su cargo los procesos de postulación y apelación.'},
                {id: '•', text: 'Gestionar instancias participativas, intervenciones y acciones que eviten el fracaso escolar y la deserción.'},
                {id: '•', text: 'Una labor educativa destinada a promover la participación de los(as) alumnos(as) y sus familias y los distintos grupos sociales que coexisten en el ámbito educacional.'},
                {id: '•', text: 'Realizar programas, actividades y gestiones para mejorar la convivencia escolar y familiar, realizando talleres de prevención y educación, con enfoque en las problemáticas sociales en que el quehacer del establecimiento se encuentra inserto.'},
            ]
          },
          {
            id: '6-12-h',
            title: 'h) Monitor(a) de Taller (Música, Baile, Deportes, Arte u otros)',
            description: [
                'Las personas que desempeñaran labores de monitor(a) de talleres no requieren poseer un título profesional, sin embargo deberán demostrar experiencia y/o certificación demostrable en el área.',
                'Las labores se circunscriben al desarrollo de actividades relacionadas con el desarrollo personal, artístico, cultural o deportivo de los alumnos, insertos en plan de mejoramiento del establecimiento.'
            ]
          }
        ]
      },
      {
        id: '6-13',
        title: '6.13. Funciones de Profesores de Apoyo PIE',
        description: 'Según el Decreto Supremo N°170, del 2009, el PIE es una estrategia inclusiva del sistema escolar cuyo propósito es entregar apoyos adicionales (en el contexto del aula común) a los estudiantes que presen- tan Necesidades Educativas Especiales (NEE), sean éstas de carácter permanente o transitorio, favoreciendo con ello la presencia y participación en la sala de clases, el logro de los objetivos de aprendizaje y la trayectoria educativa de "todos y cada uno de los estudiantes", contribuyendo con ello al mejoramiento continuo de la calidad de la educación en el establecimiento educacional. Para atender estas Necesidades especiales, es necesario contar con un Profesor de Apoyo, el cual deberá cumplir con las siguientes actividades:',
        list: [
          {id: 'a)', text: 'La realización, junto con el Docente de Aula, de las adaptaciones curriculares necesarias para los alumnos con necesidades educativas especiales.'},
          {id: 'b)', text: 'La elaboración de los programas de desarrollo individual que se requieran para la correcta atención del alumnado que lo necesite, así como el seguimiento de dichos programas.'},
          {id: 'c)', text: 'La realización de los aspectos concretos de los programas que requieran una atención individualizada o en pequeño grupo.'},
          {id: 'd)', text: 'La orientación a los profesores del alumno atendido en lo que se refiere al tratamiento educativo concreto.'},
          {id: 'e)', text: 'La elaboración del material didáctico necesario.'},
          {id: 'f)', text: 'La colaboración con el tutor en cuanto a la orientación a padres de los alumnos atendidos.'},
        ]
      },
      {
        id: '6-14',
        title: '6.14. Funciones de los Coordinadores PIE',
        description: 'Es aconsejable que el Coordinador PIE del establecimiento forme parte de la Unidad técnico pedagógica, de modo de facilitar los procesos de articulación entre los diversos programas que apuntan al mejoramiento continuo de la escuela o Liceo.',
        list: [
            { id: 'a)', text: 'Coordinar las distintas etapas y actividades comprometidas en el PIE.'},
            { id: 'b)', text: 'Preparar las condiciones para el desarrollo del PIE; conocer la Normativa Vigente; conformar los equipos técnicos, establecer funciones y responsabilidades de c/u de los integrantes del PIE.'},
            { id: 'c)', text: 'Informarse de los diversos programas que el establecimiento está implementando y colaborar con el equipo de gestión para articular el PIE con los diversos planes y programas (PME).'},
            { id: 'd)', text: 'Gestionar el buen uso del tiempo, de los espacios y los materiales.'},
            { id: 'e)', text: 'Liderar la instalación de una nueva cultura de colaboración en el establecimiento educacional.'},
            { id: 'f)', text: 'Asegurar la inscripción de los profesionales en el Registro Nacional de Profesionales de la Educación Especial, de acuerdo con las orientaciones del MINEDUC.'},
            { id: 'g)', text: 'Definir y establecer procesos de detección y evaluación integral de los/las estudiantes con NEE.'},
            { id: 'h)', text: 'Conocer y difundir el Formulario Único, el Registro de Planificación, y otros documentos del PIE.'},
            { id: 'i)', text: 'Establecer una relación de colaboración con el Departamento Provincial del MINEDUC y mantenerse informado/a.' },
            { id: 'j)', text: 'Coordinar el trabajo entre equipo de salud y educación en el territorio, en el marco del PIE.' },
            { id: 'k)', text: 'Velar por el buen uso y confidencialidad de la información acerca del estudiante y sus familias.' },
            { id: 'l)', text: 'Monitorear de manera permanente los aprendizajes de los estudiantes con NEE.' },
            { id: 'm)', text: 'Coordinar acciones de capacitación, a partir de las necesidades detectadas en la comunidad educativa.' },
            { id: 'n)', text: 'Disponer de sistemas para la información de la familia respecto al PIE.' },
            { id: 'o)', text: 'Cautelar el cumplimiento del número de las horas profesionales que exige la normativa PIE.' },
            { id: 'p)', text: 'Conocer la realidad comunal: catastros e información actualizada de la realidad de las familias.' },
            { id: 'q)', text: 'Establecer redes institucionales con organizaciones, servicios comunitarios, empresas, etc.' },
            { id: 'r)', text: 'Liderar procesos de demostración de la práctica pedagógica asociada al PIE (trabajo colaborativo y co-docencia en el aula) a fin de difundirla a otros docentes del establecimiento, y de otros establecimientos.' },
        ]
      },
      {
        id: '6-15',
        title: '6.15. Funciones Asistentes de la Educación',
        description: 'Todos los funcionarios, asistentes de la educación, deberán cumplir con lo acordado en el contrato de trabajo, reglamento interno y convivencia escolar y con el reglamento de orden higiene y seguridad y sus actualizaciones ya que cada funcionario posee una copia de estos. Los Paradocentes deben:',
        list: [
            { id: 'a)', text: 'Apoyar la labor docente y de inspectoría.'},
            { id: 'b)', text: 'Ayudar en la vigilancia de los alumnos en cuanto a comportamiento y presentación personal.'},
            { id: 'c)', text: 'Preparar material didáctico si fue requerido por un directivo docente.'},
            { id: 'd)', text: 'Cumplir con las tareas indicadas por su superior directo.'},
            { id: 'e)', text: 'Usar el uniforme indicado a su función.'},
        ]
      },
      {
        id: '6-16',
        title: '6.16. Funciones del Orientador',
        list: [
            { id: 'a)', text: 'Es el docente calificado en el área responsable de planificar, coordinar, supervisar y evaluar las actividades de orientación educacional, vocacional, profesional y de programas especiales, vinculados con la orientación grupal e individual del alumnado.'},
            { id: 'b)', text: 'Contribuir al desarrollo integral y armonioso del alumno, orientándolo hacia el logro de valores, hábitos y actitudes que permitan el máximo desarrollo personal, en lo intelectual, emocional y social.'},
            { id: 'c)', text: 'Orientar a los alumnos para que enfrenten, de manera adecuada, los cambios que se presenten durante su vida escolar.'},
            { id: 'd)', text: 'Orientar al alumno en relación a las actitudes con que debe afrontar sus estudios y vocación.'},
            { id: 'e)', text: 'Dirigir los consejos técnicos que le competen.'},
        ]
      },
      {
        id: '6-17',
        title: '6.17. Funciones del Consejo de Profesores',
        description: [
            'En los establecimientos educacionales habrá Consejos de Profesores u organismos equivalentes de carácter consultivo, integrados por personal docente directivo, técnico-pedagógico y docente. Estos serán organismos técnicos en los que se expresará la opinión profesional de sus integrantes.',
            'Al mismo tiempo, en los Consejos de Profesores u organismos equivalentes se encauzará la participación de los profesionales en el cumplimiento de los objetivos y programas educacionales de alcance nacional o comunal y en el desarrollo del proyecto educativo del establecimiento.',
            'Los profesores podrán ser invitados a las reuniones de los Centros de Cursos y Centros de Padres y Apoderados, cualquiera sea su denominación.',
            'El Consejo de Profesores es la instancia que convoca a todos los(as) docentes para el análisis y todo el quehacer Técnico-Pedagógico de la escuela. Es la orgánica que discute y entrega directrices para la toma de decisiones que y promueven el mejoramiento del proceso educativo institucional.'
        ],
        accordionItems: [
            {
                title: 'DE LOS DEBERES Y FUNCIONAMIENTO',
                content: [
                    'a) Todo docente del Establecimiento tiene la obligación de asistir con puntualidad a todos los consejos de profesores y reuniones técnicas que cite la Dirección o la Unidad Técnica del establecimiento educacional. Para ello, se debe destinar parte del horario de colaboración del profesor.',
                    'b) En las diferentes reuniones de profesores, se debe mantener por parte de sus integrantes una actitud acorde al nivel, evitando distracciones de todo tipo.',
                    'c) El Consejo de Profesores se reunirá en forma bimensual, además de las reuniones extraordinarias que cite la Dirección.',
                    'd) Las reuniones técnicas de profesores se realizarán semanalmente, en día y horario que fije la Dirección del Establecimiento.',
                    'e) Cuando, por motivos justificados, se suspenda una reunión técnica, los profesores deben permanecer en el Establecimiento en el horario que corresponda, desarrollando algún trabajo técnico-pedagógico, designado por la UTP o el que necesite realizar en función de su labor profesional.',
                    'f) El Consejo de Profesores será presidido por el Director del establecimiento y en su ausencia por quien le secunde en el cargo, quien deberá guiar la sesión mediante una tabla de puntos a tratar.',
                    'g) Las reuniones técnicas serán dirigidas por el Jefe de la Unidad Técnica del Establecimiento, quien se basará en tabla de puntos o pauta de trabajo.',
                    'h) Tanto para el Consejo de Profesores como para la Reunión Técnica se elegirá de los mismos integrantes del consejo un(a) Secretario(a) para que levante acta de cada reunión y darle lectura en la reunión siguiente para su aprobación y análisis.',
                    'i) Otras reuniones que se deben realizar involucrando a docentes del Establecimiento son las reuniones de producción y las de áreas de especialidades a cargo del Jefe de Producción o de los coordinadores de especialidades. Estas tienen como propósito coordinar acciones y resolver materias propias de su área, las que en todo caso, deben ser informadas y aprobadas por la Dirección del Establecimiento.'
                ].join('\n\n')
            },
            {
                title: 'DE LOS DERECHOS Y LAS FACULTADES',
                content: [
                    'a) Cada integrante del Consejo de Profesores tiene derecho a voz y a voto dentro del Consejo y a exigir que su opinión quede explícitamente registrada en el acta cuando así lo considere, cautelando el correcto lenguaje y el respeto hacia los demás.',
                    'b) Es facultad del Consejo de Profesores resolver situaciones de tipo técnico-pedagógicas, las que en todo caso deben sujetarse a la legalidad vigente y a los reglamentos del Establecimiento. También podrá ser consultado respecto de materias disciplinarias de los alumnos y de tipo administrativas, según lo que indique la reglamentación y amerite el caso.',
                    'c) Toda situación que requiera ser resuelta por el Consejo de Profesores deberá contar con el respaldo del 50% más 1 de los profesores presentes en el Consejo.',
                    'd) El Director del Establecimiento deberá informar al Consejo de Profesores de su gestión y de la marcha del Liceo, reservándose aquello que considere no pertinente informar.'
                ].join('\n\n')
            },
            {
                title: 'DEL CONTROL DE ASISTENCIA',
                content: [
                    'a) La asistencia, tanto al Consejo de Profesores como a las demás reuniones, debe quedar registrada con nombre y firma de cada integrante.',
                    'b) Las ausencias a reuniones deben ser justificadas debidamente ante la Dirección del Establecimiento, quien evaluará su pertinencia.',
                    'c) Las ausencias o atrasos injustificados ameritarán medidas por parte de la Dirección que irán desde llamados de atención verbal, llamados de atención por escrito, descuento por el tiempo que corresponda, observaciones de incumplimiento en la hoja de vida.'
                ].join('\n\n')
            }
        ]
      },
      {
        id: '6-18',
        title: '6.18. Funciones del Consejo Escolar',
        description: [
            'La constitución, funcionamiento y facultades de los Consejos Escolares establecidos en la Ley N° 19.979 se regirán por las normas contenidas en dicha ley y por las que se establecen en el presente reglamento.',
            'Tal como dice el Artículo 2 del decreto N° 24, del 11 de Marzo del 2005, del Ministerio de Educación, “En cada establecimiento educacional subvencionado deberá existir un Consejo Escolar, en adelante "el Consejo", el que tendrá carácter informativo, consultivo y propositivo, salvo que el sostenedor decida darle carácter resolutivo”.',
            'El Consejo Escolar de los establecimientos Municipalizados de la comuna de Parral, estarán integrados por:'
        ],
        list: [
            { id: 'a)', text: 'El Director del establecimiento, quien lo presidirá;'},
            { id: 'b)', text: 'El sostenedor o un representante designado por él mediante documento escrito;'},
            { id: 'c)', text: 'Un docente elegido por los profesores del establecimiento, mediante procedimiento previamente establecido por éstos;'},
            { id: 'd)', text: 'El presidente del Centro de Padres y Apoderados;'},
            { id: 'e)', text: 'El presidente del Centro de Alumnos en el caso que el establecimiento imparta enseñanza media;'},
            { id: 'f)', text: 'El Encargado de Convivencia Escolar.'},
        ]
      },
      {
        id: '6-19',
        title: '6.19. Funciones de Convivencia escolar',
        description: 'Existirá uno o más encargados de convivencia escolar, quienes deberán ejecutar de manera permanente los acuerdos, decisiones y planes del Comité de Buena Convivencia Escolar, investigar en los casos correspondientes e informar sobre cualquier asunto relativo a la convivencia, y tendrá las siguientes funciones:',
        list: [
            { id: 'a)', text: 'Conocer e implementar las orientaciones que entrega la Política Nacional de Convivencia Escolar;'},
            { id: 'b)', text: 'Promover la participación de los diferentes estamentos de la comunidad educativa en el Consejo Escolar o Comité para la Buena Convivencia;'},
            { id: 'c)', text: 'Promover el trabajo colaborativo en torno a la convivencia escolar en el Consejo Escolar o Comité para la Buena Convivencia;'},
            { id: 'd)', text: 'Disponer la implementación de las medidas sobre convivencia escolar que disponga el Consejo Escolar o Comité para la Buena Convivencia;'},
            { id: 'e)', text: 'Elaborar e implementar el Plan de Gestión sobre convivencia escolar, en función de las indicaciones del Consejo Escolar o el comité para la buena convivencia;'},
            { id: 'f)', text: 'Coordinar iniciativas de capacitación sobre promoción de la buena convivencia y manejo de situaciones de conflicto, entre los diferentes estamentos de la comunidad educativa;'},
            { id: 'g)', text: 'Promover el trabajo colaborativo entre los actores de la comunidad educativa en la elaboración, implementación y difusión de políticas de prevención, medidas pedagógicas y disciplinarias que fomentan la buena convivencia escolar;'},
            { id: 'h)', text: 'Es el encargado de diseñar en conjunto con la dirección del establecimiento, la conformación de equipos de trabajo (por niveles, por cursos, etc.) y la estrategia de implementación del Plan de Gestión;'},
            { id: 'i)', text: 'En conjunto con el equipo técnico, debe elaborar y llevar a cabo una estrategia de seguimiento y monitoreo del Plan de Gestión;'},
            { id: 'j)', text: 'Informar al equipo directivo y al Consejo Escolar de los avances o dificultades en la implementación del Plan de Gestión y a la Comunidad Educativa, los avances en la promoción de la convivencia escolar y de la prevención de la violencia:'},
            { id: 'k)', text: 'Ejecutar de manera permanente los acuerdos, decisiones y planes del Comité para la buena Convivencia Escolar.'},
        ]
      },
      {
        id: '6-20',
        title: '6.20. Funciones de Educadoras de Párvulo',
        description: 'Profesional de la educación que busca favorecer aprendizajes de calidad en los primeros años de vida, desarrollando aspectos claves como los vínculos afectivos, la confianza básica, la identidad, el lenguaje, la senso-motricidad, el pensamiento concreto y la representación simbólica.',
        list: [
            { id: 'a)', text: 'Educadora comprometida con su rol de liderazgo.' },
            { id: 'b)', text: 'Que sea modelo de referencia para los niños y niñas.' },
            { id: 'c)', text: 'Diseñar, implementar y evaluar currículos.' },
            { id: 'd)', text: 'Evaluar los aprendizajes de los niños y niñas.' },
            { id: 'e)', text: 'Investigar sobre temas educativos para los niños y familia.' },
            { id: 'f)', text: 'Ser dinámica y creativa en el trabajo.' },
            { id: 'g)', text: 'Capacidad para trabajar en equipo.' },
            { id: 'h)', text: 'Debe ser cálida y afectiva con su comunidad educativa.' },
            { id: 'i)', text: 'Debe tener valores éticos y morales bien arraigados.' },
            { id: 'j)', text: 'Realizar en forma sistemática las planificaciones de los proyectos de aula u otros.' },
            { id: 'k)', text: 'Registrar diariamente las planificaciones, registrando a su vez las respectivas evaluaciones de cada párvulo.' },
            { id: 'l)', text: 'En el caso de encontrarse un párvulo enfermo, las educadoras deberán dar aviso a la Directora e inmediatamente llamar al apoderado de no encontrarse éste, se dejará un registro por escrito y este deberá firmarla al momento de retirarlo.' },
            { id: 'm)', text: 'El mismo procedimiento deberá realizarse en caso de accidente del párvulo y de este ser grave se procederá a llevarlo a urgencias.' },
            { id: 'n)', text: 'Deberán llevar una bitácora de cada llamada que realicen a los Padres sea por enfermedad u accidente e informar oportunamente en Dirección.' },
            { id: 'o)', text: 'Velar siempre por el cumplimiento de las planificaciones.' },
            { id: 'p)', text: 'Evaluar a los párvulos cuando corresponda.' },
            { id: 'q)', text: 'Crear, elaborar e implementar nuevos proyectos educativos ya sean proyectos de aula, centro de interés u área temática.' },
            { id: 'r)', text: 'Actuar como un ente conciliador de diversas situaciones.' },
            { id: 's)', text: 'Avisar oportunamente a la Directora todo cuando acontezca sobre todo si se trata de situaciones conflictivas con padres, niños o personal, para elaborar posibles soluciones en conjunto.' },
            { id: 't)', text: 'Supervisar el control de las siestas de los párvulos permaneciendo siempre una funcionaria con ellos.' },
            { id: 'u)', text: 'Velar que la asistencia sea pasada todos los días y entregarla a la directora el último día del mes.' },
            { id: 'v)', text: 'Registrar los medicamentos que deban ser suministrados en el Jardín Infantil. Respetando la normativa interna dispuesta a su suministración (llenar autorización o receta médica).' },
            { id: 'w)', text: 'En caso de antibióticos, las educadoras o técnicos deberán solicitar la fotocopia de la prescripción médica de lo contrario no deberán suministrar dicho medicamento.' },
            { id: 'x)', text: 'Aplicar pauta de supervisión de la cocina y SEDILE.' },
        ]
      },
      {
        id: '6-21',
        title: '6.21. Funciones de Técnico en atención de párvulos',
        description: 'Es la colaboradora activa de la educadora de párvulos en la atención y cuidados de los Niños y niñas, en la preparación de materiales didácticos y en todos aquellos aspectos que la educadora estime conveniente para la atención integral del niño o niña. Son funciones de la Técnico de la Educadora de Párvulos:',
        list: [
            { id: 'a)', text: 'Participar activamente en la planificación del trabajo pedagógico con la Educadora de Párvulos;' },
            { id: 'b)', text: 'Participar en la organización y adecuación de los espacios físicos para las distintas experiencias educativas;' },
            { id: 'c)', text: 'Diseñar, preparar y disponer todos los materiales necesarios para el trabajo con los niños y niñas en el aula;' },
            { id: 'd)', text: 'Mantener óptimas condiciones de cuidado, higiene y seguridad del ambiente educativo y de los materiales utilizados en ella;' },
            { id: 'e)', text: 'Recibir y revisar las licencias médicas de los niños y niñas del jardín infantil;' },
            { id: 'f)', text: 'Mantener el registro diario de novedades respecto de los niños y niñas bajo su responsabilidad;' },
            { id: '', text: 'En relación a las necesidades de los niños y niñas respecto a su estado de salud:', subItems: [
                'g) Cuando corresponda, dar aviso a padres y/o apoderados en caso de que un niño o niña se enferme o se accidente;',
                'h) Derivar a niños y niñas al Centro de Salud más cercano;',
                'i) Administrar medicamentos a niños y niñas, previa prescripción médica y autorización por escrito de los padres, informando oportunamente a la Directora;',
            ]},
            { id: 'j)', text: 'Participar activamente en las reuniones técnicas, capacitaciones y actividades orientadas a actualizar o desarrollar contenidos del programa educativo;' },
            { id: 'k)', text: 'Participar en la Evaluación Formativa de los niños y niñas a su cargo, registrando los resultados para su respectivo análisis y diagnóstico, conforme a orientaciones Institucionales y de la Educadora de Párvulos;' },
            { id: 'l)', text: 'Informar oportunamente a la educadora de Párvulos de situaciones de maltrato infantil de niños y niñas del establecimiento, para activar el protocolo correspondiente;' },
            { id: 'm)', text: 'Velar por la integridad física y psíquica de los párvulos en todo momento evitándoles situaciones de peligro siendo su responsabilidad cuando la educadora no se encuentre presente;' },
            { id: 'n)', text: 'Vigilar y cuidar a los niños en horario de patio;' },
            { id: 'o)', text: 'Ningún funcionario podrá mantener contactos personales en las redes sociales con alumnos o alumnas del colegio. A excepción de sitios creados exclusivamente para subir trabajos o tareas;' },
            { id: 'p)', text: 'Las inasistencias del personal deben ser comunicadas por teléfono al colegio y por escrito a Inspectoría General (email, nota), dejando constancia e informando la razón de la ausencia;' },
            { id: 'q)', text: 'Mantener reserva de las situaciones personales de alumnos, apoderados y compañeros de trabajo;' },
            { id: 'r)', text: 'No podrá solicitar ni manejar dinero de alumnos y/o apoderados del colegio.' },
            { id: '', text: 'En Relación con el contacto con la familia:', subItems: [
                's) Mantener contacto permanente y cordial con los padres y apoderados, a través de su participación en distintas instancias, tales como: reuniones y talleres;',
                't) Participar en la preparación y ejecución de las reuniones y talleres que se realizan con los padres y/o apoderados;',
                'u) Atender oportunamente a los padres y/o apoderados de los niños y niñas bajo su responsabilidad, informando y resolviendo sus consultas e inquietudes;',
                'v) Avisar a quien corresponda respecto a la actualización de antecedentes de los niños y niñas;',
                'w) Mantener informados a padres y/o apoderados de los niños y niñas del jardín infantil, a través del Cuaderno de Observaciones;',
                'x) Completar y entregar documentos de Avisos, citaciones y de Suspensión de Actividades a padres y/o apoderados;',
                'y) Avisar oportunamente a los padres o apoderados en caso de muda del niño o niña.',
            ]}
        ]
      },
      { id: '6-22', title: '6.22. Tareas de Auxiliar de párvulos', list: [
            { id: 'a)', text: 'Mantener el aseo y orden de todas las dependencias de la Unidad Educativa;'},
            { id: 'b)', text: 'Desempeñar, cuando corresponda, funciones de portero del establecimiento;'},
            { id: 'c)', text: 'Retirar, repartir y franquear mensajes, correspondencia y otros;'},
            { id: 'd)', text: 'Cuidar y responsabilizarse del aseo, conservación y mantenimiento de herramientas y maquinarias que se le hubiesen asignado;'},
            { id: 'e)', text: 'Efectuar reparaciones, restauraciones e instalaciones menores que se le encomienden;'},
            { id: 'f)', text: 'Desempeñar, cuando proceda, la función de cuidador nocturno del establecimiento;'},
            { id: 'g)', text: 'Ejecutar trabajos encargados, debidamente visados por la autoridad respectiva del colegio;'},
            { id: 'h)', text: 'Poseer un trato amable, buena presentación personal adecuada, haciendo uso siempre, del uniforme e implementos de seguridad del Colegio'},
            { id: 'i)', text: 'Preocuparse por solucionar o dar aviso de las potenciales situaciones de riesgo como: restos de vidrios, alambres, clavos, latas, elementos cortantes y punzantes, interruptores defectuosos, cables eléctricos inseguros, etc;'},
            { id: 'j)', text: 'Preocuparse de manera especial de la integridad física de todos los alumnos, evitándoles que se ponga éstos en actitudes o situaciones de riesgo personal;'},
            { id: 'k)', text: 'Asear los baños de pre escolares en la jornada de la mañana y tarde en los momentos posteriores a cada una de las mudas;'},
            { id: 'l)', text: 'Limpiar la sala, mesas y sillas; luego del desayuno, almuerzo, once y colación;'},
            { id: 'm)', text: 'Sacar las mesas del nivel heterogéneo para ordenar las colchonetas y despejar sala cuna dejando las mesas en un lado sin dejarlas encaramadas;'},
            { id: 'n)', text: 'Dejar ordenadas las colchonetas para la siesta en ambos niveles (con sábanas y frazadas si corresponde);'},
            { id: 'o)', text: 'Sacar colchonetas, sabanas y frazadas luego de la siesta;'},
            { id: 'p)', text: 'Ingresar las mesas al nivel heterogéneo luego de sacar las colchonetas y reordenar mesas en sala cuna;'},
            { id: 'q)', text: 'Asear y desinfectar las salas al término de la jornada;'},
            { id: 'r)', text: 'Mover todos los muebles, por lo menos dos veces por semana;'},
            { id: 's)', text: 'Desinfectar baños en forma permanente y bacinicas cuando corresponda;'},
            { id: 't)', text: 'Asear y ordenar todo el establecimiento al final de la jornada;'},
            { id: 'u)', text: 'Limpiar y ordenar el comedor luego del almuerzo;'},
            { id: 'v)', text: 'Prender y apagar los calefón;'},
            { id: 'w)', text: 'Limpiar vidrios al menos dos veces por semana;'},
            { id: 'x)', text: 'Mantener permanentemente limpios los espejos de la sala y baño;'},
            { id: 'y)', text: 'Desinfección permanente de colchonetas de estimulación;'},
            { id: 'z)', text: 'Desinfectar día por medio, las colchonetas del descanso;'},
            { id: 'aa)', text: 'Revisión permanente del patio exterior;'},
            { id: 'bb)', text: 'Cumplir cualquier otra función que le sea encomendada y que sea de su competencia;'},
        ] },
      { id: '6-23', title: '6.23. Especificaciones de los Docentes Asesores del Centro de Alumno', description: 'El Centro de Alumnos tendrá asesores pertenecientes al cuerpo docente del establecimiento para orientar el desarrollo de sus actividades y para relacionarlo con el mismo;', list: [
            { id: 'a)', text: 'Los asesores de los Consejos de Curso serán sus respectivos Profesores Jefes;'},
            { id: 'b)', text: 'La Asamblea General, la Directiva, el Consejo de Delegados de Curso y la Junta Electoral tendrán en conjunto, a lo menos, dos asesores designados anualmente por la Directiva del Centro de Alumnos, de una nómina de cinco docentes que deberá presentar el Consejo de Delegados de curso, no más allá de 60 días después de iniciado el año lectivo del establecimiento escolar correspondiente;'},
            { id: 'c)', text: 'Estos asesores deberán ser docentes a lo menos con un año de ejercicio profesional, en el establecimiento y manifestar su aceptación para desempeñar esta función;'},
        ] },
      { id: '6-24', title: '6.24. Tareas de los Auxiliares de aseo', list: [
            { id: 'a)', text: 'Mantener el aseo y orden de todas las dependencias de la Unidad Educativa;'},
            { id: 'b)', text: 'Desempeñar, cuando corresponda, funciones de portero del establecimiento;'},
            { id: 'c)', text: 'Retirar, repartir y franquear mensajes, correspondencia y otros;'},
            { id: 'd)', text: 'Cuidar y responsabilizarse del aseo, conservación y mantenimiento de herramientas y maquinarias que se le hubiesen asignado;'},
            { id: 'e)', text: 'Efectuar reparaciones, restauraciones e instalaciones menores que se le encomienden;'},
            { id: 'f)', text: 'Desempeñar, cuando proceda, la función de cuidador nocturno del establecimiento;'},
            { id: 'g)', text: 'Ejecutar trabajos encargados, debidamente visados por la autoridad respectiva del colegio;'},
            { id: 'h)', text: 'Poseer un trato amable, buena presentación personal adecuada, haciendo uso siempre, del uniforme e implementos de seguridad del Colegio'},
            { id: 'i)', text: 'Preocuparse por solucionar o dar aviso de las potenciales situaciones de riesgo como: restos de vidrios, alambres, clavos, latas, elementos cortantes y punzantes, interruptores defectuosos, cables eléctricos inseguros, etc;'},
            { id: 'j)', text: 'Preocuparse de manera especial de la integridad física de todos los alumnos, evitándoles que se ponga éstos en actitudes o situaciones de riesgo personal;'},
            { id: 'k)', text: 'Cumplir cualquier otra función que le sea encomendada y que sea de su competencia;'},
        ] },
      { id: '6-25', title: '6.25. Tareas de las Porterías', description: 'Todo establecimiento educacional deberá tener la unidad de portería, la cual dependerá del Inspector General del establecimiento;', list: [
            { id: 'a)', text: 'Regular y controlar, las entradas y salidas del colegio;'},
            { id: 'b)', text: 'impedir el acceso al interior del edificio a personas que no tengan autorización, que no se identifiquen, que no puedan precisar el objeto de su visita;, informando a I; Gral; sobre cualquier situación anormal que se produzca al respecto;'},
            { id: 'c)', text: 'Consultar a un docente-directivo en caso de duda, antes de tomar una decisión;'},
            { id: 'd)', text: 'Mantener el orden, ornato y aseo de la portería y su entorno;'},
            { id: 'e)', text: 'Desempeñar cuando proceda la función de Auxiliar de Servicios'},
            { id: 'f)', text: 'Poseer un trato amable, deferente y cordial, adoptando la actitud que corresponda a la seriedad de la función que cumple, pero que no esté reñida con la buena atención y el respeto a las personas que acuden al colegio, manteniendo una presentación personal adecuada, haciendo uso permanentemente de la cotona, pantalón de vestir, camisa y corbata que Se otorga el establecimiento;'},
            { id: 'g)', text: 'Cualquier otra función que le sea encomendada y que sea de su competencia;'},
        ] },
    ],
  },
  {
    id: 'funcion-establecimientos',
    title: '7. Función de los Establecimientos y Sostenedores',
    subSections: [
        {
            id: '7-1',
            title: 'Función de los Establecimientos Educacionales y Sostenedores (Según el Sistema Nacional de Aseguramiento de la Calidad)',
            description: 'Los Establecimientos Educacionales y Sostenedores también tienen funciones, las que no se pueden cumplir si las funciones individuales, de cada una de las personas que lo integran, no se cumplen a cabalidad. Los Establecimientos Educacionales deben:',
            list: [
                { id: 'a)', text: 'Crear Proyecto Educativo Institucional;'},
                { id: 'b)', text: 'Cumplir la normativa legal vigente;'},
                { id: 'c)', text: 'Recibir y rendir cuentas de los recursos, periódica y puntualmente;'},
                { id: 'd)', text: 'Mantenerse atento a las fiscalizaciones, evaluaciones y orientaciones'},
                { id: 'e)', text: 'Elaborar plan de mejoramiento'},
                { id: 'f)', text: 'Solicitar y recibir apoyo, cuando así lo amerite;'},
            ]
        }
    ]
  }
];