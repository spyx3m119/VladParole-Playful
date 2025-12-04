import React, { useState } from 'react';
import { Smartphone, Monitor, Palette, Sparkles, PenTool, Layers, Wand2, X, ExternalLink } from 'lucide-react';

const filters = ['All', 'React', 'PHP', 'Shopify', 'Wordpress', 'Figma/Design', 'HTML/CSS/JS'];

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

interface PersonalTool {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  story: string;
  categories: string[];
  url?: string;
  titleColor: string;
  gradientFrom: string;
  gradientTo: string;
  icon: 'layers' | 'sparkles' | 'pentool';
}

const personalTools: PersonalTool[] = [
  {
    id: 'shopify-app',
    title: 'SHOPIFY APP',
    subtitle: 'E-commerce Enhancement Tool',
    description: 'Custom Shopify application for enhanced store functionality.',
    story: 'This Shopify app was born out of a need to extend the platform beyond its default capabilities.\n\nI built custom features that help store owners:\n- Automate repetitive tasks\n- Enhance customer experience\n- Integrate with third-party services\n- Manage inventory more efficiently\n\nThe app leverages Shopify\'s API and modern web technologies to deliver a seamless experience.',
    categories: ['Shopify', 'React', 'Node.js'],
    url: '',
    titleColor: 'text-green-300',
    gradientFrom: 'from-green-400',
    gradientTo: 'to-emerald-600',
    icon: 'layers',
  },
  {
    id: 'shorts-creator',
    title: 'SHORTS CREATOR',
    subtitle: 'Automated Video Production',
    description: 'Automated short-form video creation tool.',
    story: 'The Shorts Creator is a passion project designed to streamline short-form video production.\n\nKey features include:\n- Automated video editing workflows\n- Template-based content creation\n- AI-assisted caption generation\n- Multi-platform export optimization\n\nThis tool helps content creators save hours of manual editing while maintaining creative control over their output.',
    categories: ['Python', 'FFmpeg', 'AI/ML'],
    url: '',
    titleColor: 'text-red-300',
    gradientFrom: 'from-red-500',
    gradientTo: 'to-rose-600',
    icon: 'sparkles',
  },
  {
    id: 'web-design-prototyper',
    title: 'WEB DESIGN PROTOTYPER',
    subtitle: 'Rapid Design Tool',
    description: 'Rapid prototyping tool for web design concepts.',
    story: 'The Web Design Prototyper is a tool I built to speed up my design-to-development workflow.\n\nIt allows me to:\n- Quickly sketch out layout ideas\n- Generate responsive grid systems\n- Preview designs across device sizes\n- Export clean, usable CSS\n\nWhat started as a personal utility has grown into a powerful prototyping companion that bridges the gap between design and code.',
    categories: ['React', 'TypeScript', 'CSS'],
    url: '',
    titleColor: 'text-cyan-300',
    gradientFrom: 'from-cyan-400',
    gradientTo: 'to-blue-600',
    icon: 'pentool',
  },
  {
    id: 'yt-thumbnail-generator',
    title: 'YT THUMBNAIL GENERATOR',
    subtitle: 'YouTube Thumbnail Creator',
    description: 'AI-powered thumbnail generation for YouTube videos.',
    story: 'The YT Thumbnail Generator was created to solve a common content creator pain point—making eye-catching thumbnails quickly.\n\nKey features include:\n- AI-powered image enhancement\n- Template library for quick designs\n- Text overlay with smart positioning\n- Face detection for optimal cropping\n- One-click export in YouTube-optimized dimensions\n\nThis tool helps creators focus on content while still maintaining professional-looking thumbnails that drive clicks.',
    categories: ['Python', 'AI/ML', 'React'],
    url: '',
    titleColor: 'text-orange-300',
    gradientFrom: 'from-orange-500',
    gradientTo: 'to-amber-600',
    icon: 'sparkles',
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: 'DASHBOARD APP',
    description: 'A custom-coded dashboard application built with MeteorJS, NodeJS, and MongoDB—my first deep dive into full-stack JavaScript.\n\nThis project opened the door to modern JS development and ultimately sparked my love for JavaScript tech stacks.',
    story: 'This dashboard app is where everything changed for me. Back in 2012, it was my first fully custom-coded application using MeteorJS, NodeJS, and MongoDB—a tech stack I had never touched before. I had to learn everything from scratch, from how Meteor handles data reactivity to how MongoDB structures collections. It was challenging, occasionally confusing, and absolutely thrilling.\n\nThis project didn’t just teach me new technologies—it introduced me to the mindset of modern development.\n- Thinking in components\n- Managing real-time data flows\n- Structuring APIs and backend logic\n- Understanding databases beyond simple CMS setups\n\nI built a functional dashboard with dynamic data, user interactions, and custom logic that made everything work smoothly. Every feature I coded felt like unlocking a new level in the game of development.\n\nBut the biggest impact?\nThis project made me fall in love with JavaScript. It pushed me to explore more modern stacks and eventually led me to React, which became a major part of my toolkit.\n\nKey Takeaways / Learnings:\n\n- Learned my first true full-stack JS framework (MeteorJS) from zero.\n- Gained confidence working with NodeJS environments and backend logic.\n- Built my first data-driven UI powered by MongoDB.\n- Discovered my passion for JavaScript, which shaped my development direction.\n- Developed the curiosity that eventually led me to React and other modern frameworks.\n\nThis dashboard app wasn’t just a project—it was the spark in 2012 that launched my journey into the world of JavaScript development.',
    categories: ['Javascript', 'MeteorJS', 'NodeJS', 'MongoDB'],
    titleColor: 'text-rose-300',
    gradientFrom: 'from-rose-400',
    gradientTo: 'to-pink-600',
    icon: 'sparkles',
    variant: 'monitor',
  },
  {
    id: 2,
    title: 'GIFT-CAMPAIGN APP',
    description: 'A joyful crowd-gifting app where you can create celebration campaigns, share a link with loved ones, and collect contributions toward your dream gift—while automatically giving a portion to the charity you choose.',
    story: 'I had the chance to help create a fun, feel-good crowd-gifting app, and it turned into an incredibly enjoyable and educational experience. \n\nBuilt under WordPress but custom coded using PHP and JavaScript, the project gave me plenty of room to dive into hands-on development. \n\nThe app allows users to set up celebration campaigns, share a unique link with friends and family, and collect contributions toward a gift fund. That fund is then split between a gift the recipient truly wants and a donation to a charity of their choice. Being part of building something that makes celebrations more meaningful—while also encouraging people to give back—was both rewarding and genuinely fun. \n\nI learned a lot throughout the process and loved bringing this joyful idea to life.',
    categories: ['Wordpress', 'PHP', "Javascript"],
    titleColor: 'text-cyan-300',
    gradientFrom: 'from-pink-400',
    gradientTo: 'to-purple-600',
    icon: 'monitor',
    variant: 'phone',
  },
  {
    id: 3,
    title: 'INVESTMENT WEBSITE',
    description: 'A suite of custom-built investment websites powered by WordPress, PHP, and a whole lot of clever coding. Each site was tailored to unique client needs—from dynamic dashboards to custom financial tools—making complex investment info feel smooth, secure, and user-friendly.',
    story: 'Building investment websites is like solving a financial puzzle… with WordPress, PHP, and a sprinkle of custom code magic.\n\nEach project under this category came with its own personality and set of challenges—no two clients wanted the same thing, and no template could keep up. \n\nMy role was part developer, part architect, part “translator of complicated client ideas into actual working features.”\nI handled everything from structuring secure data flows to crafting custom modules that WordPress could only dream of doing out of the box.\nWhether it was integrating investment calculators, designing intuitive dashboards, or making sure everything ran smooth as butter, I made sure each site delivered both performance and polish.\n\nKey Takeaways / Learnings:\n\n- Learned how to push WordPress far beyond traditional theme-and-plugin territory.\n- Sharpened my PHP and custom-coding skills by building features tailor-made for financial workflows.\n- Gained a deeper understanding of how clients think about investments—and how to translate that into UX that makes sense.\n- Mastered the art of keeping websites secure and stable in industries where uptime and trust are everything.In short, each project was a new challenge, a new puzzle, and a new win — all contributing to a portfolio of clean, capable, high-trust investment platforms.',
    categories: ['Wordpress', 'PHP', 'Figma/Design'],
    titleColor: 'text-white',
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-indigo-700',
    icon: 'monitor',
    variant: 'monitor',
  },
  {
    id: 4,
    title: 'FINANCIAL WEBSITE',
    subtitle: 'Webdesign, Posters, Digital Products',
    description: 'A collection of custom-built financial websites crafted with WordPress, PHP, and polished digital assets designed in Figma and Adobe.\n\nEach project came with its own unique requirements—from tailored financial tools to bespoke UI visuals—resulting in platforms that look sharp, run smoothly, and build trust at first glance.',
    story: 'Building financial websites isn’t just about code—it’s about creating trust.\n\nAcross multiple projects in this category, I blended WordPress, PHP, and custom design work from Figma and Adobe to deliver platforms that felt secure, professional, and visually refined. Every site had its own personality and set of requirements, which pushed me to adapt quickly and build solutions that fit both the brand and the financial service behind it. \n\nI handled both the technical and creative sides:\n- Developing custom functionalities in PHP\n- Extending WordPress beyond its usual limits\n- Designing clean, modern UI elements\n- Producing digital assets that elevated the overall look and feel\n\nThis combination of dev + design allowed me to create experiences that weren’t just functional—they were intuitive, visually coherent, and built for real users making important financial decisions.\n\nKey Takeaways / Learnings:\n\n- Improved my ability to merge design and development into one seamless workflow.\n- Strengthened my understanding of UX for financial platforms.\n- Became more efficient in building custom WP features tailored to strict client requirements.\n- Gained hands-on experience designing consistent visual systems using both Figma and Adobe tools.\n\nEach project was a chance to refine the balance between logic and aesthetics—ultimately creating financial websites that look as trustworthy as they function.',
    categories: ['Wordpress', 'PHP', 'Figma/Design'],
    titleColor: 'text-white',
    gradientFrom: 'from-indigo-500',
    gradientTo: 'to-purple-700',
    icon: 'palette',
    variant: 'phone',
  },
  {
    id: 5,
    title: 'DASHBOARD REDESIGN',
    description: 'A modern dashboard redesign built with React and crafted visually in Figma.\n\nThe result? A cleaner, faster, and more intuitive user experience that turns complex data into something users actually want to explore.',
    story: 'Redesigning a dashboard is like renovating a house while people still live in it—you can’t break anything, but everything still needs to feel brand new.\n\nFor this project, I combined the power of React with the visual clarity of Figma to transform an outdated interface into a smooth, modern, and user-friendly dashboard. The goal was simple: make complex information feel lightweight and easy to navigate.\n\nMy workflow went from pixels to components:\n- Using Figma to map out cleaner layouts, more intuitive navigation, and visual hierarchy that actually guides users\n- Translating those designs into React components that are reusable, modular, and fast\n- Improving data visualization with clearer structures and improved interaction patterns\n- Ensuring the final experience felt consistent, responsive, and delightful to use\n\nThis redesign wasn’t just a facelift—it was a full UX upgrade aimed at improving daily workflows and reducing user friction.\n\nKey Takeaways / Learnings:\n\n- Got better at turning Figma designs into flexible, component-based React architecture.\n- Learned how small UI changes can dramatically improve usability.\n- Strengthened my ability to collaborate between design and development disciplines.\n- Enhanced my skill in transforming cluttered information into clear, digestible visuals.\n\nIn the end, the dashboard became something users could rely on—not just for data, but for a smooth and enjoyable experience.',
    categories: ['React', 'Figma/Design'],
    titleColor: 'text-orange-300',
    gradientFrom: 'from-orange-400',
    gradientTo: 'to-red-600',
    icon: 'layers',
    variant: 'phone',
  },
  {
    id: 6,
    title: 'HEALTH WELLNESS WEBSITE',
    description: 'A clean and refreshing health & wellness landing page built with pure HTML, CSS, and JavaScript.\n\nLightweight, fast, and designed to give users that “ahhh” feeling the moment they land on the site.',
    story: 'Sometimes, the simplest tools deliver the most satisfying results.\n\nThis health and wellness landing page was crafted entirely with plain HTML, CSS, and JavaScript—no heavy frameworks, no complicated build tools, just clean front-end craftsmanship. The goal was to create a calming, inviting experience that reflected the client’s focus on wellness, balance, and holistic living.\n\nI focused heavily on the essentials:\n- Writing clean, semantic HTML for accessibility and SEO\n- Designing a refreshing, wellness-inspired layout using CSS\n- Adding gentle JS interactions to make the page feel alive without overwhelming the user\n- Ensuring the landing page stayed lightweight for fast load times\n\nWith no backend or extra tools in the mix, every detail—from spacing to animation timing—had to be deliberate and thoughtful.\n\nKey Takeaways / Learnings:\n\n- Strengthened my fundamentals by working purely with vanilla HTML/CSS/JS.\n- Gained a deeper appreciation for performance-first design.\n- Improved my ability to convey brand feeling through color, spacing, and typography.\n- Learned how subtle animations can set the tone for an entire user experience.\n\nA simple tech stack, but a polished and serene landing page that captures what wellness is all about.',
    categories: ['HTML/CSS/JS'],
    titleColor: 'text-emerald-300',
    gradientFrom: 'from-emerald-400',
    gradientTo: 'to-teal-600',
    icon: 'sparkles',
    variant: 'phone',
  },
  {
    id: 7,
    title: 'COLLEGE ATHLETE RECRUITING WEBSITE',
    description: 'A custom WordPress-powered recruiting platform designed like a social media hub for college athletes.\n\nBuilt with a fully custom plugin and a tailor-made UI, this site helps athletes showcase their skills while giving recruiters an easy, engaging way to discover new talent.',
    story: 'This project was a fun mix of creativity, strategy, and custom engineering.\n\nThe goal was to build a college athlete recruiting website that felt as familiar as a social media profile—but with features specifically designed for athletic recruitment. Using WordPress as the backbone, I developed a fully custom plugin and designed the entire interface to create a smooth, modern, and highly interactive experience.\n\nI handled everything end-to-end:\n- Designing athlete profile layouts with a social-media-style vibe\n- Building a custom plugin to manage profiles, stats, highlights, and recruitable details\n- Creating search and filtering tools to help recruiters find the right athletes quickly\n- Ensuring the UI looked bold, energetic, and sports-driven\n- Writing custom WordPress logic to handle data, feeds, and dynamic content\n\nThe biggest challenge—and the most rewarding part—was blending social features with a serious recruitment workflow. It had to look fun for athletes and feel powerful for recruiters.\n\nKey Takeaways / Learnings:\n\n- Learned how to architect complex WP plugins that go far beyond typical CMS use cases.\n- Improved my ability to design user profiles that are both visually appealing and data-rich.\n- Gained a deeper understanding of how recruiters evaluate athletes, and how UX can streamline that process.\n- Mastered the balance between “social media style” design and professional-level functionality.\n\nThe final product was fast, engaging, and incredibly practical—a platform athletes could proudly showcase, and recruiters could rely on.',
    categories: ['WOrdpress', 'PHP', 'Figma/Design'],
    titleColor: 'text-amber-300',
    gradientFrom: 'from-amber-400',
    gradientTo: 'to-orange-600',
    icon: 'palette',
    variant: 'phone',
  },
  {
    id: 8,
    title: 'ECOMMERCE STORE',
    description: 'A collection of custom-built eCommerce websites powered by either Shopify or WordPress—highlighted by a standout project where I integrated a full Shopify store directly into a WP ecosystem.\n\nThe result: seamless product syncing, smooth checkout flows, and an online shopping experience that feels unified from end to end.',
    story: 'Working on multiple eCommerce websites gave me the perfect playground to mix creativity with technical problem-solving.\n\nAcross these projects, I built custom online stores on WordPress—handling layouts, product displays, checkout flows, and performance tuning. But the most memorable challenge came from a unique requirement: connecting a WordPress site with a Shopify store and making it feel like one cohesive platform.\n\nThis wasn’t a simple “embed a buy button” task.\nIt required architecting a smooth bridge between two entirely different systems while keeping the user experience consistent and intuitive.\n\nHere’s what I handled:\n- Designing and building the WordPress front-end for product catalogs\n- Integrating Shopify’s backend for real checkout and inventory management\n- Custom-coding sync logic to keep product data updated\n- Ensuring the design remained unified across both systems\n- Optimizing for speed so pages loaded quickly despite pulling data from different platforms\n\nThe end result was an eCommerce experience where users couldn’t tell which parts were WordPress and which were Shopify—they just saw a fast, polished store.\n\nKey Takeaways / Learnings:\n\n- Learned how to merge WordPress and Shopify workflows without breaking UX consistency.\n- Improved my ability to create flexible product modules that adapt to external data sources.\n- Developed a deeper understanding of cross-platform eCommerce architectures.\n- Strengthened my skills in debugging API interactions and optimizing performance across multiple systems.\n\nThis project taught me that eCommerce doesn’t have to stick to one platform—sometimes the best solution is a clever fusion of both.',
    categories: ['Wordpress', 'Shopify', 'PHP'],
    titleColor: 'text-blue-300',
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-indigo-600',
    icon: 'monitor',
    variant: 'monitor',
  },
  {
    id: 9,
    title: 'KINDERGARTEN WEBSITE',
    description: 'A bright and playful kindergarten website built on Squarespace with custom content.\n\nDesigned to be engaging for parents and kids alike, while keeping management simple and smooth for staff.',
    story: 'This kindergarten website was all about creating a cheerful, welcoming digital space that parents and children would enjoy visiting.\n\nBuilt on Squarespace, I focused on custom content and design elements to make the site feel unique and friendly. The challenge was balancing playful visuals with clear, accessible information for parents, while keeping the backend easy for staff to manage.\n\nI handled everything from content layout to visual customization:\n- Crafting a fun and colorful design that reflects the kindergarten’s personality\n- Organizing content so parents could quickly find schedules, programs, and enrollment info\n- Customizing Squarespace templates to match brand colors and imagery\n- Ensuring responsive design for both desktop and mobile visitors\n\nKey Takeaways / Learnings:\n\n- Learned how to stretch Squarespace beyond its default templates using custom content.\n- Improved my skills in translating brand personality into an engaging website.\n- Strengthened my ability to create a user-friendly experience for non-technical audiences.\n- Gained insight into balancing aesthetics with functionality on small-scale CMS platforms.\n\nThe final website was fun, vibrant, and easy to navigate—a digital reflection of the kindergarten itself.',
    categories: ['Squarespace', 'HTML/CSS/JS'],
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

// Helper function to render formatted text with paragraphs, line breaks, and bullets
const FormattedText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  // Split by double newlines for paragraphs
  const paragraphs = text.split(/\n\n+/);

  return (
    <div className={className}>
      {paragraphs.map((paragraph, pIndex) => {
        // Check if paragraph contains bullet points (lines starting with - or *)
        const lines = paragraph.split('\n');
        const hasBullets = lines.some(line => /^[\-\*•]\s/.test(line.trim()));

        if (hasBullets) {
          // Render as a list
          const listItems: string[] = [];
          let currentItem = '';

          lines.forEach(line => {
            const trimmed = line.trim();
            if (/^[\-\*•]\s/.test(trimmed)) {
              if (currentItem) listItems.push(currentItem);
              currentItem = trimmed.replace(/^[\-\*•]\s+/, '');
            } else if (currentItem) {
              currentItem += ' ' + trimmed;
            } else {
              // Non-bullet line before bullets
              listItems.push(trimmed);
            }
          });
          if (currentItem) listItems.push(currentItem);

          return (
            <ul key={pIndex} className="list-disc list-inside space-y-1 mb-4">
              {listItems.map((item, iIndex) => (
                <li key={iIndex}>{item}</li>
              ))}
            </ul>
          );
        } else {
          // Render as paragraph with line breaks
          const parts = paragraph.split(/\n|<br\s*\/?>/);
          return (
            <p key={pIndex} className="mb-4 last:mb-0">
              {parts.map((part, partIndex) => (
                <React.Fragment key={partIndex}>
                  {part}
                  {partIndex < parts.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          );
        }
      })}
    </div>
  );
};

interface WorkPageProps {
  initialProjectId?: number | null;
  onProjectOpened?: () => void;
}

const WorkPage: React.FC<WorkPageProps> = ({ initialProjectId, onProjectOpened }) => {
  const [activeFilters, setActiveFilters] = useState<string[]>(['All']);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedDescriptionId, setExpandedDescriptionId] = useState<number | null>(null);
  const [selectedTool, setSelectedTool] = useState<PersonalTool | null>(null);

  // Open project modal if initialProjectId is provided
  React.useEffect(() => {
    if (initialProjectId) {
      const project = projects.find(p => p.id === initialProjectId);
      if (project) {
        setSelectedProject(project);
        onProjectOpened?.();
      }
    }
  }, [initialProjectId, onProjectOpened]);

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

  const filteredProjects = activeFilters.includes('All')
    ? projects
    : projects.filter(project => project.categories.some(cat => activeFilters.includes(cat)));

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
            <div className="px-6 py-2 rounded-full bg-[#4ade80] border-2 border-green-300 shadow-[0_0_15px_rgba(74,222,128,0.4)] inline-block self-start">
              <span className="text-black font-black text-sm tracking-wide">UI/UX PROJECTS</span>
            </div>
            {/* Filter Pills - Segmented Control with Glass & Neon */}
            <div className="inline-flex flex-wrap rounded-full bg-white/5 backdrop-blur-md border border-white/10 p-1.5 shadow-[0_0_20px_rgba(0,0,0,0.3)] self-start">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="relative">
                {/* Card */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group relative rounded-[2rem] bg-[#1e1b4b] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 h-[320px] cursor-pointer"
                >
                  <div className="p-6 relative z-10 h-[200px] flex flex-col">
                    <div className="flex gap-2 mb-3 flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                      <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    </div>
                    <div className="flex-shrink-0">
                      {project.subtitle ? (
                        <>
                          <h3 className={`text-lg font-bold ${project.titleColor} leading-tight truncate`}>{project.title}</h3>
                          <h3 className="text-sm font-medium text-yellow-500 leading-tight line-clamp-1">{project.subtitle}</h3>
                        </>
                      ) : (
                        <h3 className={`text-xl font-bold ${project.titleColor} leading-tight line-clamp-2`}>{project.title}</h3>
                      )}
                    </div>
                    <div className="mt-2 flex-shrink-0">
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{project.description}</p>
                      {project.description.length > 100 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedDescriptionId(expandedDescriptionId === project.id ? null : project.id);
                          }}
                          className="text-cyan-400 text-xs mt-1 hover:text-cyan-300 transition-colors text-left block"
                        >
                          {expandedDescriptionId === project.id ? 'Show less' : 'Read more...'}
                        </button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-auto flex-shrink-0">
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
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} opacity-20 -z-10`}></div>
                      <div className="absolute bottom-4 right-4 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        {getIcon(project.icon, 28)}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`absolute bottom-0 right-0 w-full h-48 bg-gradient-to-t ${project.gradientFrom}/20 to-transparent`}></div>
                      <div className={`absolute bottom-[-20px] right-[-20px] w-40 h-56 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} rounded-3xl transform -rotate-12 group-hover:-rotate-6 transition-transform duration-500 shadow-2xl flex items-center justify-center border-4 border-[#1e1b4b]`}>
                        {getIcon(project.icon, 48)}
                      </div>
                    </>
                  )}
                </div>

                {/* Description Bubble - Below the card */}
                {expandedDescriptionId === project.id && (
                  <div
                    className="absolute left-0 right-0 top-full mt-3 z-50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="bg-[#312e81] border border-cyan-400/30 rounded-xl p-4 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-[#312e81] border-l border-t border-cyan-400/30 transform rotate-45"></div>
                      <FormattedText text={project.description} className="text-gray-300 text-sm leading-relaxed relative z-10" />
                      <button
                        onClick={(e) => { e.stopPropagation(); setExpandedDescriptionId(null); }}
                        className="text-cyan-400 text-xs mt-3 hover:text-cyan-300 transition-colors font-medium"
                      >
                        Close
                      </button>
                    </div>
                  </div>
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

        {/* --- PERSONAL TOOLS AND PROJECTS SECTION --- */}
        <div className="mb-20">
          <div className="px-6 py-2 rounded-full bg-[#a855f7] border-2 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)] inline-block mb-8">
            <span className="text-white font-black text-sm tracking-wide">PERSONAL TOOLS AND PROJECTS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalTools.map((tool) => (
              <div
                key={tool.id}
                className={`h-[400px] rounded-[2.5rem] bg-[#1e1b4b] relative overflow-hidden group border border-white/5 hover:border-opacity-50 transition-colors cursor-pointer ${
                  tool.id === 'shopify-app' ? 'hover:border-green-500/50' :
                  tool.id === 'shorts-creator' ? 'hover:border-red-500/50' :
                  tool.id === 'yt-thumbnail-generator' ? 'hover:border-orange-500/50' :
                  'hover:border-cyan-500/50'
                }`}
                onClick={() => tool.url ? window.open(tool.url, '_blank') : setSelectedTool(tool)}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  tool.id === 'shopify-app' ? 'from-green-900 via-emerald-900 to-teal-900' :
                  tool.id === 'shorts-creator' ? 'from-red-900 via-rose-900 to-pink-900' :
                  tool.id === 'yt-thumbnail-generator' ? 'from-orange-900 via-amber-900 to-yellow-900' :
                  'from-cyan-900 via-blue-900 to-indigo-900'
                }`}></div>

                {/* Center icon/graphic */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {tool.id === 'shopify-app' && (
                    <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl flex items-center justify-center shadow-2xl animate-float">
                      <div className="w-16 h-16 border-4 border-white rounded-lg relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-6 border-4 border-white border-b-0 rounded-t-full"></div>
                      </div>
                    </div>
                  )}
                  {tool.id === 'shorts-creator' && (
                    <div className="w-28 h-28 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[35px] border-l-white border-b-[20px] border-b-transparent ml-2"></div>
                    </div>
                  )}
                  {tool.id === 'web-design-prototyper' && (
                    <div className="w-48 h-32 bg-white/10 rounded-xl border border-white/20 overflow-hidden animate-float-delayed">
                      <div className="h-6 bg-white/10 flex items-center px-2 gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                      <div className="p-2 space-y-2">
                        <div className="h-3 bg-cyan-400/30 rounded w-3/4"></div>
                        <div className="h-2 bg-white/20 rounded w-full"></div>
                        <div className="h-2 bg-white/20 rounded w-5/6"></div>
                        <div className="flex gap-1 mt-2">
                          <div className="h-8 bg-purple-400/30 rounded flex-1"></div>
                          <div className="h-8 bg-pink-400/30 rounded flex-1"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {tool.id === 'yt-thumbnail-generator' && (
                    <div className="w-44 h-28 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl shadow-2xl animate-float relative overflow-hidden">
                      {/* YouTube play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                      {/* Thumbnail preview lines */}
                      <div className="absolute bottom-2 left-2 right-2 space-y-1">
                        <div className="h-2 bg-white/30 rounded w-3/4"></div>
                        <div className="h-1.5 bg-white/20 rounded w-1/2"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative elements */}
                {tool.id === 'shopify-app' && (
                  <>
                    <div className="absolute top-8 right-8 w-16 h-16 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                    <div className="absolute bottom-32 left-8 w-20 h-20 bg-emerald-500 rounded-full blur-2xl opacity-20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </>
                )}
                {tool.id === 'shorts-creator' && (
                  <>
                    <div className="absolute top-12 left-8 w-8 h-24 bg-white/10 rounded flex flex-col justify-around py-1 animate-float-slow">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-6 h-4 bg-red-400/30 mx-auto rounded-sm"></div>
                      ))}
                    </div>
                    <div className="absolute top-20 right-12 w-8 h-24 bg-white/10 rounded flex flex-col justify-around py-1 animate-float-delayed">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-6 h-4 bg-rose-400/30 mx-auto rounded-sm"></div>
                      ))}
                    </div>
                  </>
                )}
                {tool.id === 'web-design-prototyper' && (
                  <>
                    <div className="absolute top-8 left-8 w-12 h-12 bg-cyan-400 rounded-full blur-xl opacity-30 animate-ping" style={{animationDuration: '3s'}}></div>
                    <div className="absolute top-16 right-16 w-16 h-16 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  </>
                )}
                {tool.id === 'yt-thumbnail-generator' && (
                  <>
                    <div className="absolute top-8 right-8 w-16 h-16 bg-orange-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                    <div className="absolute top-12 left-8 w-12 h-12 bg-amber-500 rounded-full blur-2xl opacity-20 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                    <div className="absolute bottom-36 right-12 w-10 h-10 bg-yellow-400 rounded-full blur-xl opacity-25 animate-ping" style={{animationDuration: '2s'}}></div>
                  </>
                )}

                {/* Bottom content */}
                <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className={`text-2xl font-bold ${tool.titleColor} mb-2`}>{tool.title}</h3>
                  <p className="text-gray-400 text-xs mb-4">{tool.description}</p>
                  {tool.icon === 'layers' && <Layers className="text-green-400 animate-bounce" />}
                  {tool.icon === 'sparkles' && tool.id === 'shorts-creator' && <Sparkles className="text-red-400 animate-pulse" />}
                  {tool.icon === 'sparkles' && tool.id === 'yt-thumbnail-generator' && <Sparkles className="text-orange-400 animate-pulse" />}
                  {tool.icon === 'pentool' && <PenTool className="text-cyan-400 animate-bounce" />}
                </div>
              </div>
            ))}
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
            className="relative max-w-2xl w-full max-h-[90vh] bg-[#1e1b4b] rounded-[2rem] border border-white/10 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className={`flex-shrink-0 h-32 bg-gradient-to-br ${selectedProject.gradientFrom} ${selectedProject.gradientTo} relative`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors z-10"
              >
                <X className="text-white" size={20} />
              </button>
              <div className="absolute bottom-4 left-6 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              </div>
            </div>

            {/* Content - scrollable */}
            <div className="p-8 overflow-y-auto flex-1">
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
                <FormattedText text={selectedProject.story} className="text-gray-300 leading-relaxed" />
              </div>
            </div>

            {/* Footer - fixed at bottom */}
            <div className="flex-shrink-0 px-8 py-6 border-t border-white/10 flex justify-end bg-[#1e1b4b]">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Personal Tool Modal */}
      {selectedTool && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedTool(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-[#1e1b4b] rounded-[2rem] border border-white/10 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className={`flex-shrink-0 h-32 bg-gradient-to-br ${selectedTool.gradientFrom} ${selectedTool.gradientTo} relative`}>
              <button
                onClick={() => setSelectedTool(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors z-10"
              >
                <X className="text-white" size={20} />
              </button>
              <div className="absolute bottom-4 left-6 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              </div>
            </div>

            {/* Content - scrollable */}
            <div className="p-8 overflow-y-auto flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className={`text-3xl font-bold ${selectedTool.titleColor} mb-1`}>
                    {selectedTool.title}
                  </h2>
                  <h3 className="text-xl font-bold text-cyan-400">{selectedTool.subtitle}</h3>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  {selectedTool.icon === 'layers' && <Layers className="text-white/80" size={32} />}
                  {selectedTool.icon === 'sparkles' && <Sparkles className="text-white/80" size={32} />}
                  {selectedTool.icon === 'pentool' && <PenTool className="text-white/80" size={32} />}
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedTool.categories.map((cat) => (
                  <span key={cat} className="px-4 py-1.5 rounded-full bg-white/10 text-sm text-gray-300 font-medium">
                    {cat}
                  </span>
                ))}
              </div>

              {/* Story */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Sparkles className="text-cyan-400" size={18} />
                  About This Tool
                </h4>
                <FormattedText text={selectedTool.story} className="text-gray-300 leading-relaxed" />
              </div>
            </div>

            {/* Footer - fixed at bottom */}
            <div className="flex-shrink-0 px-8 py-6 border-t border-white/10 flex justify-end gap-4 bg-[#1e1b4b]">
              {selectedTool.url && (
                <a
                  href={selectedTool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  Visit Website
                </a>
              )}
              <button
                onClick={() => setSelectedTool(null)}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkPage;