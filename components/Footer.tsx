import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer id="contact" className="py-20 px-6 relative overflow-hidden scroll-mt-24">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          Let's build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">awesome together!</span>
        </h2>
        
        <p className="text-xl text-gray-400 mb-12">
          Have an idea? I'm always open to discussing new projects, creative opportunities or just chatting about design.
        </p>

        <button 
          onClick={onOpenContact} 
          className="inline-block px-10 py-4 rounded-full bg-white text-black font-medium text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)] mb-16"
        >
          Get In Touch
        </button>

        <div className="flex justify-center gap-6 mb-12">
          {[
            { icon: Github, href: '#' },
            { icon: Linkedin, href: '#' },
            { icon: Twitter, href: '#' },
            { icon: Mail, href: '#' }
          ].map((Social, idx) => (
            <a 
              key={idx}
              href={Social.href}
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/20 transition-all hover:-translate-y-1"
            >
              <Social.icon size={20} />
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Vlad Parole. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;