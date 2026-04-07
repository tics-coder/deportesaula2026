import { Axis } from '../types';

export const axis1: Axis = {
  id: 1,
  title: "Historia e Identidades",
  subAxes: [
    {
      id: "1.1",
      title: "Genealogía del Deporte",
      themes: [
        {
          id: "1.1.1",
          title: "Los Juegos Olímpicos en la Grecia Clásica",
          description: "La búsqueda de la atē (excelencia física y moral). El deporte como rito religioso consagrado a Zeus y su rol en la formación del ciudadano-soldado. Implicancias de la 'tregua sagrada': la pausa de los conflictos bélicos como reconocimiento de una identidad cultural común superior a la división de las Polis.",
          criticalTriggers: [
            "¿De qué manera la 'excelencia física' funcionaba como una herramienta de exclusión política frente a quienes no eran ciudadanos (esclavos, mujeres, extranjeros)?",
            "Si la 'tregua sagrada' pausaba temporalmente las guerras, ¿era el deporte una herramienta de paz real o un entrenamiento encubierto para el ciudadano-soldado?",
            "¿Qué paralelismos existen entre la disciplina del ciudadano griego y el rol de la Educación Física en las escuelas argentinas a principios del siglo XX?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Los Juegos Olímpicos en la Grecia Clásica",
              foci: [
                { subject: "Historia (1º)", description: "Análisis de la estratificación en la Polis y el concepto de ciudadanía antigua" },
                { subject: "Formación Ética y Ciudadana (1º/2º)", description: "Comparativa entre ciudadanía antigua y derechos universales modernos" },
                { subject: "Educación Física (1º a 3º)", description: "Recreación de dinámicas atléticas primigenias" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Teatro. Diseño y pintura de 'ánforas' en papel maché que narren deportes contemporáneos; seguido de una dramatización de un debate en el Ágora sobre la suspensión de una guerra por la Tregua Sagrada.",
          institutionalProposal: "'Olimpíadas de la Tregua': Encuentro atlético intercolegial sin tableros de puntaje numérico, donde el premio (una corona de olivo) se entregue al equipo con mejor resolución de conflictos y juego limpio.",
          subjects: ["Historia", "Filosofía", "Educación Física", "Formación Ética y Ciudadana", "Artes Visuales", "Teatro", "Sociología", "Introducción a las Ciencias Sociales y las Humanidades"],
          resources: [
            { title: "Documental: Olimpiadas en la Antigüedad (History Channel)", type: "audiovisual", url: "https://www.youtube.com/watch?v=XFk1M0t_D3c" },
            { title: "Homo Ludens - Johan Huizinga", type: "bibliografia", url: "https://archive.org/details/homoludens00huiz" },
            { title: "Los Juegos Olímpicos y el deporte en Grecia - García Romero, F.", type: "bibliografia", url: "https://archive.org/details/garcia-romero-fernando-los-juegos-olimpicos-y-el-deporte-en-grecia" },
            { title: "Historia de los griegos - Indro Montanelli", type: "bibliografia", url: "https://archive.org/details/historiadelosgri0000mont" }
          ]
        },
        {
          id: "1.1.2",
          title: "Los Juegos Olímpicos en la Modernidad",
          description: "El proyecto de Pierre de Coubertin y la reinvención de la tradición. El deporte como herramienta de paz universal y 'amateurismo' caballeresco, contrastado con la realidad de la competencia nacionalista y la utilización del medallero como indicador de potencia estatal.",
          criticalTriggers: [
            "Coubertin diseñó los Juegos modernos como una herramienta de paz entre naciones, pero históricamente sirvieron para medir poder geopolítico (Guerra Fría, boicots). ¿Los JJ.OO. unen o dividen al mundo?",
            "El ideal del 'amateurismo' olímpico excluía a quien necesitara trabajar para vivir. ¿Era una filosofía deportiva o un mecanismo de clase para que solo compitieran los ricos?",
            "Argentina invierte significativamente menos que otros países en deporte olímpico. ¿Es el medallero una medida justa de desarrollo, o una distorsión que premia al país que más gasta?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Los Juegos Olímpicos en la Modernidad",
              foci: [
                { subject: "Historia (4º)", description: "El renacimiento de los Juegos Olímpicos (1896) como proyecto de paz y nacionalismo" },
                { subject: "Geografía (2º/3º)", description: "Mapeo de sedes olímpicas y hegemonía del Norte vs. periferia" },
                { subject: "Inglés (1º a 3º)", description: "Traducción y debate sobre la Carta Olímpica" },
                { subject: "Matemática (1º/2º)", description: "Cálculo de porcentajes y promedios en tablas de medallero" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Indumentaria. Creación de un noticiero ficticio en sepia sobre Atenas 1896, con alumnos vistiendo reproducciones de los atuendos de la época.",
          institutionalProposal: "'Feria de Naciones Olímpica': Los alumnos invitan a escuelas primarias a recorrer stands donde se muestra la relación entre los logros deportivos de un país y su PBI, inversión estatal y derechos sociales.",
          subjects: ["Historia", "Geografía", "Inglés", "Matemática", "Sociología", "Sociedad y Estado", "Audiovisual", "Diseño de Indumentaria", "Introducción a las Ciencias Sociales y las Humanidades"],
          resources: [
            { title: "Documental: Olimpiada (Leni Riefenstahl, 1938)", type: "audiovisual", url: "https://www.youtube.com/watch?v=frVw5XQMCb0" },
            { title: "Video: La historia de los Juegos Olímpicos modernos (TED-Ed)", type: "audiovisual", url: "https://www.youtube.com/watch?v=VdHHus8IgYA" },
            { title: "Los Juegos Olímpicos modernos - Mandell, R.", type: "bibliografia", url: "https://www.dropbox.com/s/52opgzr3mobv93a/Mandell%20c10.pdf?dl=0" },
            { title: "Juegos de Poder. Historia política de los Juegos Olímpicos - Boykoff, J.", type: "bibliografia", url: "https://perio.unlp.edu.ar/catedras/jjoo/bibliografia/" },
            { title: "La invención de la tradición - Hobsbawm, E. y Ranger, T.", type: "bibliografia", url: "https://archive.org/details/theinventionoftradition0000unse" }
          ]
        },
        {
          id: "1.1.3",
          title: "Juegos y prácticas lúdicas de los pueblos originarios",
          description: "El palin (chueca) mapuche como ritual de resolución de conflictos intercomunitarios; el juego de pelota mesoamericano (ullamaliztli) y su dimensión cosmogónica. Discusión sobre el sesgo colonial en la categorización de lo lúdico y lo competitivo.",
          criticalTriggers: [
            "¿Quién detenta el poder de definir qué es y qué no es un 'deporte' en la educación actual?",
            "¿En qué difiere la concepción de 'victoria' capitalista del concepto de resolución de conflictos a través del palin mapuche?",
            "¿Por qué la invisibilización escolar de estas prácticas es considerada un acto de violencia epistémica y colonial en Argentina?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Juegos y prácticas lúdicas de los pueblos originarios",
              foci: [
                { subject: "Historia (2º)", description: "Dimensión cosmogónica de las culturas precolombinas" },
                { subject: "Educación Física (1º a 3º)", description: "Adaptación y práctica del palin en la escuela" },
                { subject: "Geografía (2º)", description: "Territorios originarios en disputa actual" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Juegos y prácticas lúdicas de los pueblos originarios",
              foci: [
                { subject: "Antropología (4º)", description: "Etnocentrismo y el abordaje de los ritos lúdicos" },
                { subject: "Historia de la Cultura Latinoamericana (5º)", description: "Supervivencia de tradiciones originarias" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Música + Visuales. Construcción comunitaria de instrumentos de percusión y bastones de palin decorados con iconografía investigada.",
          institutionalProposal: "Encuentro con referentes urbanos de la comunidad mapuche en Buenos Aires para realizar una clínica de palin y un conversatorio sobre el derecho a la tierra.",
          subjects: ["Historia", "Educación Física", "Geografía", "Antropología", "Música", "Artes Visuales", "Introducción a las Ciencias Sociales y las Humanidades"],
          resources: [
            { title: "Documental: Lorena, la de pies ligeros (Netflix)", type: "audiovisual", url: "https://www.netflix.com/title/81002270" },
            { title: "Video: El juego de pelota mesoamericano (Museo Nacional de Antropología de México)", type: "audiovisual", url: "https://www.youtube.com/watch?v=1I2viOYsHF0&pp=ygVUVmlkZW86IEVsIGp1ZWdvIGRlIHBlbG90YSBtZXNvYW1lcmljYW5vIChNdXNlbyBOYWNpb25hbCBkZSBBbnRyb3BvbG9nw61hIGRlIE3DqXhpY28p" },
            { title: "Nuestros paisanos los indios - Martínez Sarasola, C.", type: "bibliografia", url: "https://archive.org/details/nuestrospaisanos0000mart" }
          ]
        },
        {
          id: "1.1.4",
          title: "Juegos medievales y populares europeos",
          description: "Del torneo caballeresco a los juegos de aldea (soule, calcio storico). La regulación de la violencia como proceso de larga duración (Norbert Elias). El origen del cricket y las public schools británicas como laboratorios del deporte moderno.",
          criticalTriggers: [
            "¿Cómo evidencian las justas medievales frente al brutal juego de 'soule' la profunda brecha de clases en el acceso al ocio?",
            "¿Fue la reglamentación estricta de las 'public schools' británicas un acto civilizatorio o un mecanismo de domesticación obrera?",
            "¿Existen hoy en nuestra ciudad deportes con barreras de acceso tan marcadas como los torneos feudales?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Juegos medievales y populares europeos",
              foci: [
                { subject: "Historia (2º)", description: "La sociedad feudal: caballeros, torneos y cultura de la guerra" },
                { subject: "Educación Física (1º a 3º)", description: "El paso del caos a la norma" },
                { subject: "Lengua (1º/2º)", description: "Los relatos épicos de caballería" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Juegos medievales y populares europeos",
              foci: [
                { subject: "Sociología (4º)", description: "El monopolio de la violencia legítima (Weber) y el 'proceso de la civilización' (Elias)" },
                { subject: "Psicología (4º)", description: "La canalización de la agresividad" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Historieta + Indumentaria. Creación de un fanzine ilustrado que compare la armadura de un caballero medieval con el uniforme de un jugador de rugby.",
          institutionalProposal: "Festival de 'Juegos Desconectados y Populares' en la plaza del barrio coordinado por los alumnos de 3º año para niños de primaria.",
          subjects: ["Historia", "Educación Física", "Lengua y Literatura", "Sociología", "Psicología", "Historieta", "Diseño de Indumentaria", "EDI Diseño Gráfico"],
          resources: [
            { title: "Serie: The English Game (Netflix)", type: "audiovisual", url: "https://www.netflix.com/title/80244928" },
            { title: "Video: Calcio Storico: the most brutal sport in the world", type: "audiovisual", url: "https://www.youtube.com/watch?v=utzwIsH2s28" },
            { title: "Deporte y ocio en el proceso de la civilización - Elias, N. y Dunning, E.", type: "bibliografia", url: "https://archive.org/details/sportleisureinpr0000elia" }
          ]
        },
        {
          id: "1.1.5",
          title: "La llegada del deporte a la Argentina: los británicos y el ferrocarril",
          description: "Cómo las comunidades ferroviarias y portuarias británicas introdujeron fútbol, rugby, cricket, polo y tenis a fines del siglo XIX. El proceso de 'criollización' del fútbol: cuándo y cómo las clases populares se apropiaron de un juego de elite.",
          criticalTriggers: [
            "¿Cómo las vías del tren terminaron siendo la red que sembró la sociabilidad deportiva en el conurbano y CABA?",
            "¿Es 'la nuestra' (la gambeta, el juego improvisado del potrero) una expresión política de rebeldía frente a la estricta disciplina laboral inglesa?",
            "¿En qué momento histórico y por qué razones el fútbol deja de hablarse en inglés y comienza a hablarse en 'lunfardo'?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "La llegada del deporte a la Argentina: los británicos y el ferrocarril",
              foci: [
                { subject: "Geografía (3º)", description: "Superposición de mapas del trazado ferroviario con la ubicación de los clubes" },
                { subject: "Historia (3º)", description: "Modelo agroexportador y conventillos" },
                { subject: "Inglés (1º/2º)", description: "Etimología de la terminología futbolística" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "La llegada del deporte a la Argentina: los británicos y el ferrocarril",
              foci: [
                { subject: "Historia Orientada de las Ideas (5º)", description: "La construcción del 'ser nacional' en la década del 20" },
                { subject: "Sociología (4º)", description: "Procesos de apropiación e hibridación cultural" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Historieta. Investigación y producción de un cortometraje o cómic sobre los orígenes del club más representativo de la comuna.",
          institutionalProposal: "Visita guiada al 'Club Ferrocarril Oeste' o similar, realizando un relevamiento arquitectónico e histórico en la zona de influencia de la antigua traza ferroviaria.",
          subjects: ["Historia", "Geografía", "Inglés", "Sociología", "Audiovisual", "Historieta", "Taller de Expresión Oral y Escrita", "Introducción a las Ciencias Sociales y las Humanidades"],
          resources: [
            { title: "Documental: La historia del fútbol argentino (Canal Encuentro)", type: "audiovisual", url: "https://www.youtube.com/playlist?list=PL_83y24_X_X_X" },
            { title: "Historia social del fútbol - Julio Frydenberg", type: "bibliografia", url: "https://biblio.flacsoandes.edu.ec/libros/digital/56611.pdf" },
            { title: "Fútbol y Patria - Pablo Alabarces", type: "bibliografia", url: "https://perio.unlp.edu.ar/catedras/jjoo/bibliografia/" }
          ]
        },
        {
          id: "1.1.6",
          title: "Mundiales de Fútbol Icónicos",
          description: "Análisis de los mundiales como hitos políticos y sociales. Desde Uruguay 1930 hasta la actualidad. Profesionalización, televisación y fenómeno global.",
          criticalTriggers: [
            "¿Es el Mundial de fútbol una 'guerra sin balas' que exacerba el nacionalismo en tiempos de globalización económica?",
            "¿Cómo el salto hacia la televisación satelital transformó el juego en una industria corporativa, alterando al jugador de sujeto a 'producto'?",
            "A la luz de eventos como Qatar 2022, ¿hasta qué punto se pueden separar las violaciones de Derechos Humanos de la celebración deportiva global?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Mundiales de Fútbol Icónicos",
              foci: [
                { subject: "Formación Ética y Ciudadana (3º)", description: "Símbolos patrios y el uso del evento masivo para unificar poblaciones" },
                { subject: "Matemática (1º a 3º)", description: "Estadística deportiva: análisis de crecimiento de ganancias por derechos de TV" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Mundiales de Fútbol Icónicos",
              foci: [
                { subject: "EDI Documental (4º/5º)", description: "La transmisión televisiva y la construcción del relato hegemónico" },
                { subject: "Sociedad y Estado (5º)", description: "Casos de uso político directo: Mussolini (1934) y la Dictadura Militar (1978)" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Música. Deconstrucción y rediseño del afiche oficial y el 'jingle' de un Mundial controvertido, incorporando las realidades sociales ocultas.",
          institutionalProposal: "Mesa panel en la escuela: 'La cara oculta del Mundial', invitando a periodistas deportivos con perspectiva de Derechos Humanos.",
          subjects: ["Historia", "Formación Ética y Ciudadana", "Matemática", "Sociedad y Estado", "Artes Visuales", "Música", "EDI Documental"],
          resources: [
            { title: "Documental: 25 millones de argentinos jugando al Mundial", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" },
            { title: "Documental: Mundialito (Sebastián Kohan Esquenazi)", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" },
            { title: "El Mundial 78. Fútbol, Terror y Resistencias - Gómez, A.", type: "bibliografia", url: "https://que.fcc.unc.edu.ar/memoria-y-dictadura-el-mundial-78-futbol-terror-y-resistencias/" },
            { title: "Cuando el fascismo metía goles y ganaba mundiales - Toledo, M.", type: "bibliografia", url: "https://www.lasexta.com/ahoraqueleo/virales/cuando-el-fascismo-metia-goles-y-ganaba-mundiales_202008205f4044a3c1db1a0001817aed.html" },
            { title: "El fútbol a sol y sombra - Eduardo Galeano", type: "bibliografia", url: "https://archive.org/details/elfutbolasolyson0000gale" }
          ]
        }
      ]
    },
    {
      id: "1.2",
      title: "Identidades y Clubes",
      themes: [
        {
          id: "1.2.1",
          title: "Historia de los Clubes de Fútbol",
          description: "El club como 'la patria chica'. Origen social en Argentina vinculado a las nacionalidades (inmigración británica, italiana, española) y el arraigo en las clases trabajadoras. El rol del ferrocarril y las fábricas en la fundación de los clubes porteños.",
          criticalTriggers: [
            "¿Por qué en Argentina el club de barrio y primera división se configuró como 'Asociación Civil sin fines de lucro'?",
            "¿Qué función de alfabetización, sanidad y contención obrera tuvieron los clubes en las primeras décadas del S.XX que el Estado no proveía?",
            "¿Cómo sobrevive 'la patria chica' ante el éxodo de recursos y la especulación inmobiliaria en CABA?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Historia de los Clubes de Fútbol",
              foci: [
                { subject: "Geografía (3º año)", description: "Cartografía urbana y el club como referencia barrial" },
                { subject: "Educación Tecnológica (2º año)", description: "Infraestructura y tecnología en los clubes de barrio" },
                { subject: "Historia (3º año)", description: "El club, la fábrica y el sindicato como ejes de socialización obrera (1880-1912)" },
                { subject: "Formación Ética y Ciudadana (2º/3º)", description: "¿Qué es el Estatuto de un club? Análisis de la asamblea de socios" },
                { subject: "Taller de expresión oral y escrita (1º/2º)", description: "Crónicas sobre el club del barrio" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Historia de los Clubes de Fútbol",
              foci: [
                { subject: "Sociología (4º)", description: "El club, la fábrica y el sindicato como ejes de socialización obrera" },
                { subject: "Sociedad y Estado (5º)", description: "El rol subsidiario del Estado moderno" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Historieta. Proyecto 'Archivo Memoria del Club': creación de micro-documentales y novelas gráficas recabando historias orales del bufet del club.",
          institutionalProposal: "Realizar una campaña escolar de recuperación de la biblioteca de un club de barrio local, categorizando e inventariando libros comunitarios.",
          subjects: ["Historia", "Geografía", "Lengua y Literatura", "Formación Ética y Ciudadana", "Matemática", "Sociología", "Sociedad y Estado", "Audiovisual", "Historieta"],
          resources: [
            { title: "Luna de Avellaneda (Película)", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" },
            { title: "Los clubes en la Ciudad de Buenos Aires (1932-1945) - Rodrigo Daskal", type: "bibliografia", url: "https://www.bn.gov.ar/micrositios/libros/historia/los-clubes-en-la-ciudad-de-buenos-aires-1932-1945" },
            { title: "Breve historia del deporte argentino - Alabarces, P.", type: "bibliografia", url: "https://perio.unlp.edu.ar/catedras/jjoo/bibliografia/" },
            { title: "La cancha peronista - Raanan Rein", type: "bibliografia", url: "https://archive.org/details/lacanchaperonist0000rein" }
          ]
        },
        {
          id: "1.2.2",
          title: "Construcción de Identidad y 'El Aguante'",
          description: "El concepto sociológico de 'el aguante' como capital simbólico de las hinchadas argentinas. Análisis de cómo la fidelidad al club se convierte en una identidad primaria que organiza la vida del individuo.",
          criticalTriggers: [
            "¿Cómo el discurso del 'aguante' legitima violencias físicas y simbólicas escondiéndolas bajo la etiqueta del 'amor y pasión'?",
            "¿Por qué la identidad del hincha logra borrar temporalmente las diferencias socioeconómicas en la tribuna pero las cristaliza fuera de ella?",
            "¿Cuál es la relación real entre la estructura delictiva/económica de las 'barras bravas' y la dirigencia política en CABA?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Construcción de Identidad y 'El Aguante'",
              foci: [
                { subject: "Formación Ética y Ciudadana (3º)", description: "Identidad y normas de convivencia" },
                { subject: "Lengua y Literatura (3º)", description: "Semántica y sintaxis de la violencia en el cancionero de tribuna" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Construcción de Identidad y 'El Aguante'",
              foci: [
                { subject: "Sociología (4º)", description: "'El aguante' teorizado como capital simbólico y resistencia masculina popular" },
                { subject: "Psicología (4º)", description: "Dinámicas de masa y pertenencia grupal" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Música + Teatro. Taller de percusión murguera para 'reescribir la tribuna', componiendo nuevas líricas rítmicas que destierren la violencia.",
          institutionalProposal: "Conversatorio con socios/as, hinchas, periodistas y referentes de convivencia en el deporte (ej. ONG 'Salvemos al Fútbol').",
          subjects: ["Formación Ética y Ciudadana", "Lengua y Literatura", "Historia", "Sociología", "Psicología", "Música", "Teatro"],
          resources: [
            { title: "Videos de tribunas argentinas y latinoamericanas", type: "audiovisual", url: "https://www.youtube.com/results?search_query=hinchadas+argentinas+documental" },
            { title: "Aguante, generosidad y política en una hinchada de fútbol argentina - Moreira, M. V.", type: "bibliografia", url: "https://www.scielo.org.ar/scielo.php?pid=S1851-16942008000100005&script=sci_abstract" },
            { title: "El aguante: prácticas violentas e identidades de género masculino - Garriga Zucal, J.", type: "bibliografia", url: "https://dialnet.unirioja.es/descarga/articulo/3744746.pdf" },
            { title: "Crónicas del aguante - Pablo Alabarces", type: "bibliografia", url: "https://archive.org/details/cronicasdelaguan0000alab" },
            { title: "Peligro de gol - José Garriga Zucal", type: "bibliografia", url: "https://archive.org/details/peligrodegol0000garr" }
          ]
        },
        {
          id: "1.2.3",
          title: "Inclusión/Exclusión y Xenofobia",
          description: "Análisis crítico de los cánticos de las hinchadas. Cómo la música de estadio actúa como un reproductor de prejuicios estructurales (racismo, homofobia, misoginia y xenofobia hacia países limítrofes).",
          criticalTriggers: [
            "¿Por qué el folclore del fútbol argentino ha naturalizado agravios racistas y xenófobos como forma 'válida' de descalificar al adversario?",
            "¿Qué mecanismos legales, culturales y educativos faltan para erradicar la discriminación de nuestro entorno deportivo?",
            "¿Cómo se relacionan las movilizaciones de los hinchas organizados con la lucha contra la gentrificación y especulación inmobiliaria?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Inclusión/Exclusión y Xenofobia",
              foci: [
                { subject: "Geografía (1º/2º)", description: "Inmigración regional y discriminación" },
                { subject: "Formación Ética (3º)", description: "Marco normativo de DDHH, INADI y la Ley Antidiscriminación deportiva" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Inclusión/Exclusión y Xenofobia",
              foci: [
                { subject: "Antropología (4º)", description: "Estigmatización, otredad y 'racismo estructural' en Argentina" },
                { subject: "Geografía (5º)", description: "La ciudad neoliberal vs. la identidad patrimonial de los clubes" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Audiovisual. Producción de una campaña gráfica y audiovisual para redes sociales ('El verdadero aguante es el respeto').",
          institutionalProposal: "Presentación de las campañas antidiscriminación creadas por los alumnos en clubes o asociaciones barriales cercanas.",
          subjects: ["Geografía", "Formación Ética y Ciudadana", "Historia", "Antropología", "Artes Visuales", "Audiovisual"],
          resources: [
            { title: "La construcción del otro en el fútbol - Bundio, J. S.", type: "bibliografia", url: "https://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S1850-275X2018000100012" },
            { title: "Lucha contra el racismo - FIFA", type: "bibliografia", url: "https://inside.fifa.com/es/campaigns/no-discrimination/no-racism" },
            { title: "Informes del Observatorio de Discriminación en el Deporte (INADI/UBA)", type: "bibliografia", url: "https://www.argentina.gob.ar/inadi/observatorios/deporte" },
            { title: "Textos sobre violencia simbólica - Segato, R.", type: "bibliografia", url: "https://archive.org/details/segato-rita-la-guerra-contra-las-mujeres" }
          ]
        },
        {
          id: "1.2.4",
          title: "Comunidades migrantes y deporte en la Buenos Aires contemporánea",
          description: "Los campeonatos de fútbol de la comunidad boliviana; los torneos de vóley de la comunidad peruana; los partidos de cricket de la comunidad india y paquistaní. El deporte como estrategia de cohesión comunitaria y negociación de ciudadanía.",
          criticalTriggers: [
            "¿Es el torneo de barrio un espacio que encierra a las comunidades ('gueto') o un instrumento político para visibilizarse?",
            "¿Por qué la ocupación del espacio público (plazas, parques) los fines de semana genera tensiones xenófobas en vecinos de ciertos barrios?",
            "Frente a la hegemonía del fútbol, ¿cómo la práctica del cricket o el béisbol actúa como 'resistencia de la memoria'?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Comunidades migrantes y deporte en la Buenos Aires contemporánea",
              foci: [
                { subject: "Geografía (2º)", description: "Cartografía de los espacios verdes y ocupaciones migrantes en las Comunas del Sur" },
                { subject: "EDI Comunicación (1º/2º)", description: "Crónicas periodísticas visibilizando los deportes 'ocultos'" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Comunidades migrantes y deporte en la Buenos Aires contemporánea",
              foci: [
                { subject: "Sociología (4º)", description: "Migraciones transnacionales, asimilación vs. multiculturalismo" },
                { subject: "Sociedad y Estado (5º)", description: "Ejercicio de 'ciudadanía sustantiva'" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Cocina + Huerta. Taller sobre soberanía alimentaria y platos típicos que se comercializan en las márgenes de estos torneos.",
          institutionalProposal: "Coordinar un mini torneo de deportes alternativos (vóley, futsal, cricket) en alianza con asociaciones culturales de migrantes.",
          subjects: ["Geografía", "Historia", "Lengua y Literatura", "Inglés", "Sociología", "Sociedad y Estado", "Cocina", "Huerta"],
          resources: [
            { title: "Documentales breves sobre los campeonatos de la colectividad boliviana (Canal Encuentro)", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" },
            { title: "El fútbol de los bolivianos en Buenos Aires - Verónica Moreira", type: "bibliografia", url: "https://www.conicet.gov.ar/new_scp/detalle.php?id=21464&datos_academicos=yes" }
          ]
        },
        {
          id: "1.2.5",
          title: "Deporte y religiosidad popular",
          description: "La sacralización del fútbol y la 'Iglesia Maradoniana', las vírgenes y santos patronos de los clubes, las cábalas como sistema de creencias. Análisis antropológico del estadio como 'El templo' y del partido como 'liturgia'.",
          criticalTriggers: [
            "¿Por qué en un mundo dominado por la hipertecnología y los datos, el jugador y el hincha siguen aferrados a un pensamiento mágico-religioso?",
            "¿Cómo se construye el mito pagano alrededor de la figura de Maradona en contraposición a las figuras sagradas institucionales?",
            "¿Cuáles son las similitudes simbólicas entre la misa de domingo y el ritual masivo de acudir al estadio en Buenos Aires?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Deporte y religiosidad popular",
              foci: [
                { subject: "Historia (3º)", description: "El concepto de sincretismo cultural y religioso en América Latina" },
                { subject: "Lengua y Literatura (3º)", description: "Lectura del cuento '19 de diciembre de 1971' de Fontanarrosa" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Deporte y religiosidad popular",
              foci: [
                { subject: "Antropología (4º)", description: "Lo sagrado y lo profano (Mircea Eliade). Ritos, tótems y fetiches en la modernidad secularizada" },
                { subject: "Filosofía (5º)", description: "La necesidad ontológica de trascendencia" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Indumentaria. Creación de 'exvotos' deportivos contemporáneos interviniendo camisetas y botines viejos.",
          institutionalProposal: "Caminata etnográfica al barrio de La Boca o La Paternal para identificar visualmente altares populares que unan lo sagrado y lo deportivo.",
          subjects: ["Historia", "Lengua y Literatura", "Geografía", "Antropología", "Filosofía", "Sociedad y Estado", "Artes Visuales", "Diseño de Indumentaria"],
          resources: [
            { title: "Extractos de la película El camino de San Diego (Carlos Sorín)", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" },
            { title: "Documental: Iglesia Maradoniana", type: "audiovisual", url: "https://www.iglesiamaradoniana.org" },
            { title: "La religión del fútbol - Eduardo Archetti", type: "bibliografia", url: "https://archive.org/details/lareligiondelfut0000arch" }
          ]
        }
      ]
    }
  ]
};

export const axis2: Axis = {
  id: 2,
  title: "Género, Estereotipos y Cuerpos",
  subAxes: [
    {
      id: "2.1",
      title: "Género en la Historia del Deporte",
      themes: [
        {
          id: "2.1.1",
          title: "Primeros deportes femeninos",
          description: "La lucha contra la patologización médica de la mujer deportista a principios del siglo XX. El tránsito del 'tenis para damas' como actividad de elite hacia la profesionalización del fútbol femenino actual. Consecuencias del decreto de prohibición del fútbol femenino y el rol de las pioneras.",
          criticalTriggers: [
            "¿Qué argumentos biologicistas y médicos se utilizaron para alejar a la mujer del espacio público deportivo?",
            "¿Por qué el deporte fue (y en parte sigue siendo) el último gran bastión donde la segregación de sexos es aceptada?",
            "¿Cómo las pioneras del fútbol femenino en Argentina enfrentaron el 'borrado' histórico del Estado y los grandes clubes?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Género y Deporte",
              foci: [
                { subject: "Biología (1º/2º)", description: "Anatomía, mitos fisiológicos sobre el cuerpo femenino y el rol de ESI" },
                { subject: "Historia (3º)", description: "La mujer en la sociedad patriarcal de principios del S.XX" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Género y Deporte",
              foci: [
                { subject: "Historia Orientada de las Ideas (5º)", description: "Feminismos históricos y la ocupación del ocio como derecho" },
                { subject: "Sociología (4º)", description: "División sexual del trabajo y del ocio" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Historieta + Teatro. Creación de la historieta 'Las Invisibles del 71', relatando la gesta del seleccionado femenino en México 1971.",
          institutionalProposal: "Articulación con 'Pioneras del Fútbol Femenino de Argentina' para dar una charla en la escuela sobre la historia de la invisibilización.",
          subjects: ["Biología", "ESI", "Historia", "Educación Física", "Sociología", "Historieta", "Teatro", "Introducción a las Ciencias Sociales y las Humanidades"],
          resources: [
            { title: "Documental: Guerreras (2017)", type: "audiovisual", url: "https://www.programaibermedia.com/proyectos/guerreras/" },
            { title: "Mujer sana 'in corpore no futbolístico' - Scharagrodsky, P. A.", type: "bibliografia", url: "https://dialnet.unirioja.es/descarga/articulo/8722891.pdf" },
            { title: "¡Qué jugadora! - Ayelén Pujol", type: "bibliografia", url: "https://perio.unlp.edu.ar/catedras/jjoo/bibliografia/" }
          ]
        },
        {
          id: "2.1.2",
          title: "Actividades 'Pensar el Presente': Brecha de Género",
          description: "Análisis de la brecha de género en la cobertura mediática del deporte. Comparación de los minutos de aire y la calidad de las crónicas entre deportistas varones y mujeres, y la sexualización de la atleta.",
          criticalTriggers: [
            "¿Por qué la mujer deportista es juzgada mediáticamente por su belleza o maternidad, mientras que el varón es medido por su rendimiento?",
            "¿De qué forma la asignación de 'horarios marginales' perpetúa la precarización económica del deporte femenino?",
            "¿Cómo influye esta asimetría mediática en la decisión de las adolescentes de abandonar las prácticas deportivas?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Actividades 'Pensar el Presente': Brecha de Género",
              foci: [
                { subject: "Matemática (1º a 3º)", description: "Recolección de datos empíricos sobre tiempo en pantalla" },
                { subject: "EDI Comunicación (1º/2º)", description: "Crítica y análisis de titulares periodísticos" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Actividades 'Pensar el Presente': Brecha de Género",
              foci: [
                { subject: "EDI Documental/Radio (4º/5º)", description: "Creación de un noticiero deportivo paródico que invierta los roles" },
                { subject: "Psicología (4º)", description: "El impacto de la mirada hegemónica (male gaze)" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Audiovisual. Taller de contra-publicidad: recortes de tapas de revistas deportivas históricas interviniendo los textos machistas.",
          institutionalProposal: "Presentar el informe estadístico elaborado en Matemática a periodistas de radios barriales, proponiendo columnas de deporte femenino.",
          subjects: ["Matemática", "Comunicación", "Psicología", "Artes Visuales", "Audiovisual", "EDI Radio"],
          resources: [
            { title: "Media Coverage and Female Athletes - Mary Jo Kane (TEDx)", type: "audiovisual", url: "https://www.youtube.com/watch?v=y_z9W_X_X_X" },
            { title: "La brecha de género en el deporte - Sauleda Martínez, L. A.", type: "bibliografia", url: "https://www.redalyc.org/journal/180/18066677005/html/" },
            { title: "Informes globales sobre género en medios deportivos (UNESCO)", type: "bibliografia", url: "https://unesdoc.unesco.org/ark:/48223/pf0000261431_spa" }
          ]
        },
        {
          id: "2.1.3",
          title: "La profesionalización del fútbol femenino en Argentina",
          description: "Análisis del convenio colectivo de trabajo firmado en 2019. Comparación salarial con el fútbol masculino y el rol de la visibilidad mediática en la expansión de la base de jugadoras.",
          criticalTriggers: [
            "Si un contrato profesional apenas cubre el salario mínimo, ¿podemos hablar de una profesionalización real o solo de una formalización precaria?",
            "¿Por qué los clubes utilizan el argumento de que 'el fútbol femenino no vende' para no invertir en inferiores?",
            "¿Es el deporte un trabajo que debe regirse por los mismos derechos sindicales que una fábrica?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "La profesionalización del fútbol femenino en Argentina",
              foci: [
                { subject: "Economía Política (3º)", description: "Salario, mercado e ingresos brutos" },
                { subject: "Formación Ética y Ciudadana (3º)", description: "Derechos del Trabajador (Art. 14 bis)" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "La profesionalización del fútbol femenino en Argentina",
              foci: [
                { subject: "Sociedad y Estado (5º)", description: "El sindicalismo deportivo" },
                { subject: "Geografía (5º)", description: "El acceso desigual a las infraestructuras de entrenamiento" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Historieta. Confeccionar una 'infografía ilustrada gigante' que compare la trayectoria vital de una jugadora vs. un jugador promedio.",
          institutionalProposal: "Visita al predio de entrenamiento de un equipo femenino de primera división o ascenso cercano para entrevistar a las jugadoras.",
          subjects: ["Economía Política", "Formación Ética y Ciudadana", "Sociedad y Estado", "Geografía", "Audiovisual", "Historieta"],
          resources: [
            { title: "Documental: Las Leonas del fútbol (Deportv)", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" },
            { title: "Informe 'Situación del fútbol femenino en la Argentina' (Deportea/CELS)", type: "bibliografia", url: "https://www.cels.org.ar/web/publicaciones/situacion-del-futbol-femenino-en-la-argentina/" }
          ]
        },
        {
          id: "2.1.4",
          title: "Personas trans y no binarias en el deporte",
          description: "Las políticas del COI sobre la participación de atletas transgénero. Tensión entre la inclusión, la justicia competitiva y los derechos humanos. El deporte como uno de los últimos bastiones de la categorización binaria.",
          criticalTriggers: [
            "¿El deporte de élite debe priorizar la 'justicia biológica' o el derecho humano fundamental a la identidad de género?",
            "¿Por qué las variaciones naturales en los niveles de testosterona en mujeres son penalizadas y medicadas?",
            "¿Cómo resuelve la escuela la inclusión de estudiantes trans en las clases de Educación Física divididas por género?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Personas trans y no binarias en el deporte",
              foci: [
                { subject: "Biología (1º/2º) y ESI", description: "El sistema endocrino" },
                { subject: "Formación Ética (2º/3º)", description: "Ley de Identidad de Género (Ley 26.743) en Argentina" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Personas trans y no binarias en el deporte",
              foci: [
                { subject: "Filosofía (5º)", description: "Deconstrucción del binarismo biológico y cultural" },
                { subject: "Antropología (4º)", description: "El cuerpo como territorio político" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro + Indumentaria. Debate teatralizado tipo 'Juicio Ético' ante un 'Tribunal de Arbitraje Deportivo'. Diseño de pecheras que borren el binarismo.",
          institutionalProposal: "Organizar un seminario intrainstitucional vinculando al equipo ESI con docentes de Educación Física para formular un nuevo 'Acuerdo de Convivencia'.",
          subjects: ["Biología", "ESI", "Formación Ética y Ciudadana", "Filosofía", "Antropología", "Teatro", "Diseño de Indumentaria"],
          resources: [
            { title: "Cortometraje: Mala (2018)", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" },
            { title: "Testo yonqui - Paul B. Preciado", type: "bibliografia", url: "https://archive.org/details/preciado-paul-b-testo-yonqui" },
            { title: "Sporting Gender - Joanna Harper", type: "bibliografia", url: "https://archive.org/details/sportinggender0000harp" }
          ]
        },
        {
          id: "2.1.5",
          title: "'Verification tests' y control del cuerpo femenino",
          description: "Historia de los 'test de feminidad' en los Juegos Olímpicos. La ciencia utilizada como herramienta de vigilancia del cuerpo de las mujeres. Discusión sobre quién define los límites de 'lo femenino'.",
          criticalTriggers: [
            "¿Por qué nunca en la historia de los JJ.OO. se ha instituido un test para verificar la 'masculinidad' de los competidores varones?",
            "¿Cómo la ciencia y la medicina deportiva actuaron como 'policía de género' durante la Guerra Fría?",
            "¿Puede una prueba cromosómica o de laboratorio definir de manera absoluta y universal 'qué es ser mujer'?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "'Verification tests' y control del cuerpo femenino",
              foci: [
                { subject: "Biología (1º/2º)", description: "Genética (XX y XY) y sus excepciones" },
                { subject: "Historia (5º)", description: "Contexto de la Guerra Fría y la obsesión por 'desenmascarar' atletas" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "'Verification tests' y control del cuerpo femenino",
              foci: [
                { subject: "Química (5º)", description: "Métodos de análisis hormonal" },
                { subject: "Sociología (4º) / Filosofía (5º)", description: "El biopoder (Foucault) y la disciplina de los cuerpos" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Audiovisual. Muestra fotográfica intervenida que tape la vigilancia médica de archivos históricos y proyecte preguntas sobre autonomía.",
          institutionalProposal: "Panel interdisciplinario donde docentes de Biología y Construcción de Ciudadanía expongan cómo la ciencia carga con sesgos patriarcales.",
          subjects: ["Biología", "Historia", "Química", "Fisico-Química", "Sociología", "Filosofía", "Artes Visuales", "Audiovisual"],
          resources: [
            { title: "Documental: Too Fast to Be a Woman? The Story of Caster Semenya (BBC)", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" },
            { title: "Testing Sex and Gender in Sports - Vanessa Heggie", type: "bibliografia", url: "https://archive.org/details/testingsport0000hegg" }
          ]
        },
        {
          id: "2.1.6",
          title: "Homofobia en el deporte profesional",
          description: "El 'armario' en el fútbol masculino y la persistencia del tabú. El lenguaje homofóbico en la cancha como regulador de la masculinidad hegemónica. Contraste con deportes individuales.",
          criticalTriggers: [
            "¿Por qué el fútbol profesional masculino es uno de los espacios más resistentes a la disidencia sexual?",
            "¿Cómo funcionan las duchas, el vestuario y las 'bromas de grupo' como mecanismos disciplinadores (panóptico)?",
            "¿Por qué las jugadoras de fútbol femenino tienen índices más altos de visibilidad de su orientación sexual que los varones?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Homofobia en el deporte profesional",
              foci: [
                { subject: "Formación Ética y Ciudadana (1º a 3º)", description: "Derecho a la intimidad" },
                { subject: "Taller de expresión oral y escrita (1º/2º)", description: "Análisis y resignificación de insultos" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Homofobia en el deporte profesional",
              foci: [
                { subject: "Psicología (4º)", description: "Consecuencias del ocultamiento crónico" },
                { subject: "Sociología (4º)", description: "La cofradía masculina y la exclusión del 'otro' feminizado" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro + Historieta. Dramatización del 'Vestuario': obra corta basada en silencios, gestos y tensiones, seguida del diseño de viñetas.",
          institutionalProposal: "Organizar un partido o entrenamiento simbólico junto a organizaciones como los 'Dogos' (club de fútbol pionero de diversidad sexual).",
          subjects: ["Formación Ética y Ciudadana", "Taller de Expresión Oral y Escrita", "Psicología", "Sociología", "Teatro", "Historieta"],
          resources: [
            { title: "Documental: Forbidden Games: The Justin Fashanu Story", type: "audiovisual", url: "https://www.netflix.com/title/80186731" },
            { title: "Campaña internacional Football vs Homophobia", type: "audiovisual", url: "https://www.footballvhomophobia.com/" },
            { title: "Masculinidades - R. W. Connell", type: "bibliografia", url: "https://archive.org/details/masculinities0000conn" }
          ]
        },
        {
          id: "2.1.7",
          title: "Indumentaria deportiva, género y cuerpo",
          description: "Análisis de los reglamentos de vestimenta del COI y las federaciones como dispositivos de género. El caso de la selección noruega de handball playa multada por usar pantalones cortos.",
          criticalTriggers: [
            "¿Es la reglamentación que obliga a las mujeres a usar ropa ajustada una estrategia de 'aerodinámica' o un dispositivo para vender sus cuerpos?",
            "¿Qué ocurre con aquellas deportistas cuya cultura o religión entra en conflicto con las normas occidentales de indumentaria?",
            "¿Cómo impacta el talle único o la ropa 'entallada' escolar sobre estudiantes con disconformidad con sus cuerpos?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Indumentaria deportiva, género y cuerpo",
              foci: [
                { subject: "Educación Tecnológica (1º a 3º)", description: "Materiales, ergonomía y funcionalidad" },
                { subject: "Geografía (3º)", description: "Diferencias culturales en la ropa deportiva" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Indumentaria deportiva, género y cuerpo",
              foci: [
                { subject: "Sociología (4º)", description: "El cuerpo mercantilizado y objetivado" },
                { subject: "EDI Diseño gráfico (4º/5º)", description: "Análisis publicitario de marcas deportivas" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Indumentaria + Artes Visuales. Los alumnos rediseñan y confeccionan bocetos de una indumentaria funcional, no sexualizada e igualitaria.",
          institutionalProposal: "Presentar una propuesta fundamentada de modificación del 'Uniforme Escolar en Educación Física' para garantizar inclusión y comodidad.",
          subjects: ["Educación Tecnológica", "Geografía", "Sociología", "Diseño Gráfico", "Indumentaria", "Artes Visuales", "Fisico-Química"],
          resources: [
            { title: "Campaña Adidas: Beyond the Surface", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" },
            { title: "El cuerpo y la moda: una visión sociológica - Joanne Entwistle", type: "bibliografia", url: "https://archive.org/details/bodyfashion0000entw" },
            { title: "Throwing Like a Girl - Iris Marion Young", type: "bibliografia", url: "https://archive.org/details/throwinglikegirl0000youn" }
          ]
        }
      ]
    },
    {
      id: "2.2",
      title: "Masculinidades y Violencia",
      themes: [
        {
          id: "2.2.1",
          title: "El Deporte como Enclave Civilizatorio",
          description: "Según la teoría de Elias y Dunning, el deporte moderno es un proceso de 'des-rutinización' controlada. Es un simulacro de combate con reglas estrictas diseñado para canalizar la agresividad.",
          criticalTriggers: [
            "Si el deporte es una 'válvula de escape' para la violencia, ¿por qué en Argentina frecuentemente esa violencia desborda las reglas?",
            "¿Aceptamos niveles de violencia verbal y física en la cancha que en la calle serían considerados un delito?",
            "¿Este 'simulacro de combate' prepara y moldea exclusivamente la agresividad del varón y aleja a las mujeres?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "El Deporte como Enclave Civilizatorio",
              foci: [
                { subject: "Formación Ética y Ciudadana (2º)", description: "El contrato social y la regla deportiva como símil de la Ley civil" },
                { subject: "Historia (2º)", description: "El paso de las sociedades de castigo a las disciplinarias" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "El Deporte como Enclave Civilizatorio",
              foci: [
                { subject: "Sociología (4º)", description: "El control de los afectos y las emociones en el estado moderno" },
                { subject: "Psicología (4º)", description: "La agresividad humana vs la violencia cultural" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro + Historieta. Ejercicios de teatro corporal o novela gráfica que ilustren el pasaje de una pelea callejera a un combate deportivo reglado.",
          institutionalProposal: "Clínicas de boxeo sin contacto o artes marciales en la escuela orientadas al trabajo del autocontrol y canalización del estrés.",
          subjects: ["Formación Ética y Ciudadana", "Historia", "Sociología", "Psicología", "Teatro", "Historieta"],
          resources: [
            { title: "Extractos y escenas del boxeo/UFC vs esgrima", type: "audiovisual", url: "https://www.youtube.com/results?search_query=boxing+vs+fencing+philosophy" },
            { title: "Deporte y ocio en el proceso de la civilización - Elias, N. y Dunning, E.", type: "bibliografia", url: "https://economiadelaviolencia.iiec.unam.mx/node/256" }
          ]
        },
        {
          id: "2.2.2",
          title: "Rugby y Sectores Hegemónicos",
          description: "Estudio de caso sobre el rugby en La Plata y Buenos Aires. El deporte como mecanismo de reproducción de clase, donde el cuerpo del rugbier simboliza pertenencia a una elite con códigos de honor exclusivos.",
          criticalTriggers: [
            "¿El 'tercer tiempo' y el 'espíritu del rugby' son realmente valores morales superiores o pactos de encubrimiento de una masculinidad patriarcal?",
            "¿Por qué el comportamiento 'en manada' y los ritos de iniciación son tan tolerados dentro de estos estratos sociales?",
            "¿Es posible separar el deporte en sí de la cultura elitista y agresiva que lo dominó históricamente?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Rugby y Sectores Hegemónicos",
              foci: [
                { subject: "Geografía (3º)", description: "Cartografía del poder: localización de los clubes de rugby del Top 12 vs clubes del ascenso" },
                { subject: "Formación Ética (3º)", description: "Pactos de silencio y responsabilidad" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Rugby y Sectores Hegemónicos",
              foci: [
                { subject: "Sociología (4º)", description: "'Habitus' y reproducción de clase (Bourdieu)" },
                { subject: "Psicología (4º)", description: "Conductas grupales y la violencia como rito de validación masculina" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Teatro. Creación de un documental o serie de monólogos teatrales ('Voces del Vestuario') sobre la presión grupal.",
          institutionalProposal: "Encuentro y debate con un equipo de rugby social/barrial y ex-jugadores para discutir la deconstrucción de la masculinidad.",
          subjects: ["Geografía", "Formación Ética y Ciudadana", "Sociología", "Psicología", "Audiovisual", "Teatro"],
          resources: [
            { title: "Documental: El tercer tiempo (Deportv)", type: "audiovisual", url: "https://www.youtube.com/watch?v=4B9fcYj_D34" },
            { title: "Textos de Eduardo Archetti sobre el polo y el rugby", type: "bibliografia", url: "https://archive.org/details/masculinities0000arch" },
            { title: "Artículos sociológicos del caso Gesell", type: "bibliografia", url: "https://www.conicet.gov.ar/el-caso-gesell-y-la-masculinidad-en-el-rugby/" }
          ]
        },
        {
          id: "2.2.3",
          title: "Fútbol y estereotipos de masculinidad",
          description: "El fútbol como rito de pasaje y estereotipos de masculinidad. Análisis de cómo en el patio escolar el 'saber jugar' valida al varón frente a sus pares.",
          criticalTriggers: [
            "En los recreos de las escuelas de CABA, ¿quiénes ocupan la mayor parte del espacio del patio? ¿Es el patio una miniatura de las relaciones de poder?",
            "Cuando un varón no es hábil con la pelota y se lo insulta con términos feminizantes, ¿qué se está diciendo realmente sobre las mujeres?",
            "¿Es posible construir una clase de Educación Física donde el fútbol no sea el deporte 'por defecto'?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Fútbol y estereotipos de masculinidad",
              foci: [
                { subject: "Educación Física (1º/2º)", description: "Observación participante del recreo" },
                { subject: "Formación Ética (1º/2º)", description: "Debate: 'El patio de la escuela: ¿espacio democrático o territorio de los más fuertes?'" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Fútbol y estereotipos de masculinidad",
              foci: [
                { subject: "Sociología (4º)", description: "Análisis del concepto de 'rito de pasaje'" },
                { subject: "Psicología (4º)", description: "Estudio de la presión de pares en la adolescencia" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Historieta + Cocina. Creación de una tira cómica semanal 'Cosas del patio'. Jornada de cocina colaborativa para un 'recreo alternativo'.",
          institutionalProposal: "Diseño e implementación de un 'Proyecto de recreos inclusivos' que garantice la diversidad de actividades y la inclusión.",
          subjects: ["Educación Física", "Formación Ética y Ciudadana", "Lengua y Literatura", "Biología", "Matemática", "Sociología", "Psicología", "Historieta", "Cocina"],
          resources: [
            { title: "Cortometraje: A Man's Game", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" },
            { title: "Video: Educación Física con perspectiva de género (Educ.ar)", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" },
            { title: "El pibe de la gambeta - Pablo Alabarces", type: "bibliografia", url: "https://archive.org/details/elpibedelagambet0000alab" }
          ]
        },
        {
          id: "2.2.4",
          title: "Relaciones Parentales y Presión Social",
          description: "El fenómeno del 'padre-entrenador' en el Baby Fútbol. Se explora la frustración proyectada de los adultos sobre los niños, vistos como inversiones económicas o herramientas de éxito.",
          criticalTriggers: [
            "En un partido de Baby Fútbol, ¿quiénes gritan más: los niños o los adultos? ¿Qué significa que un padre insulte al árbitro o a su propio hijo?",
            "Cuando un padre dice 'mi hijo va a llegar a Primera', ¿está hablando del deseo del niño o del suyo propio?",
            "Si el deporte infantil es un derecho al juego, ¿cómo es posible que las ligas funcionen con la misma lógica de resultados que el profesionalismo?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Relaciones Parentales y Presión Social",
              foci: [
                { subject: "Formación Ética (1º/2º)", description: "Lectura del artículo 31 de la Convención de los Derechos del Niño" },
                { subject: "Biología (1º/2º)", description: "Estudio del desarrollo físico y cognitivo en la infancia" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Relaciones Parentales y Presión Social",
              foci: [
                { subject: "Psicología (4º)", description: "Estudio del concepto de 'narcisismo parental' y 'proyección'" },
                { subject: "Antropología (4º)", description: "El Baby Fútbol como 'institución de socialización'" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Cocina + Música. 'La merienda del entretiempo': diseñar una merienda alternativa saludable. Composición de una canción o rap desde la perspectiva del niño.",
          institutionalProposal: "Articulación con una liga de Baby Fútbol del barrio para organizar una 'Jornada del juego limpio' con talleres para padres.",
          subjects: ["Formación Ética y Ciudadana", "Biología", "Lengua y Literatura", "Matemática", "Comunicación", "Psicología", "Sociología", "Antropología", "Cocina", "Música"],
          resources: [
            { title: "Fragmento de la película 'Infantiles' (México)", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" },
            { title: "Videos virales de violencia de padres en el Baby Fútbol", type: "audiovisual", url: "https://www.youtube.com/results?search_query=violencia+padres+baby+futbol" },
            { title: "Homo Ludens - Johan Huizinga", type: "bibliografia", url: "https://archive.org/details/homoludens00huiz" },
            { title: "La cantera de ilusiones - Revista Anfibia", type: "bibliografia", url: "https://www.revistaanfibia.com/la-cantera-de-ilusiones/" }
          ]
        }
      ]
    }
  ]
};
