import { Axis } from '../types';

export const axis3: Axis = {
  id: 3,
  title: "Poder Político y Economía",
  subAxes: [
    {
      id: "3.1",
      title: "Casos de Estudio: Deporte y Política",
      themes: [
        {
          id: "3.1.1",
          title: "Mohamed Ali",
          description: "La figura del atleta como activista político. Su renuncia al título por negarse a combatir en Vietnam y cómo el deporte se convierte en una plataforma de resistencia racial y religiosa frente al sistema estadounidense.",
          criticalTriggers: [
            "¿Puede un deportista argentino actual renunciar a su carrera por una convicción política sin ser destruido mediáticamente?",
            "¿La objeción de conciencia —como la de Ali frente al reclutamiento militar— es un derecho reconocido en la Constitución Nacional Argentina?",
            "¿El deporte de combate (boxeo, MMA) sigue siendo hoy una vía de ascenso social para sectores marginados en CABA?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Mohamed Ali",
              foci: [
                { subject: "Formación Ética (1º/2º)", description: "Objeción de conciencia" },
                { subject: "Lengua (1º/2º)", description: "Discursos de Ali como textos argumentativos" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Mohamed Ali",
              foci: [
                { subject: "Sociología (4º)", description: "Capital simbólico (Bourdieu)" },
                { subject: "Psicología (4º)", description: "Identidad narrativa" },
                { subject: "Filosofía (5º)", description: "Ética de la desobediencia civil" },
                { subject: "Sociedad y Estado (5º)", description: "Guerra de Vietnam y derechos civiles" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro. Montaje de una escena basada en la conferencia de prensa de Ali.",
          institutionalProposal: "Organización de un 'Café-debate' abierto a la comunidad con un gimnasio de boxeo del barrio.",
          subjects: ["Historia", "Inglés", "Filosofía", "Sociología", "Formación Ética y Ciudadana", "Psicología", "Antropología", "Sociedad y Estado", "EDI Comunicación"],
          resources: [
            { title: "The King of the World - David Remnick", type: "bibliografia", url: "https://archive.org/details/kingofworldmuham0000remn" },
            { title: "Documental: When We Were Kings", type: "audiovisual", url: "https://www.youtube.com/results?search_query=When+We+Were+Kings" },
          ]
        },
        {
          id: "3.1.2",
          title: "México 68 y el Black Power",
          description: "El simbolismo de los guantes negros. Consecuencias del gesto de Tommie Smith y John Carlos: el costo personal de la protesta y la repercusión global de un acto de 30 segundos en un podio olímpico.",
          criticalTriggers: [
            "¿Un gesto silencioso de 30 segundos puede cambiar la historia?",
            "¿Qué dice de un megaevento deportivo que se inaugure días después de una masacre estudiantil (Tlatelolco)?",
            "¿Las plataformas deportivas internacionales deberían permitir manifestaciones políticas de los atletas?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "México 68 y el Black Power",
              foci: [
                { subject: "Formación Ética (1º/2º)", description: "Derechos Humanos" },
                { subject: "Geografía (1º/2º)", description: "México y América Latina en los '60" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "México 68 y el Black Power",
              foci: [
                { subject: "Sociología (4º)", description: "Acción colectiva y movimientos sociales" },
                { subject: "Antropología (4º)", description: "El cuerpo como soporte de sentido político" },
                { subject: "Psicología (4º)", description: "Costo personal de la protesta" },
                { subject: "Sociedad y Estado (5º)", description: "Derechos Civiles y el año 1968" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales. Proyecto de intervención gráfica reinterpretando la foto del podio.",
          institutionalProposal: "Coordinación con el Espacio de Memoria y Derechos Humanos (ex ESMA) para una visita guiada.",
          subjects: ["Historia", "Sociología", "Antropología", "Formación Ética y Ciudadana", "Geografía", "Psicología", "Filosofía", "Sociedad y Estado", "Artes Visuales", "EDI Diseño Gráfico"],
          resources: [
            { title: "Documental: Salute (Matt Norman)", type: "audiovisual", url: "https://www.youtube.com/results?search_query=Salute+Matt+Norman+trailer" },
            { title: "The John Carlos Story - John Carlos & Dave Zirin", type: "bibliografia", url: "https://archive.org/details/johncarlosstorys0000carl" }
          ]
        },
        {
          id: "3.1.3",
          title: "Maradona y la Narrativa Nacional",
          description: "El gol a los ingleses en el '86 como 'reparación simbólica' tras la Guerra de Malvinas. Maradona como el héroe plebeyo que desafía a los centros de poder.",
          criticalTriggers: [
            "¿El 'gol del siglo' fue realmente una 'venganza' por Malvinas o una narrativa construida?",
            "¿Maradona es un héroe popular, un ídolo deportivo o un producto de la industria cultural?",
            "¿Por qué la Argentina necesita construir 'héroes plebeyos' en el deporte?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Maradona y la Narrativa Nacional",
              foci: [,
                { subject: "Lengua (1º/2º)", description: "Relato de Víctor Hugo Morales como pieza literaria" },
                { subject: "Formación Ética (1º/2º)", description: "Concepto de ídolo y héroe" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Maradona y la Narrativa Nacional",
              foci: [
                { subject: "Sociología (4º)", description: "Maradona como 'hecho social total'" },
                { subject: "Antropología (4º)", description: "El Diego como santo laico" },
                { subject: "Filosofía (5º)", description: "El mito del héroe trágico" },
                { subject: "Sociedad y Estado (5º)", description: "La posguerra de Malvinas y la reconstrucción democrática" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Música. Análisis de canciones dedicadas a Maradona y composición grupal.",
          institutionalProposal: "Caminata Maradoniana por el barrio de La Boca en colaboración con un centro cultural barrial.",
          subjects: ["Historia", "Sociología", "Antropología", "Lengua y Literatura", "Sociedad y Estado", "Geografía", "Psicología", "Filosofía", "Música", "Artes Visuales", "EDI Diseño Gráfico"],
          resources: [
            { title: "Documental: Diego Maradona (Asif Kapadia)", type: "audiovisual", url: "https://www.youtube.com/watch?v=d0upPe5bmzo" },
            { title: "Fútbol y Patria - Pablo Alabarces", type: "bibliografia", url: "https://archive.org/details/futbolypatria0000alab" }
          ]
        },
        {
          id: "3.1.4",
          title: "Democracia Corinthiana",
          description: "Un hito de autogestión en Brasil. Bajo la dictadura militar, el club Corinthians instauró un sistema donde el voto de un utilero valía lo mismo que el del capitán (Sócrates), llevando consignas democráticas a la cancha cuando el país no podía votar.",
          criticalTriggers: [
            "¿Es posible que un club de fútbol argentino funcione con democracia directa?",
            "¿El fútbol puede ser un espacio de resistencia política real o solo de gestos simbólicos?",
            "¿Qué pasaría si los estudiantes aplicaran este modelo al centro de estudiantes?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Democracia Corinthiana",
              foci: [
                { subject: "Formación Ética (1º/2º)", description: "Tipos de democracia" },
                { subject: "Educación Física (1º/2º)", description: "Experiencia de democracia deportiva" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Democracia Corinthiana",
              foci: [
                { subject: "Sociología (4º)", description: "Empoderamiento y agencia" },
                { subject: "Economía Política (3º)", description: "Club como cooperativa vs. empresa" },
                { subject: "Filosofía (5º)", description: "La mayéutica socrática y el ciudadano participativo" },
                { subject: "Sociedad y Estado (5º)", description: "Transiciones democráticas en el Cono Sur" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro. Dramatización de una asamblea del Corinthians.",
          institutionalProposal: "Torneo Democracia Corinthiana: campeonato de fútbol mixto con reglas decididas por asamblea.",
          subjects: ["Historia", "Sociología", "Economía", "Formación Ética y Ciudadana", "Economía Política", "Filosofía", "Sociedad y Estado", "Teatro"],
          resources: [
            { title: "Documental: Democracia en blanco y negro", type: "audiovisual", url: "https://cinemateca.org.uy/peliculas/2183" },
            { title: "Democracia Corinthiana - Sócrates y Ricardo Gozzi", type: "bibliografia", url: "https://archive.org/details/democraciacorint0000socr" }
          ]
        },
        {
          id: "3.1.5",
          title: "La dictadura militar argentina y el deporte I: Mundial 78",
          description: "Análisis de la 'Campaña de la Verdad' frente al boicot internacional. La utilización del triunfo deportivo para ocultar las violaciones sistemáticas a los Derechos Humanos. Tensión Popular: El debate ético sobre el festejo en las calles frente a la cercanía de los centros clandestinos de detención (ESMA).",
          criticalTriggers: [
            "¿Se puede separar el festejo legítimo del pueblo del uso que un régimen genocida hace de él?",
            "¿Qué significa que los gritos de gol y los gritos de los torturados sonaran al mismo tiempo?",
            "¿Qué responsabilidad tienen los deportistas y periodistas que participaron?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "La dictadura militar argentina y el deporte I: Mundial 78",
              foci: [
                { subject: "Geografía (1º/2º)", description: "Cartografía de la ESMA y el Monumental" },
                { subject: "Comunicación (1º/2º)", description: "Análisis de la cobertura mediática" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "La dictadura militar argentina y el deporte I: Mundial 78",
              foci: [
                { subject: "Sociología (4º)", description: "Consenso social y banalidad del mal" },
                { subject: "Psicología (4º)", description: "Trauma colectivo y negación" },
                { subject: "Filosofía (5º)", description: "El problema del mal (Arendt)" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual. Producción de un corto en split screen: festejo vs. centro clandestino.",
          institutionalProposal: "Visita pedagógica al Espacio de Memoria y Derechos Humanos (ex ESMA).",
          subjects: ["Historia", "Formación Ética y Ciudadana", "Comunicación", "Sociedad y Estado", "Geografía", "Psicología", "Filosofía", "Audiovisual"],
          resources: [
            { title: "La vergüenza de todos - Pablo Llonto", type: "bibliografia", url: "https://archive.org/details/laverguenzadetod0000llon" },
            { title: "Documental: Mundialito", type: "audiovisual", url: "https://www.programaibermedia.com/proyectos/mundialito-2/" }
          ]
        },
        {
          id: "3.1.6",
          title: "La dictadura militar argentina y el deporte II: Deportistas Desaparecidos",
          description: "Historias de deportistas desaparecidos durante la última dictadura (ej. rugbiers de La Plata, Miguel Sánchez). La 'Carrera de Miguel' como acto de memoria.",
          criticalTriggers: [
            "¿Por qué se conocen los nombres de los futbolistas campeones del 78 pero no de los deportistas desaparecidos?",
            "¿Una carrera atlética puede ser un acto de memoria colectiva?",
            "¿Cómo han gestionado los clubes la reparación histórica de sus socios desaparecidos?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "La dictadura militar argentina y el deporte II: Deportistas Desaparecidos",
              foci: [
                { subject: "Historia (1º/2º)", description: "Represión a jóvenes" },
                { subject: "Lengua (1º/2º)", description: "Biografía de Miguel Sánchez" },
                { subject: "Educación Física (1º/2º)", description: "Organización de una mini carrera de Miguel" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "La dictadura militar argentina y el deporte II: Deportistas Desaparecidos",
              foci: [
                { subject: "Sociología (4º)", description: "El club como espacio de socialización y riesgo" },
                { subject: "Antropología (4º)", description: "El trabajo del EAAF" },
                { subject: "Filosofía (5º)", description: "La memoria como imperativo ético" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales. Instalación 'Las zapatillas vacías' con nombres de atletas desaparecidos.",
          institutionalProposal: "Participación institucional masiva en 'La Carrera de Miguel'.",
          subjects: ["Historia", "Formación Ética y Ciudadana", "Lengua y Literatura", "Educación Física", "Geografía", "Biología", "Sociología", "Psicología", "Antropología", "Filosofía", "Sociedad y Estado"],
          resources: [
            { title: "Deporte, Desaparecidos y Dictadura - Gustavo Veiga", type: "bibliografia", url: "https://archive.org/details/deportedesaparec0000veig" },
            { title: "La Plata rugió - Gustavo Casareto", type: "bibliografia", url: "https://archive.org/details/laplatarugiohist0000casa" }
          ]
        },
        {
          id: "3.1.7",
          title: "Fascismo, Nazismo y la Estética del Cuerpo",
          description: "Berlín 1936: Los Juegos Olímpicos como herramienta de propaganda del Tercer Reich. El uso de la cinematografía (Leni Riefenstahl) para glorificar el ideal ario. Italia 1934: El Mundial de Fútbol como plataforma de legitimación del régimen de Mussolini. El 'atleta-soldado' y la nacionalización de las masas a través del espectáculo deportivo.",
          criticalTriggers: [
            "¿Cómo utilizó el nazismo la arquitectura y el cine para crear una 'estética del cuerpo superior'?",
            "¿Fue la victoria de Jesse Owens un triunfo del antirracismo o una excepción tolerada?",
            "¿Persisten hoy en la publicidad deportiva ideales de 'perfección corporal' de raíz fascista?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Fascismo, Nazismo y la Estética del Cuerpo",
              foci: [
                { subject: "Historia (4º)", description: "Ascenso de totalitarismos" },
                { subject: "Biología (1º/2º)", description: "Refutación científica del concepto de raza" },
                { subject: "Educación Tecnológica (1º/2º)", description: "Tecnología al servicio de la propaganda" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Fascismo, Nazismo y la Estética del Cuerpo",
              foci: [
                { subject: "Sociología (4º)", description: "Nacionalización de las masas" },
                { subject: "Filosofía (5º)", description: "Estetización de la política (Walter Benjamin)" },
                { subject: "EDI Documental (4º/5º)", description: "Análisis técnico de 'Olympia'" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual. Taller de deconstrucción de imágenes de publicidad deportiva actual.",
          institutionalProposal: "Visita guiada al Museo del Holocausto de Buenos Aires con eje en propaganda y deporte.",
          subjects: ["Historia", "Formación Ética y Ciudadana", "Biología", "Educación Tecnológica", "Fisico-Química", "Sociología", "Antropología", "Psicología", "Filosofía", "Sociedad y Estado", "EDI Documental"],
          resources: [
            { title: "Documental: Olympia (Leni Riefenstahl)", type: "audiovisual", url: "https://www.criterionchannel.com/olympia" },
            { title: "The Nazi Olympics - Richard D. Mandell", type: "bibliografia", url: "https://archive.org/details/naziolympics0000mand" }
          ]
        },
        {
          id: "3.1.8",
          title: "El deporte como política pública en la Argentina",
          description: "La creación de los Torneos Infantiles 'Evita' (1948), el mundial de Básquet (1950) y los Juegos Panamericanos de Buenos Aires (1951) como herramientas de movilización popular y construcción de ciudadanía deportiva. Fangio, Pascualito Pérez y la construcción de ídolos populares desde el Estado. El acceso al tiempo libre y al deporte como derecho social en la Constitución de 1949. Continuidades y rupturas con las políticas deportivas posteriores.",
          criticalTriggers: [
            "¿Es el Estado quien debe garantizar el deporte como un derecho social o el mercado?",
            "¿Cuál era el objetivo sanitario y político de la masificación de los Torneos Evita?",
            "¿Cómo afectó la proscripción de 1955 a la generación dorada del deporte peronista?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "El deporte como política pública en la Argentina",
              foci: [
                { subject: "Historia (5º)", description: "El peronismo y las políticas sociales" },
                { subject: "Formación Ética (2º/3º)", description: "Derechos de segunda generación" },
                { subject: "Biología (1º/2º)", description: "Torneos Evita y campañas de salud" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "El deporte como política pública en la Argentina",
              foci: [
                { subject: "Historia de las Ideas (5º)", description: "El Estado de Bienestar" },
                { subject: "Sociedad y Estado (5º)", description: "Comparativa de modelos de financiamiento estatal" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro. Producción de radioteatro rescatando figuras proscriptas como Mary Terán de Weiss.",
          institutionalProposal: "Organizar unos 'Mini Torneos Evita' interescolares con chequeos médicos básicos.",
          subjects: ["Historia", "Formación Ética y Ciudadana", "Geografía", "Lengua y Literatura", "Educación Física", "Economía", "Matemática", "Economía Política", "Sociedad y Estado", "Historia Orientada de las Ideas"],
          resources: [
            { title: "La cancha peronista - Raanan Rein", type: "bibliografia", url: "https://archive.org/details/lacanchaperonist0000rein" },
            { title: "Breve historia del deporte argentino - Ezequiel Fernández Moores", type: "bibliografia", url: "https://archive.org/details/brevehistoriadel0000fern" }
          ]
        },
        {
          id: "3.1.9",
          title: "Messi, Trump y el Debate Local",
          description: "La influencia de los deportistas en la opinión pública. Neutralidad estratégica vs. activismo. El modelo de éxito en la Argentina contemporánea.",
          criticalTriggers: [
            "¿El silencio de Messi es neutralidad o una decisión política en sí misma?",
            "¿Por qué en Argentina los deportistas de élite evitan involucrarse en debates políticos polarizados?",
            "¿En qué sentido un 'like' de Messi puede ser más poderoso que un discurso presidencial?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Messi, Trump y el Debate Local",
              foci: [
                { subject: "EDI Comunicación (1º/2º)", description: "Redes sociales y el deportista como empresa" },
                { subject: "Formación Ética (3º)", description: "Libertad de expresión" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Messi, Trump y el Debate Local",
              foci: [
                { subject: "Sociología (4º)", description: "El ídolo globalizado en la era de la posverdad" },
                { subject: "Economía Política (3º/4º)", description: "El deportista multinacional y los paraísos fiscales" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual. Simulación de un Talk Show debatiendo la responsabilidad política de los ídolos.",
          institutionalProposal: "Encuesta escolar y barrial sobre qué se espera de los ídolos deportivos, procesada en Matemática.",
          subjects: ["Formación Ética y Ciudadana", "Lengua y Literatura", "Geografía", "Inglés", "Matemática", "Historia", "Economía Política", "Sociología", "Psicología", "Sociedad y Estado", "Historia Orientada de las Ideas"],
          resources: [
            { title: "La sociedad del espectáculo - Guy Debord", type: "bibliografia", url: "https://archive.org/details/lasociedaddelesp0000debo" },
            { title: "Balón dividido - Juan Villoro", type: "bibliografia", url: "https://archive.org/details/balondividido0000vill" }
          ]
        }
      ]
    },
    {
      id: "3.2",
      title: "Geopolítica y Distribución Global",
      themes: [
        {
          id: "3.2.1",
          title: "Distribución Global de Deportes",
          description: "Análisis histórico de por qué el fútbol domina en ex-colonias británicas mientras que el béisbol o el básquet dominan en zonas de influencia de EE.UU.",
          criticalTriggers: [
            "¿El mapa de los deportes es un reflejo del mapa de los imperialismos del siglo XIX y XX?",
            "¿Por qué Cuba o Venezuela adoptaron el béisbol en lugar del fútbol?",
            "¿Cómo utiliza hoy EE.UU. a la NBA como herramienta de 'soft power'?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Distribución Global de Deportes",
              foci: [
                { subject: "Geografía (2º)", description: "Mapeo de la 'línea del fútbol' vs. 'línea del béisbol'" },
                { subject: "Historia (3º)", description: "Imperio Británico vs. Doctrina Monroe" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Distribución Global de Deportes",
              foci: [
                { subject: "Sociología (4º)", description: "Hegemonía cultural y asimilación" },
                { subject: "Inglés (4º/5º)", description: "Análisis de la jerga deportiva impuesta globalmente" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales. Elaboración de un Mapamundi Deportivo Tridimensional.",
          institutionalProposal: "Torneo de 'Deportes Desconocidos' (Cricket, Béisbol) explicando su carga geopolítica.",
          subjects: ["Geografía", "Historia", "Inglés", "Lengua y Literatura", "Educación Física", "Sociología", "Antropología", "Historia de la Cultura Latinoamericana", "Sociedad y Estado"],
          resources: [
            { title: "El imperio de los deportes - Varios autores", type: "bibliografia", url: "https://archive.org/details/imperiodelosdepo0000vari" },
            { title: "Globalization and Football - Richard Giulianotti", type: "bibliografia", url: "https://archive.org/details/globalizationfoo0000giul" }
          ]
        },
        {
          id: "3.2.2",
          title: "Sportwashing",
          description: "El uso del deporte como herramienta de relaciones públicas internacionales por países con denuncias de violaciones a los DD.HH.",
          criticalTriggers: [
            "¿Comprar un club histórico es una forma de comprar 'aceptabilidad social'?",
            "¿Es cómplice el aficionado que festeja el éxito financiado por regímenes autocráticos?",
            "¿Dónde está el límite moral de la FIFA o la Fórmula 1 al otorgar sedes?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Sportwashing",
              foci: [
                { subject: "Formación Ética (3º)", description: "Derechos laborales y de minorías" },
                { subject: "Geografía (2º/3º)", description: "Medio Oriente y economía del petróleo" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Sportwashing",
              foci: [
                { subject: "Economía Política (3º/4º)", description: "Fondos soberanos de inversión" },
                { subject: "Filosofía (5º)", description: "Ética utilitarista vs. imperativo categórico" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual. Taller de contra-publicidad interviniendo logos de sponsors estatales.",
          institutionalProposal: "Charla-taller con Amnistía Internacional sobre Derechos Humanos y Megaeventos.",
          subjects: ["Geografía", "Economía", "Sociedad y Estado", "Formación Ética y Ciudadana", "Historia", "Lengua y Literatura", "Economía Política", "Sociología", "Psicología", "Antropología", "Filosofía", "EDI Documental"],
          resources: [
            { title: "Documental: FIFA Uncovered (Netflix)", type: "audiovisual", url: "https://www.netflix.com/title/81026336" }
          ]
        },
        {
          id: "3.2.3",
          title: "Diplomacia y Deporte",
          description: "Desde la diplomacia del ping-pong (1971) hasta los boicots olímpicos y la exclusión de atletas por conflictos bélicos actuales.",
          criticalTriggers: [
            "¿Puede un partido de ping-pong lograr lo que no logran los embajadores?",
            "¿Los boicots olímpicos perjudican a los gobiernos o solo a los atletas?",
            "¿Por qué el boicot deportivo fue vital para terminar con el Apartheid?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Diplomacia y Deporte",
              foci: [
                { subject: "Historia (5º)", description: "Guerra Fría y Apartheid" },
                { subject: "Educación Física (1º-3º)", description: "Práctica de tenis de mesa" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Diplomacia y Deporte",
              foci: [
                { subject: "Sociedad y Estado (5º)", description: "Relaciones Internacionales y embargos deportivos" },
                { subject: "Geografía (5º)", description: "Conflictos territoriales (Cachemira, Coreas)" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro. Creación de un thriller diplomático en cómic o escena teatral.",
          institutionalProposal: "Instalar 'Mesas de Paz' (ping-pong) para dirimir conflictos escolares mediante el juego.",
          subjects: ["Historia", "Geografía", "Sociedad y Estado", "Derecho", "Formación Ética y Ciudadana", "Educación Física", "Inglés", "Filosofía", "Sociología"],
          resources: [
            { title: "Geopolítica del Deporte - Pascal Boniface", type: "bibliografia", url: "https://archive.org/details/geopoliticadelde0000boni" },
            { title: "La diplomacia del Ping-Pong - Nicholas Griffin", type: "bibliografia", url: "https://archive.org/details/pingpongdiplomac0000grif" }
          ]
        },
        {
          id: "3.2.4",
          title: "Racismo en el Deporte",
          description: "La paradoja de las campañas institucionales frente a la falta de sanciones efectivas. Persistencia del pensamiento colonial en el periodismo deportivo.",
          criticalTriggers: [
            "¿Por qué el periodismo elogia la 'inteligencia' del blanco y la 'potencia física' del afrodescendiente?",
            "¿Existe racismo en el fútbol argentino? ¿Qué dicen los cánticos de cancha?",
            "¿Deberían los equipos retirarse de la cancha ante insultos racistas?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Racismo en el Deporte",
              foci: [
                { subject: "Lengua (2º/3º)", description: "Análisis del discurso en relatos deportivos" },
                { subject: "Formación Ética (3º)", description: "Protocolos de acción contra la discriminación" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Racismo en el Deporte",
              foci: [
                { subject: "Sociología (4º)", description: "Darwinismo social encubierto" },
                { subject: "Introducción a las Ciencias Sociales (3º)", description: "Estereotipos raciales en narrativas" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual. Rodaje de un 'spot publicitario honesto' parodiando campañas de FIFA.",
          institutionalProposal: "Charla debate junto a agrupaciones afroargentinas (ej. Diafar) sobre invisibilización local.",
          subjects: ["Formación Ética y Ciudadana", "Sociología", "Derecho", "Geografía", "Lengua y Literatura", "Historia", "Biología", "Educación Física", "Comunicación", "Psicología", "Antropología", "Filosofía", "Historia Orientada de las Ideas"],
          resources: [
            { title: "Protocolo contra el racismo - FIFA", type: "bibliografia", url: "https://digitalhub.fifa.com/m/6840742187652750/original/FIFA-Good-Practice-Guide-on-Diversity-and-Anti-Discrimination-ES.pdf" },
            { title: "La nación y sus otros - Rita Segato", type: "bibliografia", url: "https://archive.org/details/lanacionysusotro0000sega" }
          ]
        },
        {
          id: "3.2.5",
          title: "FIFA, COI y la gobernanza global",
          description: "Análisis de las organizaciones deportivas internacionales como actores de poder supranacional. El escándalo de corrupción de la FIFA (FIFAGate, 2015): redes de sobornos, lavado de dinero y la intervención del FBI. ¿Quién controla al que controla el deporte mundial? Comparación con la estructura de Naciones Unidas y otros organismos internacionales.",
          criticalTriggers: [
            "¿Por qué la FIFA funciona como 'asociación sin fines de lucro' si mueve un PBI de nación?",
            "¿Quién controla al que controla el deporte mundial?",
            "¿Puede existir transparencia donde el voto se intercambia por derechos televisivos?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "FIFA, COI y la gobernanza global",
              foci: [
                { subject: "Geografía (3º)", description: "Paraísos fiscales y poder financiero" },
                { subject: "Matemática (1º-3º)", description: "Dimensionar cifras de sobornos" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "FIFA, COI y la gobernanza global",
              foci: [
                { subject: "Economía Política (3º/4º)", description: "Monopolios y derechos de transmisión" },
                { subject: "Sociedad y Estado (5º)", description: "Gobernanza global vs. soberanía nacional" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro. Recrear un juicio simulado a dirigentes de la CONMEBOL.",
          institutionalProposal: "Simulacro de 'Modelo FIFA' escolar para debatir adjudicación de sedes y ética.",
          subjects: ["Derecho", "Formación Ética y Ciudadana", "Sociología", "Comunicación", "Geografía", "Matemática", "Economía Política", "Sociedad y Estado"],
          resources: [
            { title: "Documental: FIFA Uncovered (Netflix)", type: "audiovisual", url: "https://www.netflix.com/title/81026336" },
            { title: "Red Card (FIFAGate) - Ken Bensinger", type: "bibliografia", url: "https://archive.org/details/redcardfifasdirt0000bens" }
          ]
        },
        {
          id: "3.2.6",
          title: "Ucrania, Rusia y la suspensión deportiva",
          description: "La exclusión de atletas rusos de competencias internacionales tras la invasión de Ucrania (2022). El debate sobre si castigar a deportistas individuales por acciones de su Estado es justo. Precedentes: Sudáfrica durante el apartheid, Yugoslavia durante las guerras balcánicas. El deporte como espejo de la gobernanza global.",
          criticalTriggers: [
            "¿Es ético prohibir a un gimnasta competir si él no decidió iniciar una guerra?",
            "¿Por qué no se aplican sanciones similares a otras potencias en conflictos actuales?",
            "¿El deporte internacional ha abandonado la hipocresía de que 'no se mezcla con política'?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Ucrania, Rusia y la suspensión deportiva",
              foci: [
                { subject: "Geografía (3º)", description: "Mapa de Europa del Este y expansión de la OTAN" },
                { subject: "Formación Ética (3º)", description: "Responsabilidad individual vs. nacionalidad" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Ucrania, Rusia y la suspensión deportiva",
              foci: [
                { subject: "Filosofía (5º)", description: "Daño colateral y justicia distributiva" },
                { subject: "EDI Problemas del Mundo Contemporáneo (3º/4º)", description: "Doble estándar en sanciones" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales. Taller de diseño de afiches sin banderas para atletas neutrales.",
          institutionalProposal: "Panel debate con especialistas en Relaciones Internacionales usando el deporte como eje.",
          subjects: ["Geografía", "Formación Ética y Ciudadana", "Filosofía", "Sociedad y Estado", "Artes Visuales", "Audiovisual", "EDI Problemas del Mundo Contemporáneo"],
          resources: [
            { title: "Geopolítica del Deporte - Pascal Boniface", type: "bibliografia", url: "https://archive.org/details/geopoliticadelde0000boni" }
          ]
        }
      ]
    },
    {
      id: "3.3",
      title: "Economía del Deporte",
      themes: [
        {
          id: "3.3.1",
          title: "Impacto Económico de Megaeventos",
          description: "Déficit público, 'Elefantes Blancos' y gentrificación urbana. ¿Quién paga los estadios y quién se queda con las ganancias?",
          criticalTriggers: [
            "¿Es justo desfinanciar salud para construir estadios que quedan abandonados?",
            "¿Cómo impactó la preparación de Río 2016 en los habitantes de las favelas desplazados?",
            "La exigencia de exenciones impositivas de FIFA/COI a los países anfitriones."
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Impacto Económico de Megaeventos",
              foci: [
                { subject: "Matemática (1º-3º)", description: "Análisis de sobreprecios en construcción" },
                { subject: "Geografía (2º)", description: "Planificación urbana y desplazamientos" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Impacto Económico de Megaeventos",
              foci: [
                { subject: "Economía Política (3º/4º)", description: "Endeudamiento público" },
                { subject: "Sociología (4º)", description: "Gentrificación y derecho a la ciudad" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales. Maqueta 3D 'La Ciudad Dual': estadio vs. viviendas populares.",
          institutionalProposal: "Visita al Parque Olímpico de Villa Soldati para investigar el impacto post-2018.",
          subjects: ["Economía", "Matemática", "Geografía", "Economía Política", "Sociología", "Artes Visuales"],
          resources: [
            { title: "Circus Maximus - Andrew Zimbalist", type: "bibliografia", url: "https://archive.org/details/circusmaximus0000zimb" }
          ]
        },
        {
          id: "3.3.2",
          title: "El Mercado de Jugadores",
          description: "El deporte como industria extractiva de talento. El flujo de futbolistas desde el 'Sur Global' hacia Europa como exportación de materia prima.",
          criticalTriggers: [
            "¿Podemos comparar la compra de jóvenes futbolistas con el extractivismo minero o sojero?",
            "¿Qué ocurre con la salud mental del 99% que fracasa y queda abandonado en Europa?",
            "¿Por qué es tan difícil que los grandes clubes paguen los derechos de formación a los potreros?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "El Mercado de Jugadores",
              foci: [
                { subject: "Geografía (3º)", description: "Teoría de la Dependencia" },
                { subject: "Matemática (2º/3º)", description: "Cálculo del Mecanismo de Solidaridad de la FIFA" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "El Mercado de Jugadores",
              foci: [
                { subject: "Economía Política (3º/4º)", description: "Cadenas globales de valor" },
                { subject: "Psicología (4º)", description: "El niño como proyecto económico familiar" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro. Cortometraje 'La Mercancía': parodia de subasta ganadera con atletas.",
          institutionalProposal: "Asesorar a un club de barrio cercano para relevar reclamos de formación pendientes.",
          subjects: ["Economía", "Geografía", "Sociología", "Matemática", "Economía Política", "Psicología", "Teatro", "Audiovisual"],
          resources: [
            { title: "Soccernomics - Simon Kuper", type: "bibliografia", url: "https://archive.org/details/soccernomics0000kupe" },
            { title: "Documental: Diamantes Negros", type: "audiovisual", url: "https://www.rtve.es/play/videos/telediario-1/diamantes-negros-trafico-ninos-futbolistas/2182368/" }
          ]
        },
        {
          id: "3.3.3",
          title: "Clases de Deporte y Deportes 'de Clase'",
          description: "Pierre Bourdieu y el 'habitus' deportivo. El acceso al golf o polo como marcador de distinción social vs. deportes masivos.",
          criticalTriggers: [
            "¿El deporte que elegimos está predeterminado por nuestra cuenta bancaria y código postal?",
            "¿Por qué el boxeo recluta a los más vulnerables mientras las élites practican deportes de cero contacto?",
            "¿Cómo funcionan las barreras invisibles (cuotas, vestimenta) en los clubes exclusivos?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Clases de Deporte y Deportes de Clase",
              foci: [
                { subject: "Historia (2º/3º)", description: "Aristocracia vs. sectores populares en Buenos Aires" },
                { subject: "Educación Física (1º-3º)", description: "Practicar deportes 'caros' con materiales reciclados" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Clases de Deporte y Deportes de Clase",
              foci: [
                { subject: "Sociología (4º)", description: "Capital cultural, económico y simbólico (Bourdieu)" },
                { subject: "Filosofía (5º)", description: "Determinismo vs. libertad" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales. Exposición 'El Precio del Ocio': balanza visual de equipamiento vs. alimentos.",
          institutionalProposal: "Salida dual: visitar el Hipódromo de Palermo y un gimnasio de boxeo popular.",
          subjects: ["Sociología", "Historia", "Educación Física", "Filosofía", "Artes Visuales", "Diseño de Indumentaria"],
          resources: [
            { title: "La distinción - Pierre Bourdieu", type: "bibliografia", url: "https://archive.org/details/distinction0000bour" }
          ]
        },
        {
          id: "3.3.4",
          title: "Patrocinio y Mercantilización",
          description: "Naming rights de estadios y la marca sobre el producto. ¿En qué momento el hincha pasó de ser simpatizante a ser cliente?",
          criticalTriggers: [
            "Al vender el nombre del estadio, ¿estamos vendiendo nuestra identidad barrial al mejor postor?",
            "¿Es 'woke washing' cuando una multinacional financia campañas de empoderamiento?",
            "¿Cómo influye la marca que usa un ídolo en la construcción de la identidad adolescente?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Patrocinio y Mercantilización",
              foci: [
                { subject: "EDI Comunicación (1º/2º)", description: "Análisis publicitario denotativo y connotativo" },
                { subject: "Formación Ética (3º)", description: "Consumo responsable y trabajo infantil" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Patrocinio y Mercantilización",
              foci: [
                { subject: "Diseño Gráfico", description: "Branding y Naming Rights" },
                { subject: "Economía Política (3º/4º)", description: "Teoría de Naomi Klein ('No Logo')" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual. Taller de 'Culture Jamming': sabotaje cultural de comerciales épicos.",
          institutionalProposal: "Campaña 'Mi camiseta, mis reglas': tapar marcas por un día para debatir la mercantilización.",
          subjects: ["Economía", "Sociología", "Diseño Gráfico", "EDI Diseño Gráfico", "Formación Ética y Ciudadana", "Geografía", "Economía Política", "Comunicación", "Audiovisual"],
          resources: [
            { title: "No Logo - Naomi Klein", type: "bibliografia", url: "https://archive.org/details/nologo0000klei" }
          ]
        }
      ]
    }
  ]
};

export const axis4: Axis = {
  id: 4,
  title: "Deporte, Salud e Inclusión",
  subAxes: [
    {
      id: "4.1",
      title: "Salud Mental y Psicología",
      themes: [
        {
          id: "4.1.1",
          title: "Deporte y salud mental",
          description: "Presión, burnout y el derecho a parar. El caso de Simone Biles (Tokio 2020) como bisagra cultural: la atleta más exitosa de la historia de la gimnasia que elige su salud mental por sobre la medalla. Análisis del concepto de burnout deportivo en la adolescencia: la detección temprana de talento y la hiperentrenamiento como forma de explotación.",
          criticalTriggers: [
            "¿El caso de Simone Biles nos demuestra que el deporte de élite es, por definición, insano e incompatible con el bienestar psicológico?",
            "¿Cuándo la 'detección temprana de talentos' (niños de 8 a 10 años) deja de ser una formación y se convierte en una forma de explotación laboral encubierta?",
            "¿Qué responsabilidad tienen los adultos (padres/entrenadores) cuando exigen resultados de adultos a cuerpos y mentes que están en pleno desarrollo adolescente?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Deporte y salud mental",
              foci: [
                { subject: "Biología (2º/3º)", description: "El sistema nervioso, el estrés crónico (cortisol) y la etapa del desarrollo puberal" },
                { subject: "Educación Física (1º a 3º)", description: "Encuesta anónima en la clase: ¿qué nos estresa y qué nos divierte del deporte?" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Deporte y salud mental",
              foci: [
                { subject: "Psicología (4º)", description: "El síndrome del Burnout (quemado), la autoexigencia y el quiebre de la estructura psíquica ('los twisties' en gimnasia)" },
                { subject: "Sociología (4º)", description: "La sociedad del rendimiento y la autoexplotación (Byung-Chul Han)" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro + Artes Visuales. Puesta en escena 'El Peso del Oro': performance donde los alumnos intentan realizar actividades cotidianas o lúdicas mientras cargan mochilas llenas de piedras etiquetadas con frases como 'Tenés que ser el mejor', 'No decepciones a papá', 'El 2do puesto es fracaso'.",
          institutionalProposal: "Mesa redonda junto a psicólogos deportivos y orientadores escolares sobre el manejo de la ansiedad en épocas de exámenes y competencias intercolegiales, abierta a las familias.",
          subjects: ["Biología", "Educación Física", "Psicología", "Sociología", "Formación Ética y Ciudadana", "Lengua y Literatura", "Economía Política", "EDI Problemas del Mundo Contemporáneo", "Sociedad y Estado", "Filosofía", "Historia de la Cultura Latinoamericana", "Proyecto"],
          resources: [
            { title: "La sociedad del cansancio - Byung-Chul Han", type: "bibliografia", url: "https://archive.org/details/lasociedaddelcan0000hanb" },
            { title: "Documental: The Weight of Gold", type: "audiovisual", url: "https://www.hbo.com/documentaries/the-weight-of-gold" },
            { title: "Entrevistas a Simone Biles", type: "audiovisual", url: "https://www.youtube.com/results?search_query=simone+biles+mental+health+interview" }
          ]
        },
        {
          id: "4.1.2",
          title: "Psicología del deporte y la adolescencia",
          description: "Motivación intrínseca vs. extrínseca en la práctica deportiva. La presión por el rendimiento y su impacto en la autoestima adolescente. El deporte como herramienta terapéutica para la ansiedad y la depresión, pero también como fuente de estrés. La psicología de grupo: liderazgo, roles, conflictos y cohesión en un equipo.",
          criticalTriggers: [
            "Si un adolescente hace deporte por miedo al reto del entrenador o para ganar 'likes', ¿podemos decir que realmente está 'jugando'?",
            "¿Cómo diferencia la escuela a un 'líder positivo' que cohesiona al grupo de un 'líder autoritario' que hace bullying a los de menor rendimiento?",
            "¿Por qué el sistema educativo prioriza casi exclusivamente la aptitud física en el deporte y desatiende el acompañamiento de las frustraciones psicológicas de los adolescentes?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Psicología del deporte y la adolescencia",
              foci: [
                { subject: "Formación Ética y Ciudadana (1º/2º)", description: "Dinámicas de grupo, empatía escolar y prevención del bullying deportivo" },
                { subject: "Educación Física (1º a 3º)", description: "Actividades sin tanteador y juegos cooperativos donde nadie gana si no llegan todos juntos" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Psicología del deporte y la adolescencia",
              foci: [
                { subject: "Psicología (4º)", description: "Motivación intrínseca (placer, autonomía) vs motivación extrínseca (premios, castigos)" },
                { subject: "Teoría de las Inteligencias Múltiples (Gardner)", description: "Inteligencia cenestésica e intrapersonal" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro + Historieta. Ejercicio de Rol: 'Cambio de roles'. Los alumnos dibujan o actúan viñetas donde los hijos gritan e insultan desaforadamente a los padres mientras estos intentan hacer su trabajo de oficina, evidenciando lo absurdo del maltrato en el deporte infantil.",
          institutionalProposal: "Redactar un 'Código de Ética para Espectadores y Familias' y colocarlo mediante cartelería permanente en los alambrados de los clubes y plazas de la zona de influencia de la escuela.",
          subjects: ["Formación Ética y Ciudadana", "Educación Física", "Psicología", "Lengua y Literatura", "Biología", "Introducción a las Ciencias Sociales y las Humanidades", "Sociología", "Antropología", "EDI Radio", "Filosofía", "Sociedad y Estado", "Proyecto"],
          resources: [
            { title: "Psicología del coaching infantil - Marcelo Roffé", type: "bibliografia", url: "https://www.google.com/search?q=Marcelo+Roff%C3%A9+psicologia+del+deporte+infantil" },
            { title: "Serie: Ted Lasso (Análisis de liderazgo)", type: "audiovisual", url: "https://www.apple.com/tv-pr/originals/ted-lasso/" }
          ]
        }
      ]
    },
    {
      id: "4.2",
      title: "Inclusión y Deporte Adaptado",
      themes: [
        {
          id: "4.2.1",
          title: "Deporte Adaptado y “cuerpo aumentado”",
          description: "Evolución del marco legal en Argentina y el rol del CENARD en el alto rendimiento. Análisis de cómo la tecnología (prótesis, sillas de competición) redefine las capacidades humanas. El caso Oscar Pistorius. El límite entre 'compensación' y 'mejora' (enhancement). Discusión filosófica sobre el posthumanismo y el cyborg en el deporte. ¿Hasta dónde llega el cuerpo 'natural'?",
          criticalTriggers: [
            "¿El caso de Oscar Pistorius (y la acusación de que sus prótesis le daban ventaja sobre atletas 'sanos') demuestra la hipocresía de la ciencia deportiva contemporánea?",
            "Si un atleta de élite gasta millones en cámaras hiperbáricas, calzado con placas de carbono y medicina regenerativa, ¿no es ya un 'cyborg' aunque no tenga prótesis visibles?",
            "¿Cómo cuestiona el deporte adaptado paralímpico nuestros prejuicios sobre qué es un cuerpo 'discapacitado' o 'débil'?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Deporte Adaptado y “cuerpo aumentado”",
              foci: [
                { subject: "Educación Tecnológica (1º a 3º)", description: "Biomecánica: el diseño de las 'Cheetah blades' (cuchillas de fibra de carbono para correr). ¿Cómo almacena y libera energía este material?" },
                { subject: "Biología (3º)", description: "Anatomía, articulaciones y músculos comparados con mecanismos protésicos" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Deporte Adaptado y “cuerpo aumentado”",
              foci: [
                { subject: "Filosofía (5º)", description: "Transhumanismo, el 'cyborg' de Donna Haraway, y el fin de los límites de la naturaleza humana" },
                { subject: "Física (4º)", description: "Elasticidad, Ley de Hooke y fuerzas de reacción en el uso de prótesis de carbono frente a piernas biológicas" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Audiovisual. Muestra fotográfica 'El cuerpo tecnológico': intervenir fotos de atletas cotidianos agregándoles planos esquemáticos de partes robóticas (dibujadas) para visualizar que todo entrenamiento moderno es, en el fondo, tecnología.",
          institutionalProposal: "Charla e intercambio tecnológico con escuelas técnicas cercanas (o alumnos de escuelas de órtesis/prótesis) para entender el desarrollo local de sillas e implementos deportivos para personas con discapacidad motriz en CABA.",
          subjects: ["Educación Tecnológica", "Biología", "Filosofía", "Física", "Formación Ética y Ciudadana", "Fisico-Química", "Introducción a las Ciencias Sociales y las Humanidades", "Antropología", "Sociología", "EDI Documental", "Sociedad y Estado", "Proyecto", "Química"],
          resources: [
            { title: "Manifiesto Cyborg - Donna Haraway", type: "bibliografia", url: "https://archive.org/details/simianscyborgswo0000hara" },
            { title: "Ley del Deporte N° 20.655", type: "bibliografia", url: "https://www.argentina.gob.ar/normativa/nacional/ley-20655-27274/actualizacion" },
            { title: "Documental: Rising Phoenix", type: "audiovisual", url: "https://www.netflix.com/title/81122434" }
          ]
        },
        {
          id: "4.2.2",
          title: "Deportes Inclusivos",
          description: "La superación de la integración hacia la inclusión real. Diferencia conceptual: mientras el deporte adaptado segrega por tipo de discapacidad, el deporte inclusivo propone reglas que permiten la participación equitativa de personas con y sin discapacidad en un mismo equipo. Los Juegos Paralímpicos como plataforma de visibilidad. Discusión sobre los motivos que llevan a los medios a cubrir estos eventos.",
          criticalTriggers: [
            "¿Por qué los medios de comunicación suelen cubrir los Juegos Paralímpicos desde un enfoque de 'lástima' o 'inspiración milagrosa' (porno inspiracional) en vez de valorarlo como alto rendimiento deportivo?",
            "¿Es suficiente 'integrar' (poner a alguien con discapacidad en un grupo de normotípicos) o necesitamos 'incluir' (modificar todas las reglas del juego para que estemos en igualdad)?",
            "¿Las veredas, estaciones de subte y escuelas de CABA están preparadas para que una persona usuaria de silla de ruedas pueda ir a entrenar con la misma facilidad que los demás?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Deportes Inclusivos",
              foci: [
                { subject: "Geografía (1º/2º)", description: "Relevamiento y mapeo urbano de accesibilidad en las 10 cuadras a la redonda de la escuela (rampas, semáforos sonoros, baldosas podotáctiles)" },
                { subject: "Educación Física (1º a 3º)", description: "Práctica de Torball o Goalball (fútbol para ciegos con balón sonoro), todos los alumnos con los ojos vendados" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Deportes Inclusivos",
              foci: [
                { subject: "Sociología (4º)", description: "El modelo social de la discapacidad vs. el modelo médico rehabilitador: la discapacidad no está en la persona, está en las barreras del entorno" },
                { subject: "EDI (Comunicación) (4º/5º)", description: "Crítica a la narrativa mediática hegemónica de la 'superación personal'" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Diseño. Diseño de una campaña en redes sociales para visibilizar los deportes que practican 'Los Murciélagos' (Selección Arg. Ciegos) o 'Las Lobas', enfatizando la excelencia atlética y no la victimización.",
          institutionalProposal: "Organizar un encuentro de Torball/Goalball en la escuela en conjunto con asociaciones como FADeC (Federación Argentina de Deportes para Ciegos) o escuelas de educación especial de la zona, vivenciando la práctica inclusiva.",
          subjects: ["Geografía", "Educación Física", "Sociología", "Comunicación", "Formación Ética y Ciudadana", "Lengua y Literatura", "Educación Tecnológica", "Introducción a las Ciencias Sociales y las Humanidades", "Inglés", "Psicología", "Antropología", "EDI Radio", "Sociedad y Estado", "Filosofía", "Proyecto", "Tecnología de la Información"],
          resources: [
            { title: "Convención sobre los Derechos de las Personas con Discapacidad (ONU)", type: "bibliografia", url: "https://www.un.org/esa/socdev/enable/documents/tccconvs.pdf" },
            { title: "Charla TED: Stella Young (Inspiration porn)", type: "audiovisual", url: "https://www.ted.com/talks/stella_young_i_m_not_your_inspiration_thank_you_very_much" }
          ]
        },
        {
          id: "4.2.3",
          title: "Paradeportes",
          description: "Los Juegos Paralímpicos como plataforma de visibilidad. Discusión sobre los motivos que llevan a los medios a cubrir estos eventos. Análisis de la narrativa de 'superación personal' vs. 'derechos y accesibilidad'.",
          criticalTriggers: [
            "¿Los medios cubren los Juegos Paralímpicos por compromiso con la inclusión o porque encuentran historias “inspiradoras” que vuelven consumible la discapacidad?",
            "¿Cómo pasar de una mirada de superación individual a una mirada de derechos y accesibilidad?",
            "¿Qué lugar ocupan hoy los paradeportes en la cultura deportiva argentina y qué barreras siguen sosteniendo su invisibilización?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Paradeportes",
              foci: [
                { subject: "Lengua (1º)", description: "Análisis del lenguaje periodístico sobre atletas paralímpicos" },
                { subject: "Formación Ética (2º)", description: "Derecho al deporte y mirada no capacitista" },
                { subject: "Matemática (2º)", description: "Comparación simple de cobertura mediática" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Paradeportes",
              foci: [
                { subject: "Sociología (4º)", description: "“Narrativa inspiracional” y producción mediática de sensibilidad" },
                { subject: "EDI (Documental / Radio) (4º/5º)", description: "Análisis y producción de coberturas con enfoque de derechos" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Artes Visuales. Campaña escolar de visibilización de paradeportes desde un enfoque de derechos.",
          institutionalProposal: "Invitar a atletas paralímpicos/as, medios comunitarios y organizaciones de discapacidad para una jornada de comunicación inclusiva y deporte.",
          subjects: ["Lengua y Literatura", "Formación Ética y Ciudadana", "Matemática", "Introducción a las Ciencias Sociales y las Humanidades", "Educación Física", "Sociología", "Psicología", "EDI Documental", "EDI Radio", "Sociedad y Estado", "Filosofía", "Proyecto", "Historia de la Cultura Latinoamericana"],
          resources: [
            { title: "I'm not your inspiration, thank you very much - Stella Young", type: "bibliografia", url: "https://www.ted.com/talks/stella_young_i_m_not_your_inspiration_thank_you_very_much" },
            { title: "Documental: Rising Phoenix", type: "audiovisual", url: "https://www.netflix.com/title/81122434" }
          ]
        }
      ]
    },
    {
      id: "4.3",
      title: "Alimentación, Sustancias y Dopaje",
      themes: [
        {
          id: "4.3.1",
          title: "Trastornos alimentarios y dismorfia en el deporte",
          description: "La presión por el peso en deportes como la gimnasia artística, el patinaje, la lucha y el boxeo. La vigorexia como expresión de una masculinidad que busca validación a través del volumen corporal. Alimentación, suplementación y la frontera borrosa con el dopaje.",
          criticalTriggers: [
            "¿Cómo las exigencias de 'dar el peso' en deportes de combate (lucha/boxeo) fomentan prácticas médicas abusivas (deshidratación extrema) validadas por las reglas?",
            "¿Qué presión estética (además de la deportiva) sufren las adolescentes de gimnasia y patinaje que derivan en altas tasas de anorexia y bulimia atlética?",
            "¿La 'vigorexia' en jóvenes urbanos es una búsqueda de salud o un reflejo de la presión por el ideal de macho hipermusculado que exigen las redes sociales?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Trastornos alimentarios y dismorfia en el deporte",
              foci: [
                { subject: "Biología (1º/2º) y ESI", description: "Nutrición real vs. trastornos de la conducta alimentaria (TCA). ¿Qué hace la falta extrema de carbohidratos o agua en el cuerpo?" },
                { subject: "Formación Ética (2º/3º)", description: "Los estereotipos estéticos en la publicidad" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Trastornos alimentarios y dismorfia en el deporte",
              foci: [
                { subject: "Psicología (4º)", description: "Dismorfia corporal, vigorexia, ortorexia. La internalización de una imagen corporal inalcanzable" },
                { subject: "Sociología (4º)", description: "Construcción cultural del 'cuerpo fitness' en la posmodernidad" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Cocina + Artes Visuales. Muestra fotográfica 'Platos Vacíos': preparar platos escenográficos donde lo que se 'sirve' son cintas métricas, cronómetros y fotos de pesas, trabajando en conjunto el Taller de Cocina con el arte conceptual para denunciar la obsesión.",
          institutionalProposal: "Taller abierto sobre Nutrición, Deporte y ESI dictado por profesionales de un Hospital Público cercano (ej. Hospital Durand, Álvarez) focalizado en desmitificar los suplementos 'mágicos' del gimnasio barrial.",
          subjects: ["Biología", "ESI", "Formación Ética y Ciudadana", "Educación Física", "Lengua y Literatura", "Fisico-Química", "Introducción a las Ciencias Sociales y las Humanidades", "Psicología", "Sociología", "Antropología", "EDI Radio", "Química", "Filosofía", "Sociedad y Estado", "Proyecto", "Cocina"],
          resources: [
            { title: "Informes sobre TCA y deporte", type: "bibliografia", url: "https://www.google.com/search?q=trastornos+alimentarios+y+deporte+articulos+cientificos" },
            { title: "Videos sobre deshidratación en deportes de combate", type: "audiovisual", url: "https://www.youtube.com/results?search_query=weight+cutting+ufc+danger" }
          ]
        },
        {
          id: "4.3.2",
          title: "Dopaje, historia, ciencia y ética",
          description: "Del uso de estricnina en las primeras olimpíadas modernas a las redes de dopaje estatal (Rusia, Alemania Oriental). La EPO, los esteroides anabólicos, la hormona de crecimiento: ¿cómo funcionan y qué efectos producen? El caso Lance Armstrong y la caída de un mito. Los controles antidoping y la Agencia Mundial Antidopaje (WADA/AMA). Debate ético: ¿debería liberalizarse el dopaje?",
          criticalTriggers: [
            "Si los atletas de alto rendimiento ya utilizan medicina de vanguardia, altitud simulada y genética, ¿por qué algunas intervenciones bioquímicas son ilegales (dopaje) y otras no? ¿El límite es puramente arbitrario?",
            "¿Cómo el dopaje de Estado en Alemania Oriental (RDA) utilizó los cuerpos de las jóvenes atletas (dándoles testosterona sin su consentimiento) como cobayas de laboratorio de la Guerra Fría?",
            "El dilema de Armstrong: en un sistema donde todos se dopan (Tour de Francia en los 2000), ¿hacerlo para estar en 'igualdad de condiciones' es trampa o un acto de supervivencia en el mercado laboral?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Dopaje, historia, ciencia y ética",
              foci: [
                { subject: "Fisico-Química (3º)", description: "Identificación de sustancias químicas. Diferencia metodológica entre análisis de sangre y análisis de orina" },
                { subject: "Historia (3º)", description: "Las Olimpiadas y la maquinaria del bloque comunista en los años 70 y 80" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Dopaje, historia, ciencia y ética",
              foci: [
                { subject: "Química (5º)", description: "Estructura molecular de los esteroides anabólicos y sus alteraciones hepáticas y endócrinas" },
                { subject: "Filosofía (5º)", description: "Debate de 'Bioética radical' (ej. transhumanismo de Savulescu: el derecho a usar química para mejorar nuestra condición)" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro + Audiovisual. Organizar un 'Debate de estilo Parlamentario' televisado internamente. La mitad del curso defenderá (con argumentos filosóficos) que 'el dopaje debería estar regulado y permitido bajo control médico', y la otra mitad sostendrá 'la prohibición y penalización absoluta'.",
          institutionalProposal: "Visita a laboratorios o facultades de Bioquímica y Farmacia (UBA) para conocer el instrumental (espectrómetros de masa) que se utiliza para detectar ínfimas cantidades de sustancias en fluidos humanos.",
          subjects: ["Fisico-Química", "Historia", "Química", "Filosofía", "Biología", "Formación Ética y Ciudadana", "Inglés", "Psicología", "Sociología", "EDI Documental", "Sociedad y Estado", "Proyecto"],
          resources: [
            { title: "Documental: Icarus", type: "audiovisual", url: "https://www.netflix.com/title/80168079" },
            { title: "El doping y el espíritu del deporte - M. Tamburrini", type: "bibliografia", url: "https://www.google.com/search?q=Claudio+Tamburrini+El+doping+y+el+espiritu+del+deporte" }
          ]
        },
        {
          id: "4.3.3",
          title: "Nutrición deportiva como práctica cultural",
          description: "Más allá de la bioquímica: ¿qué comen los deportistas en distintos países y culturas? La dieta mediterránea de los futbolistas europeos, el arroz y pescado de los atletas japoneses, el asado y las pastas del futbolista argentino. ¿Cómo se cruzan las tradiciones alimentarias con las exigencias del rendimiento? La industria de los suplementos y las 'dietas milagro' en redes sociales.",
          criticalTriggers: [
            "¿La nutrición deportiva es una ciencia universal o una práctica atravesada por cultura, clase social, territorio y acceso económico?",
            "¿Cómo influyen las redes sociales en la difusión de dietas milagro y modelos de alimentación poco realistas para adolescentes?",
            "¿Qué tensiones existen entre tradición alimentaria familiar y exigencias del rendimiento deportivo?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Nutrición deportiva como práctica cultural",
              foci: [
                { subject: "Biología (1º)", description: "Grupos de nutrientes" },
                { subject: "Lengua (1º)", description: "Análisis de influencers" },
                { subject: "Geografía (2º)", description: "Alimentos característicos regionales" },
                { subject: "Matemática (2º)", description: "Registro de consumos" },
                { subject: "EDI (Economía) (2º)", description: "Costo de alimentación equilibrada" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Nutrición deportiva como práctica cultural",
              foci: [
                { subject: "Psicología (4º)", description: "Alimentación, identidad y ansiedad" },
                { subject: "Antropología (4º)", description: "Comida y tradición" },
                { subject: "Química (5º)", description: "Bebidas isotónicas" },
                { subject: "Sociedad y Estado (5º)", description: "Regulación publicitaria" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Cocina + Huerta: diseño de colaciones y menús accesibles para estudiantes que practican deporte, con ingredientes de estación.",
          institutionalProposal: "Articulación con un CESAC, nutricionistas del barrio o un club local para construir recomendaciones de alimentación realistas y accesibles.",
          subjects: ["Biología", "Lengua y Literatura", "Geografía", "Matemática", "Economía", "Fisico-Química", "Economía Política", "Inglés", "Psicología", "Sociología", "Antropología", "EDI Radio", "Química", "Sociedad y Estado", "Proyecto", "Cocina", "Huerta"],
          resources: [
            { title: "Guías alimentarias para la población argentina", type: "bibliografia", url: "https://bancos.salud.gob.ar/recurso/guias-alimentarias-para-la-poblacion-argentina" },
            { title: "Cultura alimentaria y deporte - Artículos", type: "bibliografia", url: "https://www.google.com/search?q=cultura+alimentaria+y+deporte+articulos" }
          ]
        }
      ]
    }
  ]
};

export const axis5: Axis = {
  id: 5,
  title: "Ética, Valores y Ciudadanía",
  subAxes: [
    {
      id: "5.1",
      title: "Filosofía del Juego",
      themes: [
        {
          id: "5.1.1",
          title: "Homo Ludens: El Juego como Fundamento",
          description: "El concepto de juego como actividad libre, separada de la vida ordinaria. ¿Es el deporte todavía 'juego' cuando se mercantiliza?",
          criticalTriggers: [
            "Diferencia entre 'play' (juego libre) y 'game' (juego reglado).",
            "¿Qué se pierde cuando el único objetivo es ganar?",
            "El valor estético del 'juego bonito' vs. el utilitarismo del resultado."
          ],
          subjects: ["Filosofía", "Antropología", "Lengua y Literatura", "Historia"],
          resources: [
            { title: "Homo Ludens - Johan Huizinga", type: "bibliografia", url: "https://archive.org/details/homoludens00huiz" }
          ]
        },
        {
          id: "5.1.2",
          title: "Estética, belleza y el 'juego bonito'",
          description: "Análisis de la dimensión estética del deporte. El deporte como arte en movimiento y la búsqueda de la armonía técnica por encima de la eficacia numérica.",
          criticalTriggers: [
            "¿Puede una derrota ser estéticamente superior a una victoria?",
            "¿En qué momento el gesto técnico de un atleta se convierte en una obra de arte?",
            "La tensión entre el utilitarismo del resultado y la ética de la belleza en el juego."
          ],
          subjects: ["Filosofía", "Artes Visuales", "Educación Física", "Historia de la Cultura Latinoamericana"],
          resources: [
            { title: "La estética del deporte - David Best", type: "bibliografia", url: "https://archive.org/details/aestheticsport0000best" },
            { title: "Elogio de la dificultad - Estanislao Zuleta", type: "bibliografia", url: "https://archive.org/details/elogiodeladificu0000zule" }
          ]
        }
      ]
    },
    {
      id: "5.2",
      title: "Deporte y Ciudadanía",
      themes: [
        {
          id: "5.2.1",
          title: "Fair Play y Convivencia",
          description: "El deporte como simulación de la vida democrática. El aprendizaje de la derrota y el respeto a la regla compartida.",
          criticalTriggers: [
            "¿Es el deporte una herramienta real para la resolución de conflictos?",
            "El caso del programa 'Espartanos' (rugby en cárceles).",
            "¿Puede el deporte ser una herramienta de rehabilitación?"
          ],
          subjects: ["Formación Ética y Ciudadana", "Derecho", "Sociología", "Psicología"],
          resources: [
            { title: "Educación en Valores (UNESCO)", type: "bibliografia", url: "https://deportedesarrolloypaz.org/wp-content/uploads/2017/02/deporte-para-el-desarrollo-y-la-paz-1.pdf" }
          ]
        },
        {
          id: "5.2.2",
          title: "Educación en Valores y Desarrollo Humano",
          description: "El deporte como vehículo para el desarrollo sostenible y la paz mundial según los lineamientos de la UNESCO.",
          criticalTriggers: [
            "¿Cómo puede el deporte escolar desmarcarse de la lógica del alto rendimiento para priorizar la inclusión?",
            "El potencial del juego para enseñar respeto y cooperación en entornos vulnerables.",
            "¿Es el deporte un derecho humano fundamental o un privilegio de quienes tienen acceso a infraestructura?"
          ],
          subjects: ["Formación Ética y Ciudadana", "Sociología", "Geografía", "Sociedad y Estado"],
          resources: [
            { title: "Deporte para el Desarrollo y la Paz - UNESCO", type: "bibliografia", url: "https://deportedesarrolloypaz.org/wp-content/uploads/2017/02/deporte-para-el-desarrollo-y-la-paz-1.pdf" },
            { title: "Guía para la práctica deportiva por un mundo mejor - Lissavetzky, J.", type: "bibliografia", url: "https://estaticos.csd.gob.es/csd/docs/Guia_para_la_practica_deportiva_mundo_mejor.pdf" }
          ]
        },
        {
          id: "5.2.3",
          title: "El deporte y la justicia restaurativa",
          description: "Análisis de programas deportivos en contextos de encierro o post-conflicto. El deporte como espacio de reparación del tejido social.",
          criticalTriggers: [
            "¿Puede un equipo de rugby en una cárcel modificar la identidad delictiva de sus integrantes?",
            "El deporte como alternativa a la justicia punitiva tradicional.",
            "¿Cómo se reconstruye la confianza en el 'otro' a través del juego reglado?"
          ],
          subjects: ["Derecho", "Sociología", "Psicología", "Formación Ética y Ciudadana"],
          resources: [
            { title: "Documental: Los Espartanos", type: "audiovisual", url: "https://www.fundacionespartanos.org/la-serie/" },
            { title: "Justicia Restaurativa y Deporte - Varios autores", type: "bibliografia", url: "https://archive.org/details/justiciarestaura0000vari" }
          ]
        }
      ]
    },
    {
      id: "5.3",
      title: "Problemáticas Éticas Contemporáneas",
      themes: [
        {
          id: "5.3.1",
          title: "Corrupción y Gobernanza en el Deporte",
          description: "Análisis de los grandes escándalos (FIFA Gate) y la falta de transparencia en las organizaciones deportivas internacionales.",
          criticalTriggers: [
            "¿Por qué las federaciones deportivas suelen ser estructuras tan cerradas y poco democráticas?",
            "¿Cómo afecta la corrupción en la cima a los clubes de barrio y al deporte base?",
            "El rol del periodismo de investigación en la denuncia de estos casos."
          ],
          subjects: ["Derecho", "Formación Ética y Ciudadana", "Sociología", "Comunicación"],
          resources: [
            { title: "FIFA Gate: El escándalo que sacudió al fútbol - Video", type: "audiovisual", url: "https://www.youtube.com/results?search_query=FIFA+GATE+Por+el+Bien+del+F%C3%BAtbol+Presentaci%C3%B3n+Oficial+de+la+Serie" }
          ]
        },
        {
          id: "5.3.2",
          title: "Violencia en el Deporte: Barras Bravas y Hooligans",
          description: "Estudio de la violencia asociada al espectáculo deportivo. El rol de las 'barras bravas' en Argentina como actores políticos y económicos.",
          criticalTriggers: [
            "¿Es la violencia en el fútbol un reflejo de la violencia social o tiene lógicas propias?",
            "La connivencia entre dirigentes, políticos y barras.",
            "¿Cómo se puede erradicar la violencia sin perder la pasión del hincha?"
          ],
          subjects: ["Sociología", "Historia", "Formación Ética y Ciudadana", "Psicología"],
          resources: [
            { title: "Barras Bravas: El negocio de la violencia - Documental", type: "audiovisual", url: "https://www.lanacion.com.ar/opinion/barras-bravas-sa-negocios-que-alimentan-la-violencia-nid1617607/" }
          ]
        },
        {
          id: "5.3.3",
          title: "Discriminación, Racismo y Xenofobia",
          description: "El deporte como escenario de actos discriminatorios. Los protocolos de la FIFA y el COI frente al racismo en los estadios.",
          criticalTriggers: [
            "¿Por qué el anonimato de la tribuna parece habilitar el insulto racista?",
            "El caso de Vinícius Jr. y la lucha contra el racismo en La Liga.",
            "¿Son suficientes las sanciones económicas para frenar la discriminación?"
          ],
          subjects: ["Formación Ética y Ciudadana", "Sociología", "Derecho", "Geografía"],
          resources: [
            { title: "Protocolo contra el racismo en el fútbol - FIFA", type: "bibliografia", url: "https://digitalhub.fifa.com/m/6840742187652750/original/FIFA-Good-Practice-Guide-on-Diversity-and-Anti-Discrimination-ES.pdf" }
          ]
        }
      ]
    }
  ]
};
