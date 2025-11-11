
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white bg-hero-pattern bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 tracking-wider">
          Experience Perfection in Every Sip
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
          Discover artisanal coffee, handcrafted with passion and precision. Your perfect cup awaits.
        </p>
        <a 
          href="#menu" 
          className="bg-brand-brown text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          Explore Our Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
