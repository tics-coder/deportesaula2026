import { Axis } from '../types';

export const axis9: Axis = {
  id: 9,
  title: "Deporte y Territorio",
  subAxes: [
    {
      id: "9.1",
      title: "Cartografía Deportiva de CABA",
      themes: [
        {
          id: "9.1.1",
          title: "Cartografía de los Espacios de Juego",
          description: "Estudio de la desaparición de potreros por la especulación inmobiliaria. Análisis de la distribución desigual de polideportivos entre zona norte y sur.",
          criticalTriggers: [
            "¿Dónde juegan hoy los pibes en la ciudad?",
            "El potrero como mito fundacional vs. la ciudad privatizada.",
            "¿Por qué hay más metros verdes per cápita en el norte que en el sur?"
          ],
          subjects: ["Geografía", "Historia", "Sociología", "Matemática", "Introducción a las Ciencias Sociales y las Humanidades", "EDI Diseño Gráfico"],
          resources: [
            { title: "El potrero y la ciudad - Varios autores", type: "bibliografia" }
          ]
        },
        {
          id: "9.1.2",
          title: "Parques y Circuitos Aeróbicos",
          description: "La explosión del running y el espacio público como gimnasio a cielo abierto. Análisis de género y clase en el uso de estos espacios.",
          criticalTriggers: [
            "¿Quiénes usan realmente las estaciones de ejercicio en las plazas?",
            "La ciclovía como modelo de movilidad y deporte.",
            "¿Es el espacio público realmente democrático?"
          ],
          subjects: ["Geografía", "Sociología", "Educación Física", "ESI"],
          resources: [
            { title: "Derecho a la ciudad - Henri Lefebvre", type: "bibliografia" }
          ]
        }
      ]
    },
    {
      id: "9.2",
      title: "Infraestructura y Gentrificación",
      themes: [
        {
          id: "9.2.1",
          title: "Estadios y Gentrificación",
          description: "La tensión entre identidad barrial y desarrollo inmobiliario. El caso de River Plate en Núñez y el impacto en alquileres y tránsito.",
          criticalTriggers: [
            "¿Qué sucede con el barrio cuando un estadio se moderniza?",
            "El concepto de 'elefantes blancos' en megaeventos.",
            "¿Quién paga la infraestructura de los grandes clubes?"
          ],
          subjects: ["Geografía", "Economía", "Sociedad y Estado", "Arquitectura/Tecnología"],
          resources: [
            { title: "Ciudades en venta - Jordi Borja", type: "bibliografia" }
          ]
        },
        {
          id: "9.2.2",
          title: "Impacto de los Megaeventos en la Infraestructura Local",
          description: "Análisis de cómo eventos como los Juegos Olímpicos de la Juventud en CABA transformaron la zona sur. ¿Legado real o infraestructura subutilizada?",
          criticalTriggers: [
            "¿Qué quedó de la Villa Olímpica después del evento?",
            "¿Cómo se financian estas obras y quiénes son los beneficiarios finales?",
            "El impacto en la vida cotidiana de los vecinos del barrio."
          ],
          subjects: ["Geografía", "Economía", "Sociedad y Estado", "Arquitectura/Tecnología", "Historia"],
          resources: [
            { title: "Legado de los Juegos Olímpicos de la Juventud CABA 2018", type: "bibliografia" }
          ]
        }
      ]
    }
  ]
};

