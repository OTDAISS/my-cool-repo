const Island = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {['Alpha Sector', 'Neural Reef', 'Logic Lagoon'].map(zone => (
      <div key={zone} className="h-64 border-2 border-[var(--neon-green)] p-6 bg-[var(--neon-green)]/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-2 text-[var(--neon-green)] opacity-20">ZONE_04</div>
        <h3 className="text-[var(--neon-green)] font-black text-2xl uppercase mt-auto">{zone}</h3>
        <p className="text-xs text-[var(--neon-green)]/80 mt-2">SAFE ZONE: ACTIVE</p>
        <div className="mt-4 h-1 w-full bg-[var(--neon-green)]/20 overflow-hidden">
          <div className="h-full bg-[var(--neon-green)] w-1/3 neon-glow-green" />
        </div>
      </div>
    ))}
  </div>
);
export default Island;