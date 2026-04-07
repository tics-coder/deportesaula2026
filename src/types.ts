export interface Resource {
  title: string;
  type: 'bibliografia' | 'audiovisual' | 'imagen';
  url?: string;
  description?: string;
}

export interface InterdisciplinaryCross {
  cycle: 'Ciclo Básico' | 'Ciclo Orientado';
  theme: string;
  foci: {
    subject: string;
    description: string;
  }[];
}

export interface Theme {
  id: string;
  title: string;
  description: string;
  criticalTriggers?: string[];
  interdisciplinaryCrosses?: InterdisciplinaryCross[];
  entryPoints?: string;
  institutionalProposal?: string;
  subjects: string[];
  resources: Resource[];
  teacherResources?: Resource[];
  studentResources?: Resource[];
}

export interface SubAxis {
  id: string;
  title: string;
  themes: Theme[];
}

export interface Axis {
  id: number;
  title: string;
  subAxes: SubAxis[];
}

export type Cycle = 'Ciclo Básico' | 'Ciclo Orientado' | 'Comunes';
export type Year = '1º' | '2º' | '3º' | '4º' | '5º';

export interface Subject {
  name: string;
  years: Year[];
  cycles: Cycle[];
}

export const subjectsData: Subject[] = [
  // Lengua / Lengua y Literatura
  { name: "Lengua", years: ["1º", "2º"], cycles: ["Ciclo Básico"] },
  { name: "Lengua y Literatura", years: ["3º", "4º", "5º"], cycles: ["Ciclo Orientado"] },
  
  // Materias que están en ambos ciclos
  { name: "Matemática", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Ciclo Básico", "Ciclo Orientado"] },
  { name: "Historia", years: ["1º", "2º", "3º", "4º"], cycles: ["Ciclo Básico", "Ciclo Orientado"] },
  { name: "Geografía", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Ciclo Básico", "Ciclo Orientado"] },
  { name: "Formación Ética y Ciudadana", years: ["1º", "2º", "3º", "4º"], cycles: ["Ciclo Básico", "Ciclo Orientado"] },
  { name: "Educación Tecnológica", years: ["1º", "2º", "3º", "5º"], cycles: ["Ciclo Básico", "Ciclo Orientado"] },
  
  // Solo Ciclo Básico
  { name: "Biología", years: ["1º", "2º"], cycles: ["Ciclo Básico"] },
  { name: "Taller de expresión oral y escrita", years: ["1º", "2º"], cycles: ["Ciclo Básico"] },
  { name: "EDI (Comunicación)", years: ["1º", "2º"], cycles: ["Ciclo Básico"] },
  { name: "EDI (Economía)", years: ["1º", "2º"], cycles: ["Ciclo Básico"] },
  
  // Solo Ciclo Orientado - 3º
  { name: "Fisico-Química", years: ["3º"], cycles: ["Ciclo Orientado"] },
  { name: "Introducción a las Ciencias Sociales y las Humanidades", years: ["3º"], cycles: ["Ciclo Orientado"] },
  { name: "Economía Política", years: ["3º"], cycles: ["Ciclo Orientado"] },
  { name: "EDI (Problemas del Mundo Contemporáneo)", years: ["3º"], cycles: ["Ciclo Orientado"] },
  
  // Solo Ciclo Orientado - 4º
  { name: "Física", years: ["4º"], cycles: ["Ciclo Orientado"] },
  { name: "Sociología", years: ["4º"], cycles: ["Ciclo Orientado"] },
  { name: "Psicología", years: ["4º"], cycles: ["Ciclo Orientado"] },
  { name: "Antropología", years: ["4º"], cycles: ["Ciclo Orientado"] },
  { name: "Tecnología de la información", years: ["4º"], cycles: ["Ciclo Orientado"] },
  { name: "EDI (Documental)", years: ["4º", "5º"], cycles: ["Ciclo Orientado"] },
  { name: "EDI (Radio)", years: ["4º", "5º"], cycles: ["Ciclo Orientado"] },
  { name: "EDI (Diseño gráfico)", years: ["4º", "5º"], cycles: ["Ciclo Orientado"] },
  
  // Solo Ciclo Orientado - 5º
  { name: "Historia Orientada de las Ideas en la Argentina", years: ["5º"], cycles: ["Ciclo Orientado"] },
  { name: "Sociedad y Estado", years: ["5º"], cycles: ["Ciclo Orientado"] },
  { name: "Química", years: ["5º"], cycles: ["Ciclo Orientado"] },
  { name: "Filosofía", years: ["5º"], cycles: ["Ciclo Orientado"] },
  { name: "Historia de la Cultura Latinoamericana", years: ["5º"], cycles: ["Ciclo Orientado"] },
  { name: "Proyecto", years: ["5º"], cycles: ["Ciclo Orientado"] },

  // Comunes a todos los años
  { name: "Educación Física", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Comunes"] },
  { name: "Inglés", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Comunes"] },
  
  // Talleres de Arte (Todos los años)
  { name: "Artes Visuales", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Comunes"] },
  { name: "Audiovisual", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Comunes"] },
  { name: "Cocina", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Comunes"] },
  { name: "Huerta y jardinería", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Comunes"] },
  { name: "Indumentaria y Textil", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Comunes"] },
  { name: "Teatro", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Comunes"] },
  { name: "Música", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Comunes"] },
  { name: "Historieta", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Comunes"] },
  
  // Espacios transversales
  { name: "Educación Sexual Integral", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Comunes"] },
  { name: "Medioambiente y ecología", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Comunes"] },
  { name: "Educación Digital Integral", years: ["1º", "2º", "3º", "4º", "5º"], cycles: ["Comunes"] }
];

export const subjectsList = subjectsData.map(s => s.name);
