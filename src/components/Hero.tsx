import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, ShoppingBag, Users, UserCheck, ShoppingCart, Bell, MessageCircle, Package, ChartPie, BrainCircuitIcon } from "lucide-react";
import { useRef } from 'react';


export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div className="w-full relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white pt-16 overflow-hidden">
      {/* Floating Shapes */}
      <FloatingShapes />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text & Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div ref={ref} className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-2xl sm:text-3xl md:text-6xl font-bold text-gray-900 leading-tight"
              >
                Buy, Sell, and Connect on Your Campus
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="mt-6 lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
              >
                Your one-stop marketplace for campus essentials. Connect with fellow students,
                find what you need, and sell what you don't.
              </motion.p>
            </motion.div>

            <div className='grid lg:grid-cols-2 lg:gap-20 gap-4 mt-8'>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button size="lg" className="text-lg lg:px-8 px-2">
                  Join Your Campus Marketplace
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>


          {/* Right Section - Feature Cards */}
          <div className="relative mb-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
              }}
              className="grid lg:grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <FeatureCard icon={<ShoppingCart className='text-primary' />} title="Easy Shopping" description="Find campus essentials" />
                <FeatureCard icon={<Users className='text-accent' />} title="Connect & Share" description="Join your campus community" />
                <FeatureCard icon={<BrainCircuitIcon className='text-primary' />} title="AI Powered Features" description="Enjoy essential features powered by AI" />

              </div>
              <div className="space-y-6 lg:mt-12">
                <FeatureCard icon={<ShoppingBag className='text-secondary' />} title="Sell Items" description="List your products easily" />
                <FeatureCard icon={<UserCheck className='text-primary' />} title="Trusted Users" description="Safe and secure trading" />
                <FeatureCard icon={<ChartPie className='text-accent' />} title="Supports Seller Analytics" description="Stay up to date with sales analytics" />

              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Feature Card Component with Hover Effect
const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 10 }}
    initial={{ opacity: 0, y: 20, }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.1, ease: "easeOut" }} // Faster response on hover
    className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg transform transition-transform duration-300"
  >
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-primary/10 rounded-full">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </motion.div>
);

// Floating Shapes Background Animation
const FloatingShapes = () => {
  return (
    <main className=' hidden lg:block'>
      {/* Floating Shopping Cart Icon */}
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-40"
      >
        <ShoppingCart className="text-primary w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Message Icon */}
      <motion.div
        animate={{ y: [-20, 10, -20], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-1/4"
      >
        <MessageCircle className="text-secondary w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Package Icon */}
      <motion.div
        animate={{ y: [15, -10, 15], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-16"
      >
        <Package className="text-accent w-8 h-8 drop-shadow-lg" />
      </motion.div>
      {/* Floating Users Icon */}
      <motion.div
        animate={{ y: [-15, 5, -15], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-24"
      >
        <Users className="text-primary w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Bell Icon */}
      <motion.div
        animate={{ y: [10, -15, 10], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-60 right-1/3"
      >
        <Bell className="text-secondary w-8 h-8 drop-shadow-lg" />
      </motion.div>
    </main>
  );
};

export default Hero;
