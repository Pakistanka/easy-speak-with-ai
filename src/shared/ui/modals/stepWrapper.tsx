import { motion } from 'framer-motion';

export const StepWrapper: React.FC<{
  children: React.ReactNode;
  keyName: string;
}> = ({ children, keyName }) => (
  <motion.div
    key={keyName}
    layout
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -20, opacity: 0 }}
    transition={{ duration: 0.3, layout: { duration: 0.3 } }}
  >
    {children}
  </motion.div>
);
