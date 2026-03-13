import React from 'react';
import { useSurfingEngine } from '../hooks/useSurfingEngine';

const Arena = () => {
  // Accessing physics from our engine for "Animation 2"
  const { y, tilt, isGlitching, velocity } = useSurfingEngine(1.5); // Higher difficulty for the Arena

  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-black transition-colors duration-500 ${isGlitching ? 'bg-red-900/20' : ''}`}>
      
      {/* HUD: Data Stream Information */}
      <div className="absolute top-10 left-10 z-20 font-mono">
        <h1 className="text-4xl font-black italic text-neon-blue drop-shadow-[0_0_10px_#00eaff] animate-pulse">
          ARENA_CORE
        </h1>
        <div className="mt-4 space-y-2">
          <p className="text-neon-green">FLOWRATE: {velocity.toFixed(2)} MB/s</p>
          <p className={isGlitching ? "text-neon-pink animate-bounce" : "text-white"}>
            STATUS: {isGlitching ? "SYSTEM_FAILURE_DETECTED" : "SURVIVING_WAVE"}
          </p>
        </div>
      </div>

      {/* The Data Sea: Animated Background Waves */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-[200%] h-[2px] bg-neon-blue opacity-20"
            style={{ 
              top: `${50 + (i * 10)}%`, 
              left: '-50%',
              transform: `translateY(${y * (0.5 * i)}px) rotate(-2deg)`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* The Surfer: The Player's Knowledge Board */}
      <div 
        className="absolute left-1/2 top-1/2 z-10 transition-transform duration-75 ease-out"
        style={{ transform: `translate(-50%, calc(-50% + ${y}px)) rotate(${tilt}deg)` }}
      >
        <div className={`relative w-32 h-8 rounded-full border-2 ${isGlitching ? 'border-neon-pink shadow-[0_0_20px_#ff00ea]' : 'border-neon-blue shadow-[0_0_15px_#00eaff]'} bg-black/50 backdrop-blur-md`}>
          {/* Engine Glow */}
          <div className={`absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-4 rounded-full blur-md ${isGlitching ? 'bg-neon-pink' : 'bg-neon-green'}`} />
        </div>
        
        {/* Visual Glitch Effect on Failure */}
        {isGlitching && (
          <div className="absolute -inset-10 animate-glitch-fast opacity-50">
            <div className="w-full h-full border border-neon-pink blur-sm" />
          </div>
        )}
      </div>

      {/* Ground Grid for Depth */}
      <div className="absolute bottom-0 w-full h-1/3 bg-[linear-gradient(transparent_0%,_rgba(0,234,255,0.1)_100%)] border-t border-neon-blue/30" 
           style={{ perspective: '1000px' }}>
        <div className="w-full h-full bg-[size:50px_50px] bg-[linear-gradient(to_right,_rgba(0,234,255,0.05)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(0,234,255,0.05)_1px,_transparent_1px)] animate-surf-wave" />
      </div>

    </div>
  );
};

export default Arena;
