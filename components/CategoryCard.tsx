import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onClick: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <motion.div
      className="group relative cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
      onClick={() => onClick(category)}
    >
      <div className="relative aspect-[3/4] w-full max-w-sm mx-auto">
        
        {/* Stack Layer 2 (Bottom) - Lighter shadow */}
        <motion.div
          className="absolute inset-0 bg-white shadow-sm rounded-sm overflow-hidden border border-gray-100"
          variants={{
            rest: { rotate: 0, x: 0, y: 0, opacity: 0 },
            hover: { 
              rotate: 6, 
              x: 15, 
              y: 5, 
              opacity: 1,
              transition: { duration: 0.4, ease: "backOut" } 
            }
          }}
        >
          <img 
            src={category.stackImages[1]} 
            alt="" 
            className="w-full h-full object-cover opacity-80" 
          />
        </motion.div>

        {/* Stack Layer 1 (Middle) */}
        <motion.div
          className="absolute inset-0 bg-white shadow-sm rounded-sm overflow-hidden border border-gray-100"
          variants={{
            rest: { rotate: 0, x: 0, y: 0, opacity: 0 },
            hover: { 
              rotate: -4, 
              x: -15, 
              y: 5, 
              opacity: 1,
              transition: { duration: 0.3, ease: "backOut" } 
            }
          }}
        >
          <img 
            src={category.stackImages[0]} 
            alt="" 
            className="w-full h-full object-cover opacity-90" 
          />
        </motion.div>

        {/* Main Card (Top) - Premium Apple-style shadow */}
        <motion.div
          className="absolute inset-0 bg-white rounded-sm overflow-hidden border border-gray-100"
          style={{
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.08)' // Lighter, more diffuse shadow
          }}
          variants={{
            rest: { y: 0 },
            hover: { 
              y: -12, 
              boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12)',
              transition: { duration: 0.3, ease: "easeOut" } 
            }
          }}
        >
          <div className="w-full h-full overflow-hidden">
             <motion.img 
              src={category.coverImage} 
              alt={category.title} 
              className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.05 }
              }}
            />
          </div>
          
          {/* Minimalist Overlay */}
          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white/95 via-white/80 to-transparent pt-12">
            <h3 className="text-xl font-serif font-bold text-ink mb-1">{category.title}</h3>
            <p className="text-[10px] text-secondary font-medium tracking-widest uppercase">{category.subtitle}</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;