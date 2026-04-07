/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Trophy, 
  BookOpen, 
  Users, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  X,
  ExternalLink, 
  Video, 
  FileText,
  Filter,
  ArrowLeft,
  ArrowUp,
  Info,
  GraduationCap,
  LayoutGrid,
  Book,
  History,
  Globe,
  Calculator,
  Dna,
  Atom,
  Image as ImageIcon,
  Beaker,
  FlaskConical,
  ShieldCheck,
  Heart,
  Dumbbell,
  TrendingUp,
  Cpu,
  Palette,
  Music,
  Theater,
  Clapperboard,
  PenTool,
  Languages,
  Mic,
  Leaf,
  Building,
  MessageSquare,
  Shirt,
  Utensils,
  Sprout,
  MessageCircle
} from 'lucide-react';
import { axes, subjectsList, subjectsData, relatedSubjectsMap, Axis, Theme, Resource } from './data';
import { Year, Cycle } from './types';

type ViewMode = 'home' | 'axes' | 'subjects';

const getSubjectIcon = (subject: string) => {
  const s = subject.toLowerCase();
  if (s.includes('lengua') || s.includes('literatura') || s.includes('lectura')) return <Book size={12} />;
  if (s.includes('historia')) return <History size={12} />;
  if (s.includes('geografía')) return <Globe size={12} />;
  if (s.includes('matemática')) return <Calculator size={12} />;
  if (s.includes('biología')) return <Dna size={12} />;
  if (s.includes('física') && !s.includes('química')) return <Atom size={12} />;
  if (s.includes('química') && !s.includes('física')) return <Beaker size={12} />;
  if (s.includes('fisico-química') || s.includes('fisicoquímica')) return <FlaskConical size={12} />;
  if (s.includes('ética') || s.includes('ciudadanía') || s.includes('derecho')) return <ShieldCheck size={12} />;
  if (s.includes('esi') || s.includes('corazón')) return <Heart size={12} />;
  if (s.includes('educación física')) return <Dumbbell size={12} />;
  if (s.includes('economía')) return <TrendingUp size={12} />;
  if (s.includes('tecnológica') || s.includes('informática') || s.includes('programación') || s.includes('computación')) return <Cpu size={12} />;
  if (s.includes('artes visuales') || s.includes('plásticas') || s.includes('ilustración') || s.includes('dibujo') || s.includes('escultura') || s.includes('paleta')) return <Palette size={12} />;
  if (s.includes('música')) return <Music size={12} />;
  if (s.includes('teatro') || s.includes('guion')) return <Theater size={12} />;
  if (s.includes('audiovisual') || s.includes('animación') || s.includes('cine')) return <Clapperboard size={12} />;
  if (s.includes('diseño gráfico')) return <PenTool size={12} />;
  if (s.includes('inglés') || s.includes('idioma')) return <Languages size={12} />;
  if (s.includes('sociología') || s.includes('antropología') || s.includes('psicología') || s.includes('filosofía') || s.includes('estado') || s.includes('sociales') || s.includes('humanidades')) return <Users size={12} />;
  if (s.includes('comunicación') || s.includes('radio') || s.includes('periodismo')) return <Mic size={12} />;
  if (s.includes('ecología') || s.includes('ambiente')) return <Leaf size={12} />;
  if (s.includes('arquitectura')) return <Building size={12} />;
  if (s.includes('historieta')) return <MessageSquare size={12} />;
  if (s.includes('indumentaria') || s.includes('moda')) return <Shirt size={12} />;
  if (s.includes('cocina')) return <Utensils size={12} />;
  if (s.includes('huerta')) return <Sprout size={12} />;
  if (s.includes('expresión oral')) return <MessageCircle size={12} />;
  return <GraduationCap size={12} />;
};

