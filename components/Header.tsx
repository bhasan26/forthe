import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode, onClick: () => void }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="text-zinc-300 hover:text-amber-400 transition-colors duration-300 text-lg">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#beers", label: "Beers" },
    { href: "#food", label: "Food" },
    { href: "#pizza-ai", label: "Pizza AI" },
    { href: "#events", label: "Events" },
    { href: "#visit", label: "Visit" },
    { href: "#instagram", label: "Instagram" },
  ];

  return (
    <header className="bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="font-display text-3xl text-amber-400 tracking-wider">
            FTLOG
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.label}</NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-300 hover:text-amber-400 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  // FIX: Corrected SVG attribute 'strokeLineCap' to 'strokeLinecap' and 'strokeLineJoin' to 'strokeLinejoin'.
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // FIX: Corrected SVG attribute 'strokeLineCap' to 'strokeLinecap' and 'strokeLineJoin' to 'strokeLinejoin'.
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 absolute top-20 left-0 w-full">
          <nav className="flex flex-col items-center space-y-4 py-8">
            {navLinks.map(link => (
              <NavLink key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.label}</NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;