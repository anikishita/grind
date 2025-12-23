
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItemCategory } from '../types';
import MenuItemCard from './MenuItemCard';
import { motion, AnimatePresence } from 'framer-motion';

const Menu: React.FC = () => {
  const categories = Object.values(MenuItemCategory);
  const [activeCategory, setActiveCategory] = useState<MenuItemCategory>(categories[0]);

  const filteredMenu = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="py-20 lg:py-32 bg-brand-cream relative overflow-hidden">
      {/* Minimalistic geometric decorations */}
      <div className="absolute top-32 right-10 w-40 h-40 border border-brand-espresso opacity-5 rounded-full"></div>
      <div className="absolute bottom-40 left-10 w-28 h-28 border border-brand-gold opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-charcoal mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Honest drinks. Real ingredients. Nothing extra.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-2 px-4 rounded-full font-medium transition-all duration-300 text-sm md:text-base transform hover:scale-105
                ${activeCategory === category 
                  ? 'bg-brand-espresso text-white shadow-md'
                  : 'bg-white text-brand-charcoal hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredMenu.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <MenuItemCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Menu;
