
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Minimalistic geometric decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-brand-gold opacity-20 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-brand-espresso opacity-10 rotate-45"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-charcoal mb-6">
              Built on Process
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              We source direct. Roast small batch. Pull every shot by hand. No shortcuts, no compromises—just beans, water, and time doing what they do best.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Born on the corner of craft and convenience, we're here for the ones who know the difference. Quality you can taste. Vibe you can feel. A street café for people who care.
            </p>
          </div>
          <div className="order-1 md:order-2 relative">
            {/* Decorative shape behind image */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brand-gold opacity-30 rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=600&fit=crop&q=80" 
              alt="Minimal café interior with concrete textures and natural light" 
              className="rounded-lg shadow-2xl object-cover w-full h-full relative z-10 transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
