import React from 'react';
import { ARTIST_INFO } from '../constants';
import { Mail, Monitor } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-16 md:py-24 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Bio */}
        <div className="max-w-lg space-y-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-ink rounded-full flex items-center justify-center text-white font-serif font-bold text-sm">
                果
             </div>
             <h2 className="text-lg font-serif font-bold text-ink">关于 · About</h2>
          </div>
          <p className="text-secondary leading-relaxed font-light text-sm md:text-base text-justify">
            {ARTIST_INFO.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a 
              href={`mailto:${ARTIST_INFO.email}`} 
              className="flex items-center gap-2 text-ink hover:text-vermilion transition-colors group"
            >
              <Mail size={18} className="text-secondary group-hover:text-vermilion" />
              <span className="text-sm border-b border-transparent group-hover:border-vermilion pb-0.5">{ARTIST_INFO.email}</span>
            </a>
            <a 
              href={`https://${ARTIST_INFO.artstation}`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-ink hover:text-vermilion transition-colors group"
            >
              <Monitor size={18} className="text-secondary group-hover:text-vermilion" />
              <span className="text-sm border-b border-transparent group-hover:border-vermilion pb-0.5">ArtStation</span>
            </a>
          </div>
        </div>

        {/* Right: QR Code */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="bg-white p-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] rounded-sm border border-gray-50">
             {/* Mock QR Code - using a placeholder that looks code-like */}
             <img 
               src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=WeChat-GuoJiang-Art&color=333333&bgcolor=ffffff" 
               alt="WeChat QR Code" 
               className="w-28 h-28 mix-blend-multiply opacity-90"
             />
          </div>
          <p className="text-xs text-secondary tracking-widest uppercase">
            添加微信 / Add on WeChat
          </p>
        </div>

      </div>
      
      <div className="mt-16 text-center text-[10px] text-gray-400 font-light tracking-widest uppercase">
        © {new Date().getFullYear()} {ARTIST_INFO.englishName}. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;