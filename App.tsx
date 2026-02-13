import React, { useState } from 'react';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';
import { CATEGORIES } from './constants';
import { Category } from './types';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCategory(null), 300); // Clear after animation
  };

  return (
    <div className="min-h-screen relative font-sans selection:bg-black selection:text-white bg-white">
      
      <main className="relative z-10 flex flex-col min-h-screen">
        <Hero />
        
        {/* Portfolio Section */}
        {/* Functional Division: Added generous top padding and distinct header */}
        <section className="flex-grow max-w-[1400px] mx-auto w-full px-6 md:px-12 py-24 md:py-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-24 gap-2"
          >
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink">作品集</h2>
             <span className="text-xs md:text-sm text-secondary tracking-[0.4em] uppercase font-medium">Selected Works Collection</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
              >
                <CategoryCard 
                  category={category} 
                  onClick={handleCategoryClick} 
                />
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </main>

      <DetailModal 
        isOpen={isModalOpen} 
        category={selectedCategory} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default App;