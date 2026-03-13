import React from 'react';
import { useProgression } from '../hooks/ProgressionContext';
import { useSurfingEngine } from '../hooks/useSurfingEngine';

const Campfire = () => {
  const { progression } = useProgression();
  // Animation 2 physics: A rhythmic "breathing" effect for the fire
  const { y, tilt } = useSurfingEngine(0.2);

  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* Ambient Data Embers (Background Animation 2) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* The Digital Fire - Built Out with Neon-Pink Glitch Effects */}
      <div 
        className="relative z-10 flex flex-col items-center"
        style={{ transform: `translateY(${y}px) rotate(${tilt / 4}deg)` }}
      >
        <div className="w-32 h-32 bg-neon-pink rounded-t-full blur-xl animate-pulse shadow-[0_0_60px_#ff00ff]" />
        <div className="w-24 h-24 -mt-16 bg-white/20 rounded-full blur-lg animate-bounce" />
        <h2 className="mt-8 text-4xl font-black italic text-neon-pink drop-shadow-[0_0_10px_#ff00ff]">
          CAMPFIRE_HUB
        </h2>
      </div>

      {/* Social UI - Built Out Features */}
      <div className="absolute bottom-24 w-full max-w-md px-6 z-20">
        <div className="bg-white/5 border border-neon-blue/30 backdrop-blur-md p-4 rounded-lg">
          <p className="text-neon-blue font-mono text-xs mb-4 uppercase tracking-widest">Active Surfers In Stream</p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-white">YOU ({progression.rank})</span>
              <span className="text-neon-green">ONLINE</span>
            </div>
            <div className="flex justify-between text-sm opacity-50">
              <span className="text-white">DATA_GHOST_99</span>
              <span className="text-white/30">SURFING...</span>
            </div>
          </div>
          <button className="w-full mt-6 py-2 border border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black transition-all font-bold tracking-tighter">
            BROADCAST_SIGNAL
          </button>
        </div>
      </div>

    </div>
  );
};

export default Campfire;
