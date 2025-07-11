import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`card ${className}`}
    >
      {children}
    </motion.div>
  );
};