import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const InstagramIcon: React.FC = () => (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const InstagramFeed: React.FC = () => {
    const instagramUrl = "https://www.instagram.com/fortheloveofgodbrewing/";

    return (
        <section id="instagram" className="py-20 sm:py-28 bg-zinc-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-display text-4xl sm:text-5xl text-amber-400 mb-4">Join Our Community</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Follow us on Instagram for the latest brews, events, and behind-the-scenes moments.
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto bg-zinc-900 rounded-lg p-6 sm:p-8 shadow-2xl shadow-black/30">
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-8">
                        <img 
                            src="https://i.imgur.com/6cE9z2s.png" 
                            alt="Brewery Logo" 
                            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-zinc-700 object-cover flex-shrink-0"
                        />
                        <div className="text-center sm:text-left mt-6 sm:mt-0 flex-grow">
                            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:space-x-4">
                               <h3 className="text-2xl font-light text-zinc-200">fortheloveofgodbrewing</h3>
                               <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="bg-amber-500 text-zinc-900 font-bold py-2 px-6 rounded-md hover:bg-amber-400 transition-colors duration-300 mt-3 sm:mt-0">
                                   Follow
                               </a>
                            </div>
                            <div className="flex justify-center sm:justify-start space-x-6 mt-4 text-zinc-300">
                                <div><span className="font-bold text-zinc-100">122</span> posts</div>
                                <div><span className="font-bold text-zinc-100">4,831</span> followers</div>
                                <div><span className="font-bold text-zinc-100">153</span> following</div>
                            </div>
                            <p className="mt-4 text-zinc-400 hidden sm:block">
                                For The Love of God Brewing Co.<br/>
                                🍻 Family Friendly Brewery<br/>
                                🍕 House Made Artisan Pizza
                            </p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-8 border-t border-zinc-800 pt-8">
                        {GALLERY_IMAGES.slice(0, 4).map((src, index) => (
                            <a key={index} href={instagramUrl} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-lg">
                                <img
                                    src={src}
                                    alt={`Instagram post ${index + 1}`}
                                    className="w-full h-full object-cover aspect-square transform transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100" aria-hidden="true">
                                    <InstagramIcon />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
