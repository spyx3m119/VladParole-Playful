import React from 'react';
import { AppWindow, ToyBrick, Puzzle, Code, Layers, Figma, Palette, Lightbulb } from 'lucide-react';

interface AboutPageProps {
  onOpenContact?: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact }) => {
  return (
    <div className="pt-52 pb-20 px-6 min-h-screen overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Top Section: Intro & Avatar --- */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12 relative">
          
          {/* Left Text */}
          <div className="text-center md:text-left relative z-10">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-lg leading-tight">
              HEY THERE!<br />
              I'M VLAD
            </h1>
            <h2 className="text-cyan-400 font-bold tracking-widest text-sm md:text-base uppercase mb-8">
              Creative Developer & Designer
            </h2>
          </div>

          {/* Center Avatar */}
          <div className="relative group">
            {/* Thought Bubble */}
            <div className="absolute -top-16 -right-16 bg-white text-black p-5 rounded-3xl rounded-bl-none shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-float-slow z-20">
              <Lightbulb className="text-yellow-500 fill-yellow-500" size={36} />
            </div>

            {/* Avatar Circle with Gradient Border */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full p-[6px] bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_40px_rgba(168,85,247,0.5)]">
               <div className="w-full h-full rounded-full overflow-hidden">
                 <svg viewBox="0 0 200 200" className="w-full h-full">
                   {/* Background */}
                   <defs>
                     <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                       <stop offset="0%" stopColor="#7dd3fc" />
                       <stop offset="100%" stopColor="#0ea5e9" />
                     </linearGradient>
                   </defs>
                   <circle cx="100" cy="100" r="100" fill="url(#skyGradient)" />

                   {/* Hoodie Body */}
                   <path d="M40 200 Q40 160 60 150 L140 150 Q160 160 160 200 Z" fill="#9333ea" />
                   {/* Hoodie Pocket */}
                   <rect x="70" y="175" width="60" height="20" rx="8" fill="#7e22ce" />
                   {/* Hoodie Strings */}
                   <rect x="85" y="152" width="3" height="18" rx="1.5" fill="#ffffff" />
                   <rect x="112" y="152" width="3" height="18" rx="1.5" fill="#ffffff" />

                   {/* Face */}
                   <ellipse cx="100" cy="110" rx="40" ry="48" fill="#f5d0c5" />

                   {/* Hair Base */}
                   <ellipse cx="100" cy="72" rx="44" ry="24" fill="#4b5563" />
                   {/* Hair Top Strands */}
                   <ellipse cx="75" cy="58" rx="6" ry="12" fill="#6b7280" />
                   <ellipse cx="88" cy="54" rx="5" ry="14" fill="#4b5563" />
                   <ellipse cx="100" cy="52" rx="6" ry="15" fill="#6b7280" />
                   <ellipse cx="112" cy="54" rx="5" ry="14" fill="#4b5563" />
                   <ellipse cx="125" cy="58" rx="6" ry="12" fill="#6b7280" />
                   {/* White Hair Strands */}
                   <ellipse cx="82" cy="56" rx="3" ry="10" fill="#e5e7eb" opacity="0.8" />
                   <ellipse cx="95" cy="53" rx="2" ry="11" fill="#f3f4f6" opacity="0.7" />
                   <ellipse cx="118" cy="55" rx="3" ry="10" fill="#e5e7eb" opacity="0.8" />
                   {/* Side Hair */}
                   <path d="M60 75 Q55 85 58 100" stroke="#4b5563" strokeWidth="12" fill="none" strokeLinecap="round" />
                   <path d="M140 75 Q145 85 142 100" stroke="#4b5563" strokeWidth="12" fill="none" strokeLinecap="round" />
                   {/* Gray Temple Highlights */}
                   <path d="M62 88 Q58 92 60 98" stroke="#9ca3af" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6" />
                   <path d="M138 88 Q142 92 140 98" stroke="#9ca3af" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.6" />

                   {/* Eyebrows */}
                   <rect x="75" y="96" width="16" height="4" rx="2" fill="#4b5563" transform="rotate(-5 83 98)" />
                   <rect x="109" y="96" width="16" height="4" rx="2" fill="#4b5563" transform="rotate(5 117 98)" />

                   {/* Eyes */}
                   <circle cx="83" cy="110" r="8" fill="#ffffff" />
                   <circle cx="117" cy="110" r="8" fill="#ffffff" />
                   <circle cx="85" cy="111" r="5" fill="#292524" />
                   <circle cx="115" cy="111" r="5" fill="#292524" />

                   {/* Nose */}
                   <ellipse cx="100" cy="124" rx="4" ry="6" fill="#e8bfb5" />

                   {/* Cheeks */}
                   <ellipse cx="72" cy="122" rx="8" ry="5" fill="#fda4af" opacity="0.4" />
                   <ellipse cx="128" cy="122" rx="8" ry="5" fill="#fda4af" opacity="0.4" />

                   {/* Stubble Beard */}
                   <g opacity="0.6">
                     {/* Chin area stubble */}
                     <circle cx="92" cy="145" r="1" fill="#6b7280" />
                     <circle cx="96" cy="147" r="1" fill="#6b7280" />
                     <circle cx="100" cy="148" r="1" fill="#6b7280" />
                     <circle cx="104" cy="147" r="1" fill="#6b7280" />
                     <circle cx="108" cy="145" r="1" fill="#6b7280" />
                     <circle cx="94" cy="150" r="1" fill="#6b7280" />
                     <circle cx="98" cy="152" r="1" fill="#6b7280" />
                     <circle cx="102" cy="152" r="1" fill="#6b7280" />
                     <circle cx="106" cy="150" r="1" fill="#6b7280" />
                     <circle cx="100" cy="155" r="1" fill="#6b7280" />
                     <circle cx="96" cy="154" r="1" fill="#6b7280" />
                     <circle cx="104" cy="154" r="1" fill="#6b7280" />
                     {/* Jawline stubble */}
                     <circle cx="88" cy="142" r="1" fill="#6b7280" />
                     <circle cx="112" cy="142" r="1" fill="#6b7280" />
                     <circle cx="85" cy="138" r="1" fill="#6b7280" />
                     <circle cx="115" cy="138" r="1" fill="#6b7280" />
                     <circle cx="82" cy="134" r="1" fill="#6b7280" />
                     <circle cx="118" cy="134" r="1" fill="#6b7280" />
                     {/* Upper lip area */}
                     <circle cx="94" cy="135" r="0.8" fill="#6b7280" />
                     <circle cx="98" cy="134" r="0.8" fill="#6b7280" />
                     <circle cx="102" cy="134" r="0.8" fill="#6b7280" />
                     <circle cx="106" cy="135" r="0.8" fill="#6b7280" />
                   </g>

                   {/* Smile */}
                   <path d="M92 138 Q100 146 108 138" stroke="#f87171" strokeWidth="3" fill="none" strokeLinecap="round" />

                   {/* Laptop Lid (back side) */}
                   <rect x="60" y="170" width="80" height="45" rx="4" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
                   {/* Laptop Logo */}
                   <rect x="92" y="185" width="16" height="18" rx="3" fill="#9ca3af" opacity="0.6" />
                   <circle cx="100" cy="182" r="3" fill="#9ca3af" />
                   {/* Laptop Base */}
                   <rect x="55" y="215" width="90" height="6" rx="2" fill="#9ca3af" />
                   <ellipse cx="100" cy="218" rx="15" ry="2" fill="#6b7280" />
                 </svg>
               </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="hidden md:block">
             <button
               onClick={onOpenContact}
               className="text-4xl font-black text-[#bef264] drop-shadow-[0_0_10px_rgba(190,242,100,0.5)] -rotate-6 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(190,242,100,0.8)] transition-all duration-300 cursor-pointer bg-transparent border-none"
             >
               LET'S CHAT!
             </button>
          </div>
        </div>

        {/* --- My Story Section --- */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-pink-300 mb-8 ml-2">MY STORY</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Story Text Card */}
             <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                {/* Blobs */}
                <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-pink-400 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-[-50px] left-[-50px] w-40 h-40 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
                
                <p className="relative z-10 text-xl md:text-2xl font-small leading-relaxed text-white drop-shadow-md">
                   I started shaping interfaces the way some people build Lego sets—one playful piece at a time. Now I design intuitive experiences by day and build side projects by night. For me, good design (and good teamwork) turns complexity into clarity.
                </p>
             </div>

             {/* Visual Story Card */}
             <div className="bg-gradient-to-br from-teal-400 via-green-400 to-yellow-300 rounded-[3rem] p-10 relative overflow-hidden flex items-center justify-center min-h-[300px]">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                
                {/* Floating Elements */}
                {/* Website Icon - Center */}
                <AppWindow className="text-indigo-900 drop-shadow-2xl relative z-10 rotate-12" size={100} />

                {/* Multiple Lego Pieces */}
                <ToyBrick className="absolute top-16 left-12 text-pink-600 animate-float-delayed rotate-[-20deg]" size={48} />
                <ToyBrick className="absolute bottom-12 right-16 text-cyan-500 animate-float rotate-[25deg]" size={56} />
                <ToyBrick className="absolute bottom-20 left-28 text-yellow-500 animate-bounce rotate-[-10deg]" size={36} />
                <ToyBrick className="absolute top-8 left-1/3 text-orange-500 animate-float-slow rotate-[15deg]" size={40} />

                {/* Multiple Puzzle Pieces */}
                <Puzzle className="absolute top-10 right-10 text-purple-600 animate-float rotate-[10deg]" size={52} />
                <Puzzle className="absolute bottom-8 right-1/3 text-pink-500 animate-float-delayed rotate-[-15deg]" size={38} />
                <Puzzle className="absolute top-1/3 right-20 text-emerald-500 animate-bounce rotate-[20deg]" size={44} />
                <Puzzle className="absolute bottom-16 left-10 text-blue-500 animate-float-slow rotate-[-25deg]" size={32} />
                <Puzzle className="absolute top-6 left-16 text-rose-400 animate-float rotate-[5deg]" size={28} />
                <Puzzle className="absolute bottom-6 right-8 text-amber-400 animate-float-delayed rotate-[-8deg]" size={46} />
             </div>
          </div>
        </div>

        {/* --- Skills & Tools Section --- */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-pink-300 mb-12 ml-2">SKILLS & TOOLS</h3>

          <div className="relative py-10">
             {/* Wavy Connector Line (SVG) */}
             <svg className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 hidden md:block pointer-events-none" viewBox="0 0 1200 100" preserveAspectRatio="none">
               <path d="M0 50 C 200 0, 400 100, 600 50 C 800 0, 1000 100, 1200 50" stroke="url(#waveGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
               <defs>
                 <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
                   <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                   <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
                   <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                 </linearGradient>
               </defs>
             </svg>

             {/* Skills Row */}
             <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-8 relative z-10 max-w-5xl mx-auto px-4">
                
                {/* JS */}
                <div className="flex flex-col items-center gap-2 group">
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0f1014] border-4 border-[#bef264] flex items-center justify-center shadow-[0_0_20px_rgba(190,242,100,0.3)] group-hover:scale-110 transition-transform bg-gradient-to-br from-gray-900 to-black">
                      <span className="font-black text-[#bef264] text-2xl">JS</span>
                   </div>
                </div>

                {/* React */}
                <div className="flex flex-col items-center gap-2 group mt-0 md:mt-12">
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0f1014] border-4 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:scale-110 transition-transform bg-gradient-to-br from-gray-900 to-black">
                      <Code className="text-cyan-400" size={32} />
                   </div>
                   <div className="px-3 py-1 bg-cyan-900/50 rounded-full border border-cyan-500/30 text-cyan-300 text-xs font-bold">REACT</div>
                </div>

                {/* Physics/Atom (Generic Tech) */}
                <div className="flex flex-col items-center gap-2 group">
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0f1014] border-4 border-pink-500 flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.3)] group-hover:scale-110 transition-transform bg-gradient-to-br from-gray-900 to-black">
                      <div className="relative w-10 h-10 animate-spin-slow">
                         <div className="absolute inset-0 border-2 border-pink-500 rounded-full transform rotate-0"></div>
                         <div className="absolute inset-0 border-2 border-pink-500 rounded-full transform rotate-60"></div>
                         <div className="absolute inset-0 border-2 border-pink-500 rounded-full transform rotate-120"></div>
                         <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-pink-300 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                      </div>
                   </div>
                </div>

                {/* UI/UX */}
                <div className="flex flex-col items-center gap-2 group mt-0 md:mt-12">
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0f1014] border-4 border-[#a855f7] flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform bg-gradient-to-br from-gray-900 to-black">
                      <span className="font-black text-[#a855f7] text-xl">UI/UX</span>
                   </div>
                   <div className="px-3 py-1 bg-purple-900/50 rounded-full border border-purple-500/30 text-purple-300 text-xs font-bold">DESIGN</div>
                </div>

                {/* Figma */}
                <div className="flex flex-col items-center gap-2 group">
                   <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0f1014] border-4 border-orange-400 flex items-center justify-center shadow-[0_0_20px_rgba(251,146,60,0.3)] group-hover:scale-110 transition-transform bg-gradient-to-br from-gray-900 to-black">
                      <Figma className="text-orange-400" size={32} />
                   </div>
                   <div className="px-3 py-1 bg-orange-900/50 rounded-full border border-orange-500/30 text-orange-300 text-xs font-bold">FIGMA</div>
                </div>

             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;