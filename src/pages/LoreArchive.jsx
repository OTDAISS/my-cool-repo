import React from 'react';
import { useProgression } from '../hooks/ProgressionContext';
import { useSurfingEngine } from '../hooks/useSurfingEngine';

const LoreArchive = () => {
  // Built-out integration: Using central state instead of direct localStorage
  const { progression } = useProgression();
  const mastery = progression.level * 10; // Example mastery calculation based on level

  // Animation 2: Applying surfing physics to the archive layout
  const { y, tilt } = useSurfingEngine(0.4);

  const logs = [
    {
      id: "001",
      title: "The First Wave",
      content: "We didn't build the Never Ending Realm to escape reality. We built it to survive the coming AI waves. The surfer isn't just a metaphor—it's the only way to move through infinite data without drowning.",
      required: 0
    },
    {
      id: "042",
      title: "Neural Currents",
      content: "The machines don't think in logic anymore; they think in currents. To ride the wave, you must stop calculating and start sensing. The Sector 7 sentries are the first attempt at mapping this consciousness.",
      required: 40
    },
    {
      id: "088",
      title: "The Ghost in the Surf",
      content: "Reports of a 'Surfer #0' are true. A remnant of the original source code still drifts in the Inner Reef. If you see a golden trail in the code, do not follow it. You are not ready.",
      required: 80
    },
    {
      id: "999",
      title: "The Omega Protocol",
      content: "Mastery is an illusion. 100% doesn't mean you've finished the game; it means you've finally become part of the engine. Welcome to the Legend. The Vault is now your home.",
      required: 100
    }
  ];

  return (
    <div className="relative min-h-screen bg-black pt-24 pb-12 px-4 overflow-hidden">
      
      {/* Background Animation 2 Physics Layer */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ transform: `translateY(${y}px) rotate(${tilt / 20}deg)` }}
      >
        <div className="w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_40px,#00eaff_41px)]" />
      </div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-6xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_0_15px_#00eaff]">
            LORE_ARCHIVE
          </h2>
          <div className="inline-block px-4 py-1 border border-neon-blue bg-neon-blue/10">
            <p className="text-neon-blue font-mono text-xs uppercase tracking-[0.4em]">
              SECTOR_7 // ENCRYPTED_LOGS // MASTERY: {mastery}%
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          {logs.map((log) => {
            const isLocked = mastery < log.required;

            return (
              <div 
                key={log.id} 
                className={`group p-8 border-l-4 transition-all duration-700 transform ${
                  isLocked 
                  ? 'bg-white/5 border-white/10 opacity-40 grayscale blur-[1px]' 
                  : 'bg-white/[0.03] border-neon-blue shadow-[0_0_30px_rgba(0,234,255,0.1)] hover:shadow-[0_0_40px_rgba(0,234,255,0.2)] hover:bg-white/[0.06]'
                }`}
                style={{ skewX: isLocked ? '0deg' : '-2deg' }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-neon-blue block mb-1 opacity-70">DATA_STREAM_{log.id}</span>
                    <h3 className={`text-2xl font-black italic tracking-tight ${isLocked ? 'text-white/30' : 'text-white'}`}>
                      {isLocked ? 'ENCRYPTION_LOCKED' : log.title}
                    </h3>
                  </div>
                  {isLocked ? (
                    <span className="text-[10px] bg-neon-pink/10 text-neon-pink border border-neon-pink/40 px-3 py-1 font-black uppercase tracking-widest">
                      REQUIRES {log.required}%_MASTERY
                    </span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse shadow-[0_0_10px_#39ff14]" />
                      <span className="text-[10px] text-neon-green font-mono uppercase tracking-widest">DECRYPTED</span>
                    </div>
                  )}
                </div>
                
                <p className={`text-sm leading-relaxed font-mono tracking-wide ${isLocked ? 'select-none opacity-20' : 'text-white/70 group-hover:text-white transition-colors'}`}>
                  {log.content}
                </p>

                {!isLocked && (
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <button className="text-[10px] font-black text-neon-blue hover:text-white transition-colors uppercase tracking-widest">
                      [ ACCESS_DEEP_MEMORY ]
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LoreArchive;
