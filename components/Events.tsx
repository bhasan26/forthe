import React from 'react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 sm:py-28 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl text-amber-400 mb-4">Happenings</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Gather with the faithful. There's always something brewing at our taproom.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {EVENTS.length > 0 ? (
            <div className="space-y-8">
              {EVENTS.map((event, index) => (
                <div key={index} className="flex items-start space-x-6 bg-zinc-900 p-6 rounded-lg">
                  <div className="flex-shrink-0 text-center">
                    <div className="text-amber-400 text-3xl font-bold">{event.date}</div>
                    <div className="text-zinc-400 text-sm tracking-widest">{event.day}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100">{event.title}</h3>
                    <p className="text-zinc-300 mt-1">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center bg-zinc-900 p-8 rounded-lg">
              <p className="text-zinc-300 text-lg">There are no upcoming events scheduled at the moment.</p>
              <p className="text-zinc-400 mt-2">Please check back soon or follow us on social media for the latest updates!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;