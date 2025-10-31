
import React from 'react';
import { Beer } from '../types';

interface BeerCardProps {
  beer: Beer;
}

const BeerCard: React.FC<BeerCardProps> = ({ beer }) => {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:scale-105">
      <div className="relative h-64">
        <img src={beer.imageUrl} alt={beer.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-amber-400">{beer.name}</h3>
        <div className="flex justify-between items-baseline text-zinc-400 mt-1">
          <p className="font-medium">{beer.style}</p>
          <p className="font-bold">{beer.abv}</p>
        </div>
        <p className="text-zinc-300 mt-4 h-24 overflow-hidden">
          {beer.description}
        </p>
      </div>
    </div>
  );
};

export default BeerCard;
