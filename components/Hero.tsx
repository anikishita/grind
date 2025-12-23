
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white bg-hero-pattern bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/50"></div>
      <motion.div 
        className="relative z-10 text-center p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          Where Craft Meets the Street
        </motion.h1>
        <motion.p 
          className="text-md sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Single origin beans. Analog methods. Urban calm.
        </motion.p>
        <motion.a
          href="#menu"
          className="bg-brand-gold text-brand-espresso font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-gold/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          Explore Our Menu
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
