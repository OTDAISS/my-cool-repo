import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-neon-blue/20 px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-black italic text-neon-blue tracking-tighter shadow-neon">
          SURVIVOR_OS
        </Link>

        <div className="hidden md:flex gap-6 text-xs font-mono uppercase tracking-widest">
          {/* Group 1: The Core */}
          <div className="group relative">
            <button className="hover:text-neon-blue transition-colors">Surfer_Hubs</button>
            <div className="absolute hidden group-hover:block bg-black border border-neon-blue p-2 mt-2 space-y-2 w-40">
              <Link to="/island" className="block hover:bg-neon-blue/20 p-1">Island</Link>
              <Link to="/world" className="block hover:bg-neon-blue/20 p-1">World</Link>
              <Link to="/map" className="block hover:bg-neon-blue/20 p-1">Map</Link>
            </div>
          </div>

          {/* Group 2: Progression */}
          <div className="group relative">
            <button className="hover:text-neon-green transition-colors">Data_Streams</button>
            <div className="absolute hidden group-hover:block bg-black border border-neon-green p-2 mt-2 space-y-2 w-48">
              <Link to="/arena" className="block hover:bg-neon-green/20 p-1 text-neon-pink">Arena (Live)</Link>
              <Link to="/dashboard" className="block hover:bg-neon-green/20 p-1">Dashboard</Link>
              <Link to="/achievements" className="block hover:bg-neon-green/20 p-1">Achievements</Link>
            </div>
          </div>

          {/* Group 3: Archive & Gear */}
          <div className="group relative">
            <button className="hover:text-neon-pink transition-colors">Vault</button>
            <div className="absolute hidden group-hover:block bg-black border border-neon-pink p-2 mt-2 space-y-2 w-40">
              <Link to="/shop" className="block hover:bg-neon-pink/20 p-1">Shop</Link>
              <Link to="/gear" className="block hover:bg-neon-pink/20 p-1">Gear</Link>
              <Link to="/lore" className="block hover:bg-neon-pink/20 p-1">Lore</Link>
            </div>
          </div>
          
          <Link to="/login" className="px-4 py-1 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black font-bold">LOGIN</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
