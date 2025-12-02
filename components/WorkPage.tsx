import React, { useRef, useState } from 'react';
import { Smartphone, Monitor, Palette, Gamepad2, MousePointer2, Sparkles, PenTool, Layers, Wand2, ChevronLeft, ChevronRight, X } from 'lucide-react';

const filters = ['All', 'React', 'PHP', 'Shopify', 'Wordpress', 'Figma/Design'];
const brandingFilters = ['All', 'Logos', 'Branding', 'Illustrations', 'Typography', 'Web Design & Prototypes'];

interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  story: string;
  categories: string[];
  titleColor: string;
  gradientFrom: string;
  gradientTo: string;
  icon: 'smartphone' | 'monitor' | 'layers' | 'sparkles' | 'palette' | 'pentool';
  variant: 'phone' | 'monitor' | 'minimal';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'ECO-BUDGET APP',
    description: 'Toordow doie semres peurstruid acroafftiert.',
    story: 'This eco-conscious budgeting app was born from a personal need to track both spending and environmental impact. Built with React Native, it features real-time expense categorization with carbon footprint calculations. The biggest challenge was creating an intuitive UI that made sustainability feel accessible, not preachy. After 3 months of user testing, we achieved a 40% increase in user engagement.',
    categories: ['React', 'Figma/Design'],
    titleColor: 'text-cyan-300',
    gradientFrom: 'from-pink-400',
    gradientTo: 'to-purple-600',
    icon: 'smartphone',
    variant: 'phone',
  },
  {
    id: 2,
    title: 'GALACTIC CAFE WEBSITE',
    description: 'Tocerber thlee dor aclodder ivadfrer sercolorpe iontais.',
    story: 'A whimsical website for a space-themed coffee shop in downtown. The client wanted visitors to feel like they were ordering coffee on a spaceship. I incorporated parallax scrolling, floating coffee cups, and a reservation system that mimics a spaceship booking terminal. The site increased their online orders by 65%.',
    categories: ['Wordpress', 'Figma/Design'],
    titleColor: 'text-white',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-indigo-700',
    icon: 'monitor',
    variant: 'monitor',
  },
  {
    id: 3,
    title: 'CALCATIC',
    subtitle: 'POSTERS',
    description: 'Tieresleer tnesis toastrack eriblam pandos.',
    story: 'A series of minimalist posters celebrating the beauty of mathematics and cosmic patterns. Each poster visualizes a different mathematical concept—from the Fibonacci sequence to fractal geometry. Created entirely in Figma with custom gradients and geometric shapes. The collection was featured in a local art gallery exhibition.',
    categories: ['Figma/Design'],
    titleColor: 'text-white',
    gradientFrom: 'from-indigo-500',
    gradientTo: 'to-purple-700',
    icon: 'palette',
    variant: 'minimal',
  },
  {
    id: 4,
    title: 'DASHBOARD REDESIGN',
    description: 'Reimagining data visualization for clarity.',
    story: 'Tasked with reimagining a cluttered analytics dashboard used by over 10,000 daily users. The original design had 47 different metrics on one screen. Through extensive user research, I identified the 8 most critical metrics and designed a modular system where users could customize their view. Post-launch surveys showed 89% user satisfaction.',
    categories: ['React', 'Figma/Design'],
    titleColor: 'text-orange-300',
    gradientFrom: 'from-orange-400',
    gradientTo: 'to-red-600',
    icon: 'layers',
    variant: 'phone',
  },
  {
    id: 5,
    title: 'HEALTH TRACKER',
    description: 'Wellness monitoring made simple.',
    story: 'A comprehensive health tracking app that connects with wearable devices. The unique challenge was presenting complex health data in a way that motivates rather than overwhelms users. I designed a "health score" system with gentle animations and encouraging micro-interactions. The app now has over 50,000 active users.',
    categories: ['React'],
    titleColor: 'text-emerald-300',
    gradientFrom: 'from-emerald-400',
    gradientTo: 'to-teal-600',
    icon: 'sparkles',
    variant: 'phone',
  },
  {
    id: 6,
    title: 'VINTAGE BOUTIQUE',
    description: 'E-commerce store with retro aesthetics.',
    story: 'An e-commerce platform for a vintage clothing store that wanted to feel like stepping into a 1970s boutique. Built on Shopify with heavy customization, featuring sepia-toned product photography, retro typography, and a unique "vinyl record" style product carousel. The store saw a 120% increase in average session duration.',
    categories: ['Shopify', 'Figma/Design'],
    titleColor: 'text-amber-300',
    gradientFrom: 'from-amber-400',
    gradientTo: 'to-orange-600',
    icon: 'palette',
    variant: 'phone',
  },
  {
    id: 7,
    title: 'REAL ESTATE CMS',
    description: 'Property management made effortless.',
    story: 'A custom content management system for a real estate agency managing 500+ properties. Built with PHP and Laravel, featuring automated listing syndication, virtual tour integration, and a client portal. The biggest win was reducing property upload time from 45 minutes to just 5 minutes per listing.',
    categories: ['PHP', 'Wordpress'],
    titleColor: 'text-blue-300',
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-indigo-600',
    icon: 'monitor',
    variant: 'monitor',
  },
  {
    id: 8,
    title: 'BRAND IDENTITY',
    description: 'Complete visual identity system design.',
    story: 'A comprehensive brand identity project for a tech startup entering the sustainable energy market. Developed the logo, color palette, typography system, and 60-page brand guidelines. The identity needed to convey innovation while remaining approachable. The final design was selected from 15 initial concepts after 8 rounds of refinement.',
    categories: ['Figma/Design'],
    titleColor: 'text-rose-300',
    gradientFrom: 'from-rose-400',
    gradientTo: 'to-pink-600',
    icon: 'pentool',
    variant: 'minimal',
  },
  {
    id: 9,
    title: 'BLOG THEME',
    description: 'Minimalist theme for content creators.',
    story: 'A WordPress theme designed specifically for long-form content creators. Features include a distraction-free reading mode, estimated reading time, and beautiful typography optimized for readability. Built with accessibility in mind, achieving WCAG AA compliance. The theme has been downloaded over 5,000 times.',
    categories: ['Wordpress', 'PHP'],
    titleColor: 'text-violet-300',
    gradientFrom: 'from-violet-400',
    gradientTo: 'to-purple-600',
    icon: 'layers',
    variant: 'phone',
  },
];

