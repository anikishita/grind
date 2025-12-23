
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = GALLERY_IMAGES.map(({ src, alt }) => ({
    src,
    alt,
  }));

  return (
    <div className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Minimalistic geometric decorations */}
      <div className="absolute top-20 left-1/4 w-36 h-36 border-2 border-brand-gold opacity-10 rounded-full"></div>
      <div className="absolute bottom-32 right-1/3 w-32 h-32 border-2 border-brand-espresso opacity-5 rotate-12"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-brand-charcoal mb-4">
            In Motion
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Texture, process, atmosphere. The quiet energy of craft.
          </p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div key={image.id} className="break-inside-avoid cursor-pointer group relative" onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}>
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-brand-espresso opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg z-10"></div>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
      />
    </div>
  );
};

export default Gallery;
