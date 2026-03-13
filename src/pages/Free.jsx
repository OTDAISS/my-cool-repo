import { motion } from 'framer-motion';
import { animation2 } from '../animations/variants';

const Free = () => (
  <div className="flex flex-col items-center gap-8 py-20">
    <h2 className="text-5xl font-black text-[var(--neon-green)] uppercase">The Vault</h2>
    <motion.button 
      variants={animation2.glow} initial="initial" animate="animate"
      style={{ '--neon-blue': 'var(--neon-green)' }}
      className="px-12 py-6 bg-[var(--neon-green)] text-black font-black text-xl hover:scale-105 transition-transform"
    >
      DOWNLOAD STARTER KIT
    </motion.button>
    <p className="text-[var(--neon-green)]/50 font-mono text-xs">FREEWARE_VER_1.0.4 // NO_LICENSE_REQUIRED</p>
  </div>
);
export default Free;