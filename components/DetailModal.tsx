import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import { Artwork, Category } from '../types';

interface DetailModalProps {
  isOpen: boolean;
  category: Category | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ isOpen, category, onClose }) => {
  const [previewArtwork, setPreviewArtwork] = useState<Artwork | null>(null);
  
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

  useEffect(() => {
    if (!isOpen) {
      setPreviewArtwork(null);
    }
  }, [isOpen]);

  const closePreview = () => setPreviewArtwork(null);

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
                {category.artworks.map((art, index) => {
                  const shouldPairFinalMythicalGifs =
                    category.id === 'shenshou-shenqi' && index >= category.artworks.length - 2;
                  const shouldSpanFullRow = art.layout === 'full';

                  return (
                  <motion.div
                    key={art.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col group ${shouldSpanFullRow ? 'md:col-span-2' : ''} ${shouldPairFinalMythicalGifs ? 'md:col-span-1' : ''}`}
                  >
                    <button
                      type="button"
                      onClick={() => setPreviewArtwork(art)}
                      className="relative w-full overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 rounded-sm mb-5 text-left focus:outline-none focus:ring-2 focus:ring-vermilion/50 group/image"
                      aria-label={`查看大图：${art.title}`}
                    >
                      <img 
                        src={art.imageUrl} 
                        alt={art.title} 
                        className="w-full h-auto object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-[1.02]"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-ink shadow-sm opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
                        <Maximize2 size={14} />
                        查看大图
                      </span>
                    </button>
                    
                    {/* Artwork Info */}
                    <div className="flex flex-col space-y-3 px-1">
                      <div className="flex justify-between items-end border-b border-gray-200 pb-3">
                        <h3 className="text-xl font-serif font-bold text-ink">{art.title}</h3>
                        <span className="text-sm text-gray-400 font-mono tracking-widest">
                          NO.{(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                      {art.description && (
                        <p className="text-base text-secondary font-normal leading-relaxed pt-1 text-justify opacity-90">
                          {art.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                  );
                })}
              </div>

            </div>
          </motion.div>

          <AnimatePresence>
            {previewArtwork && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm"
                onClick={closePreview}
              >
                <button
                  type="button"
                  onClick={closePreview}
                  className="fixed top-5 right-5 z-[80] p-3 bg-white text-ink rounded-full shadow-lg hover:text-vermilion transition-colors"
                  aria-label="关闭大图"
                >
                  <X size={24} />
                </button>

                <div className="h-full w-full overflow-auto px-4 py-16 md:px-10 md:py-20">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="mx-auto flex min-h-full max-w-[1600px] flex-col items-center justify-center gap-5"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <img
                      src={previewArtwork.fullImageUrl || previewArtwork.imageUrl}
                      alt={previewArtwork.title}
                      className="max-h-none w-auto max-w-full object-contain shadow-2xl md:max-h-[82vh]"
                      decoding="async"
                    />
                    <div className="max-w-4xl text-center text-white">
                      <h3 className="text-xl md:text-2xl font-serif font-bold">{previewArtwork.title}</h3>
                      {previewArtwork.description && (
                        <p className="mt-3 text-sm md:text-base leading-relaxed text-white/75">
                          {previewArtwork.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default DetailModal;
