import React from 'react';

const Visit: React.FC = () => {
  const taproomHours = [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "3 PM - 9 PM" },
    { day: "Wednesday", hours: "3 PM - 9 PM" },
    { day: "Thursday", hours: "3 PM - 9 PM" },
    { day: "Friday", hours: "12 PM - 10 PM" },
    { day: "Saturday", hours: "12 PM - 10 PM" },
    { day: "Sunday", hours: "12 PM - 6 PM" },
  ];

  return (
    <section id="visit" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl text-amber-400 mb-4">Make a Pilgrimage</h2>
          <p className="text-zinc-400">Find us and partake in our offerings.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-zinc-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Taproom Hours</h3>
              <div className="space-y-3 text-zinc-300">
                {taproomHours.map(item => (
                  <div key={item.day} className="flex justify-between border-b border-dashed border-zinc-600 pb-2">
                    <span>{item.day}</span>
                    <span className="font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-zinc-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Location & Contact</h3>
              <div className="space-y-4 text-zinc-300">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  2617 W Northwest Blvd, Spokane, WA 99205
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  (918) 398-6569
                </p>
              </div>
            </div>
             <div className="w-full h-64 bg-zinc-700 rounded-lg flex items-center justify-center">
               <p className="text-zinc-400">Map Placeholder</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;