const SUBJECT_CATEGORIES = {
  basico: [
    "Lengua y Literatura", "Historia", "Geografía", "Matemática", "Biología", "Física", "Química", "Fisico-Química",
    "Formación Ética y Ciudadana", "ESI", "Educación Física", "Educación Tecnológica", "Informática",
    "Artes Visuales", "Música", "Teatro", "Inglés", "Taller de Expresión Oral y Escrita", "Construcción de Ciudadanía",
    "Taller de Expresión Oral"
  ],
  orientado: [
    "Sociología", "Antropología", "Psicología", "Filosofía", "Sociedad y Estado", "Economía Política", "Derecho",
    "Comunicación", "Ecología", "Arquitectura/Tecnología", "Historia de la Cultura Latinoamericana",
    "Historia Orientada de las Ideas", "Introducción a las Ciencias Sociales y las Humanidades", "Proyecto",
    "Tecnología de la Información", "EDI Economía", "EDI Problemas del Mundo Contemporáneo", "Economía"
  ],
  transversales: [
    "EDI Documental", "EDI Radio", "EDI Comunicación"
  ],
  talleres: [
    "Historieta", "Diseño de Indumentaria", "Cocina", "Huerta", "Animación", "Radio", "Ilustración", "Escultura",
    "Dibujo", "Guion", "Programación", "Diseño Gráfico", "Audiovisual", "Artes Plásticas", "Indumentaria"
  ]
};

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [selectedAxis, setSelectedAxis] = useState<Axis | null>(null);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [subjectHistory, setSubjectHistory] = useState<Set<string>>(new Set());
  const [axisHistory, setAxisHistory] = useState<Set<number>>(new Set());
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHomeSection, setActiveHomeSection] = useState<'leer' | 'mirar' | 'detalles' | null>(null);
  const [activeFilter, setActiveFilter] = useState<'none' | 'triggers' | 'crosses'>('none');
  const [selectedFilterValue, setSelectedFilterValue] = useState<string | null>(null);
  const [selectedCycle, setSelectedCycle] = useState<'Ciclo Básico' | 'Ciclo Orientado' | 'Todos'>('Todos');
  const [themeSearchQuery, setThemeSearchQuery] = useState('');
  const [pendingSubject, setPendingSubject] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<Year | 'Todos'>('Todos');
  const [resourceFilter, setResourceFilter] = useState<'todos' | 'bibliografia' | 'audiovisual'>('todos');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const years: (Year | 'Todos')[] = ['Todos', '1º', '2º', '3º', '4º', '5º'];

  const ActiveFilters = () => {
    const filters = [
      { label: 'Materias', value: selectedSubjects.join(', ') },
      { label: 'Año', value: selectedYear },
      { label: 'Ciclo', value: selectedCycle },
      { label: 'Recursos', value: resourceFilter },
      { label: 'Búsqueda', value: searchQuery },
    ].filter(f => f.value !== 'Todos' && f.value !== 'todos' && f.value !== '' && f.value.length > 0);

    if (filters.length === 0) return null;

    return (
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map(f => (
          <div key={f.label} className="flex items-center gap-2 px-3 py-1 bg-aula-red text-white text-xs font-black uppercase tracking-widest rounded-sm">
            {f.label}: {f.value}
            <button onClick={() => {
              if (f.label === 'Materias') setSelectedSubjects([]);
              if (f.label === 'Año') setSelectedYear('Todos');
              if (f.label === 'Ciclo') setSelectedCycle('Todos');
              if (f.label === 'Recursos') setResourceFilter('todos');
              if (f.label === 'Búsqueda') setSearchQuery('');
            }}><X size={14} /></button>
          </div>
        ))}
      </div>
    );
  };

  const filteredSubjectsByYear = useMemo(() => {
    if (selectedYear === 'Todos') return subjectsData;
    return subjectsData.filter(s => s.years.includes(selectedYear as Year));
  }, [selectedYear]);

  const subjectsByCycle = useMemo(() => {
    const grouped: Record<Cycle, typeof subjectsData> = {
      'Ciclo Básico': [],
      'Ciclo Orientado': [],
      'Comunes': []
    };
    
    // Determine which cycles are valid for the selected year
    let validCycles: Cycle[] = ['Ciclo Básico', 'Ciclo Orientado', 'Comunes'];
    if (selectedYear === '1º' || selectedYear === '2º') {
      validCycles = ['Ciclo Básico', 'Comunes'];
    } else if (selectedYear === '3º' || selectedYear === '4º' || selectedYear === '5º') {
      validCycles = ['Ciclo Orientado', 'Comunes'];
    }

    filteredSubjectsByYear.forEach(s => {
      s.cycles.forEach(cycle => {
        if (validCycles.includes(cycle)) {
          // Prevent duplicates if a subject is somehow added twice
          if (!grouped[cycle].some(sub => sub.name === s.name)) {
            grouped[cycle].push(s);
          }
        }
      });
    });
    return grouped;
  }, [filteredSubjectsByYear, selectedYear]);

  useEffect(() => {
    if (selectedYear !== 'Todos' && selectedSubjects.length > 0) {
      const validSubjects = selectedSubjects.filter(s => subjectsData.some(sub => sub.name === s && sub.years.includes(selectedYear as Year)));
      if (validSubjects.length !== selectedSubjects.length) {
        setSelectedSubjects(validSubjects);
      }
    }
  }, [selectedYear, selectedSubjects]);

  const relatedSectionRef = useRef<HTMLDivElement>(null);
  const themesSectionRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedTheme && modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, [selectedTheme]);

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/theme/')) {
      const themeId = path.split('/')[2];
      let foundTheme: Theme | null = null;
      axes.forEach(axis => axis.subAxes.forEach(sub => sub.themes.forEach(theme => {
        if (theme.id === themeId) foundTheme = theme;
      })));
      setSelectedTheme(foundTheme);
    } else {
      setSelectedTheme(null);
    }
  }, [location]);

  React.useEffect(() => {
    const handleScroll = () => {
      // Handle subject bar collapse
      if (viewMode === 'subjects' && selectedSubjects.length > 0) {
        setIsScrolled(window.scrollY > 100);
      } else {
        setIsScrolled(false);
      }
      
      // Handle back to top visibility
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode, selectedSubjects]);

  // Aggregate all resources
  const allResources = useMemo(() => {
    const bibliografia: Resource[] = [];
    const audiovisual: Resource[] = [];
    const seenTitles = new Set<string>();

    axes.forEach(axis => {
      axis.subAxes.forEach(sub => {
        sub.themes.forEach(theme => {
          theme.resources?.forEach(res => {
            if (!seenTitles.has(res.title)) {
              if (res.type === 'bibliografia') bibliografia.push(res);
              if (res.type === 'audiovisual') audiovisual.push(res);
              seenTitles.add(res.title);
            }
          });
        });
      });
    });

    return { bibliografia, audiovisual };
  }, []);

  // Update history when selections change
  const handleSubjectSelect = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      // If already selected, just unselect it
      setSelectedSubjects(prev => prev.filter(s => s !== subject));
    } else {
      // If not selected, show modal to ask how to explore
      setPendingSubject(subject);
    }
  };

  const confirmSubjectSelect = (subject: string, mode: 'themes' | 'related') => {
    setSelectedSubjects(prev => {
      if (!prev.includes(subject)) {
        return [...prev, subject];
      }
      return prev;
    });
    setSubjectHistory(prev => new Set(prev).add(subject));
    setPendingSubject(null);
    
    if (mode === 'themes') {
      // Use requestAnimationFrame for a more consistent scroll timing
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (themesSectionRef.current) {
            themesSectionRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      });
    } else {
      // Use requestAnimationFrame for a more consistent scroll timing
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (relatedSectionRef.current) {
            relatedSectionRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
          }
        }, 50);
      });
    }
  };

  const handleAxisSelect = (axis: Axis) => {
    setSelectedAxis(axis);
    setAxisHistory(prev => new Set(prev).add(axis.id));
  };

  // Filter themes by subject and year
  const filteredThemes = useMemo(() => {
    if (selectedSubjects.length === 0 && selectedYear === 'Todos') return [];

    const filtered: Theme[] = [];
    axes.forEach(axis => {
      axis.subAxes.forEach(sub => {
        sub.themes.forEach(theme => {
          
          // Determine which subjects to consider for this theme
          const relevantSubjects = selectedSubjects.length > 0 
            ? theme.subjects.filter(s => selectedSubjects.includes(s))
            : theme.subjects;

          // Subject match: if selectedSubjects is not empty, the theme must have at least one of them
          const subjectMatch = selectedSubjects.length === 0 || relevantSubjects.length > 0;
          
          // Year match: at least one of the RELEVANT subjects must be taught in the selected year
          const yearMatch = selectedYear === 'Todos' || relevantSubjects.some(s => {
              const subject = subjectsData.find(sub => sub.name === s);
              return subject && subject.years.includes(selectedYear as Year);
          });

          if (subjectMatch && yearMatch) {
              // Apply resource filter
              if (resourceFilter !== 'todos') {
                const hasResource = theme.resources?.some(r => r.type === resourceFilter);
                if (!hasResource) return;
              }
              filtered.push(theme);
          }
        });
      });
    });
    return filtered;
  }, [selectedSubjects, selectedYear, resourceFilter]);

  const paginatedThemes = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredThemes.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredThemes, currentPage, itemsPerPage]);

  // Related subjects for the selected subjects
  const relatedSubjects = useMemo(() => {
    if (selectedSubjects.length === 0) return [];
    const related = new Set<string>();
    selectedSubjects.forEach(s => {
      relatedSubjectsMap[s]?.forEach(rs => related.add(rs));
    });
    return Array.from(related);
  }, [selectedSubjects]);

  // Themes from related subjects
  const relatedThemes = useMemo(() => {
    if (selectedSubjects.length === 0 || relatedSubjects.length === 0) return [];
    const filtered: Theme[] = [];
    const seenIds = new Set<string>();
    
    axes.forEach(axis => {
      axis.subAxes.forEach(sub => {
        sub.themes.forEach(theme => {
          // Only include if NOT already in filteredThemes and not already seen
          if (!theme.subjects.some(s => selectedSubjects.includes(s)) && !seenIds.has(theme.id)) {
            const hasRelatedSubject = theme.subjects.some(s => relatedSubjects.includes(s));
            
            // NEW LOGIC: Only show if subject was previously selected OR axis was explored
            const isFromHistory = theme.subjects.some(s => subjectHistory.has(s)) || axisHistory.has(axis.id);

            // Year filtering
            let hasYearMatch = true;
            if (selectedYear !== 'Todos') {
              const relevantRelatedSubjects = theme.subjects.filter(s => relatedSubjects.includes(s));
              hasYearMatch = relevantRelatedSubjects.some(s => {
                const subject = subjectsData.find(sub => sub.name === s);
                return subject && subject.years.includes(selectedYear as Year);
              });
            }

            if (hasRelatedSubject && isFromHistory && hasYearMatch) {
              filtered.push(theme);
              seenIds.add(theme.id);
            }
          }
        });
      });
    });
    // Limit to 3 as requested
    return filtered.slice(0, 3);
  }, [selectedSubjects, relatedSubjects, subjectHistory, axisHistory, selectedYear]);

  // Search all themes
  const searchResults = useMemo(() => {
    if (!searchQuery) return [];
    const results: Theme[] = [];
    axes.forEach(axis => {
      axis.subAxes.forEach(sub => {
        sub.themes.forEach(theme => {
          const inTitle = theme.title.toLowerCase().includes(searchQuery.toLowerCase());
          const inDesc = theme.description.toLowerCase().includes(searchQuery.toLowerCase());
          const inTriggers = theme.criticalTriggers?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
          const inCrosses = theme.interdisciplinaryCrosses?.some(c => 
            c.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.foci.some(f => f.subject.toLowerCase().includes(searchQuery.toLowerCase()) || f.description.toLowerCase().includes(searchQuery.toLowerCase()))
          );
          
          if (inTitle || inDesc || inTriggers || inCrosses) {
            results.push(theme);
          }
        });
      });
    });
    return results;
  }, [searchQuery]);

  const allTriggers = useMemo(() => {
    const triggers = new Set<string>();
    axes.forEach(axis => axis.subAxes.forEach(sub => sub.themes.forEach(theme => {
      theme.criticalTriggers?.forEach(t => triggers.add(t));
    })));
    return Array.from(triggers).sort();
  }, []);

  const allCrosses = useMemo(() => {
    const crosses = new Set<string>();
    axes.forEach(axis => axis.subAxes.forEach(sub => sub.themes.forEach(theme => {
      theme.interdisciplinaryCrosses?.forEach(c => crosses.add(c.theme));
    })));
    return Array.from(crosses).sort();
  }, []);

  const filteredThemesByAdvanced = useMemo(() => {
    if (!selectedFilterValue) return [];
    const results: Theme[] = [];
    axes.forEach(axis => {
      axis.subAxes.forEach(sub => {
        sub.themes.forEach(theme => {
          // Apply resource filter
          if (resourceFilter !== 'todos') {
            const hasResource = theme.resources?.some(r => r.type === resourceFilter);
            if (!hasResource) return;
          }

          if (activeFilter === 'triggers' && theme.criticalTriggers?.includes(selectedFilterValue)) {
            results.push(theme);
          } else if (activeFilter === 'crosses' && theme.interdisciplinaryCrosses?.some(c => c.theme === selectedFilterValue)) {
            if (selectedCycle !== 'Todos') {
              const hasCycle = theme.interdisciplinaryCrosses.some(c => c.theme === selectedFilterValue && c.cycle === selectedCycle);
              if (!hasCycle) return;
            }
            results.push(theme);
          }
        });
      });
    });
    return results;
  }, [activeFilter, selectedFilterValue, resourceFilter]);

  const resetSelection = () => {
    setSelectedAxis(null);
    setSelectedSubjects([]);
    setSelectedTheme(null);
    setSearchQuery('');
    setActiveFilter('none');
    setSelectedFilterValue(null);
  };

  return (
    <div className="min-h-screen bg-white text-aula-black font-sans selection:bg-aula-red/10 selection:text-aula-red">
      {/* Header */}
      <header className="bg-white border-b border-aula-gray-light/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div 
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => { setViewMode('home'); resetSelection(); }}
          >
            <div className="flex flex-col leading-none">
              <span className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-aula-gray-dark uppercase">Colegio Secundario</span>
              <span className="text-2xl md:text-4xl font-black text-aula-red font-display tracking-tight">AULA XXI</span>
            </div>
            <div className="h-12 w-[1px] bg-aula-gray-light/50 mx-2 hidden sm:block" />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-xs font-bold text-aula-gray-dark uppercase tracking-widest">Proyecto Institucional</span>
              <h1 className="text-lg font-black text-aula-black">
                DEPORTES <span className="text-aula-red">2026</span>
              </h1>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-2">
            <NavButton 
              active={viewMode === 'axes'} 
              onClick={() => { 
                if (viewMode !== 'axes') {
                  setViewMode('axes'); 
                  resetSelection(); 
                }
              }}
              icon={<LayoutGrid size={18} />}
              label="Ejes Temáticos"
            />
            <NavButton 
              active={viewMode === 'subjects'} 
              onClick={() => { 
                if (viewMode !== 'subjects') {
                  setViewMode('subjects'); 
                  resetSelection(); 
                }
              }}
              icon={<GraduationCap size={18} />}
              label="Navegar por Materias"
            />
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-aula-gray-dark" size={18} />
              <input 
                type="text" 
                placeholder="Buscar temas..."
                className="pl-10 pr-4 py-2 bg-aula-gray-light/10 border border-transparent rounded-full text-sm focus:ring-2 focus:ring-aula-red focus:bg-white focus:border-aula-red/20 w-48 lg:w-64 transition-all outline-hidden"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {searchQuery ? (
            <motion.div
              key="search-results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                Resultados para "{searchQuery}"
                <span className="text-sm font-normal text-slate-500 bg-slate-200 px-2 py-1 rounded-full">
                  {searchResults.length}
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {searchResults.map(theme => (
                  <ThemeCard key={theme.id} theme={theme} onClick={() => navigate(`/theme/${theme.id}`)} />
                ))}
              </div>
              {searchResults.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-slate-500">No se encontraron temas que coincidan con tu búsqueda.</p>
                </div>
              )}
            </motion.div>
          ) : viewMode === 'home' ? (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-5xl mx-auto text-center py-12"
            >
              <div className="mb-16 relative">
                {/* Decorative background element */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-aula-red/5 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-aula-yellow/5 rounded-full blur-3xl -z-10" />
                
                <span className="inline-block px-4 py-1.5 bg-aula-red text-white rounded-sm text-xs font-black uppercase tracking-widest mb-6">
                  Proyecto Institucional 2026
                </span>
                <h2 className="text-5xl md:text-8xl font-black text-aula-black mb-8 leading-[0.9] tracking-tighter">
                  TEMA DEL AÑO:<br />
                  <span className="text-aula-red">DEPORTES</span>
                </h2>
                <p className="text-xl text-aula-gray-dark mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                  Una aproximación inspiradora para abordar el deporte desde una perspectiva crítica y situada. 
                  Explora los ejes temáticos o navega según tu materia para planificar tu año escolar.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button 
                    onClick={() => setViewMode('axes')}
                    className="w-full sm:w-auto px-10 py-5 bg-aula-red text-white rounded-sm font-black uppercase tracking-widest shadow-2xl shadow-aula-red/20 hover:bg-aula-red-dark hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                  >
                    <LayoutGrid size={20} />
                    Explorar Ejes
                  </button>
                  <button 
                    onClick={() => setViewMode('subjects')}
                    className="w-full sm:w-auto px-10 py-5 bg-white text-aula-black border-2 border-aula-black rounded-sm font-black uppercase tracking-widest hover:bg-aula-black hover:text-white hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                  >
                    <GraduationCap size={20} />
                    Por Materias
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                <FeatureCard 
                  icon={<BookOpen />}
                  title="PARA LEER"
                  description="Compilación de la bibliografía completa de todos los temas."
                  onClick={() => setActiveHomeSection(activeHomeSection === 'leer' ? null : 'leer')}
                  active={activeHomeSection === 'leer'}
                />
                <FeatureCard 
                  icon={<Video />}
                  title="PARA MIRAR"
                  description="Lista de recursos audiovisuales sugeridos en todos los temas."
                  onClick={() => setActiveHomeSection(activeHomeSection === 'mirar' ? null : 'mirar')}
                  active={activeHomeSection === 'mirar'}
                />
                <FeatureCard 
                  icon={<Info />}
                  title="DETALLES"
                  description="Descripción conceptual amplia del proyecto institucional."
                  onClick={() => setActiveHomeSection(activeHomeSection === 'detalles' ? null : 'detalles')}
                  active={activeHomeSection === 'detalles'}
                />
              </div>

              <AnimatePresence>
                {activeHomeSection && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-16 text-left bg-white rounded-sm border-4 border-aula-black shadow-[16px_16px_0px_0px_rgba(29,29,27,1)] overflow-hidden"
                  >
                    <div className="p-10">
                      <div className="flex items-center justify-between mb-10 pb-6 border-b-2 border-aula-gray-light/20">
                        <h3 className="text-3xl font-black text-aula-black uppercase tracking-tighter">
                          {activeHomeSection === 'leer' && 'Bibliografía Completa'}
                          {activeHomeSection === 'mirar' && 'Recursos Audiovisuales'}
                          {activeHomeSection === 'detalles' && 'Sobre el Proyecto'}
                        </h3>
                        <button 
                          onClick={() => setActiveHomeSection(null)}
                          className="p-3 hover:bg-aula-gray-light/20 rounded-full transition-colors"
                        >
                          <ChevronDown className="rotate-180 text-aula-black" size={28} />
                        </button>
                      </div>

                      {activeHomeSection === 'leer' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {allResources.bibliografia.map((res, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 bg-aula-gray-light/5 rounded-sm border-2 border-aula-gray-light/20 group hover:border-aula-red/40 transition-all">
                              <FileText className="text-aula-red shrink-0 mt-1" size={24} />
                              <div className="flex flex-col">
                                <span className="text-aula-black font-black uppercase tracking-tight text-lg leading-tight group-hover:text-aula-red transition-colors">{res.title}</span>
                                {res.url && (
                                  <a 
                                    href={res.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[10px] text-aula-red hover:underline flex items-center gap-1 mt-3 font-black uppercase tracking-[0.2em]"
                                  >
                                    Ver recurso <ExternalLink size={10} />
                                  </a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {activeHomeSection === 'mirar' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {allResources.audiovisual.map((res, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 bg-aula-gray-light/5 rounded-sm border-2 border-aula-gray-light/20 group hover:border-aula-yellow/40 transition-all">
                              <Video className="text-aula-yellow shrink-0 mt-1" size={24} />
                              <div className="flex flex-col">
                                <span className="text-aula-black font-black uppercase tracking-tight text-lg leading-tight group-hover:text-aula-yellow transition-colors">{res.title}</span>
                                {res.url && (
                                  <a 
                                    href={res.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[10px] text-aula-yellow hover:underline flex items-center gap-1 mt-3 font-black uppercase tracking-[0.2em]"
                                  >
                                    Ver recurso <ExternalLink size={10} />
                                  </a>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {activeHomeSection === 'detalles' && (
                        <div className="prose prose-slate max-w-none">
                          <p className="text-xl text-aula-black leading-relaxed font-medium">
                            El Proyecto Institucional <strong className="font-black text-aula-red">"Deportes: Un Hilo Conductor Interdisciplinario"</strong> busca integrar las diversas áreas del conocimiento a través del fenómeno deportivo. Entendemos al deporte no solo como actividad física, sino como un prisma a través del cual analizar la historia, la ciencia, la tecnología, la ética y la sociedad.
                          </p>
                          <p className="text-xl text-aula-black leading-relaxed mt-6 font-medium">
                            Este mapa curricular permite a los docentes de todas las materias encontrar puntos de contacto y disparadores críticos para sus planificaciones anuales, fomentando un aprendizaje situado y significativo para nuestros estudiantes. El deporte nos permite hablar de física en una trayectoria, de química en el metabolismo, de sociología en las tribus urbanas y de literatura en la épica del héroe.
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : viewMode === 'axes' ? (
            <motion.div 
              key="axes"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setViewMode('home')}
                    className="p-2 hover:bg-aula-gray-light/20 rounded-full transition-colors"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <h2 className="text-4xl font-black uppercase tracking-tighter">Ejes Temáticos</h2>
                </div>
                
                <div className="flex items-center gap-2 bg-aula-gray-light/10 p-1.5 rounded-sm">
                  <button 
                    onClick={() => { setActiveFilter('none'); setSelectedFilterValue(null); }}
                    className={`px-6 py-2.5 rounded-sm text-xs font-black uppercase tracking-widest transition-all ${activeFilter === 'none' ? 'bg-aula-red text-white shadow-lg shadow-aula-red/20' : 'text-aula-gray-dark hover:text-aula-black'}`}
                  >
                    Ejes
                  </button>
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => { 
                        setActiveFilter(activeFilter === 'triggers' ? 'none' : 'triggers'); 
                        setSelectedFilterValue(null); 
                      }}
                      className={`px-6 py-2.5 rounded-sm text-xs font-black uppercase tracking-widest transition-all ${activeFilter === 'triggers' ? 'bg-aula-red text-white shadow-lg shadow-aula-red/20' : 'text-aula-gray-dark hover:text-aula-black'}`}
                    >
                      Preguntas {activeFilter === 'triggers' ? '▲' : '▼'}
                    </button>
                    {activeFilter === 'triggers' && (
                      <div className="p-4 bg-white border-2 border-aula-black mt-2">
                        {/* Expanded content */}
                        <p className="text-xs font-bold mb-4">Preguntas Críticas disponibles: {allTriggers.length}</p>
                        {/* ... existing filter logic ... */}
                      </div>
                    )}
                  </div>
                  <button 
                    onClick={() => { setActiveFilter('crosses'); setSelectedFilterValue(null); }}
                    className={`px-6 py-2.5 rounded-sm text-xs font-black uppercase tracking-widest transition-all ${activeFilter === 'crosses' ? 'bg-aula-red text-white shadow-lg shadow-aula-red/20' : 'text-aula-gray-dark hover:text-aula-black'}`}
                  >
                    Cruces
                  </button>
                </div>
              </div>

              {activeFilter === 'none' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {axes.map(axis => (
                    <motion.div 
                      key={axis.id}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="bg-white p-10 rounded-sm border-2 border-aula-black shadow-[8px_8px_0px_0px_rgba(29,29,27,1)] hover:shadow-[12px_12px_0px_0px_rgba(239,53,53,1)] hover:border-aula-red transition-all cursor-pointer group relative overflow-hidden"
                      onClick={() => handleAxisSelect(axis)}
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-aula-red/5 -mr-12 -mt-12 rounded-full group-hover:bg-aula-red/10 transition-colors" />
                      <div className="relative z-10">
                        <span className="text-sm font-black text-aula-red mb-4 block uppercase tracking-[0.2em]">Eje {axis.id}</span>
                        <h3 className="text-2xl font-black text-aula-black leading-tight mb-4 break-words">{axis.title}</h3>
                        <div className="flex items-center gap-2 text-aula-gray-dark font-bold text-xs uppercase tracking-widest group-hover:text-aula-red transition-colors">
                          Explorar contenidos <ChevronRight size={16} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-10">
                  <div className="bg-white p-10 rounded-sm border-4 border-aula-black shadow-[12px_12px_0px_0px_rgba(29,29,27,1)]">
                    <h3 className="text-2xl font-black mb-8 flex items-center gap-4 uppercase tracking-tighter">
                      {activeFilter === 'triggers' ? <MessageSquare size={28} className="text-aula-red" /> : <Users size={28} className="text-aula-red" />}
                      {activeFilter === 'triggers' ? 'Explorar por Preguntas Críticas' : 'Explorar por Cruces Interdisciplinarios'}
                    </h3>
                    
                    {/* Active Filter Indicator */}
                    {selectedFilterValue && (
                      <div className="mb-6 flex items-center gap-2 bg-aula-red text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest inline-block">
                        Filtro activo: {selectedFilterValue}
                        <button onClick={() => setSelectedFilterValue(null)} className="ml-2 hover:text-aula-black">×</button>
                      </div>
                    )}

                    <div className="flex flex-col gap-3">
                      {activeFilter === 'crosses' && (
                        <select
                          value={selectedCycle}
                          onChange={(e) => setSelectedCycle(e.target.value as 'Ciclo Básico' | 'Ciclo Orientado' | 'Todos')}
                          className="w-full p-4 rounded-sm text-sm font-black uppercase tracking-widest bg-white text-aula-black border-4 border-aula-black focus:outline-hidden focus:border-aula-red transition-all"
                        >
                          <option value="Todos">Todos los ciclos</option>
                          <option value="Ciclo Básico">Ciclo Básico</option>
                          <option value="Ciclo Orientado">Ciclo Orientado</option>
                        </select>
                      )}
                      <input
                        type="text"
                        placeholder={activeFilter === 'triggers' ? "Buscar pregunta..." : "Buscar cruce..."}
                        value={themeSearchQuery}
                        onChange={(e) => setThemeSearchQuery(e.target.value)}
                        className="w-full p-4 rounded-sm text-sm font-black uppercase tracking-widest bg-white text-aula-black border-4 border-aula-black focus:outline-hidden focus:border-aula-red transition-all"
                      />
                      <div className="max-h-[300px] overflow-y-auto border-2 border-aula-black rounded-sm">
                        {(activeFilter === 'triggers' ? allTriggers : allCrosses)
                          .filter(val => val.toLowerCase().includes(themeSearchQuery.toLowerCase()))
                          .map((val, idx) => (
                            <button
                              key={idx}
                              onClick={() => setSelectedFilterValue(val === selectedFilterValue ? null : val)}
                              className={`w-full p-4 text-sm font-black uppercase tracking-widest text-left transition-all border-b border-aula-black ${
                                selectedFilterValue === val
                                  ? 'bg-aula-red text-white'
                                  : 'bg-white text-aula-black hover:bg-aula-black hover:text-white'
                              }`}
                            >
                              {val}
                              {activeFilter === 'triggers' && (
                                <span className="ml-2 text-[10px] opacity-70">
                                  ({axes.flatMap(a => a.subAxes).flatMap(s => s.themes).filter(t => t.criticalTriggers?.includes(val)).length} temas)
                                </span>
                              )}
                            </button>
                          ))}
                      </div>
                    </div>
                  </div>

                  {selectedFilterValue && (
                    <div className="animate-in fade-in slide-in-from-top-4">
                      <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-aula-gray-light/20">
                        <h4 className="text-2xl font-black text-aula-black uppercase tracking-tighter">
                          Temas vinculados a esta {activeFilter === 'triggers' ? 'pregunta' : 'área'}
                        </h4>
                        <div className="flex gap-4 items-center">
                          <input 
                            type="text"
                            placeholder="Buscar en resultados..."
                            value={themeSearchQuery}
                            onChange={(e) => setThemeSearchQuery(e.target.value)}
                            className="px-4 py-2 rounded-sm text-xs font-black uppercase tracking-widest bg-aula-gray-light/10 border-2 border-transparent focus:border-aula-red transition-all"
                          />
                          <div className="flex gap-2">
                            {(['todos', 'bibliografia', 'audiovisual'] as const).map(filter => (
                              <button
                                key={filter}
                                onClick={() => setResourceFilter(filter)}
                                className={`px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                                  resourceFilter === filter
                                    ? 'bg-aula-red text-white border-aula-red shadow-md'
                                    : 'bg-aula-gray-light/10 text-aula-gray-dark hover:bg-aula-gray-light/20 border-2 border-transparent'
                                }`}
                              >
                                {filter}
                              </button>
                            ))}
                          </div>
                        </div>
                        <span className="text-xs font-black text-white bg-aula-black px-4 py-1 rounded-sm uppercase tracking-widest">
                          {filteredThemesByAdvanced.filter(t => t.title.toLowerCase().includes(themeSearchQuery.toLowerCase())).length} resultados
                        </span>
                      </div>
                      {['Ciclo Básico', 'Ciclo Orientado'].map(cycle => {
                        const themesInCycle = filteredThemesByAdvanced
                          .filter(theme => theme.title.toLowerCase().includes(themeSearchQuery.toLowerCase()))
                          .filter(theme => 
                            theme.interdisciplinaryCrosses?.some(c => c.theme === selectedFilterValue && c.cycle === cycle)
                          );
                        if (themesInCycle.length === 0 || (selectedCycle !== 'Todos' && selectedCycle !== cycle)) return null;
                        return (
                          <div key={cycle} className="mb-8">
                            <h4 className="text-xl font-black text-aula-black uppercase tracking-tighter mb-4 border-b-2 border-aula-red pb-2">{cycle}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {themesInCycle.map(theme => (
                                <div key={theme.id} className="space-y-4">
                                  <ThemeCard 
                                    theme={theme} 
                                    highlighted={resourceFilter !== 'todos' && theme.resources?.some(r => r.type === resourceFilter)}
                                    onClick={() => navigate(`/theme/${theme.id}`)} 
                                    foci={theme.interdisciplinaryCrosses?.filter(c => c.theme === selectedFilterValue && c.cycle === cycle).flatMap(c => c.foci)}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              key="subjects"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <button 
                  onClick={() => setViewMode('home')}
                  className="p-2 hover:bg-aula-gray-light/20 rounded-full transition-colors"
                >
                  <ArrowLeft size={24} />
                </button>
                <h2 className="text-4xl font-black uppercase tracking-tighter">Navegar por Materias</h2>
              </div>

              <div className={`sticky top-24 bg-white/95 backdrop-blur-md z-40 transition-all duration-300 ${
                isScrolled ? 'py-4 mb-8 shadow-lg border-b-aula-red/20' : 'py-8 mb-16 border-b-aula-gray-light/30'
              } -mx-4 px-4 border-b`}>
                <div className="max-w-7xl mx-auto">
                  {!isScrolled && (
                    <div className="flex flex-wrap items-center gap-3 mb-8 pb-8 border-b border-aula-gray-light/20">
                      <span className="text-xs font-black text-aula-gray-dark uppercase tracking-[0.2em] mr-4">Año Lectivo:</span>
                      {years.map(year => (
                        <button
                          key={year}
                          onClick={() => setSelectedYear(year)}
                          className={`px-5 py-2.5 rounded-sm text-xs font-black uppercase tracking-widest transition-all ${
                            selectedYear === year 
                              ? 'bg-aula-black text-white shadow-xl' 
                              : 'bg-white text-aula-gray-dark border-2 border-aula-gray-light hover:border-aula-black hover:text-aula-black'
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className={`flex flex-col gap-6 transition-all duration-300 ${
                    isScrolled ? 'max-h-14 overflow-x-auto flex-nowrap pb-1 scrollbar-hide' : 'max-h-[800px]'
                  }`}>
                    {isScrolled ? (
                      <div className="flex gap-3">
                        {filteredSubjectsByYear.map(subject => (
                          <button
                            key={subject.name}
                            onClick={() => handleSubjectSelect(subject.name)}
                            className={`whitespace-nowrap rounded-sm font-black uppercase tracking-widest transition-all px-5 py-2 text-[10px] ${
                              selectedSubjects.includes(subject.name)
                                ? 'bg-aula-red text-white shadow-lg shadow-aula-red/30 scale-105 z-10' 
                                : 'bg-white text-aula-gray-dark border-2 border-aula-gray-light hover:border-aula-red hover:text-aula-red'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {getSubjectIcon(subject.name)}
                              {subject.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      (['Ciclo Básico', 'Ciclo Orientado', 'Comunes'] as Cycle[]).map(cycle => (
                        subjectsByCycle[cycle].length > 0 && (
                          <div key={cycle} className="space-y-4">
                            <h3 className="text-xs font-black text-aula-gray-dark uppercase tracking-[0.3em] flex items-center gap-3">
                              <div className="h-0.5 w-6 bg-aula-red" />
                              {cycle}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                              {subjectsByCycle[cycle].map(subject => (
                                <button
                                  key={subject.name}
                                  onClick={() => handleSubjectSelect(subject.name)}
                                  className={`whitespace-nowrap rounded-sm font-black uppercase tracking-widest transition-all px-6 py-3 text-xs border-2 ${
                                    selectedSubjects.includes(subject.name)
                                      ? 'bg-aula-red border-aula-red text-white shadow-xl shadow-aula-red/20 scale-105 z-10' 
                                      : 'bg-white text-aula-black border-aula-black hover:bg-aula-black hover:text-white'
                                  }`}
                                >
                                  <div className="flex items-center gap-2.5">
                                    {getSubjectIcon(subject.name)}
                                    {subject.name}
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )
                      ))
                    )}
                  </div>
                  {selectedSubjects.length > 0 && (
                    <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-aula-gray-light/30 animate-in fade-in slide-in-from-top-2 transition-all duration-300 ${
                      isScrolled ? 'pt-2 mt-2' : 'pt-6 mt-8'
                    }`}>
                      <h3 className={`${isScrolled ? 'text-base' : 'text-2xl'} font-black flex items-center gap-3 transition-all uppercase tracking-tighter`}>
                        Temas para <span className="text-aula-red">{selectedSubjects.join(', ')}</span>
                        <span className={`font-black text-white bg-aula-black px-3 py-0.5 rounded-sm ${isScrolled ? 'text-[10px]' : 'text-sm'}`}>
                          {filteredThemes.length}
                        </span>
                      </h3>
                      <div className="flex gap-2">
                        {(['todos', 'bibliografia', 'audiovisual'] as const).map(filter => {
                          const count = filter === 'todos' 
                            ? filteredThemes.length 
                            : filteredThemes.filter(t => t.resources?.some(r => r.type === filter)).length;
                          
                          return (
                            <button
                              key={filter}
                              onClick={() => setResourceFilter(filter)}
                              className={`px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all border-2 flex items-center gap-2 ${
                                resourceFilter === filter
                                  ? 'bg-aula-red text-white border-aula-red shadow-md'
                                  : 'bg-aula-gray-light/10 text-aula-gray-dark hover:bg-aula-gray-light/20 border-2 border-transparent'
                              }`}
                            >
                              {filter}
                              <span className={`px-1.5 py-0.5 rounded-full text-[9px] ${resourceFilter === filter ? 'bg-white/20' : 'bg-aula-gray-light/20'}`}>
                                {count}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                      {!isScrolled && (
                        <div className="flex items-center gap-3 text-[10px] font-black text-aula-gray-dark uppercase tracking-[0.3em]">
                          <div className="h-0.5 w-6 bg-aula-red" />
                          Explorando contenidos vinculados
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {selectedSubjects.length > 0 ? (
                <div ref={themesSectionRef} className="space-y-12 scroll-mt-48">
                  <ActiveFilters />
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {paginatedThemes.map(theme => (
                        <ThemeCard 
                          key={theme.id} 
                          theme={theme} 
                          highlighted={resourceFilter !== 'todos' && theme.resources?.some(r => r.type === resourceFilter)}
                          onClick={() => navigate(`/theme/${theme.id}`)} 
                        />
                      ))}
                    </div>
                    {filteredThemes.length > itemsPerPage && (
                      <div className="flex justify-center gap-4 mt-12">
                        <button 
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage(prev => prev - 1)}
                          className="px-6 py-2 bg-aula-black text-white rounded-sm disabled:opacity-50"
                        >
                          Anterior
                        </button>
                        <span className="flex items-center font-black">{currentPage} / {Math.ceil(filteredThemes.length / itemsPerPage)}</span>
                        <button 
                          disabled={currentPage === Math.ceil(filteredThemes.length / itemsPerPage)}
                          onClick={() => setCurrentPage(prev => prev + 1)}
                          className="px-6 py-2 bg-aula-black text-white rounded-sm disabled:opacity-50"
                        >
                          Siguiente
                        </button>
                      </div>
                    )}
                  </div>

                  {relatedSubjects.length > 0 && (
                    <div ref={relatedSectionRef} className="bg-aula-gray-light/5 p-10 rounded-sm border-4 border-aula-black shadow-[12px_12px_0px_0px_rgba(29,29,27,1)] scroll-mt-48">
                      <div className="mb-10 pb-6 border-b-2 border-aula-gray-light/20">
                        <h3 className="text-2xl font-black text-aula-black mb-2 flex items-center gap-3 uppercase tracking-tighter">
                          <Info size={28} className="text-aula-red" />
                          Ver también
                        </h3>
                        <p className="text-aula-gray-dark font-medium">Explora materias y áreas afines para enriquecer tu planificación</p>
                      </div>

                      <div className="space-y-12">
                        {/* Related Subjects Grid */}
                        <div>
                          <h4 className="text-xs font-black text-aula-gray-dark uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                            <div className="h-0.5 w-6 bg-aula-red" />
                            Materias vinculadas
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {relatedSubjects.map(subject => {
                              const isVisited = subjectHistory.has(subject);
                              return (
                                <button
                                  key={subject}
                                  onClick={() => handleSubjectSelect(subject)}
                                  className={`flex items-center gap-4 p-4 rounded-sm border-2 transition-all group text-left ${
                                    isVisited 
                                      ? 'bg-aula-gray-light/10 border-aula-gray-light/30 opacity-75 hover:opacity-100' 
                                      : 'bg-white border-aula-black hover:border-aula-red hover:shadow-[4px_4px_0px_0px_rgba(239,53,53,1)]'
                                  }`}
                                >
                                  <div className={`p-2.5 rounded-sm transition-colors ${
                                    isVisited ? 'bg-aula-gray-light/20' : 'bg-aula-gray-light/10 group-hover:bg-aula-red/10'
                                  }`}>
                                    <GraduationCap size={20} className={isVisited ? 'text-aula-gray-dark' : 'text-aula-black group-hover:text-aula-red'} />
                                  </div>
                                  <div className="flex flex-col">
                                    <span className={`text-xs font-black uppercase tracking-tight transition-colors line-clamp-2 leading-tight ${
                                      isVisited ? 'text-aula-gray-dark' : 'text-aula-black group-hover:text-aula-red'
                                    }`}>
                                      {subject}
                                    </span>
                                    {isVisited && (
                                      <span className="text-[8px] font-black text-aula-gray-dark uppercase tracking-widest mt-1">Ya visitada</span>
                                    )}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Related Themes (from history) */}
                        {relatedThemes.length > 0 && (
                          <div className="pt-12 border-t-2 border-aula-gray-light/20">
                            <h4 className="text-xs font-black text-aula-gray-dark uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                              <div className="h-0.5 w-6 bg-aula-red" />
                              Temas sugeridos de tu recorrido
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-90 hover:opacity-100 transition-opacity">
                              {relatedThemes.map(theme => (
                                <ThemeCard key={theme.id} theme={theme} onClick={() => navigate(`/theme/${theme.id}`)} />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-32 bg-white rounded-sm border-4 border-dashed border-aula-gray-light/40">
                  <Filter className="mx-auto text-aula-gray-light mb-6" size={64} />
                  <p className="text-aula-gray-dark font-black uppercase tracking-widest text-sm">Selecciona una materia para ver los temas relacionados.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Axis Detail Modal */}
      <AnimatePresence>
        {selectedAxis && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAxis(null)}
              className="absolute inset-0 bg-aula-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-sm shadow-2xl overflow-hidden flex flex-col border-4 border-aula-black"
            >
              <div className="p-8 border-b-2 border-aula-black flex items-center justify-between bg-white sticky top-0 z-10">
                <div>
                  <span className="text-xs font-black text-aula-red uppercase tracking-[0.3em] mb-2 block">Eje {selectedAxis.id}</span>
                  <h3 className="text-4xl font-black text-aula-black uppercase tracking-tighter leading-none">{selectedAxis.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedAxis(null)}
                  className="p-3 hover:bg-aula-gray-light/20 rounded-full transition-colors"
                >
                  <ChevronDown size={32} className="text-aula-black" />
                </button>
              </div>
              <div className="p-8 overflow-y-auto bg-aula-gray-light/5">
                {selectedAxis.subAxes.map(sub => (
                  <div key={sub.id} className="mb-16 last:mb-0">
                    <h4 className="text-2xl font-black text-aula-black mb-8 flex items-center gap-4">
                      <div className="w-12 h-12 bg-aula-red text-white rounded-sm flex items-center justify-center text-xl font-black shadow-lg shadow-aula-red/20">
                        {sub.id}
                      </div>
                      {sub.title}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {sub.themes.map(theme => (
                        <ThemeCard key={theme.id} theme={theme} onClick={() => navigate(`/theme/${theme.id}`)} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Theme Detail Modal */}
      {/* Subject Selection Modal */}
      <AnimatePresence>
        {pendingSubject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-aula-black/80 backdrop-blur-sm"
              onClick={() => setPendingSubject(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-sm shadow-2xl border-4 border-aula-black w-full max-w-md overflow-hidden"
            >
              <div className="p-10 text-center">
                <div className="w-20 h-20 bg-aula-red text-white rounded-sm flex items-center justify-center mx-auto mb-8 shadow-xl shadow-aula-red/20">
                  <GraduationCap size={40} />
                </div>
                <h3 className="text-3xl font-black text-aula-black mb-3 uppercase tracking-tighter">
                  {pendingSubject}
                </h3>
                <p className="text-aula-gray-dark mb-10 font-medium">
                  ¿Cómo te gustaría explorar esta materia?
                </p>
                
                <div className="space-y-4">
                  <button 
                    onClick={() => confirmSubjectSelect(pendingSubject, 'themes')}
                    className="w-full py-5 bg-aula-red text-white rounded-sm font-black uppercase tracking-widest shadow-xl shadow-aula-red/20 hover:bg-aula-red-dark hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                  >
                    <LayoutGrid size={20} />
                    Ver temas vinculados
                  </button>
                  <button 
                    onClick={() => confirmSubjectSelect(pendingSubject, 'related')}
                    className="w-full py-5 bg-white text-aula-black border-2 border-aula-black rounded-sm font-black uppercase tracking-widest hover:bg-aula-black hover:text-white hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                  >
                    <Info size={20} />
                    Materias relacionadas
                  </button>
                  <button 
                    onClick={() => setPendingSubject(null)}
                    className="w-full py-4 text-aula-gray-dark font-black uppercase tracking-widest text-xs hover:text-aula-red transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedTheme && (
          <div className="fixed inset-0 z-[100] flex justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => navigate(-1)}
              className="absolute inset-0 bg-aula-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative bg-white w-full max-w-2xl h-full shadow-2xl overflow-hidden flex flex-col border-l-4 border-aula-black"
            >
              <div className="p-8 border-b-2 border-aula-black flex items-center justify-between bg-white sticky top-0 z-10 shadow-sm">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => navigate(-1)}
                    className="p-2 hover:bg-aula-gray-light/20 rounded-full transition-colors text-aula-black"
                  >
                    <ArrowLeft size={28} />
                  </button>
                  <h3 className="text-3xl font-black text-aula-black uppercase tracking-tighter leading-tight pr-8">{selectedTheme.title}</h3>
                </div>
                <button 
                  onClick={() => navigate(-1)}
                  className="p-2 hover:bg-aula-gray-light/20 rounded-full transition-colors text-aula-gray-dark"
                >
                  <ChevronRight size={28} />
                </button>
              </div>
              <div ref={modalContentRef} className="p-10 overflow-y-auto flex-grow bg-white">
                <div className="mb-12">
                  <h4 className="text-xs font-black text-aula-red uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                    <div className="h-0.5 w-6 bg-aula-red" />
                    Descripción
                  </h4>
                  <p className="text-aula-black leading-relaxed text-xl font-medium">
                    {selectedTheme.description}
                  </p>
                </div>

                {selectedTheme.criticalTriggers && selectedTheme.criticalTriggers.length > 0 && (
                  <div className="mb-12 p-8 bg-aula-yellow/10 rounded-sm border-2 border-aula-yellow/30">
                    <h4 className="text-xs font-black text-aula-yellow uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                      <div className="h-0.5 w-6 bg-aula-yellow" />
                      Preguntas Críticas
                    </h4>
                    <ul className="space-y-4">
                      {selectedTheme.criticalTriggers.map((t, i) => (
                        <li key={i} className="text-aula-black flex items-start gap-4 font-bold text-lg leading-tight">
                          <span className="text-aula-yellow text-2xl leading-none">?</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedTheme.interdisciplinaryCrosses && selectedTheme.interdisciplinaryCrosses.length > 0 && (
                  <div className="mb-12">
                    <h4 className="text-xs font-black text-aula-red uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                      <div className="h-0.5 w-6 bg-aula-red" />
                      Cruces Interdisciplinarios
                    </h4>
                    <div className="space-y-12">
                      {['Ciclo Básico', 'Ciclo Orientado'].map(cycle => {
                        const cycleCrosses = selectedTheme.interdisciplinaryCrosses.filter(c => c.cycle === cycle);
                        if (cycleCrosses.length === 0) return null;

                        return (
                          <div key={cycle} className="space-y-8">
                            <h5 className="text-sm font-black px-5 py-2 rounded-sm uppercase tracking-[0.2em] inline-block bg-aula-black text-white">
                              {cycle}
                            </h5>
                            <div className="space-y-8">
                              {cycleCrosses.map((cross, idx) => (
                                <div key={idx} className="p-8 bg-white rounded-sm border-2 border-aula-gray-light/20 shadow-sm">
                                  <h6 className="text-lg font-black text-aula-black uppercase tracking-tight mb-4">{cross.theme}</h6>
                                  <ul className="space-y-3">
                                    {cross.foci.map((focus, fIdx) => (
                                      <li key={fIdx} className="text-aula-black text-base font-normal leading-relaxed tracking-tight">
                                        <span className="font-bold">{focus.subject}:</span> {focus.description}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {selectedTheme.entryPoints && (
                  <div className="mb-12">
                    <h4 className="text-xs font-black text-aula-gray-dark uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                      <div className="h-0.5 w-6 bg-aula-gray-dark" />
                      Puerta de Entrada (Talleres)
                    </h4>
                    <div className="p-6 bg-aula-gray-light/10 rounded-sm border-2 border-aula-gray-light/20 text-aula-black text-lg font-bold italic">
                      {selectedTheme.entryPoints}
                    </div>
                  </div>
                )}

                {selectedTheme.institutionalProposal && (
                  <div className="mb-12">
                    <h4 className="text-xs font-black text-aula-gray-dark uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                      <div className="h-0.5 w-6 bg-aula-gray-dark" />
                      Propuesta Interinstitucional
                    </h4>
                    <div className="p-6 bg-aula-gray-light/5 rounded-sm border-2 border-aula-gray-light/20 text-aula-black text-base font-medium">
                      {selectedTheme.institutionalProposal}
                    </div>
                  </div>
                )}

                <div className="mb-12">
                  <h4 className="text-xs font-black text-aula-red uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                    <div className="h-0.5 w-6 bg-aula-red" />
                    Materias por Ciclo
                  </h4>
                  <div className="space-y-6">
                    {Object.entries({
                      'Ciclo Básico': SUBJECT_CATEGORIES.basico,
                      'Ciclo Orientado': SUBJECT_CATEGORIES.orientado,
                      'Espacios Transversales / EDI': SUBJECT_CATEGORIES.transversales,
                      'Talleres de Arte / Otros': SUBJECT_CATEGORIES.talleres
                    }).map(([label, list]) => {
                      const filteredSubjects = selectedTheme.subjects.filter(s => list.includes(s));
                      if (filteredSubjects.length === 0) return null;
                      
                      return (
                        <div key={label}>
                          <h5 className="text-[10px] font-black text-aula-gray-dark uppercase tracking-widest mb-3">{label}</h5>
                          <div className="flex flex-wrap gap-2">
                            {filteredSubjects.map(s => (
                              <span key={s} className="px-4 py-2 bg-white text-aula-black rounded-sm text-xs font-black uppercase tracking-widest border-2 border-aula-black shadow-[4px_4px_0px_0px_rgba(29,29,27,1)]">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                  {((selectedTheme.teacherResources && selectedTheme.teacherResources.length > 0) || 
                    (selectedTheme.resources.filter(r => r.type === 'bibliografia').length > 0)) && (
                    <div>
                      <h4 className="text-xs font-black text-aula-red uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                        <div className="h-0.5 w-6 bg-aula-red" />
                        Recursos Docente
                      </h4>
                      <ul className="space-y-4">
                        {[...(selectedTheme.teacherResources || []), ...selectedTheme.resources.filter(r => r.type === 'bibliografia')].map((r, i) => (
                          <li key={i} className="text-sm text-aula-black flex items-start gap-3 group">
                            <div className="mt-1.5 min-w-[6px] h-1.5 bg-aula-red rounded-full" />
                            <div className="flex flex-col">
                              <span className="group-hover:text-aula-red transition-colors font-black uppercase tracking-tight leading-tight">{r.title}</span>
                              {r.description && <span className="text-xs text-aula-gray-dark font-medium mt-1">{r.description}</span>}
                              {r.url && (
                                <a 
                                  href={r.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-[10px] text-aula-red hover:underline flex items-center gap-1 mt-2 font-black uppercase tracking-widest"
                                >
                                  Enlace disponible <ExternalLink size={10} />
                                </a>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {((selectedTheme.studentResources && selectedTheme.studentResources.length > 0) || 
                    (selectedTheme.resources.filter(r => r.type === 'audiovisual').length > 0)) && (
                    <div>
                      <h4 className="text-xs font-black text-aula-yellow uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                        <div className="h-0.5 w-6 bg-aula-yellow" />
                        Recursos Alumnos
                      </h4>
                      <ul className="space-y-4">
                        {[...(selectedTheme.studentResources || []), ...selectedTheme.resources.filter(r => r.type === 'audiovisual')].map((r, i) => (
                          <li key={i} className="text-sm text-aula-black flex items-start gap-3 group">
                            {r.type === 'audiovisual' ? (
                              <Video size={16} className="mt-0.5 text-aula-yellow group-hover:scale-110 transition-transform" />
                            ) : (
                              <div className="mt-1.5 min-w-[6px] h-1.5 bg-aula-blue rounded-full" />
                            )}
                            <div className="flex flex-col">
                              <span className="group-hover:text-aula-red transition-colors font-black uppercase tracking-tight leading-tight">{r.title}</span>
                              {r.description && <span className="text-xs text-aula-gray-dark font-medium mt-1">{r.description}</span>}
                              {r.url && (
                                <a 
                                  href={r.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-[10px] text-aula-blue hover:underline flex items-center gap-1 mt-2 font-black uppercase tracking-widest"
                                >
                                  {r.type === 'audiovisual' ? 'Ver video' : 'Enlace disponible'} <ExternalLink size={10} />
                                </a>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-8 bg-aula-gray-light/5 border-t-2 border-aula-black flex justify-end">
                <button 
                  onClick={() => navigate(-1)}
                  className="px-10 py-4 bg-aula-black text-white rounded-sm font-black uppercase tracking-widest hover:bg-aula-red transition-all shadow-xl"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-aula-black text-white py-20 mt-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-12">
            <span className="text-[10px] font-medium tracking-[0.4em] text-aula-gray-light uppercase mb-2">Colegio Secundario</span>
            <span className="text-3xl font-black text-white font-display tracking-tight">AULA XXI</span>
          </div>
          <p className="text-aula-gray-light text-sm mb-10 max-w-xl mx-auto font-medium leading-relaxed">
            Proyecto Institucional "Deportes" - Guía de Abordaje Interdisciplinario para Docentes. 
            Un espacio para la construcción colectiva del conocimiento.
          </p>
          <div className="flex justify-center flex-wrap gap-x-12 gap-y-6 text-xs font-black uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-aula-red transition-colors">Sobre el Proyecto</a>
            <a href="#" className="hover:text-aula-red transition-colors">Recursos</a>
            <a href="#" className="hover:text-aula-red transition-colors">Contacto</a>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-[10px] text-aula-gray-dark font-bold uppercase tracking-widest">
            © 2026 Colegio Secundario Aula XXI - Todos los derechos reservados
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-[80] w-12 h-12 bg-aula-red text-white rounded-full shadow-lg shadow-aula-red/30 flex items-center justify-center hover:bg-aula-red/90 transition-colors"
            title="Volver arriba"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`px-6 py-2.5 rounded-sm flex items-center gap-3 font-black uppercase tracking-widest text-xs transition-all ${
        active 
          ? 'bg-aula-red text-white shadow-lg shadow-aula-red/20' 
          : 'text-aula-black hover:bg-aula-gray-light/10 hover:text-aula-red'
      }`}
    >
      {React.cloneElement(icon as React.ReactElement, { size: 16 } as any)}
      {label}
    </button>
  );
}

function FeatureCard({ icon, title, description, onClick, active }: { icon: React.ReactNode, title: string, description: string, onClick?: () => void, active?: boolean }) {
  return (
    <div 
      onClick={onClick}
      className={`p-10 rounded-sm border-2 transition-all duration-300 cursor-pointer text-left relative overflow-hidden ${
        active 
          ? 'bg-white border-aula-red shadow-[12px_12px_0px_0px_rgba(239,53,53,1)]' 
          : 'bg-white border-aula-black shadow-[8px_8px_0px_0px_rgba(29,29,27,1)] hover:shadow-[12px_12px_0px_0px_rgba(239,53,53,1)] hover:border-aula-red hover:-translate-y-1'
      }`}
    >
      <div className={`mb-6 inline-block p-4 rounded-sm transition-colors ${
        active ? 'bg-aula-red text-white' : 'bg-aula-black text-white'
      }`}>
        {React.cloneElement(icon as React.ReactElement, { size: 32 } as any)}
      </div>
      <h3 className={`text-2xl font-black mb-3 uppercase tracking-tighter transition-colors ${active ? 'text-aula-red' : 'text-aula-black'}`}>{title}</h3>
      <p className="text-aula-gray-dark font-medium leading-relaxed">{description}</p>
    </div>
  );
}

interface ThemeCardProps {
  theme: Theme;
  onClick: () => void;
  key?: React.Key;
  foci?: { subject: string; description: string }[];
  highlighted?: boolean;
}

function ThemeCard({ theme, onClick, foci, highlighted }: ThemeCardProps) {
  const previewImage = theme.resources?.find(r => r.type === 'imagen')?.url;
  const [showTooltip, setShowTooltip] = useState(false);

  const getResourceIcon = (type: Resource['type']) => {
    switch (type) {
      case 'bibliografia': return <BookOpen size={16} />;
      case 'audiovisual': return <Video size={16} />;
      case 'imagen': return <ImageIcon size={16} />;
      default: return <ExternalLink size={16} />;
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className={`group bg-white rounded-sm border-2 ${highlighted ? 'border-aula-red shadow-[10px_10px_0px_0px_rgba(239,53,53,0.5)]' : 'border-aula-black shadow-[6px_6px_0px_0px_rgba(29,29,27,1)]'} hover:shadow-[12px_12px_0px_0px_rgba(239,53,53,1)] hover:border-aula-red transition-all duration-300 cursor-pointer flex flex-col h-full relative overflow-hidden`}
      onClick={onClick}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-2 left-2 right-2 z-20 bg-aula-black text-white p-3 rounded-sm text-xs font-medium shadow-xl pointer-events-none"
          >
            <span className="font-black text-aula-red uppercase">Pregunta clave:</span> {theme.criticalTriggers?.[0] || theme.description.substring(0, 100) + '...'}
          </motion.div>
        )}
      </AnimatePresence>

      {previewImage && (
        <div className="h-56 overflow-hidden">
          <img 
            src={previewImage} 
            alt={`Vista previa de ${theme.title}`} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="flex flex-wrap gap-2">
            {theme.subjects.slice(0, 3).map(s => (
              <div 
                key={s} 
                className="flex items-center gap-2 px-3 py-1.5 bg-aula-gray-light/10 text-aula-black rounded-sm border border-aula-gray-light/30 text-[10px] font-black uppercase tracking-widest group-hover:bg-aula-red/5 group-hover:text-aula-red group-hover:border-aula-red/20 transition-colors"
                title={s}
              >
                {getSubjectIcon(s)}
                <span className="max-w-[100px] truncate">{s}</span>
              </div>
            ))}
            {theme.subjects.length > 3 && (
              <div className="px-2 py-1.5 bg-aula-gray-light/10 text-aula-gray-dark rounded-sm border border-aula-gray-light/30 text-[10px] font-black uppercase tracking-widest">
                +{theme.subjects.length - 3}
              </div>
            )}
          </div>
        </div>

        <h4 className="text-2xl font-black text-aula-black mb-4 leading-tight group-hover:text-aula-red transition-colors uppercase tracking-tighter">
          {theme.title}
        </h4>
        
        <p className="text-sm text-aula-gray-dark font-medium line-clamp-3 leading-relaxed mb-6 flex-grow">
          {theme.description}
        </p>
        
        {foci && (
          <div className="mt-auto bg-aula-gray-light/10 p-4 rounded-sm border border-aula-gray-light/30 text-xs">
            <h5 className="font-black uppercase tracking-widest mb-2 text-aula-red">Focos:</h5>
            <ul className="list-disc list-inside mt-1 space-y-1">
              {foci.map((focus, fIdx) => (
                <li key={fIdx} className="text-aula-gray-dark">
                  <span className="font-semibold text-aula-black">{focus.subject}:</span> {focus.description}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="px-8 py-5 bg-aula-gray-light/5 border-t-2 border-aula-black group-hover:border-aula-red transition-colors flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2 text-aula-black font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-aula-red transition-colors">
          Explorar tema
          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
        <div className="flex -space-x-2">
          {theme.resources.slice(0, 3).map((r, i) => (
            <div 
              key={i} 
              className="w-8 h-8 rounded-full bg-white border-2 border-aula-black flex items-center justify-center shadow-sm group-hover:border-aula-red transition-colors"
              title={r.title}
            >
              {getResourceIcon(r.type)}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
