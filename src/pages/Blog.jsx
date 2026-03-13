const Blog = () => (
  <div className="max-w-2xl mx-auto space-y-16">
    {[1, 2].map(i => (
      <article key={i} className="border-l-2 border-[var(--neon-pink)] pl-8 py-4">
        <span className="text-[var(--neon-pink)] text-[10px] font-bold uppercase tracking-widest">Article_00{i} // 2024</span>
        <h2 className="text-3xl font-black text-white mt-2 leading-tight">DECODING THE FUTURE OF AGENTIC WORKFLOWS</h2>
        <p className="text-white/60 mt-4 leading-relaxed italic">"The transition from static prompts to dynamic agents is the single largest wave we will ever ride..."</p>
        <button className="mt-6 text-[var(--neon-pink)] text-xs font-black hover:underline tracking-tighter uppercase">READ_DEEP_DIVE &gt;</button>
      </article>
    ))}
  </div>
);
export default Blog;