export const axis10: Axis = {
  id: 10,
  title: "Deporte y Lenguaje",
  subAxes: [
    {
      id: "10.1",
      title: "Lingüística del Deporte",
      themes: [
        {
          id: "10.1.1",
          title: "El Lunfardo en la Cancha",
          description: "Análisis del léxico lunfardo presente en el habla futbolera y la cancha como espacio de creación lingüística popular.",
          criticalTriggers: [
            "¿El lunfardo en la cancha es una forma de patrimonio cultural popular o muchas veces funciona como vehículo de violencia simbólica y exclusión?",
            "¿Qué relaciones existen entre el habla futbolera, la inmigración, los barrios populares y la construcción de identidad porteña en CABA?",
            "¿Cuando la escuela incorpora el lunfardo al aula legitima una cultura popular o corre el riesgo de folklorizarla y despolitizarla?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "El Lunfardo en la Cancha",
              foci: [
                { subject: "Lengua + Taller de expresión oral y escrita (1º año)", description: "Glosario de términos lunfardos" },
                { subject: "Historia (3º año)", description: "Origen del lunfardo" },
                { subject: "Formación Ética y Ciudadana (2º año)", description: "Análisis de cantos y xenofobia" },
                { subject: "Inglés (2º año)", description: "Comparación de jergas" },
                { subject: "EDI (2º año)", description: "Relato deportivo" },
                { subject: "Geografía (3º año)", description: "Localización barrial" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "El Lunfardo en la Cancha",
              foci: [
                { subject: "Sociología + Lengua y Literatura (4º año)", description: "Capital simbólico" },
                { subject: "Antropología + Psicología (4º año)", description: "Ritual grupal" },
                { subject: "EDI Radio (4º año)", description: "Columna radial" },
                { subject: "Filosofía + Sociedad y Estado (5º año)", description: "Censura y libertad de expresión" },
                { subject: "Historia de la Cultura Latinoamericana (5º año)", description: "Vínculo con tango y fútbol" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Historieta + Teatro: creación de escenas breves sobre registros del habla futbolera; Música + Audiovisual: armado de pieza sonora con voces de cancha y tango.",
          institutionalProposal: "Articular con la Academia Porteña del Lunfardo, una biblioteca popular o un club barrial para realizar un conversatorio sobre lenguaje popular, fútbol e identidad porteña.",
          subjects: ["Lengua y Literatura", "Historia", "Formación Ética y Ciudadana", "Inglés", "Geografía", "Sociología", "Antropología", "Psicología", "Filosofía", "Sociedad y Estado", "Historia de la Cultura Latinoamericana", "EDI Radio", "Taller de Expresión Oral y Escrita"],
          resources: [],
          teacherResources: [
            { title: "Diccionario de Lunfardo - José Gobello", type: "bibliografia" },
            { title: "Lunfardo. Un estudio sobre el habla popular de los argentinos - Oscar Conde", type: "bibliografia" },
            { title: "Fútbol y patria - Pablo Alabarces", type: "bibliografia" }
          ],
          studentResources: [
            { title: "Letras de tango ('El sueño del pibe')", type: "bibliografia" },
            { title: "Canciones actuales de cancha para glosario comparativo", type: "audiovisual" },
            { title: "Fragmentos de relatos deportivos radiales y televisivos", type: "audiovisual" }
          ]
        },
        {
          id: "10.1.2",
          title: "Las Metáforas del Deporte en el Habla Cotidiana",
          description: "Expresiones deportivas que pasaron al uso común: 'tirar la toalla' (boxeo), 'hacer un gol' (éxito), 'estar en offside' (estar desubicado), 'ponerse la 10' (liderazgo). El deporte como fuente de metáforas conceptuales.",
          criticalTriggers: [
            "¿Qué revela sobre nuestra cultura que usemos tantas metáforas deportivas para hablar del trabajo, la política, la escuela y las relaciones personales?",
            "¿Las metáforas del deporte naturalizan una visión competitiva de la vida social?",
            "En Argentina, ¿por qué ciertas metáforas provienen sobre todo del fútbol y no de otros deportes?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Las Metáforas del Deporte en el Habla Cotidiana",
              foci: [
                { subject: "Lengua (1º año)", description: "Identificación de metáforas" },
                { subject: "Taller de expresión oral (1º año)", description: "Origen de expresiones" },
                { subject: "Historia (2º año)", description: "Rastreo histórico" },
                { subject: "Formación Ética (2º año)", description: "Debate sobre meritocracia" },
                { subject: "Inglés (2º año)", description: "Comparación con metáforas en inglés" },
                { subject: "EDI (3º año)", description: "Observación en discursos políticos" },
                { subject: "Economía Política (3º año)", description: "Slogans empresariales" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Las Metáforas del Deporte en el Habla Cotidiana",
              foci: [
                { subject: "Psicología (4º año)", description: "Percepción del éxito/fracaso" },
                { subject: "Sociología + Antropología (4º año)", description: "Hegemonía cultural" },
                { subject: "EDI Radio (4º año)", description: "Micros radiales" },
                { subject: "Filosofía (5º año)", description: "Metáforas de la vida cotidiana (Lakoff/Johnson)" },
                { subject: "Sociedad y Estado (5º año)", description: "Discursos políticos" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro + Audiovisual: dramatización de situaciones cotidianas formales con frases de fútbol (Teatro del Absurdo); Historieta + Música: viñetas o canciones sobre metáforas cotidianas.",
          institutionalProposal: "Realizar una campaña de concientización titulada 'Desarmando el diccionario': afiches proponiendo reemplazar metáforas bélicas/competitivas por metáforas de cooperación.",
          subjects: ["Lengua y Literatura", "Historia", "Formación Ética y Ciudadana", "Inglés", "Psicología", "Sociología", "Antropología", "Filosofía", "Sociedad y Estado", "Economía Política", "EDI Radio", "Taller de Expresión Oral", "EDI Diseño Gráfico"],
          resources: [],
          teacherResources: [
            { title: "Metáforas de la vida cotidiana - George Lakoff y Mark Johnson", type: "bibliografia" },
            { title: "Mito y lenguaje - Roland Barthes", type: "bibliografia" }
          ],
          studentResources: [
            { title: "Titulares de diarios de la sección Política con vocabulario futbolístico", type: "bibliografia" },
            { title: "Publicidades de bancos y empresas con lenguaje deportivo", type: "audiovisual" }
          ]
        },
        {
          id: "10.1.3",
          title: "Anglicismos Deportivos: Historia y Debate",
          description: "El origen inglés del vocabulario futbolístico (football, goal, offside, corner, referee). La castellanización (fútbol, gol, córner, réferi). El debate sobre el uso de anglicismos en el periodismo deportivo actual (pressing, VAR, hat-trick).",
          criticalTriggers: [
            "¿El uso de anglicismos en el deporte enriquece la lengua o refuerza jerarquías culturales y dependencia simbólica respecto del mundo anglosajón?",
            "¿Por qué el fútbol argentino conserva términos ingleses si se presenta como emblema de identidad nacional y popular?",
            "En el periodismo deportivo actual, ¿el uso de palabras como pressing, hat-trick o clean sheet aporta precisión o funciona como marca de elitismo profesional?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Anglicismos Deportivos: Historia y Debate",
              foci: [
                { subject: "Inglés + Lengua (1º año)", description: "Listado comparativo" },
                { subject: "Historia (1º año)", description: "Llegada de británicos" },
                { subject: "Taller de expresión oral (2º año)", description: "Escritura de notas" },
                { subject: "Geografía (2º año)", description: "Mapa de difusión global" },
                { subject: "EDI (2º año)", description: "Observación de programas deportivos" },
                { subject: "Economía Política (3º año)", description: "Globalización de la Premier League" },
                { subject: "Introducción a las Ciencias Sociales (3º año)", description: "Debate sobre poder y lengua" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Anglicismos Deportivos: Historia y Debate",
              foci: [
                { subject: "Sociología (4º año)", description: "Marca de prestigio" },
                { subject: "Antropología + Historia (4º año)", description: "Huellas coloniales" },
                { subject: "EDI Radio (4º año)", description: "Comparación de relatos" },
                { subject: "Filosofía + Historia de la Cultura Latinoamericana (5º año)", description: "Soberanía cultural" },
                { subject: "Sociedad y Estado (5º año)", description: "Idioma y nación" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: EDI Diseño Gráfico + Audiovisual: diseñar 'Manual de Traducción Subversiva' (fanzine); Música + Audiovisual: video comparando relatos 'criollos' y 'globalizados'.",
          institutionalProposal: "Torneo interno de debates (modelo Naciones Unidas) argumentando a favor y en contra de la 'pureza del idioma' frente a la globalización.",
          subjects: ["Lengua y Literatura", "Inglés", "Historia", "Geografía", "Economía Política", "Sociología", "Antropología", "Filosofía", "Sociedad y Estado", "Historia de la Cultura Latinoamericana", "EDI Radio", "Diseño Gráfico", "EDI Diseño Gráfico"],
          resources: [],
          teacherResources: [
            { title: "Descolonizar la mente - Ngũgĩ wa Thiong’o", type: "bibliografia" },
            { title: "Lengua, cultura y poder - Raymond Williams", type: "bibliografia" }
          ],
          studentResources: [
            { title: "Reglamentos originales de The Football Association (1863) en inglés", type: "bibliografia" },
            { title: "Artículos modernos de ESPN con anglicismos de moda", type: "bibliografia" },
            { title: "Glosarios de términos futbolísticos inglés-español", type: "bibliografia" }
          ]
        }
      ]
    }
  ]
};