const getIcon = (iconName: Project['icon'], size: number) => {
  switch (iconName) {
    case 'smartphone': return <Smartphone className="text-white/80" size={size} />;
    case 'monitor': return <Monitor className="text-cyan-200 relative z-10" size={size} />;
    case 'layers': return <Layers className="text-white/80" size={size} />;
    case 'sparkles': return <Sparkles className="text-white/80" size={size} />;
    case 'palette': return <Palette className="text-white/80" size={size} />;
    case 'pentool': return <PenTool className="text-white/80" size={size} />;
    default: return <Smartphone className="text-white/80" size={size} />;
  }
};

interface BrandingItem {
  id: number;
  title: string;
  subtitle?: string;
  categories: string[];
  gradientFrom: string;
  gradientTo: string;
  emoji?: string;
  variant: 'emoji' | 'text' | 'face' | 'cosmic';
}

const brandingItems: BrandingItem[] = [
  {
    id: 1,
    title: '',
    categories: ['Illustrations'],
    gradientFrom: 'from-orange-400',
    gradientTo: 'to-pink-500',
    emoji: '😊',
    variant: 'emoji',
  },
  {
    id: 2,
    title: 'BACMILIS',
    subtitle: 'AGAS',
    categories: ['Branding', 'Logos'],
    gradientFrom: 'from-pink-300',
    gradientTo: 'to-purple-400',
    variant: 'text',
  },
  {
    id: 3,
    title: '',
    categories: ['Illustrations'],
    gradientFrom: 'from-indigo-500',
    gradientTo: 'to-indigo-500',
    variant: 'face',
  },
  {
    id: 4,
    title: 'AURORA',
    subtitle: 'LOGOS',
    categories: ['Logos', 'Branding'],
    gradientFrom: 'from-cyan-400',
    gradientTo: 'to-blue-600',
    variant: 'text',
  },
  {
    id: 5,
    title: 'COSMIC',
    categories: ['Typography', 'Illustrations'],
    gradientFrom: 'from-purple-900',
    gradientTo: 'to-purple-900',
    variant: 'cosmic',
  },
  {
    id: 6,
    title: 'STARTER',
    subtitle: 'KIT',
    categories: ['Web Design & Prototypes', 'Branding'],
    gradientFrom: 'from-emerald-400',
    gradientTo: 'to-teal-600',
    variant: 'text',
  },
  {
    id: 7,
    title: 'NEXUS',
    categories: ['Logos'],
    gradientFrom: 'from-rose-400',
    gradientTo: 'to-red-600',
    variant: 'text',
  },
  {
    id: 8,
    title: '',
    categories: ['Illustrations', 'Typography'],
    gradientFrom: 'from-yellow-400',
    gradientTo: 'to-amber-500',
    emoji: '🎨',
    variant: 'emoji',
  },
];

