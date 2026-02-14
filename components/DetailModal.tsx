import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Category } from '../types';

interface DetailModalProps {
  isOpen: boolean;
  category: Category | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ isOpen, category, onClose }) => {
  
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!category) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-paper/95 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="min-h-screen w-full flex flex-col items-center py-12 px-4 md:px-8">
              
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="fixed top-6 right-6 z-50 p-3 bg-white rounded-full shadow-lg text-ink hover:text-vermilion hover:rotate-90 transition-all duration-300 group"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <div className="text-center mb-16 mt-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-2">
                  {category.title}
                </h2>
                <div className="w-12 h-1 bg-vermilion mx-auto mb-4" />
                {/* Enhanced visibility for subtitle: Darker, bolder, slightly larger */}
                <p className="text-ink/80 font-medium tracking-widest uppercase text-sm md:text-base">
                  {category.subtitle}
                </p>
              </div>

              {/* Gallery Grid */}
              <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pb-20">
                {category.artworks.map((art, index) => (
                  <motion.div
                    key={art.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col group"
                  >
                    <div className="w-full overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 rounded-sm mb-5">
                      <img 
                        src={art.imageUrl} 
                        alt={art.title} 
                        className="w-full h-auto object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Artwork Info */}
                    <div className="flex flex-col space-y-3 px-1">
                      <div className="flex justify-between items-end border-b border-gray-200 pb-3">
                        <h3 className="text-xl font-serif font-bold text-ink">{art.title}</h3>
                        <span className="text-sm text-gray-400 font-mono tracking-widest">
                          NO.{(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                      {/* Enhanced visibility for description: Standard size, normal weight, darker color */}
                      <p className="text-base text-secondary font-normal leading-relaxed pt-1 text-justify opacity-90">
                        {art.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;