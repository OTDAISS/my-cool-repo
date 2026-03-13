import { motion } from 'framer-motion';
import { animation2 } from '../animations/variants';

const Progression = () => (
  <motion.div variants={animation2.container} initial="hidden" animate="show" className="max-w-4xl mx-auto space-y-12">
    <h2 className="text-[var(--neon-blue)] text-4xl font-black italic">USER_PROGRESSION_LOG</h2>
    {['LLM Mastery', 'Prompt Engineering', 'Vector Memory', 'Creative Flow'].map((skill, index) => (
      <motion.div key={skill} variants={animation2.item} className="space-y-2">
        <div className="flex justify-between text-[var(--neon-blue)] text-xs font-bold uppercase tracking-widest">
          <span>{skill}</span>
          <span>{40 + (index * 15)}%</span>
        </div>
        <div className="h-4 bg-white/5 border border-[var(--neon-blue)]/30 rounded-full overflow-hidden p-1">
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: `${40 + (index * 15)}%` }} 
            transition={{ duration: 1.5, delay: index * 0.2, ease: "circOut" }}
            className="h-full bg-[var(--neon-blue)] neon-glow-blue rounded-full" 
          />
        </div>
      </motion.div>
    ))}
  </motion.div>
);
export default Progression;