import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedText({ children, className = "" }) {
  return (
    <motion.span 
      layout 
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={`inline-block ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={children}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="inline-block"
        >
          {children}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}