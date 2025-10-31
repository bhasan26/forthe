import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <img src="https://i.imgur.com/2jV9H3j.jpeg" alt="The sunny patio and wooden entrance sign of the brewery" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="relative z-20 px-4">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-amber-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          For The Love Of God Brewing
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-zinc-200 font-light max-w-2xl mx-auto drop-shadow-lg">
          Tulsa's Family-Friendly Brewery
        </p>
        <a href="#beers" className="mt-8 inline-block bg-amber-500 text-zinc-900 font-bold py-3 px-8 rounded-md hover:bg-amber-400 transition-transform duration-300 hover:scale-105">
          Explore Our Brews
        </a>
      </div>
    </section>
  );
};

export default Hero;