const WorkPage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>(['All']);
  const [activeBrandingFilters, setActiveBrandingFilters] = useState<string[]>(['All']);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => {
      if (filter === 'All') return ['All'];
      const withoutAll = prev.filter(f => f !== 'All');
      if (prev.includes(filter)) {
        const newFilters = withoutAll.filter(f => f !== filter);
        return newFilters.length === 0 ? ['All'] : newFilters;
      }
      return [...withoutAll, filter];
    });
  };

  const toggleBrandingFilter = (filter: string) => {
    setActiveBrandingFilters(prev => {
      if (filter === 'All') return ['All'];
      const withoutAll = prev.filter(f => f !== 'All');
      if (prev.includes(filter)) {
        const newFilters = withoutAll.filter(f => f !== filter);
        return newFilters.length === 0 ? ['All'] : newFilters;
      }
      return [...withoutAll, filter];
    });
  };

  const filteredProjects = activeFilters.includes('All')
    ? projects
    : projects.filter(project => project.categories.some(cat => activeFilters.includes(cat)));

  const filteredBrandingItems = activeBrandingFilters.includes('All')
    ? brandingItems
    : brandingItems.filter(item => item.categories.some(cat => activeBrandingFilters.includes(cat)));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              DIGITAL EXPLORATIONS
            </span>
          </h1>
          <p className="text-gray-400 tracking-[0.2em] text-sm uppercase font-bold">
            A Collection of Creative Journeys
          </p>
          
          {/* Decorative particles */}
          <div className="absolute top-0 right-1/4 w-4 h-4 bg-pink-500 rounded-full blur-[2px] animate-bounce"></div>
          <div className="absolute bottom-0 left-1/4 w-3 h-3 bg-cyan-400 rounded-full blur-[1px] animate-ping duration-[3000ms]"></div>
        </div>

        {/* --- Intro Section: Text & Animated Visual --- */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-12 relative">

          {/* Left Text */}
          <div className="md:w-1/2 text-center md:text-left relative z-10">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Here's a peek at the projects that shaped my craft—adventures in designing smoother journeys, clearer paths, and friendlier interfaces. I can't share every pixel <span className="text-pink-600 font-xs">(NDA's)</span>, but I can share the stories, the impact, and all the <span className="text-cyan-400 font-medium">"aha!"</span> moments along the way. The details stay behind the curtain, yet the process, lessons, and a touch of <span className="text-pink-400 font-medium">playfulness</span> shine through.
            </p>
          </div>

          {/* Right Animated Visual */}
          <div className="md:w-1/2 flex justify-center items-center relative">
            <div className="relative w-64 h-64">
              {/* Central glowing orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse"></div>

              {/* Floating design elements */}
              <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <PenTool className="text-white" size={28} />
              </div>

              <div className="absolute top-8 right-6 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-float-delayed">
                <Layers className="text-white" size={24} />
              </div>

              <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-float-slow">
                <Sparkles className="text-white" size={32} />
              </div>

              <div className="absolute bottom-4 right-4 w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                <Wand2 className="text-white" size={28} />
              </div>

              {/* Central monitor/screen icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/20">
                <Monitor className="text-white" size={40} />
              </div>

              {/* Orbiting dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
        </div>

        {/* --- UI/UX PROJECTS SECTION --- */}
        <div className="mb-20">
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex justify-between items-center">
              <div className="px-6 py-2 rounded-full bg-[#4ade80] border-2 border-green-300 shadow-[0_0_15px_rgba(74,222,128,0.4)]">
                <span className="text-black font-black text-sm tracking-wide">UI/UX PROJECTS</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-full bg-[#1e293b] border border-white/10 flex items-center justify-center text-white hover:bg-[#4ade80] hover:text-black transition-all duration-300"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-full bg-[#1e293b] border border-white/10 flex items-center justify-center text-white hover:bg-[#4ade80] hover:text-black transition-all duration-300"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
            {/* Filter Pills - Segmented Control with Glass & Neon */}
            <div className="inline-flex rounded-full bg-white/5 backdrop-blur-md border border-white/10 p-1.5 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => toggleFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeFilters.includes(filter)
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.5),inset_0_0_10px_rgba(34,211,238,0.1)]'
                      : 'text-gray-400 border border-transparent hover:text-white hover:bg-white/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-[2rem] bg-[#1e1b4b] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 min-w-[350px] flex-shrink-0 cursor-pointer"
              >
                <div className="p-8 pb-32 relative z-10">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                    <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  </div>
                  {project.subtitle ? (
                    <>
                      <h3 className={`text-xl font-bold ${project.titleColor} mb-1`}>{project.title}</h3>
                      <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.subtitle}</h3>
                    </>
                  ) : (
                    <h3 className={`text-2xl font-bold ${project.titleColor} mb-2`}>{project.title}</h3>
                  )}
                  <p className="text-gray-400 text-xs leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.categories.map((cat) => (
                      <span key={cat} className="inline-block px-3 py-1 rounded-full bg-white/10 text-[10px] text-gray-300 font-medium">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {project.variant === 'monitor' ? (
                  <>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#3b0764]/50"></div>
                    <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-48 h-40 bg-[#312e81] rounded-t-3xl border-t-4 border-l-4 border-r-4 border-[#4338ca] group-hover:translate-y-[-10px] transition-transform duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 bg-pink-500 rounded-full blur-md absolute top-4 left-4"></div>
                      {getIcon(project.icon, 64)}
                    </div>
                  </>
                ) : project.variant === 'minimal' ? (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} opacity-20 -z-10`}></div>
                ) : (
                  <>
                    <div className={`absolute bottom-0 right-0 w-full h-48 bg-gradient-to-t ${project.gradientFrom}/20 to-transparent`}></div>
                    <div className={`absolute bottom-[-20px] right-[-20px] w-40 h-56 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} rounded-3xl transform -rotate-12 group-hover:-rotate-6 transition-transform duration-500 shadow-2xl flex items-center justify-center border-4 border-[#1e1b4b]`}>
                      {getIcon(project.icon, 48)}
                    </div>
                  </>
                )}
              </div>
            ))}

            {filteredProjects.length === 0 && (
              <div className="flex items-center justify-center w-full py-16 text-gray-500">
                No projects found for this filter.
              </div>
            )}
          </div>
        </div>

        {/* --- BRANDING & ART SECTION --- */}
        <div className="mb-20">
          <div className="flex flex-col gap-4 mb-8">
            <div className="px-6 py-2 rounded-full bg-[#fb923c] border-2 border-orange-300 shadow-[0_0_15px_rgba(251,146,60,0.4)] inline-block self-start">
              <span className="text-black font-black text-sm tracking-wide">BRANDING & ART</span>
            </div>

            {/* Filter Pills - Segmented Control with Glass & Neon */}
            <div className="inline-flex flex-wrap rounded-full bg-white/5 backdrop-blur-md border border-white/10 p-1.5 shadow-[0_0_20px_rgba(0,0,0,0.3)] self-start">
              {brandingFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => toggleBrandingFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeBrandingFilters.includes(filter)
                      ? 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-400 border border-orange-400/50 shadow-[0_0_15px_rgba(251,146,60,0.5),inset_0_0_10px_rgba(251,146,60,0.1)]'
                      : 'text-gray-400 border border-transparent hover:text-white hover:bg-white/5'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredBrandingItems.map((item) => (
              <div
                key={item.id}
                className="aspect-square rounded-[2rem] bg-[#312e81] p-6 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                {item.variant === 'emoji' && (
                  <div className={`absolute inset-4 bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} rounded-[1.5rem] flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-2xl">{item.emoji}</span>
                      </div>
                    </div>
                  </div>
                )}

                {item.variant === 'text' && (
                  <div className={`absolute inset-4 bg-gradient-to-tr ${item.gradientFrom} ${item.gradientTo} rounded-[1.5rem] overflow-hidden`}>
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <h4 className="font-black text-white text-lg leading-none">{item.title}</h4>
                      {item.subtitle && <h4 className="font-black text-white text-lg leading-none">{item.subtitle}</h4>}
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/swirl.png')] opacity-20"></div>
                  </div>
                )}

                {item.variant === 'face' && (
                  <div className={`absolute inset-4 bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} rounded-[1.5rem] flex items-center justify-center overflow-hidden`}>
                    <div className="w-24 h-24 bg-orange-300 rounded-full relative">
                      <div className="absolute top-6 left-4 w-4 h-4 bg-black rounded-full"></div>
                      <div className="absolute top-8 right-6 w-12 h-6 bg-black rounded-b-full"></div>
                    </div>
                  </div>
                )}

                {item.variant === 'cosmic' && (
                  <div className={`absolute inset-4 ${item.gradientFrom === item.gradientTo ? 'bg-purple-900' : `bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo}`} rounded-[1.5rem] flex items-center justify-center overflow-hidden border border-white/10`}>
                    <h4 className="font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500 opacity-80 rotate-12">{item.title}</h4>
                    <div className="absolute bottom-2 text-xs font-bold text-white/50 uppercase tracking-widest">{item.categories[0]}</div>
                  </div>
                )}

                {/* Category badges */}
                <div className="absolute top-2 right-2 flex flex-wrap gap-1 justify-end z-10">
                  {item.categories.map((cat) => (
                    <span key={cat} className="px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm text-[10px] text-white/70 font-medium">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {filteredBrandingItems.length === 0 && (
              <div className="col-span-full flex items-center justify-center py-16 text-gray-500">
                No items found for this filter.
              </div>
            )}
          </div>
        </div>

        {/* --- PERSONAL TOOLS AND PROJECTS SECTION --- */}
        <div className="mb-20">
          <div className="px-6 py-2 rounded-full bg-[#a855f7] border-2 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] inline-block mb-8">
            <span className="text-white font-black text-sm tracking-wide">PERSONAL TOOLS AND PROJECTS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Interactive 1 */}
            <div className="h-[400px] rounded-[2.5rem] bg-[#1e1b4b] relative overflow-hidden group border border-white/5 hover:border-purple-500/50 transition-colors">
               {/* Background Scene */}
               <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-black"></div>
               {/* Elements */}
               <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full blur-xl opacity-20"></div>
               <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-500 rounded-full blur-2xl opacity-20"></div>
               
               <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2">PUFFY PLANET GAME</h3>
                  <p className="text-gray-400 text-xs mb-4">Keeolber fiem dvore t broet tor diepns.</p>
                  <Gamepad2 className="text-purple-400" />
               </div>
               
               {/* Playful Characters */}
               <div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex gap-4 animate-float-slow">
                  <div className="w-12 h-16 bg-pink-500 rounded-t-full rounded-b-lg"></div>
                  <div className="w-16 h-12 bg-cyan-400 rounded-full"></div>
               </div>
            </div>

            {/* Interactive 2 */}
            <div className="h-[400px] rounded-[2.5rem] bg-[#1e1b4b] relative overflow-hidden group border border-white/5 hover:border-pink-500/50 transition-colors">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
               
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-2 opacity-50">
                     {[...Array(16)].map((_, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full ${i % 2 === 0 ? 'bg-cyan-400' : 'bg-pink-500'} animate-pulse`} style={{animationDelay: `${i * 0.1}s`}}></div>
                     ))}
                  </div>
               </div>

               <div className="absolute bottom-0 w-full p-8">
                  <h3 className="text-2xl font-bold text-orange-300 mb-2">SOUND ORB</h3>
                  <p className="text-gray-400 text-xs mb-4">Scontelt Kee srorlais poor dooo.</p>
                  <MousePointer2 className="text-orange-400" />
               </div>
            </div>
          </div>
        </div>

      </div>

      {/* Project Story Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-[#1e1b4b] rounded-[2rem] border border-white/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className={`h-32 bg-gradient-to-br ${selectedProject.gradientFrom} ${selectedProject.gradientTo} relative`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors"
              >
                <X className="text-white" size={20} />
              </button>
              <div className="absolute bottom-4 left-6 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className={`text-3xl font-bold ${selectedProject.titleColor} mb-1`}>
                    {selectedProject.title}
                  </h2>
                  {selectedProject.subtitle && (
                    <h3 className="text-xl font-bold text-cyan-400">{selectedProject.subtitle}</h3>
                  )}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  {getIcon(selectedProject.icon, 32)}
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.categories.map((cat) => (
                  <span key={cat} className="px-4 py-1.5 rounded-full bg-white/10 text-sm text-gray-300 font-medium">
                    {cat}
                  </span>
                ))}
              </div>

              {/* Story */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Sparkles className="text-cyan-400" size={18} />
                  The Story
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.story}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkPage;