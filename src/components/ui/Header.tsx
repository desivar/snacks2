import Link from 'next/link';
import { FaShoppingCart, FaUserCircle, FaHamburger } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Build Lunchbox', path: '/build-lunchbox' },
    { name: 'Providers', path: '/providers' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-[var(--mint)] rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">🍱</span>
            </div>
            <span className="text-xl font-bold text-gray-800 hidden sm:block">SnackBox</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <motion.span 
                whileHover={{ color: 'var(--mint)' }}
                className="text-gray-600 hover:text-[var(--mint)] cursor-pointer font-medium"
              >
                {item.name}
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaShoppingCart className="text-gray-600 text-xl cursor-pointer" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaUserCircle className="text-gray-600 text-xl cursor-pointer" />
          </motion.div>
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FaHamburger className="text-xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden py-4 px-6"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span 
                    className="text-gray-600 hover:text-[var(--mint)] cursor-pointer font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};