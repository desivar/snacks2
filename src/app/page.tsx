// Add this at the top of your file
'use client'; // Required for framer-motion animations
import { Header } from '@/components/Header';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { motion } from 'framer-motion';
import { FaArrowRight, FaHeart, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const heroImages = [
  { id: 1, src: '/images/snacksgal.jpeg', alt: 'Healthy lunchbox' },
  { id: 2, src: '/images/lunch.jpg', alt: 'Fresh snacks' },
  { id: 3, src: '/images/lunch2.jpg', alt: 'Tasty treats' },
  // Add more images here
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
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

      <main>
        {/* Hero Section with Animated Waves */}
        <section className="relative bg-gradient-to-br from-[var(--mint)] via-[var(--peach)] to-pink-400 py-20 px-4 overflow-hidden">
          {/* Animated Wave Background */}
          <div className="absolute inset-0">
    <svg 
      className="absolute bottom-0 w-full h-32" 
      viewBox="0 0 1440 320" 
      preserveAspectRatio="none"
    >
      <motion.path
        initial={{ d: "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
        animate={{
          d: [
            "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,101.3C672,107,768,149,864,165.3C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,165.3C672,171,768,213,864,229.3C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        fill="rgba(255,255,255,0.1)"
      />
    </svg>
    
    {/* Additional decorative waves */}
    <svg 
      className="absolute bottom-0 w-full h-24" 
      viewBox="0 0 1440 320" 
      preserveAspectRatio="none"
    >
      <motion.path
        initial={{ d: "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
        animate={{
          d: [
            "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,160L48,165.3C96,171,192,181,288,197.3C384,213,480,235,576,218.7C672,203,768,149,864,149.3C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,224L48,229.3C96,235,192,245,288,261.3C384,277,480,299,576,282.7C672,267,768,213,864,213.3C960,213,1056,267,1152,266.7C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        fill="rgba(255,255,255,0.05)"
      />
    </svg>

    {/* Floating particles */}
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-white rounded-full opacity-30"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [-20, 20],
          x: [-10, 10],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2
        }}
      />
    ))}
  </div>

  <div className="container mx-auto relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Content Side */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-4">
            🌟 New Healthy Collection
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Build Your
          <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Perfect
          </span>
          Healthy Lunchbox
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl lg:text-2xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0"
        >
          Discover premium snacks crafted with love. One delicious, nutritious bite at a time.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-white text-[var(--mint)] hover:bg-gray-50 shadow-lg px-8 py-4 text-lg font-semibold">
              Start Building <FaArrowRight className="ml-2" />
            </Button>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center lg:justify-start gap-8 mt-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50K+</div>
            <div className="text-white/70 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">100+</div>
            <div className="text-white/70 text-sm">Healthy Snacks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4.9★</div>
            <div className="text-white/70 text-sm">Rating</div>
          </div>
        </motion.div>
      </div>

      {/* Image Side */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="lg:w-1/2 relative"
      >
        {/* Main image container with floating effect */}
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [-1, 1, -1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-300 rounded-full opacity-60 blur-xl"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-300 rounded-full opacity-40 blur-2xl"></div>
          
          {/* Image slider with enhanced styling */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm p-2">
            <Slider {...{
              ...sliderSettings,
              dots: false,
              arrows: false,
            }}>
              {heroImages.map((image, index) => (
                <div key={image.id} className="relative">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={480}
                      className="w-full h-80 lg:h-96 object-cover rounded-2xl"
                      style={{ objectFit: 'cover' }}
                      priority={index === 0}
                    />
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Floating badges */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 right-8 bg-white rounded-full px-4 py-2 shadow-lg"
          >
            <span className="text-sm font-bold text-[var(--mint)]">🏆 #1 Rated</span>
          </motion.div>

          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-8 -left-6 bg-white rounded-full px-4 py-2 shadow-lg"
          >
            <span className="text-sm font-bold text-orange-500">🥇 Premium Quality</span>
          </motion.div>
        </motion.div>
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
      </main>
    </div>
  );
}