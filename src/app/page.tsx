// Add this at the top of your file
'use client'; // Required for framer-motion animations
import { Header } from '@/components/Header';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { motion } from 'framer-motion';
import { FaArrowRight, FaHeart, FaStar } from 'react-icons/fa';
import Image from 'next/image';

const featuredSnacks = [
  {
    id: 1,
    name: 'Almond Crunch Mix',
    category: 'Nut Mixes',
    price: 5.99,
    rating: 4.5,
    image: '/images/snacks/almondcrunch.jpg'
  },
  {
    id: 2,
    name: 'Berry Bliss Dried Fruits',
    category: 'Dried Fruits',
    price: 4.49,
    rating: 4.2,
    image: '/images/snacks/OIP.webp'
  },
  {
    id: 3,
    name: 'Protein Power Bar',
    category: 'Protein Bars',
    price: 3.99,
    rating: 4.7,
    image: '/images/snacks/word-image-152.png'
  },
];

const categories = [
  { name: 'Nut Mixes', icon: '🥜' },
  { name: 'Dried Fruits', icon: '🍓' },
  { name: 'Protein Bars', icon: '🍫' },
  { name: 'Veggie Chips', icon: '🥕' },
  { name: 'Yogurt Bites', icon: '🍦' },
  { name: 'Whole Grain Crackers', icon: '🍘' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--mint)] to-[var(--peach)] py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Build Your Perfect Healthy Lunchbox
            </motion.h1>
            <p className="text-xl text-white mb-8">
              One delicious snack at a time
            </p>
            <Button>
              Start Snacking <FaArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="md:w-1/2">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/lunch.jpg"
                alt="Healthy lunchbox"
                width={400}
                height={300}
                className="w-full max-w-md mx-auto"
                style={{ objectFit: 'cover' }}
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Snack Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-4 cursor-pointer"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl mb-2 shadow-md">
                  {category.icon}
                </div>
                <span className="text-center font-medium text-gray-700">{category.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4 bg-[var(--soft-gray)]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Healthy Snacks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSnacks.map((snack) => (
              <Card key={snack.id}>
                <div className="relative">
                  <Image
                    src={snack.image}
                    alt={snack.name}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                  <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                    <FaHeart className="text-gray-400 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{snack.name}</h3>
                    <span className="font-bold text-[var(--mint)]">${snack.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{snack.category}</p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < Math.floor(snack.rating) ? 'text-yellow-400' : 'text-gray-300'} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-500">({snack.rating})</span>
                  </div>
                  <Button className="w-full">
                    Add to Lunchbox
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lunchbox Builder CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Your Custom Lunchbox</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Mix and match your favorite healthy snacks to create the perfect balanced meal
          </p>
          <Button type="secondary">
            Start Building Now
          </Button>
        </div>
      </section>
    </div>
  );
}