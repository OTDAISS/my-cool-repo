const Members = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
    {[...Array(10)].map((_, i) => (
      <div key={i} className="p-4 border border-[var(--neon-blue)]/30 group hover:border-[var(--neon-pink)] transition-colors">
        <div className="aspect-square bg-gradient-to-br from-black to-zinc-900 mb-4 border border-white/10" />
        <p className="text-[var(--neon-blue)] font-bold text-[10px] group-hover:text-[var(--neon-pink)]">ARCHITECT_{i+100}</p>
        <p className="text-[8px] opacity-50 text-white uppercase">Specialist: Neural Core</p>
      </div>
    ))}
  </div>
);
export default Members;