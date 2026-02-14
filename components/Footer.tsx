import React from 'react';
import { ARTIST_INFO } from '../constants';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-20 md:py-32 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* Left: Bio */}
        <div className="max-w-3xl space-y-10">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-ink rounded-full flex items-center justify-center text-white font-serif font-bold text-base shrink-0">
                果酱
             </div>
             <h2 className="text-xl font-serif font-bold text-ink">关于 · About</h2>
          </div>
          
          <div className="space-y-8">
            <div className="border-l-4 border-vermilion pl-6 py-1">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink mb-4 tracking-wide leading-tight">
                {ARTIST_INFO.intro}
              </h3>
              <p className="text-lg text-secondary leading-relaxed">
                {ARTIST_INFO.subIntro}
              </p>
            </div>

            <ul className="space-y-5 pt-4">
              {ARTIST_INFO.highlights.map((item, index) => (
                <li key={index} className="flex flex-col md:flex-row md:gap-4 text-base leading-relaxed text-secondary text-justify">
                  <span className="font-bold text-ink shrink-0 whitespace-nowrap pt-0.5 min-w-[5.5rem] text-lg">
                    {item.label}
                  </span>
                  <span className="text-ink/90 opacity-100 font-medium">
                    {item.content}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-gray-100 mt-8">
            <a 
              href={`mailto:${ARTIST_INFO.email}`} 
              className="flex items-center gap-3 text-ink hover:text-vermilion transition-colors group"
            >
              <Mail size={20} className="text-secondary group-hover:text-vermilion" />
              <span className="text-base border-b border-transparent group-hover:border-vermilion pb-0.5 font-medium">{ARTIST_INFO.email}</span>
            </a>
            <a 
              href={`tel:${ARTIST_INFO.phone.replace(/\s/g, '')}`} 
              className="flex items-center gap-3 text-ink hover:text-vermilion transition-colors group"
            >
              <Phone size={20} className="text-secondary group-hover:text-vermilion" />
              <span className="text-base border-b border-transparent group-hover:border-vermilion pb-0.5 font-medium">{ARTIST_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* Right: QR Code */}
        <div className="flex flex-col items-start lg:items-end space-y-6 lg:pt-2">
          <div className="bg-white p-4 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] rounded-sm border border-gray-50">
             {/* Updated to use local asset for the custom gradient QR code */}
             <img 
               src="/wechat-qr.png" 
               alt="WeChat QR Code" 
               className="w-36 h-36 object-contain"
             />
          </div>
          <p className="text-sm text-secondary font-bold tracking-widest uppercase">
            添加微信 / Add on WeChat
          </p>
        </div>

      </div>
      
      <div className="mt-24 text-center text-xs text-gray-400 font-medium tracking-widest uppercase">
        © {new Date().getFullYear()} {ARTIST_INFO.englishName}. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
