import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import BeerMenu from './components/BeerMenu';
import FoodMenu from './components/FoodMenu';
import Events from './components/Events';
import Visit from './components/Visit';
import InstagramFeed from './components/Gallery';
import Footer from './components/Footer';
import PizzaMaker from './components/PizzaMaker';

const App: React.FC = () => {
  return (
    <div className="bg-zinc-900 text-zinc-200">
      <Header />
      <main>
        <Hero />
        <About />
        <BeerMenu />
        <FoodMenu />
        <PizzaMaker />
        <Events />
        <Visit />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default App;