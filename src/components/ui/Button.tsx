import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'primary' | 'secondary';
  className?: string;
}

export const Button = ({ children, onClick, type = 'primary', className = '' }: ButtonProps) => {
  const baseClass = type === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClass} ${className}`}
    >
      {children}
    </motion.button>
  );
};