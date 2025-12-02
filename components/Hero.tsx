import React from 'react';

interface HeroProps {
  onNavigate: (view: 'home' | 'work' | 'about' | 'tools') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20 bg-[#0f1014]">
      
      {/* --- Main Abstract Gradient Background --- */}
      {/* The large central gradient sphere acting as the visual anchor */}
      <div className="absolute top-1 left-1 translate-x-60 translate-y-60 w-[40vw] h-[40vw] md:w-[200px] md:h-[200px] bg-gradient-to-bl from-purple-600 via-cyan-600 to-green-400 rounded-full blur-sm opacity-100 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[400px] md:h-[400px] bg-gradient-to-br from-yellow-300 via-pink-500 to-cyan-500 rounded-full blur-sm opacity-100 z-0"></div>
      
      {/* --- 3D Floating Bubbles (Sharp & Vibrant) --- */}
      {/* Top Left - Greenish/Cyan */}
      <div className="absolute top-20 -left-10 md:left-10 w-32 h-32 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#bef264_0%,_#65a30d_100%)] shadow-2xl animate-float z-0"></div>
      
      {/* Top Right - Cyan/Blue */}
      <div className="absolute top-40 -right-10 md:right-20 w-24 h-24 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#22d3ee_0%,_#0891b2_100%)] shadow-2xl animate-float-delayed z-0 opacity-90"></div>
      
      {/* Bottom Left - Purple/Pink */}
      <div className="absolute bottom-20 left-4 md:left-20 w-20 h-20 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#f472b6_0%,_#be185d_100%)] shadow-xl animate-float-slow z-0"></div>
      
      {/* Bottom Right - Orange/Red (Large) */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#f97316_0%,_#9a3412_100%)] shadow-2xl opacity-80 animate-float z-0"></div>

      {/* Small Particles */}
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-yellow-300 rounded-full blur-[1px] animate-bounce"></div>
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-purple-400 rounded-full blur-[1px] animate-ping duration-[3000ms]"></div>


      {/* --- Main Content Grid --- */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        
        {/* Left: Typography & CTA */}
        <div className="relative text-center lg:text-left pt-10 lg:pt-0">
           
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4 tracking-tighter text-white drop-shadow-2xl">
             Hey, I'm  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-500">Vlad.</span>
           </h1>
           
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-10 text-white drop-shadow-md max-w-2xl mx-auto lg:mx-0">
             I craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-600">playful</span> digital experiences.
           </h2>

           <div className="flex justify-center lg:justify-start">
             <button 
               onClick={(e) => { e.preventDefault(); onNavigate('work'); window.scrollTo(0,0); }} 
               className="relative group inline-block m-2"
             >
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Button Container - Transparent BG, Double Border */}
                {/* Border-4 purple is inner, shadow ring cyan is outer */}
                <div className="relative px-10 py-4 rounded-full border-4 border-purple-500 shadow-[0_0_0_4px_#22d3ee] bg-transparent flex items-center gap-3 transition-transform transform group-hover:-translate-y-1 group-hover:scale-105">
                   <span className="font-black text-xl tracking-widest text-white z-10 drop-shadow-md">SEE MY WORK!</span>
                </div>
             </button>
           </div>
        </div>

        {/* Right: CSS Character (Multi-color Blob) */}
        <div className="relative flex justify-center items-center h-[400px] md:h-[500px]">
            {/* The Character Component */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float-subtle transform rotate-[6deg]">
               {/* Body: Gold/Pink Dominant with Green/Cyan bottom touch */}
               <div className="w-full h-full bg-[radial-gradient(circle_at_40%_30%,_#facc15_0%,_#fbbf24_20%,_#f472b6_50%,_#22d3ee_85%,_#4ade80_100%)] rounded-full shadow-2xl relative z-10 flex items-center justify-center overflow-hidden">
                  
                  {/* Face Group (Shifted MORE LEFT) */}
                  <div className="relative w-full h-full transform -translate-x-8 -translate-y-2">
                     {/* Glasses */}
                     <div className="absolute top-[28%] left-[55%] -translate-x-1/2 flex items-center gap-2 z-20 w-auto transform -rotate-2">
                        {/* Left Lens */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full border-[6px] md:border-[8px] border-[#1f2937] flex items-center justify-center relative shadow-lg">
                           <div className="w-5 h-5 md:w-6 md:h-6 bg-[#1f2937] rounded-full absolute top-[45%] right-[25%]"></div>
                           <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full absolute top-[40%] right-[30%] opacity-80"></div>
                        </div>
                        {/* Bridge */}
                        <div className="w-4 h-2 bg-[#1f2937] self-center rounded-full"></div>
                        {/* Right Lens */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full border-[6px] md:border-[8px] border-[#1f2937] flex items-center justify-center relative shadow-lg">
                           <div className="w-5 h-5 md:w-6 md:h-6 bg-[#1f2937] rounded-full absolute top-[45%] right-[25%]"></div>
                           <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full absolute top-[40%] right-[30%] opacity-80"></div>
                        </div>
                     </div>

                     {/* Mouth */}
                     <div className="absolute bottom-[45%] left-[58%] -translate-x-1/2 w-12 h-6 bg-[#1f2937] rounded-b-full overflow-hidden transform -rotate-2 z-20">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-3 bg-red-400 rounded-t-xl rounded-b-md transform translate-y-1"></div>
                     </div>
                  </div>
               </div>

               {/* Laptop Asset - Angled Left (Opposite) */}
               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-32 md:w-60 md:h-40 z-20 transform perspective-500 rotate-y-[20deg] rotate-x-[10deg] hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gray-200 rounded-xl border-[4px] md:border-[6px] border-white shadow-2xl flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300">
                     <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 shadow-inner flex items-center justify-center">
                         <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white opacity-50"></div>
                     </div>
                  </div>
               </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;