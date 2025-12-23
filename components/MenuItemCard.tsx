
import React from 'react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-all duration-300 group relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-espresso opacity-0 group-hover:opacity-5 transition-opacity duration-300 z-10 pointer-events-none"></div>
      
      <div className="overflow-hidden relative">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-brand-gold opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-xl font-serif font-bold text-brand-charcoal group-hover:text-brand-espresso transition-colors duration-300">{item.name}</h3>
          <p className="text-lg font-semibold text-brand-espresso">{item.price}</p>
        </div>
        <p className="text-gray-600 flex-grow">{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItemCard;
