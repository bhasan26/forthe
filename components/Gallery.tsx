
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl text-amber-400 mb-4">Glimpses of the Brewery</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A look inside our world. Good beer, good food, and good times.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`Brewery gallery image ${index + 1}`}
                className="w-full h-full object-cover aspect-square transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
