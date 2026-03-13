const Community = () => (
  <div className="max-w-3xl mx-auto space-y-6">
    {[1, 2, 3].map(i => (
      <div key={i} className="p-6 border border-[var(--neon-blue)]/50 bg-black flex gap-4">
        <div className="w-12 h-12 bg-[var(--neon-blue)]/20 border border-[var(--neon-blue)]" />
        <div>
          <h5 className="text-[var(--neon-blue)] font-bold text-sm">SURFER_ID_0x{i}F</h5>
          <p className="text-white/70 mt-1">Found a shortcut through the Logic Lagoon using recursive prompt chains.</p>
        </div>
      </div>
    ))}
  </div>
);
export default Community;