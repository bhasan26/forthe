
import React from 'react';
import { BEERS } from '../constants';
import BeerCard from './BeerCard';

const BeerMenu: React.FC = () => {
  return (
    <section id="beers" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl text-amber-400 mb-4">On Tap</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Our current offerings, brewed with unwavering devotion. Subject to change based on divine will (and seasonal availability).
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BEERS.map((beer, index) => (
            <BeerCard key={index} beer={beer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeerMenu;
