import React from 'react';
import { FOOD_ITEMS } from '../constants';
import FoodCard from './FoodCard';

const FoodMenu: React.FC = () => {
  return (
    <section id="food" className="py-20 sm:py-28 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl text-amber-400 mb-4">Artisan Pizzas</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Hand-crafted pizzas to pair perfectly with your beer. Made with fresh, high-quality ingredients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {FOOD_ITEMS.map((item, index) => (
            <FoodCard key={index} food={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;
