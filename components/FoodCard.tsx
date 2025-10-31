import React from 'react';
import { FoodItem } from '../types';

interface FoodCardProps {
  food: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 hover:scale-105">
      <div className="relative h-80">
        <img src={food.imageUrl} alt={food.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-amber-400">{food.name}</h3>
        <p className="text-zinc-300 mt-2 h-20 overflow-hidden">
          {food.description}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
