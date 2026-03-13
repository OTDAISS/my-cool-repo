import { motion } from 'framer-motion';
import { animation2 } from '../animations/variants';

const Home = () => (
  <motion.div variants={animation2.container} initial="hidden" animate="show" className="flex flex-col items-center justify-center min-h-[70vh]">
    <motion.h1 variants={animation2.item} className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[var(--neon-blue)] to-white leading-none text-center">
      SURVIVE THE <br/>NEURAL WAVE
    </motion.h1>
    <motion.p variants={animation2.item} className="mt-6 text-[var(--neon-blue)] tracking-[0.3em] uppercase font-light">
      The Ultimate AI Competitive Protocol
    </motion.p>
    <motion.button 
      variants={animation2.float} animate="animate"
      className="mt-12 px-12 py-4 border-2 border-[var(--neon-pink)] text-[var(--neon-pink)] font-black hover:bg-[var(--neon-pink)] hover:text-black transition-all neon-glow-pink"
    >
      ENTER THE GRID
    </motion.button>
  </motion.div>
);
export default Home;