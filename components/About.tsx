import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl text-amber-400 mb-2">Our Story</h2>
            <p className="text-zinc-300 leading-relaxed">
              It's nice to have a face behind the brew and in this case, that face is on Steve. Steve's not just here to make a beer and sell it to you. Steve's passion is rooted in each and every batch, down to every pour in your glass. Starting a brewery was never part of the plan but it kinda makes sense. Ever since he was a kid, Steve was a meticulous learner and always wanted to use what he learned to help others in any way he could.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Steve's been brewing for over 10 years, and has been focused on fruited/adjunct beers from day 1. Steve just loves to work with his hands. Whether it’s brewing a batch of beer, building his brew system from scratch, or working in construction for 16 years, Steve has learned a lot about perseverance, and work ethic as well as some tricks of the trade along the way. Outside of being behind the bar, Steve enjoys welding, and wood working, including building and designing all of our tap room furniture.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              A man of many passions with one sticking out among the others; his passion to make sure that every single person is treated with kindness and a good beer. In short, from the guy making the beer to the person sipping on it, it's all For The Love.
            </p>
            <h3 className="font-display text-3xl text-amber-400 pt-6">Our Philosophy</h3>
            <p className="text-zinc-300 leading-relaxed">
              We put quality as our highest priority when it comes to our beer. If it’s not up to our standards, we won’t serve it. (seriously, we dump the entire batch) Plain and simple.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Our style is forward thinking beer with an emphasis on, hoppy, sour, and dark beer styles. We use fruit in many of our beers, as well as other adjuncts such as, cinnamon, lacto sugar, vanilla beans, and many other herbs, and natural flavors.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              We do not filter our beers, and you can expect the majority of our IPA, and sour beers to have a bit of haze in them. We believe that unfiltered beer creates a superior flavor profile unmatched by filtered beers. Our ultimate goal is to produce a beer for both the extreme beer enthusiast, as well as those who have yet to find a beer they like. Cheers!
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://i.imgur.com/Qk7sHfq.jpeg" 
              alt="A glass of beer on a custom epoxy river bar top" 
              className="rounded-lg shadow-2xl shadow-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
