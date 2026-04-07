import { Axis } from '../types';

export const axis6: Axis = {
  id: 6,
  title: "Tecnología, Ciencia y Adolescencia",
  subAxes: [
    {
      id: "6.1",
      title: "Subjetividades Digitales",
      themes: [
        {
          id: "6.1.1",
          title: "Cultura Gamer y ESports",
          description: "El debate sobre el sedentarismo vs. la agilidad mental. Análisis de las ligas profesionales de videojuegos y cómo el entrenamiento de un pro-gamer imita la disciplina del deporte tradicional.",
          criticalTriggers: [
            "¿Pueden los eSports ser considerados 'deporte' con el mismo estatus que el fútbol?",
            "En un país con alta desigualdad de acceso a la conectividad, ¿los eSports profundizan la brecha?",
            "¿Qué diferencia a un pro-gamer de un atleta olímpico?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Cultura Gamer y ESports",
              foci: [
                { subject: "Educación Física (1º/2º)", description: "Comparación vivencial entre actividad física y digital" },
                { subject: "Biología (1º/2º)", description: "Sistema nervioso y reflejos" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Cultura Gamer y ESports",
              foci: [
                { subject: "Psicología (4º)", description: "Motivación y flujo (Csikszentmihalyi)" },
                { subject: "Sociología (4º)", description: "Tribus urbanas digitales" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Diseño gráfico. Organizar y stremear un torneo escolar de un ESport (ej. FIFA o Rocket League).",
          institutionalProposal: "Alianza con universidades para charlas sobre profesionalización y salud gamer.",
          subjects: ["Educación Física", "Biología", "Matemática", "Comunicación", "Lengua y Literatura", "Informática", "Inglés", "Psicología", "Sociología", "Física", "Fisico-Química", "Filosofía", "Sociedad y Estado", "Introducción a las Ciencias Sociales y las Humanidades", "EDI Diseño Gráfico"],
          resources: [
            { title: "Documental: Free to Play (Valve)", type: "audiovisual", url: "https://www.youtube.com/watch?v=UjDn-19_X_X" },
            { title: "Raising the Stakes - T.L. Taylor", type: "bibliografia", url: "https://archive.org/details/raisingstakesesp0000tayl" }
          ]
        },
        {
          id: "6.1.2",
          title: "Redes Sociales e Influencers",
          description: "La transformación del atleta en 'marca personal'. El impacto de la vida privada de los deportistas en el consumo de los adolescentes.",
          criticalTriggers: [
            "¿Cuánto de lo que vemos en las redes de un deportista es 'real'?",
            "¿Las redes sociales están democratizando un sueño o fabricando una frustración masiva?",
            "¿Es éticamente aceptable que un deportista promocione casas de apuestas?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Redes Sociales e Influencers",
              foci: [
                { subject: "Lengua (1º/2º)", description: "Análisis del discurso publicitario" },
                { subject: "Formación Ética (1º/2º)", description: "Responsabilidad pública del ídolo" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Redes Sociales e Influencers",
              foci: [
                { subject: "Economía Política (3º/4º)", description: "Economía de la atención" },
                { subject: "Psicología (4º)", description: "Relación parasocial fan-deportista" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro + Historieta. Creación de un 'Museo de las Falsas Expectativas'.",
          institutionalProposal: "Taller de 'Alfabetización Digital y Consumo Crítico' dictado por alumnos de 5º año.",
          subjects: ["Lengua y Literatura", "Comunicación", "Formación Ética y Ciudadana", "Matemática", "Economía Política", "Geografía", "Sociología", "Psicología", "Antropología", "Diseño Gráfico", "EDI Diseño Gráfico", "Filosofía", "Introducción a las Ciencias Sociales y las Humanidades"],
          resources: [
            { title: "La sociedad del espectáculo - Guy Debord", type: "bibliografia", url: "https://archive.org/details/societyspectacl0000debo" },
            { title: "Documental: The Social Dilemma", type: "audiovisual", url: "https://www.netflix.com/title/81254224" }
          ]
        },
        {
          id: "6.1.3",
          title: "TikTok, YouTube y la Nueva Socialización",
          description: "Cómo los adolescentes acceden al deporte a través de highlights y reels. El impacto en la atención y en la comprensión táctica.",
          criticalTriggers: [
            "¿Se está perdiendo la esencia del deporte al consumirlo solo en clips de 30 segundos?",
            "¿Cómo la interfaz de TikTok está modificando neurológicamente la atención sostenida?",
            "¿Es el 'Youtuber/Streamer' una evolución democratizadora de la comunicación?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "TikTok, YouTube y la Nueva Socialización",
              foci: [
                { subject: "Biología (1º/2º)", description: "El circuito de recompensa (Dopamina)" },
                { subject: "Comunicación (1º/2º)", description: "El fin de la TV por cable" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "TikTok, YouTube y la Nueva Socialización",
              foci: [
                { subject: "Sociología (4º)", description: "Modernidad líquida (Bauman)" },
                { subject: "Radio/Documental (4º/5º)", description: "Periodismo clásico vs Streaming" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Música. Taller de 'Montaje Frenético': convertir un partido aburrido en un TikTok épico.",
          institutionalProposal: "Mesa debate intergeneracional entre periodistas tradicionales y alumnos creadores de contenido.",
          subjects: ["Lengua y Literatura", "Comunicación", "Informática", "Matemática", "Biología", "Sociología", "Audiovisual", "Radio", "Filosofía"],
          resources: [
            { title: "Superficiales - Nicholas Carr", type: "bibliografia", url: "https://archive.org/details/shallows0000carr" },
            { title: "Narrativas Transmedia - Carlos Scolari", type: "bibliografia", url: "https://archive.org/details/narrativastransm0000scol" }
          ]
        },
        {
          id: "6.1.4",
          title: "Apps de Entrenamiento y Vigorexia Digital",
          description: "La gamificación del ejercicio físico (Strava, Nike Run). Consecuencias de la cuantificación constante del cuerpo.",
          criticalTriggers: [
            "¿Hago deporte por salud o por la data?",
            "¿Cómo la gamificación nos lleva a forzar límites corporales provocando lesiones?",
            "¿A quién le pertenecen los datos biométricos recolectados por las apps?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Apps de Entrenamiento y Vigorexia Digital",
              foci: [
                { subject: "Educación Tecnológica (1º-3º)", description: "Sensores y GPS" },
                { subject: "Educación Física (1º-3º)", description: "Percepción corporal vs. cronómetro" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Apps de Entrenamiento y Vigorexia Digital",
              foci: [
                { subject: "Informática (4º)", description: "Big Data y privacidad" },
                { subject: "Psicología (4º)", description: "Validación externa y likes" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Historieta. Proyecto 'El Cíborg Agotado'.",
          institutionalProposal: "Campaña 'Desconexión Activa': salidas deportivas sin tecnología.",
          subjects: ["Educación Física", "Biología", "Matemática", "Formación Ética y Ciudadana", "Comunicación", "Fisico-Química", "Educación Tecnológica", "Psicología", "Sociología", "Antropología", "Física", "Filosofía", "Artes Visuales", "Indumentaria"],
          resources: [
            { title: "The Quantified Self - Deborah Lupton", type: "bibliografia", url: "https://archive.org/details/quantifiedself0000lupt" },
            { title: "La sociedad del cansancio - Byung-Chul Han", type: "bibliografia", url: "https://archive.org/details/burnoutsociety0000hanb" }
          ]
        },
        {
          id: "6.1.5",
          title: "Fantasy Sports y Ludificación",
          description: "Plataformas como Gran DT y Fantasy Premier League. Cómo la transformación del hincha en 'DT virtual' modifica la relación con el juego.",
          criticalTriggers: [
            "¿Gritar el gol del rival porque suma puntos en mi app empobrece la experiencia deportiva?",
            "¿Es el Fantasy Sport la 'droga de inicio' hacia las apuestas online?",
            "¿Queda espacio para la experiencia no cuantificada?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Fantasy Sports y Ludificación",
              foci: [
                { subject: "Matemática (1º-3º)", description: "Probabilidad y estadística" },
                { subject: "Formación Ética (3º)", description: "Microtransacciones y juegos freemium" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Fantasy Sports y Ludificación",
              foci: [
                { subject: "Economía Política (3º/4º)", description: "Economía del videojuego" },
                { subject: "Sociología (4º)", description: "Individualización del ocio" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Indumentaria. Proyecto 'Fantasy Escolar': cartas coleccionables de la escuela.",
          institutionalProposal: "Taller preventivo para familias sobre plataformas de juego y microtransacciones.",
          subjects: ["Matemática", "Lengua y Literatura", "Economía", "Formación Ética y Ciudadana", "Educación Tecnológica", "Inglés", "Psicología", "Sociología", "Informática", "Filosofía", "Sociedad y Estado"],
          resources: [
            { title: "Homo Ludens - Johan Huizinga", type: "bibliografia", url: "https://archive.org/details/homoludens00huiz" },
            { title: "Película: Moneyball", type: "audiovisual", url: "https://www.youtube.com/watch?v=d_2a5t00000" }
          ]
        }
      ]
    },
    {
      id: "6.2",
      title: "Problemáticas",
      themes: [
        {
          id: "6.2.1",
          title: "Apuestas Online",
          description: "El peligro de la ludopatía juvenil en CABA. Análisis de cómo los algoritmos se infiltran en los juegos de celular y redes sociales.",
          criticalTriggers: [
            "¿Por qué es tan fácil que un menor vacíe una cuenta de MercadoPago apostando?",
            "¿Qué responsabilidad tienen los ídolos que promocionan estas plataformas?",
            "¿Las casas de apuestas son un 'impuesto a la esperanza'?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Apuestas Online",
              foci: [
                { subject: "Matemática (2º/3º)", description: "'Valor Esperado Negativo' (por qué la banca siempre gana)" },
                { subject: "Formación Ética (3º)", description: "Vacíos legales" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Apuestas Online",
              foci: [
                { subject: "Psicología (4º)", description: "Mecanismos neurológicos de la ludopatía" },
                { subject: "Sociedad y Estado (5º)", description: "Regulación estatal en CABA (LOTBA)" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Teatro. Campaña 'El Juego No es un Juego'.",
          institutionalProposal: "Charlas urgentes con la Defensoría de Niñas, Niños y Adolescentes para familias.",
          subjects: ["Formación Ética y Ciudadana", "Matemática", "Biología", "Comunicación", "Lengua y Literatura", "Geografía", "Economía Política", "Psicología", "Sociología", "Antropología", "Informática", "Filosofía", "Sociedad y Estado", "Audiovisual", "Introducción a las Ciencias Sociales y las Humanidades"],
          resources: [
            { title: "Informes de la Defensoría del Pueblo de CABA sobre Ludopatía", type: "bibliografia", url: "https://defensoria.org.ar/noticias/segun-un-informe-de-la-defensoria-1-de-cada-4-estudiantes-aposto-online-alguna-vez/" },
            { title: "Apuestas online en la adolescencia y juventud - Branz, J. y Murzi, D.", type: "bibliografia", url: "https://www.conicet.gov.ar/apuestas-online-en-la-adolescencia-y-juventud-una-mirada-desde-lo-biologico-y-lo-social/" },
            { title: "Addiction by Design - Natasha Dow Schüll", type: "bibliografia", url: "https://archive.org/details/addictionbydesig0000schu" }
          ]
        }
      ]
    },
    {
      id: "6.3",
      title: "Ciencias y Deporte",
      themes: [
        {
          id: "6.3.1",
          title: "Biología y Salud: Fisiología del Esfuerzo",
          description: "Cómo el sistema circulatorio y respiratorio se adaptan al entrenamiento de alta intensidad. Discusión sobre los límites biológicos.",
          criticalTriggers: [
            "¿Estamos viendo límites naturales o consecuencias de calendarios sobreexigidos?",
            "¿Por qué el cuerpo necesita meses para adaptar su VO2 máx?",
            "¿Es el alto rendimiento sinónimo de salud?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Biología y Salud: Fisiología del Esfuerzo",
              foci: [
                { subject: "Biología (1º/2º)", description: "Sistemas del cuerpo" },
                { subject: "Educación Física (1º-3º)", description: "Test de Cooper/Navette" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Biología y Salud: Fisiología del Esfuerzo",
              foci: [
                { subject: "Física (4º)", description: "Termodinámica del cuerpo" },
                { subject: "Química (5º)", description: "Ciclo de Krebs" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Música. Instalación interactiva 'El Motor Humano'.",
          institutionalProposal: "Curso de RCP obligatorio y uso de DEA para toda la comunidad.",
          subjects: ["Biología", "Educación Física", "Matemática", "Lengua y Literatura", "Fisico-Química", "Formación Ética y Ciudadana", "Física", "Psicología", "Química", "Filosofía"],
          resources: [
            { title: "Fisiología del esfuerzo y del deporte - Wilmore & Costill", type: "bibliografia", url: "https://www.academia.edu/37313300/Introduccion_a_la_fisiologia_del_esfuerzo_y_del_deporte" }
          ]
        },
        {
          id: "6.3.2",
          title: "Física y Trayectorias",
          description: "Leyes de Newton en el campo. Efecto Magnus, aerodinámica y biomecánica para maximizar potencia sin lesionar.",
          criticalTriggers: [
            "¿El 'gol imposible' de Roberto Carlos es magia o física de fluidos?",
            "¿Cómo el diseño de una pelota (Jabulani) puede arruinar el trabajo de un profesional?",
            "¿Por qué la biomecánica es más importante que la fuerza bruta?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Física y Trayectorias",
              foci: [
                { subject: "Matemática (1º-3º)", description: "Ángulos y geometría" },
                { subject: "Educación Física (1º/2º)", description: "Experimentación de lanzamientos" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Física y Trayectorias",
              foci: [
                { subject: "Física (4º)", description: "Dinámica, cinemática y principio de Bernoulli" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Historieta. Taller de Stop Motion 'La Física Invisible'.",
          institutionalProposal: "Feria de Ciencias Deportiva en el polideportivo comunal.",
          subjects: ["Educación Física", "Matemática", "Educación Tecnológica", "Fisico-Química", "Física", "Audiovisual", "Historieta"],
          resources: [
            { title: "La Física del Fútbol - Paul Hewitt", type: "bibliografia", url: "https://archive.org/details/physicsfootball0000hewi" },
            { title: "Video: The Physics of the 'Impossible' Free Kick", type: "audiovisual", url: "https://www.youtube.com/watch?v=m57cimnJ7_Y" }
          ]
        },
        {
          id: "6.3.3",
          title: "Química de los Materiales Deportivos",
          description: "Evolución de los materiales: del cuero al termosellado. Polímeros, fibra de carbono y el impacto ambiental del césped sintético.",
          criticalTriggers: [
            "¿Es el césped sintético una crisis ecológica silenciosa en CABA?",
            "¿Cuánto tardará en degradarse un botín descartado?",
            "¿La 'carrera química armamentística' divide a los atletas por su capacidad económica?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Química de los Materiales Deportivos",
              foci: [
                { subject: "Educación Tecnológica (1º-3º)", description: "Procesos de manufactura" },
                { subject: "Geografía (2º/3º)", description: "Islas de calor en CABA" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Química de los Materiales Deportivos",
              foci: [
                { subject: "Química (5º)", description: "Química del Carbono" },
                { subject: "Ecología (5º)", description: "Huella de carbono (Fast Fashion)" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Indumentaria. Taller 'Deconstrucción Textil'.",
          institutionalProposal: "Mapeo térmico comparativo entre césped natural y sintético en el barrio.",
          subjects: ["Educación Tecnológica", "Biología", "Matemática", "Geografía", "Fisico-Química", "Química", "Ecología", "Filosofía", "Historia de la Cultura Latinoamericana", "Diseño Gráfico", "Indumentaria", "Artes Visuales"],
          resources: [
            { title: "Ciencia e ingeniería de los materiales - Callister", type: "bibliografia", url: "https://archive.org/details/materials-science-and-engineering-an-introduction-8th-edition-callister" }
          ]
        },
        {
          id: "6.3.4",
          title: "Nutrición Deportiva y Bioquímica",
          description: "Metabolismo aeróbico y anaeróbico. Glucógeno, ATP y ácido láctico. La industria de los suplementos.",
          criticalTriggers: [
            "¿Son las bebidas isotónicas necesarias o son 'golosinas líquidas'?",
            "¿Por qué la fatiga es un mecanismo de supervivencia y no un enemigo?",
            "¿La industria de las proteínas genera una dependencia artificial en la juventud?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Nutrición Deportiva y Bioquímica",
              foci: [
                { subject: "Biología (2º/3º)", description: "Nutrientes" },
                { subject: "Educación Física (1º-3º)", description: "Diferenciación de esfuerzos" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Nutrición Deportiva y Bioquímica",
              foci: [
                { subject: "Química (5º)", description: "Ciclo de Krebs y fermentación láctica" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Cocina + Huerta. Buffet de Alto Rendimiento Escolar.",
          institutionalProposal: "Transformación de kioscos escolares hacia una oferta saludable.",
          subjects: ["Biología", "Educación Física", "Matemática", "Economía", "Fisico-Química", "Educación Tecnológica", "Inglés", "Química", "Filosofía", "Sociedad y Estado", "Antropología", "Psicología", "Cocina", "Huerta"],
          resources: [
            { title: "Nutrición deportiva - Burke & Deakin", type: "bibliografia", url: "https://archive.org/details/clinicalsportsnu0000burk" }
          ]
        },
        {
          id: "6.3.5",
          title: "Física del Deporte Ampliada",
          description: "La fricción y superficies (césped, arcilla, hielo). Fluidos y resistencia en natación. Energía cinética en tackles y cabezazos relacionados con lesiones cerebrales (CTE).",
          criticalTriggers: [
            "¿Dónde termina el mérito del atleta y empieza la ventaja tecnológica (trajes de baño)?",
            "¿Deberían prohibirse los cabezazos si la ciencia demuestra daño cerebral acumulativo?",
            "¿Cómo las desigualdades de infraestructura determinan el riesgo de lesiones?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Física del Deporte Ampliada",
              foci: [
                { subject: "Fisico-Química (3º)", description: "Energía y choques" },
                { subject: "Biología (2º)", description: "El cráneo y el impacto neuronal" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Física del Deporte Ampliada",
              foci: [
                { subject: "Física (4º)", description: "Cantidad de movimiento e hidrodinámica" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Indumentaria + Teatro. Taller de 'Armaduras Modernas' con materiales reciclados.",
          institutionalProposal: "Proyecto para limitar cabezazos en entrenamientos infantiles basado en evidencia científica.",
          subjects: ["Física", "Biología", "Fisico-Química", "Educación Física", "Educación Tecnológica", "Inglés", "Indumentaria", "Teatro"],
          resources: [
            { title: "Película: Concussion (La verdad duele)", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" }
          ]
        },
        {
          id: "6.3.6",
          title: "Matemática y Geometría del Campo de Juego",
          description: "Dimensiones reglamentarias, cálculo de áreas y volúmenes. Proporción áurea en trofeos. Trigonometría y funciones cuadráticas en lanzamientos y trayectorias.",
          criticalTriggers: [
            "¿La geometría del campo condiciona el resultado táctico?",
            "¿Tiene sentido que la Copa del Mundo tenga proporciones áureas en su diseño?",
            "¿La matemática convierte al deporte en algo predecible o queda espacio para el azar?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Matemática y Geometría del Campo de Juego",
              foci: [
                { subject: "Matemática (1º-3º)", description: "Geometría plana y escalas" },
                { subject: "Educación Física", description: "Medición real del patio" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Matemática y Geometría del Campo de Juego",
              foci: [
                { subject: "Matemática (4º/5º)", description: "Trigonometría y funciones cuadráticas" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Diseño Gráfico. Taller 'La Geometría Oculta' sobre fotos icónicas.",
          institutionalProposal: "Repintado técnico de las líneas del patio utilizando instrumentos de medición fabricados por alumnos.",
          subjects: ["Matemática", "Educación Física", "Educación Tecnológica", "Geografía", "Fisico-Química", "Artes Visuales", "Diseño Gráfico"],
          resources: [
            { title: "Soccermatics - David Sumpter", type: "bibliografia", url: "https://archive.org/details/soccermaticsmath0000sump" }
          ]
        },
        {
          id: "6.3.7",
          title: "Biomecánica del Movimiento Humano",
          description: "Análisis de las palancas óseas, cadenas cinéticas y el centro de gravedad. Cómo la física optimiza el gesto técnico y previene lesiones crónicas.",
          criticalTriggers: [
            "¿Cómo influye la posición del centro de gravedad en la estabilidad de un judoca vs. un basquetbolista?",
            "¿Es posible 'diseñar' el cuerpo perfecto para cada deporte a través de la biomecánica?",
            "¿Por qué el calzado deportivo moderno es una pieza de ingeniería biomecánica?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Biomecánica del Movimiento Humano",
              foci: [
                { subject: "Biología (1º/2º)", description: "Sistema osteoartromuscular" },
                { subject: "Educación Física (1º-3º)", description: "Conciencia corporal" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Biomecánica del Movimiento Humano",
              foci: [
                { subject: "Física (4º)", description: "Estática y dinámica de cuerpos rígidos" },
                { subject: "Anatomía (4º/5º)", description: "Análisis funcional del movimiento" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Artes Visuales. Análisis de video en cámara lenta de los propios movimientos de los alumnos.",
          institutionalProposal: "Laboratorio de Biomecánica Escolar: creación de sensores de presión caseros con Arduino.",
          subjects: ["Biología", "Física", "Fisico-Química", "Educación Física", "Educación Tecnológica", "Matemática", "Audiovisual", "Artes Visuales"],
          resources: [
            { title: "Biomecánica básica del sistema musculoesquelético - Nordin & Frankel", type: "bibliografia", url: "https://archive.org/details/basicbiomechanic0000nord" },
            { title: "Video: Biomechanics of the 100m Sprint", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" }
          ]
        },
        {
          id: "6.3.8",
          title: "Ecología y Sustentabilidad en el Deporte",
          description: "Análisis del impacto ambiental de los megaeventos y la infraestructura deportiva. El concepto de 'elefantes blancos' y la huella de carbono del turismo deportivo masivo.",
          criticalTriggers: [
            "¿Es posible un Mundial de Fútbol sustentable o es una contradicción en los términos?",
            "¿Qué sucede con los estadios construidos para un solo evento que luego quedan en desuso?",
            "El impacto del microplástico del césped sintético en las cuencas hídricas urbanas."
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Ecología y Sustentabilidad en el Deporte",
              foci: [
                { subject: "Geografía (2º/3º)", description: "Problemas ambientales globales" },
                { subject: "Biología (1º)", description: "Ecosistemas urbanos" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Ecología y Sustentabilidad en el Deporte",
              foci: [
                { subject: "Ecología (5º)", description: "Huella hídrica y de carbono" },
                { subject: "Economía Política (4º)", description: "Costo-beneficio de la infraestructura pública" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Diseño Gráfico. Creación de maquetas de 'Estadios Sustentables'.",
          institutionalProposal: "Auditoría ambiental escolar: ¿cuánta energía consume nuestro polideportivo?",
          subjects: ["Ecología", "Geografía", "Biología", "Economía Política", "Fisico-Química", "Sociedad y Estado"],
          resources: [
            { title: "Elefantes blancos: el destino de los estadios mundialistas - IEXE", type: "bibliografia", url: "https://www.iexe.edu.mx/politicas-publicas/elefantes-blancos-el-triste-destino-de-los-estadios-olimpicos-y-mundialistas/" }
          ]
        },
        {
          id: "6.3.9",
          title: "Hidrodinámica y Aerodinámica Aplicada",
          description: "El estudio de la resistencia de los fluidos en natación, ciclismo y automovilismo. Cómo el diseño de superficies y materiales (trajes de baño de tiburón, cascos) altera el rendimiento.",
          criticalTriggers: [
            "¿Debería el deporte limitar la ayuda tecnológica para preservar la competencia humana pura?",
            "¿Cómo influye la densidad del aire o el agua en la rotura de récords mundiales?",
            "El efecto de la succión (drafting) en el ciclismo como estrategia física y táctica."
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Hidrodinámica y Aerodinámica Aplicada",
              foci: [
                { subject: "Fisico-Química (3º)", description: "Presión y fluidos" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Hidrodinámica y Aerodinámica Aplicada",
              foci: [
                { subject: "Física (4º)", description: "Dinámica de fluidos y viscosidad" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Diseño Gráfico. Experimentos de túnel de viento casero con maquetas.",
          institutionalProposal: "Visita al túnel de viento de la Facultad de Ingeniería (UBA).",
          subjects: ["Física", "Fisico-Química", "Educación Física", "Educación Tecnológica", "Matemática"],
          resources: [
            { title: "La física de la natación - Video Educativo", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" }
          ]
        }
      ]
    },
    {
      id: "6.4",
      title: "Deporte y Datos",
      themes: [
        {
          id: "6.4.1",
          title: "Estadística Deportiva (Moneyball)",
          description: "Uso de Big Data en la toma de decisiones. Cómo los promedios reemplazaron al 'ojo' del buscador de talentos.",
          criticalTriggers: [
            "¿La reducción de un joven a una hoja de cálculo anula el talento intuitivo?",
            "¿El modelo Moneyball evidencia que el deporte es ante todo un negocio financiero?",
            "¿Existe la 'magia' o es todo medible?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Estadística Deportiva (Moneyball)",
              foci: [
                { subject: "Matemática (1º-3º)", description: "Estadística descriptiva" },
                { subject: "Educación Tecnológica (2º/3º)", description: "Bases de datos" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Estadística Deportiva (Moneyball)",
              foci: [
                { subject: "Informática (4º)", description: "Data mining" },
                { subject: "Matemática (4º/5º)", description: "Correlación estadística" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Historieta. Construcción de perfiles 'RPG' de alumnos.",
          institutionalProposal: "Alumnos como 'Analistas de Datos' en torneos intercolegiales.",
          subjects: ["Matemática", "Educación Física", "Comunicación", "Educación Tecnológica", "Economía Política", "Inglés", "Informática", "Sociología", "Filosofía", "Diseño Gráfico", "Audiovisual", "Historieta"],
          resources: [
            { title: "Moneyball: deporte, matemáticas y cine - Alonso Santamaría, D.", type: "bibliografia", url: "https://revista.crfptic.es/te-ayudamos-en/apoyo-a-las-matematicas/moneyball-deporte-matematicas-y-cine/" },
            { title: "Moneyball: cómo los datos revolucionaron el béisbol - Viga Digital", type: "bibliografia", url: "https://vigadigital.cl/moneyball-como-los-datos-revolucionaron-el-besibol/" },
            { title: "Moneyball - Michael Lewis", type: "bibliografia", url: "https://archive.org/details/moneyballartofwi0000lewi" }
          ]
        },
        {
          id: "6.4.2",
          title: "Tecnología e Inteligencia Artificial",
          description: "IA en scouting, predicción de lesiones y análisis táctico. El VAR: ¿justicia perfecta o destrucción de la emoción?",
          criticalTriggers: [
            "¿Por qué el VAR genera más controversia que el error humano?",
            "¿Estamos ante un cuidado preventivo o un panóptico digital?",
            "¿Qué pasa con los niños descartados por el algoritmo de scouting?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Tecnología e Inteligencia Artificial",
              foci: [
                { subject: "Formación Ética (3º)", description: "Privacidad y monitoreo" },
                { subject: "Educación Tecnológica (1º-3º)", description: "Reconocimiento de imágenes" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Tecnología e Inteligencia Artificial",
              foci: [
                { subject: "Filosofía (5º)", description: "Verdad objetiva vs. interpretación" },
                { subject: "Sociología (4º)", description: "Trabajo alienado y vigilancia" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Teatro. Recreación de 'La Sala V.A.R.'",
          institutionalProposal: "Proyecto de marco regulatorio ético para datos biométricos escolares.",
          subjects: ["Formación Ética y Ciudadana", "Educación Tecnológica", "Educación Física", "Matemática", "Comunicación", "Fisico-Química", "Inglés", "Informática", "Física", "Psicología", "Sociología", "Antropología", "Filosofía", "Sociedad y Estado", "Audiovisual", "Teatro"],
          resources: [
            { title: "Big Data - Mayer-Schönberger & Cukier", type: "bibliografia", url: "https://archive.org/details/bigdatarevolution0000maye" },
            { title: "Vigilar y castigar - Michel Foucault", type: "bibliografia", url: "https://archive.org/details/disciplinepunish0000fouc" }
          ]
        }
      ]
    }
  ]
};

export const axis7: Axis = {
  id: 7,
  title: "Estética, Música y Diseño",
  subAxes: [
    {
      id: "7.1",
      title: "Cultura Visual y Urbana",
      themes: [
        {
          id: "7.1.1",
          title: "Deporte y Moda Urbana",
          description: "El deporte como motor de la moda urbana (Athleisure). Evolución estética de los escudos y camisetas: del bordado artesanal a las telas de nanotecnología. La semiótica de los colores: por qué ciertos colores se asocian con la victoria o la elegancia.",
          criticalTriggers: [
            "¿Por qué las marcas de lujo europeas se apropian de la estética de los 'pibes de barrio' y los potreros para vender ropa carísima?",
            "¿Qué nos dice de nuestra sociedad que usar ropa deportiva (botines, buzos de equipos) sea un marcador de estatus social en los adolescentes?",
            "¿Cómo los colores de un club terminan dividiendo las fronteras invisibles de un barrio en CABA?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Cultura Visual y Urbana",
              foci: [
                { subject: "Educación Tecnológica (1º y 2º año)", description: "Evolución de materiales textiles" },
                { subject: "Lengua (2º año)", description: "Análisis publicitario" },
                { subject: "Matemática (2º año)", description: "Relevamiento de precios" },
                { subject: "Geografía + EDI Economía (2º año)", description: "Circuitos de consumo en CABA" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Cultura Visual y Urbana",
              foci: [
                { subject: "Sociología (4º año) + EDI Diseño Gráfico (4º/5º año)", description: "El athleisure como distinción de clases" },
                { subject: "Sociedad y Estado + Geografía (5º año)", description: "Cadenas globales de producción" },
                { subject: "Química (5º año)", description: "Polímeros y microfibras" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Indumentaria + Artes Visuales: Taller de Upcycling (suprarreciclaje) interviniendo ropa vieja de gimnasia; Historieta + Audiovisual: spot sobre 'la vida social de una camiseta'.",
          institutionalProposal: "Visita a una cooperativa textil local o el INTI para entender el proceso de producción y las condiciones laborales.",
          subjects: ["Diseño Gráfico", "Sociología", "Historia", "Artes Visuales", "Educación Tecnológica", "Lengua y Literatura", "Matemática", "Geografía", "EDI Economía", "Sociedad y Estado", "Química"],
          resources: [],
          teacherResources: [
            { title: "El sistema de la moda - Roland Barthes", type: "bibliografia" },
            { title: "La distinción - Pierre Bourdieu", type: "bibliografia" },
            { title: "El imperio de lo efímero - Gilles Lipovetsky", type: "bibliografia" }
          ],
          studentResources: [
            { title: "Catálogos históricos de marcas deportivas (Nike, Adidas)", type: "bibliografia" },
            { title: "Publicidades actuales con cantantes de trap", type: "audiovisual" },
            { title: "Notas periodísticas sobre mercado informal textil en CABA", type: "bibliografia" }
          ]
        },
        {
          id: "7.1.2",
          title: "Himnos Deportivos y Canciones de Cancha",
          description: "Análisis de la letra en los himnos deportivos y canciones de cancha. Cómo la música genera un estado de trance colectivo y cohesión emocional en los estadios. La relación entre el rock nacional, la cumbia y el cancionero futbolero argentino.",
          criticalTriggers: [
            "¿Por qué la cancha es uno de los pocos espacios públicos donde al varón argentino se le permite llorar, abrazarse y cantar a los gritos?",
            "¿Cómo las melodías del rock nacional y la cumbia villera se transformaron en el 'soundtrack' del aguante?",
            "¿Es el canto de la hinchada una forma de arte popular no reconocida o simple ruido de masas?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Himnos Deportivos y Canciones de Cancha",
              foci: [
                { subject: "Taller de expresión oral y escrita (1º/2º año) + Formación Ética y Ciudadana (3º año)", description: "Métrica, rima y contenido ideológico" },
                { subject: "Historia (2º año)", description: "Comparación con himnos patrios" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Himnos Deportivos y Canciones de Cancha",
              foci: [
                { subject: "Psicología (4º año) + Historia de la Cultura Latinoamericana (5º año)", description: "Psicopatología de las masas y cultura de la cumbia" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Música + Teatro: ensamble de percusión de cancha y expresión corporal; Audiovisual + Historieta: registro documental sobre cómo nace una canción.",
          institutionalProposal: "Armar una murga escolar con temáticas deportivas para desfilar en el corso del barrio durante los carnavales porteños.",
          subjects: ["Música", "Teatro", "Lengua y Literatura", "Formación Ética y Ciudadana", "Historia", "Psicología", "Historia de la Cultura Latinoamericana", "Taller de Expresión Oral y Escrita", "Audiovisual", "Historieta"],
          resources: [],
          teacherResources: [
            { title: "Cumbia, nena - Pablo Alabarces", type: "bibliografia" },
            { title: "Masculinidades - Eduardo Archetti", type: "bibliografia" },
            { title: "Masa y poder - Elias Canetti", type: "bibliografia" }
          ],
          studentResources: [
            { title: "Archivos de audio: melodía original vs. versión de la hinchada", type: "audiovisual" },
            { title: "Letras de canciones de cancha para análisis", type: "bibliografia" }
          ]
        },
        {
          id: "7.1.3",
          title: "La Fotografía Deportiva como Documento Social e Histórico",
          description: "Análisis de fotografías icónicas del deporte. La fotografía como construcción de sentido, no como mero 'registro de la realidad'. El encuadre, el momento decisivo (Cartier-Bresson) y la edición como operaciones ideológicas.",
          criticalTriggers: [
            "¿Por qué recordamos un evento histórico a través de una sola foto y olvidamos el contexto completo?",
            "¿Cómo un fotógrafo puede hacer que un deportista parezca un 'dios' (contrapicado) o un 'derrotado' (picado)?",
            "¿Qué diferencia hay entre una foto tomada por un fotoperiodista en 1986 y una selfie subida a Instagram por un jugador hoy?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "La Fotografía Deportiva como Documento Social e Histórico",
              foci: [
                { subject: "Geografía (1º/2º año) + Historia (2º/3º año)", description: "Contextualización geográfica y temporal" },
                { subject: "Matemática (2º año)", description: "Proporciones y encuadre" },
                { subject: "Educación Tecnológica (3º año)", description: "Fundamentos de cámara" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "La Fotografía Deportiva como Documento Social e Histórico",
              foci: [
                { subject: "EDI Documental (4º/5º año) + Filosofía (5º año)", description: "La imagen como dispositivo de poder (Walter Benjamin)" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Artes Visuales: salida de campo al potrero para emular el 'momento decisivo' de Cartier-Bresson; Teatro + Historieta: recreación de una foto icónica.",
          institutionalProposal: "Montar una exposición fotográfica 'El Barrio Transpira' en la plaza principal de la Comuna, invitando a ARGRA.",
          subjects: ["Artes Visuales", "Audiovisual", "Comunicación", "Historia", "Geografía", "Filosofía", "Matemática", "Educación Tecnológica", "EDI Documental"],
          resources: [],
          teacherResources: [
            { title: "Sobre la fotografía - Susan Sontag", type: "bibliografia" },
            { title: "Modos de ver - John Berger", type: "bibliografia" },
            { title: "La cámara lúcida - Roland Barthes", type: "bibliografia" }
          ],
          studentResources: [
            { title: "Galería impresa de las fotos del World Press Photo (categoría deportes)", type: "bibliografia" },
            { title: "Archivos de diarios argentinos con fotos icónicas", type: "bibliografia" }
          ]
        },
        {
          id: "7.1.4",
          title: "Muralismo, Street Art y Deporte en Buenos Aires",
          description: "Los murales dedicados a Maradona, a equipos de barrio o a deportistas olímpicos. El arte urbano como homenaje popular y disputa por el espacio público. Mapeo y registro fotográfico.",
          criticalTriggers: [
            "¿Quién decide qué paredes de CABA se pueden pintar: el dueño, el gobierno o los vecinos?",
            "¿Qué convierte a un jugador de fútbol en un 'santo patrón' que debe ser pintado a 10 metros de altura?",
            "¿El muralismo deportivo es arte rebelde o está siendo asimilado por el GCBA para atraer turistas?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Muralismo, Street Art y Deporte en Buenos Aires",
              foci: [
                { subject: "Geografía (3º año) + Educación Tecnológica (2º/3º año)", description: "Cartografía urbana y herramientas digitales" },
                { subject: "Formación Ética (2º año)", description: "Debate sobre espacio público" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Muralismo, Street Art y Deporte en Buenos Aires",
              foci: [
                { subject: "Antropología (4º año) + Historia de la Cultura Latinoamericana (5º año)", description: "El muralismo mexicano como antecedente político" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Audiovisual: diseño de bocetos y ejecución de un mural en la escuela; Historieta + Música: serie gráfica sobre murales con paisaje sonoro.",
          institutionalProposal: "Articulación con 'Mosaico Nacional' o colectivos de muralistas para realizar una intervención conjunta en el barrio.",
          subjects: ["Artes Visuales", "Audiovisual", "Geografía", "Educación Tecnológica", "Formación Ética y Ciudadana", "Antropología", "Historia de la Cultura Latinoamericana", "Historieta"],
          resources: [],
          teacherResources: [
            { title: "Culturas urbanas - Néstor García Canclini", type: "bibliografia" },
            { title: "El derecho a la ciudad - Henri Lefebvre", type: "bibliografia" }
          ],
          studentResources: [
            { title: "Recorridos virtuales en 360º de los grandes murales de Maradona y Messi", type: "audiovisual" },
            { title: "Registro fotográfico de murales en La Boca, Fiorito, Constitución", type: "bibliografia" }
          ]
        },
        {
          id: "7.1.5",
          title: "Cultura Urbana, Trap y Fútbol",
          description: "La simbiosis actual entre los músicos de trap argentinos (Duki, Bizarrap, Wos) y los jugadores de la Selección. Cómo el deporte adopta la estética urbana (tatuajes, cortes de pelo, lenguaje) y viceversa.",
          criticalTriggers: [
            "¿Por qué la 'estética de la marginalidad' es el producto de exportación cultural y deportivo más rentable de Argentina?",
            "¿Qué mensaje transmiten los cortes de pelo platinados y los tatuajes en la cara: rebeldía o nuevo hiper-consumismo?",
            "¿El jugador de fútbol moderno quiere ser un atleta o un rockstar?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Cultura Urbana, Trap y Fútbol",
              foci: [
                { subject: "Lengua (2º y 3º año) + Taller de expresión oral y escrita (1º/2º año)", description: "Análisis del argot y lunfardo moderno" },
                { subject: "Historia + Geografía (2º año)", description: "Trayectorias sociales del trap" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Cultura Urbana, Trap y Fútbol",
              foci: [
                { subject: "Sociología (4º año) + Economía Política (3º año)", description: "El ascenso social del 'pibe de barrio' como modelo de éxito" },
                { subject: "Filosofía (5º año)", description: "Autenticidad e industria cultural" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Música + Historieta: taller de rimas libres / freestyle y diseño de personajes; Teatro + Indumentaria: performance sobre identidades juveniles.",
          institutionalProposal: "Organizar un torneo de fútbol mixto y batallas de freestyle en el patio abierto a las escuelas vecinas.",
          subjects: ["Música", "Historieta", "Lengua y Literatura", "Taller de Expresión Oral y Escrita", "Sociología", "Economía Política", "Historia", "Geografía", "Filosofía", "Teatro", "Indumentaria"],
          resources: [],
          teacherResources: [
            { title: "Culturas híbridas - Néstor García Canclini", type: "bibliografia" },
            { title: "La fábrica de la música - Varios autores", type: "bibliografia" }
          ],
          studentResources: [
            { title: "Clips del festejo de la Selección 2022 con Wos ('Arrancármelo')", type: "audiovisual" },
            { title: "BZRP Music Sessions con deportistas", type: "audiovisual" }
          ]
        },
        {
          id: "7.1.6",
          title: "La Camiseta como Objeto Cultural",
          description: "Del algodón al poliéster, la industrialización de la camiseta deportiva. El fenómeno de la camiseta 'trucha' como mercado informal y como signo de democratización del consumo. La camiseta como lienzo político.",
          criticalTriggers: [
            "¿Cuando la camiseta original cuesta medio salario mínimo, comprar una réplica 'trucha' es un delito o un derecho popular?",
            "¿Cómo devalúa la historia de un club que el nombre del equipo quede en miniatura frente al logo de una aerolínea?",
            "¿Deberían permitirse consignas políticas en las camisetas o el deporte 'no debe mezclarse'?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "La Camiseta como Objeto Cultural",
              foci: [
                { subject: "EDI Economía (1º/2º año)", description: "Análisis del mercado de indumentaria" },
                { subject: "Educación Tecnológica (2º año)", description: "Circuito productivo del textil y fibras sintéticas" },
                { subject: "Matemática (2º año)", description: "Comparación de costos y presupuestos" },
                { subject: "Historia (2º año)", description: "Evolución de las vestimentas desde la revolución industrial" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "La Camiseta como Objeto Cultural",
              foci: [
                { subject: "Economía Política (3º año) + Sociedad y Estado (5º año)", description: "Globalización y deslocalización de la producción" },
                { subject: "Química (5º año)", description: "Materiales sintéticos e impacto ambiental" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Indumentaria + Artes Visuales: taller de serigrafía creando la 'Identidad Gráfica Institucional'; Historieta + Diseño Gráfico: narración sobre la 'biografía social' de una camiseta.",
          institutionalProposal: "Conectar con la feria 'La Salada' o cooperativas textiles mediante una videoconferencia para debatir sobre economía informal.",
          subjects: ["Indumentaria", "Artes Visuales", "Educación Tecnológica", "EDI Economía", "Economía Política", "Sociedad y Estado", "Matemática", "Historia", "Química", "Diseño Gráfico"],
          resources: [],
          teacherResources: [
            { title: "La vida social de las cosas - Arjun Appadurai", type: "bibliografia" },
            { title: "Documental: The True Cost", type: "audiovisual" }
          ],
          studentResources: [
            { title: "Muestras físicas de camisetas de 1970, 1990 y 2024 para análisis táctil", type: "bibliografia" },
            { title: "Informes sobre mercado informal textil en Argentina", type: "bibliografia" }
          ]
        },
        {
          id: "7.1.7",
          title: "Arquitectura de Estadios: Espacio, Poder y Comunidad",
          description: "Del Coliseo romano al Estadio Lusail de Qatar: evolución arquitectónica y función social del estadio. El estadio como catedral moderna. Análisis del Estadio Único de Santiago del Estero, la Bombonera y el Monumental.",
          criticalTriggers: [
            "¿Es ético construir el Estadio Único de Santiago del Estero en una provincia con pobreza estructural?",
            "¿Cómo un estadio hipermoderno en CABA expulsa al hincha de bajos recursos por el costo del ticket?",
            "El 'Pan y Circo' romano: ¿es el estadio la herramienta del poder para adormecer los problemas sociales?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Arquitectura de Estadios: Espacio, Poder y Comunidad",
              foci: [
                { subject: "Matemática (1º a 3º año) + Geografía (2º año)", description: "Análisis geométrico de la acústica y mapas de densidad urbana" },
                { subject: "Historia (2º año)", description: "Evolución de materiales y tribunas" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Arquitectura de Estadios: Espacio, Poder y Comunidad",
              foci: [
                { subject: "Sociedad y Estado (5º año) + Sociología (4º año)", description: "El gasto público y las megaobras como propaganda" },
                { subject: "Física (4º año)", description: "Sonido y efecto de masa" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Audiovisual: construcción de maquetas a escala repensando un 'estadio ecológico'; Teatro + Música: puesta sobre 'el estadio como catedral moderna'.",
          institutionalProposal: "Caminata de relevamiento urbano con el Centro de Estudiantes documentando el contraste entre el estadio y las viviendas vecinas.",
          subjects: ["Artes Visuales", "Audiovisual", "Matemática", "Geografía", "Sociedad y Estado", "Sociología", "Historia", "Física", "Teatro", "Música"],
          resources: [],
          teacherResources: [
            { title: "La producción del espacio - Henri Lefebvre", type: "bibliografia" },
            { title: "Ciudades rebeldes - David Harvey", type: "bibliografia" }
          ],
          studentResources: [
            { title: "Planos y cortes transversales de estadios icónicos", type: "bibliografia" },
            { title: "Videos de inauguraciones fastuosas de estadios", type: "audiovisual" }
          ]
        },
        {
          id: "7.1.8",
          title: "El Tatuaje Deportivo como Narrativa Corporal",
          description: "Los tatuajes de los futbolistas como autobiografía visual. Análisis semiótico de los tatuajes de deportistas famosos. El cuerpo del deportista como 'texto' que se lee públicamente.",
          criticalTriggers: [
            "¿Por qué en un deporte supermercantilizado el tatuaje es la única marca personal que los clubes no pueden controlar?",
            "¿Cómo pasó el tatuaje de ser una marca marginal a un símbolo aspiracional?",
            "¿Es el cuerpo del deportista un lienzo público, y por lo tanto, propiedad de los hinchas?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "El Tatuaje Deportivo como Narrativa Corporal",
              foci: [
                { subject: "Biología (1º y 2º año)", description: "La piel y el sistema inmunológico" },
                { subject: "Historia (2º año)", description: "Historia del tatuaje en las culturas polinésicas y el contacto con occidente" },
                { subject: "Formación Ética y Ciudadana (2º año)", description: "Debate sobre prejuicios y discriminación corporal" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "El Tatuaje Deportivo como Narrativa Corporal",
              foci: [
                { subject: "Antropología (4º año) + Filosofía (5º año)", description: "Biopolítica y subjetividad; el cuerpo como diario íntimo expuesto" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Historieta: práctica de 'body painting' con tintas lavables; Indumentaria + Teatro: performance sobre el cuerpo como soporte de memoria.",
          institutionalProposal: "Invitar a un artista tatuador del barrio y a un dermatólogo del CESAC para una charla sobre estética y bioseguridad.",
          subjects: ["Artes Visuales", "Historieta", "Biología", "Historia", "Antropología", "Filosofía", "Formación Ética y Ciudadana", "Indumentaria", "Teatro"],
          resources: [],
          teacherResources: [
            { title: "Antropología del cuerpo y modernidad - David Le Breton", type: "bibliografia" },
            { title: "Vigilar y castigar - Michel Foucault", type: "bibliografia" }
          ],
          studentResources: [
            { title: "Catálogo de los tatuajes de Messi o Di María y sus significados", type: "bibliografia" },
            { title: "Infografías sobre cuidados sanitarios del tatuaje", type: "bibliografia" }
          ]
        },
        {
          id: "7.1.9",
          title: "Diseño Gráfico Deportivo: del Escudo al Meme",
          description: "Evolución del diseño de logos de clubes y federaciones. Principios de diseño gráfico aplicados: tipografía, color, síntesis visual. El fenómeno de los memes deportivos como forma de comunicación visual contemporánea.",
          criticalTriggers: [
            "¿Por qué clubes centenarios están borrando sus escudos tradicionales para reemplazarlos por 'logos' minimalistas?",
            "¿El 'meme' deportivo de Twitter es humor inocente o una poderosa herramienta de cyberbullying?",
            "¿Quién es el dueño de los derechos de imagen en la era digital cuando una foto tuya llorando se hace viral?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Diseño Gráfico Deportivo: del Escudo al Meme",
              foci: [
                { subject: "Educación Tecnológica (2º/3º año) + EDI Comunicación (1º/2º año)", description: "Teoría del color, vectores y lenguaje del meme" },
                { subject: "Matemática (2º año)", description: "Proporción y simetría" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Diseño Gráfico Deportivo: del Escudo al Meme",
              foci: [
                { subject: "EDI Diseño Gráfico (4º/5º año) + Sociología (4º año)", description: "La 'McDonalización' de los clubes de fútbol y el impacto del consumo irónico" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Historieta + Artes Visuales: re-diseño en vectores del escudo de la escuela; Audiovisual: laboratorio de memes deportivos.",
          institutionalProposal: "Colaboración con un club de barrio modesto para ofrecerles un rediseño gratuito de sus redes sociales realizado por los alumnos.",
          subjects: ["Diseño Gráfico", "EDI Diseño Gráfico", "Historieta", "Artes Visuales", "Educación Tecnológica", "EDI Comunicación", "Sociología", "Matemática", "Audiovisual"],
          resources: [],
          teacherResources: [
            { title: "La sintaxis de la imagen - Donis A. Dondis", type: "bibliografia" },
            { title: "Diseño y comunicación visual - Bruno Munari", type: "bibliografia" }
          ],
          studentResources: [
            { title: "Evolución cronológica de 10 escudos del fútbol argentino", type: "bibliografia" },
            { title: "Hilos de Twitter con memes de Boca/River para análisis", type: "bibliografia" }
          ]
        }
      ]
    }
  ]
};

export const axis8: Axis = {
  id: 8,
  title: "Literatura y Arte",
  subAxes: [
    {
      id: "8.1",
      title: "El Deporte en la Ficción Literaria",
      themes: [
        {
          id: "8.1.1",
          title: "Cuentos y Pelota: Fontanarrosa, Sacheri, Soriano",
          description: "Análisis de la obra de los grandes narradores del fútbol argentino como radiografías de la sociedad. El humor, la melancolía y la épica del perdedor.",
          criticalTriggers: [
            "¿Por qué la literatura argentina romantiza al 'perdedor noble'?",
            "¿Cómo explican estos cuentos la 'argentinidad'?",
            "El potrero como refugio de la nostalgia."
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Cuentos y Pelota: Fontanarrosa, Sacheri, Soriano",
              foci: [
                { subject: "Lengua (1º-3º)", description: "Estructura narrativa" },
                { subject: "Historia (3º)", description: "Contexto social del conurbano" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Cuentos y Pelota: Fontanarrosa, Sacheri, Soriano",
              foci: [
                { subject: "Literatura (4º/5º)", description: "Costumbrismo e identidad nacional" },
                { subject: "Sociología (4º)", description: "Jerarquía de géneros literarios" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Historieta + Teatro. Adaptar a guion teatral un cuento de Fontanarrosa.",
          institutionalProposal: "Café Literario Futbolero con abuelos y escritores locales.",
          subjects: ["Lengua y Literatura", "Historia", "Formación Ética y Ciudadana", "Educación Física", "Sociología", "Psicología", "Filosofía", "Teatro", "Historieta", "Introducción a las Ciencias Sociales y las Humanidades"],
          resources: [
            { title: "19 de diciembre de 1971 - Roberto Fontanarrosa", type: "bibliografia", url: "https://archive.org/details/19dediciembrede10000font" },
            { title: "Esperándolo a Tito - Eduardo Sacheri", type: "bibliografia", url: "https://archive.org/details/esperandoloatito0000sach" }
          ]
        },
        {
          id: "8.1.2",
          title: "Existencialismo y Boxeo: Julio Cortázar",
          description: "La fascinación por el ring. El deporte como metáfora de la vida, el destino y la lucha individual.",
          criticalTriggers: [
            "¿Por qué el ring es la metáfora perfecta de la soledad del individuo?",
            "¿Es el boxeo una salvación social o explotación de cuerpos pobres?",
            "¿Qué atrajo a intelectuales como Cortázar a este deporte marginal?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Existencialismo y Boxeo: Julio Cortázar",
              foci: [
                { subject: "Lengua (3º)", description: "Monólogo interior en 'Torito'" },
                { subject: "Biología (1º/2º)", description: "Conmoción cerebral" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Existencialismo y Boxeo: Julio Cortázar",
              foci: [
                { subject: "Filosofía (5º)", description: "Sartre y la situación límite" },
                { subject: "Sociología (4º)", description: "Gatica y el peronismo" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Literatura + Teatro. Monólogos interiores de un boxeador en el descanso.",
          institutionalProposal: "Visita al Almagro Boxing Club para entrevistas sobre contención social.",
          subjects: ["Lengua y Literatura", "Historia", "Formación Ética y Ciudadana", "Biología", "Fisico-Química", "Filosofía", "Psicología", "Sociología", "Antropología", "Historia Orientada de las Ideas", "Teatro"],
          resources: [
            { title: "Cuento: Torito - Julio Cortázar", type: "bibliografia", url: "https://archive.org/details/cortazar-julio-torito" },
            { title: "Película: Gatica, El Mono", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" }
          ]
        },
        {
          id: "8.1.3",
          title: "Narrativas del Héroe",
          description: "El tránsito del deportista al mito. La construcción de la épica del 'héroe plebeyo' (Maradona, Garrincha) y la tragedia del ídolo caído.",
          criticalTriggers: [
            "¿Necesita una nación pobre que sus héroes provengan de la miseria extrema?",
            "¿Por qué la sociedad disfruta viendo la autodestrucción del ídolo?",
            "Diferencia entre el Héroe Trágico griego y el Ídolo Deportivo moderno."
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Narrativas del Héroe",
              foci: [
                { subject: "Formación Ética (3º)", description: "Modelo a seguir vs. persona real" },
                { subject: "Historia (1º/2º)", description: "Héroes griegos vs. próceres" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Narrativas del Héroe",
              foci: [
                { subject: "Antropología (4º)", description: "El viaje del héroe (Campbell)" },
                { subject: "Filosofía (5º)", description: "Hybris y catarsis aristotélica" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Artes Visuales. Diseño de afiches de películas épicas de deportistas reales.",
          institutionalProposal: "Panel debate: '¿Qué le exigimos a nuestros ídolos?'",
          subjects: ["Lengua y Literatura", "Historia", "Formación Ética y Ciudadana", "Comunicación", "Antropología", "Sociología", "Filosofía", "Historia de la Cultura Latinoamericana", "Artes Visuales", "Audiovisual"],
          resources: [
            { title: "El héroe de las mil caras - Joseph Campbell", type: "bibliografia", url: "https://archive.org/details/herowiththousan0000camp" },
            { title: "El fútbol a sol y sombra - Eduardo Galeano", type: "bibliografia", url: "https://archive.org/details/elfutbolasolyson0000gale" }
          ]
        },
        {
          id: "8.1.4",
          title: "Poesía y Deporte",
          description: "Gelman y la pelota en el barrio; Girondo y el dinamismo vanguardista. La oda al fútbol como subgénero latinoamericano.",
          criticalTriggers: [
            "¿Se puede encerrar el caos de una jugada en la estructura rígida de un soneto?",
            "¿Cómo la vanguardia rompió el idioma igual que el deporte rompió la estática corporal?",
            "¿Es el potrero el último paisaje romántico de la ciudad moderna?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Poesía y Deporte",
              foci: [
                { subject: "Lengua (1º-3º)", description: "Ekphrasis deportiva. Taller de rimas y métrica" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Poesía y Deporte",
              foci: [
                { subject: "Filosofía (5º)", description: "Estética de lo sublime (Kant)" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Música + Artes Visuales. Creación de caligramas gigantes.",
          institutionalProposal: "Slam de Poesía Urbana y Deportiva en el patio de la escuela.",
          subjects: ["Lengua y Literatura", "Filosofía", "Música", "Artes Visuales", "Historia de la Cultura Latinoamericana"],
          resources: [
            { title: "Poema: Oda a los botines", type: "bibliografia", url: "https://archive.org/details/odaalosbotines0000vari" }
          ]
        },
        {
          id: "8.1.5",
          title: "Literatura Infantil y Juvenil (LIJ) Deportiva",
          description: "Textos que abordan el deporte desde la mirada adolescente: presión, amistad y descubrimiento del cuerpo.",
          criticalTriggers: [
            "¿Por qué hay tan pocas novelas juveniles argentinas con eje en el deporte?",
            "¿Puede un libro juvenil curar la frustración de perder una final?",
            "¿Predominan los estereotipos de género en la LIJ deportiva?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Literatura Infantil y Juvenil (LIJ) Deportiva",
              foci: [
                { subject: "Lengua (1º/2º)", description: "Club de lectura y reseñas" },
                { subject: "Biología", description: "El cuerpo adolescente" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Literatura Infantil y Juvenil (LIJ) Deportiva",
              foci: [
                { subject: "Psicología (4º)", description: "Crisis vocacionales y pertenencia" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Historieta. Producción de Booktrailers deportivos.",
          institutionalProposal: "Maratón de Lectura Deportiva con escuelas primarias de la zona.",
          subjects: ["Lengua y Literatura", "Biología", "Psicología", "Educación Física", "Audiovisual", "Historieta"],
          resources: [
            { title: "Peligro de gol - Sergio Olguín", type: "bibliografia", url: "https://archive.org/details/peligrodegol0000olgu" },
            { title: "El genio de la pelota - Pantana", type: "bibliografia", url: "https://archive.org/details/elgeniodelapelo0000pant" }
          ]
        },
        {
          id: "8.1.6",
          title: "Literatura y Montañismo: El Hombre frente a la Naturaleza",
          description: "Relatos de expediciones, crónicas de supervivencia y la filosofía del esfuerzo extremo en la montaña. El caso de la tragedia de los Andes como narrativa de resiliencia.",
          criticalTriggers: [
            "¿Qué impulsa al ser humano a buscar el límite en entornos hostiles?",
            "¿Es el montañismo un deporte o una búsqueda espiritual y existencial?",
            "Análisis de la ética de la supervivencia en situaciones límite."
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Literatura y Montañismo: El Hombre frente a la Naturaleza",
              foci: [
                { subject: "Geografía (2º)", description: "Relieve y climas extremos" },
                { subject: "Biología (1º/2º)", description: "Hipoxia y adaptación al frío" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Literatura y Montañismo: El Hombre frente a la Naturaleza",
              foci: [
                { subject: "Filosofía (5º)", description: "El concepto de lo sublime en la naturaleza" },
                { subject: "Psicología (4º)", description: "Liderazgo y cohesión grupal en crisis" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Literatura. Escritura de un diario de expedición ficticio basado en datos reales.",
          institutionalProposal: "Charla con montañistas locales sobre el respeto al medio ambiente y la gestión del riesgo.",
          subjects: ["Lengua y Literatura", "Geografía", "Biología", "Filosofía", "Psicología", "Historia", "Audiovisual"],
          resources: [
            { title: "La sociedad de la nieve - Pablo Vierci", type: "bibliografia", url: "https://archive.org/details/lasociedaddelani0000vier" },
            { title: "Mal de altura - Jon Krakauer", type: "bibliografia", url: "https://archive.org/details/intoairpersonal0000krak" }
          ]
        },
        {
          id: "8.1.7",
          title: "Literatura y Memoria: El Deporte en la Dictadura",
          description: "Narrativas que exploran la desaparición de deportistas y el uso del deporte como herramienta de resistencia o complicidad durante los años de plomo en Argentina.",
          criticalTriggers: [
            "¿Cómo puede la literatura rescatar la memoria de los 'deportistas desaparecidos'?",
            "El Mundial 78 como escenario de ficción: la tensión entre el grito de gol y el grito de dolor.",
            "¿Es el deporte un refugio apolítico o un territorio en disputa por la memoria?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Literatura y Memoria: El Deporte en la Dictadura",
              foci: [
                { subject: "Historia (3º)", description: "Dictadura militar en Argentina" },
                { subject: "Lengua (2º/3º)", description: "El testimonio como género" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Literatura y Memoria: El Deporte en la Dictadura",
              foci: [
                { subject: "Sociología (4º)", description: "Memoria colectiva e identidad" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro + Historieta. Creación de una obra breve basada en testimonios reales.",
          institutionalProposal: "Acto escolar del 24 de Marzo con eje en el deporte y la memoria.",
          subjects: ["Lengua y Literatura", "Historia", "Formación Ética y Ciudadana", "Sociología", "Derecho"],
          resources: [
            { title: "El Mundial 78. Fútbol, Terror y Resistencias - Gómez, A.", type: "bibliografia", url: "https://que.fcc.unc.edu.ar/memoria-y-dictadura-el-mundial-78-futbol-terror-y-resistencias/" }
          ]
        }
      ]
    },
    {
      id: "8.2",
      title: "Crónica Deportiva y Relato Oral",
      themes: [
        {
          id: "8.2.1",
          title: "La Radio y el Relato como Teatro para Ciegos",
          description: "La construcción de la épica a través de la voz. Análisis de relatos icónicos: de Muñoz a Víctor Hugo Morales, de Marcelo Araujo a Mariano Closs.",
          criticalTriggers: [
            "¿Fue el relato de Víctor Hugo el que 'hizo' el gol de Maradona?",
            "¿Cómo unificaba la radio a un país antes de la televisión?",
            "¿El relator moderno informa o actúa para vender rating?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "La Radio y el Relato como Teatro para Ciegos",
              foci: [
                { subject: "Lengua (1º/2º)", description: "El uso del adjetivo" },
                { subject: "Historia (3º)", description: "La radio en la dictadura" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "La Radio y el Relato como Teatro para Ciegos",
              foci: [
                { subject: "EDI Radio (4º/5º)", description: "Evolución del lenguaje coloquial" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro + Música. Taller de Foley y efectos de sonido en vivo.",
          institutionalProposal: "Stand de 'Radio Escolar en Vivo' cubriendo torneos intercolegiales.",
          subjects: ["Lengua y Literatura", "Historia", "Comunicación", "Educación Tecnológica", "Sociología", "Radio", "Sociedad y Estado", "Historia Orientada de las Ideas", "Teatro", "Música", "Introducción a las Ciencias Sociales y las Humanidades"],
          resources: [
            { title: "Días de radio - Carlos Ulanovsky", type: "bibliografia", url: "https://archive.org/details/diasderadio0000ulan" },
            { title: "Audio: Relato del gol a los ingleses (Víctor Hugo Morales)", type: "audiovisual", url: "https://www.youtube.com/watch?v=1wVho3I0NtU" }
          ]
        },
        {
          id: "8.2.2",
          title: "Periodismo Digital y Nuevos Formatos",
          description: "Del editorial en El Gráfico al hilo de Twitter y el streaming. ¿Gana la velocidad o se pierde la profundidad?",
          criticalTriggers: [
            "¿Qué pasa con la verdad periodística frente al clickbait?",
            "¿El algoritmo premia el análisis o el escándalo tribunero?",
            "¿Los streamers reemplazan al periodismo tradicional?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Periodismo Digital y Nuevos Formatos",
              foci: [
                { subject: "Comunicación (1º/2º)", description: "Alfabetización digital" },
                { subject: "Educación Tecnológica (3º)", description: "Fake news" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Periodismo Digital y Nuevos Formatos",
              foci: [
                { subject: "Informática (4º)", description: "Economía de plataformas" },
                { subject: "Diseño Gráfico (5º)", description: "Periodismo transmedia" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Historieta + Audiovisual. Convertir una noticia larga en un Reel hiperdinámico.",
          institutionalProposal: "Lanzamiento del 'Portal de Noticias Deportivas' del colegio.",
          subjects: ["Lengua y Literatura", "Comunicación", "Educación Tecnológica", "Informática", "Diseño Gráfico", "Radio", "Sociología", "Historieta", "Audiovisual"],
          resources: [
            { title: "La máquina del fango - Umberto Eco", type: "bibliografia", url: "https://archive.org/details/maquinadelfango0000ecou" },
            { title: "Archivo digital de la revista El Gráfico", type: "bibliografia", url: "https://www.elgrafico.com.ar/archivo" }
          ]
        },
        {
          id: "8.2.3",
          title: "La Oralidad Deportiva e Intergeneracional",
          description: "El deporte como vehículo de transmisión de la memoria oral entre abuelos, padres e hijos. Los streamers como nuevos narradores.",
          criticalTriggers: [
            "¿Por qué los adolescentes confían más en un streamer que en un noticiero?",
            "¿Si no existieran los relatos de los abuelos, existiría la identidad de los clubes chicos?",
            "¿La memoria oral está en peligro ante la grabación digital constante?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "La Oralidad Deportiva e Intergeneracional",
              foci: [
                { subject: "Historia (1º/2º)", description: "Fuentes primarias y metodología de la entrevista" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "La Oralidad Deportiva e Intergeneracional",
              foci: [
                { subject: "Antropología (4º)", description: "Patrimonio inmaterial e historia oral" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Audiovisual + Teatro. Montar un 'Set de Streaming' en la escuela.",
          institutionalProposal: "Creación del Archivo Sonoro Comunal: 'Las Voces del Barrio'.",
          subjects: ["Historia", "Lengua y Literatura", "Antropología", "Comunicación", "Audiovisual", "Teatro", "Proyecto"],
          resources: [
            { title: "Metodología de Historia Oral - Alessandro Portelli", type: "bibliografia", url: "https://archive.org/details/deathofluigitras0000port" }
          ]
        }
      ]
    },
    {
      id: "8.3",
      title: "Artes Visuales y Escénicas",
      themes: [
        {
          id: "8.3.1",
          title: "Futurismo y Movimiento",
          description: "El impacto del deporte en las vanguardias. Capturar la velocidad y la fuerza de la máquina y el atleta.",
          criticalTriggers: [
            "¿Por qué el futurismo amaba la velocidad pero apoyaba el fascismo?",
            "¿Cómo puede una pintura estática generar ilusión de velocidad?",
            "El cuerpo humano retratado como 'máquina perfecta'."
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Futurismo y Movimiento",
              foci: [
                { subject: "Historia (2º/3º)", description: "Segunda Revolución Industrial" },
                { subject: "Educación Tecnológica (1º/2º)", description: "El motor de combustión" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Futurismo y Movimiento",
              foci: [
                { subject: "Filosofía (5º)", description: "El culto a la tecnología" },
                { subject: "Física (4º)", description: "Análisis biomecánico del movimiento" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Artes Visuales + Audiovisual. Práctica de 'Fotografía de Barrido'.",
          institutionalProposal: "Recorrida guiada al MNBA buscando rastros de dinamismo.",
          subjects: ["Historia", "Educación Tecnológica", "Lengua y Literatura", "Fisico-Química", "Filosofía", "Historia de la Cultura Latinoamericana", "Física", "Artes Visuales", "Audiovisual"],
          resources: [
            { title: "Manifiesto Futurista - F.T. Marinetti", type: "bibliografia", url: "https://archive.org/details/futuristmanifest0000mari" },
            { title: "Pintura: Dinamismo de un ciclista - Umberto Boccioni", type: "bibliografia", url: "https://www.guggenheim.org/artwork/607" }
          ]
        },
        {
          id: "8.3.2",
          title: "Historieta Deportiva: Clemente e Inodoro Pereyra",
          description: "Clemente de Caloi y el hincha como comunidad afectiva. El manga deportivo japonés (Captain Tsubasa, Slam Dunk) y su influencia global.",
          criticalTriggers: [
            "¿Diferencias entre el esfuerzo japonés y la 'viveza criolla' de Clemente?",
            "¿Cómo un dibujo logró que millones jugaran al básquet?",
            "¿El humor de Fontanarrosa refuerza estereotipos machistas?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Historieta Deportiva: Clemente e Inodoro Pereyra",
              foci: [
                { subject: "Lengua (1º/2º)", description: "Lenguaje de la historieta" },
                { subject: "Geografía (2º)", description: "Comparación Japón-Argentina" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Historieta Deportiva: Clemente e Inodoro Pereyra",
              foci: [
                { subject: "Sociología (4º)", description: "El 'Poder Blando' (Soft Power) cultural" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Historieta + Artes Visuales. Laboratorio de Cómic Híbrido.",
          institutionalProposal: "Exposición 'Viñetas en la cancha' con autores invitados.",
          subjects: ["Lengua y Literatura", "Geografía", "Sociología", "Filosofía", "Historieta", "Artes Visuales", "EDI Diseño Gráfico"],
          resources: [
            { title: "La historieta argentina - Laura Vázquez", type: "bibliografia", url: "https://archive.org/details/lahistorietaarge0000vazq" },
            { title: "Manga: Slam Dunk - Takehiko Inoue", type: "bibliografia" }
          ]
        },
        {
          id: "8.3.3",
          title: "Cine y Teatro: el Deporte como Metáfora Social",
          description: "Análisis de obras que utilizan el deporte para narrar conflictos de clase, racismo y crisis sociales.",
          criticalTriggers: [
            "¿Puede un partido de rugby borrar décadas de segregación (Apartheid)?",
            "¿Qué perdemos como sociedad cuando un club de barrio se vende para hacer una torre?",
            "¿Existe el cine deportivo argentino como género o es solo una excusa política?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Cine y Teatro: el Deporte como Metáfora Social",
              foci: [
                { subject: "Geografía (3º)", description: "Sudáfrica y el Apartheid" },
                { subject: "FEC (3º)", description: "Crisis económicas argentinas" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Cine y Teatro: el Deporte como Metáfora Social",
              foci: [
                { subject: "Sociología (4º)", description: "El cine como constructor de memoria colectiva" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Teatro + Audiovisual. Escribir y filmar un corto titulado 'Asamblea'.",
          institutionalProposal: "Cine debate abierto al barrio un viernes a la noche en el patio.",
          subjects: ["Sociología", "Historia", "Geografía", "Formación Ética y Ciudadana", "Teatro", "Audiovisual", "Lengua y Literatura"],
          resources: [
            { title: "Película: Luna de Avellaneda", type: "audiovisual", url: "https://www.imdb.com/es/title/tt0347449/" },
            { title: "Película: Invictus", type: "audiovisual", url: "https://www.imdb.com/title/tt1057500/" }
          ]
        },
        {
          id: "8.3.4",
          title: "Danza, Expresión Corporal y Deporte",
          description: "La frontera difusa entre el arte escénico y la disciplina deportiva. Análisis de la gimnasia rítmica, el patinaje artístico y la reciente incorporación del Breakdance a los JJ.OO.",
          criticalTriggers: [
            "¿Quién decide cuándo una expresión artística se convierte en un deporte reglado?",
            "La subjetividad de los jueces en deportes estéticos vs. la objetividad del cronómetro.",
            "El cuerpo como instrumento de comunicación: ¿qué narra un atleta en su rutina?"
          ],
          interdisciplinaryCrosses: [
            {
              cycle: "Ciclo Básico",
              theme: "Danza, Expresión Corporal y Deporte",
              foci: [
                { subject: "Educación Física (1º-3º)", description: "Expresión corporal" },
                { subject: "Artes Visuales (1º/2º)", description: "El ritmo y la forma" }
              ]
            },
            {
              cycle: "Ciclo Orientado",
              theme: "Danza, Expresión Corporal y Deporte",
              foci: [
                { subject: "Filosofía (5º)", description: "Estética y juicio de gusto" },
                { subject: "Psicología (4º)", description: "La identidad a través del movimiento" }
              ]
            }
          ],
          entryPoints: "TALLERES DE ARTE: Música + Teatro. Creación de una coreografía híbrida entre deporte y danza.",
          institutionalProposal: "Gala de fin de año integrando disciplinas deportivas y artísticas.",
          subjects: ["Artes Visuales", "Música", "Educación Física", "Filosofía", "Psicología", "Teatro"],
          resources: [
            { title: "Documental: El arte del movimiento", type: "audiovisual", url: "https://www.youtube.com/watch?v=8V_7_X_X_X" }
          ]
        }
      ]
    }
  ]
};
