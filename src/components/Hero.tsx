import { motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, ShoppingBag, Users, UserCheck, ShoppingCart, Bell, MessageCircle, Package, ChartPie, BrainCircuitIcon, BadgeCheck, Calendar, Gift, Globe, Heart, Shield, Star, Tag, ThumbsUp, Truck } from "lucide-react";
import { useEffect, useRef, useState } from 'react';
import TypingEffect from './TypingEffect';
import { ComingSoonModal } from './ComingSoonModal';


export function Hero() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showComingSoon, setShowComingSoon] = useState(false);

  const scrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="w-full relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white pt-16 overflow-hidden ">
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

              <TypingEffect />
            </motion.div>

            <div className='grid lg:grid-cols-2 lg:gap-20 gap-4 mt-8'>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button size="lg" className="text-lg lg:px-8 px-2" onClick={() => setShowComingSoon(true)}>
                  Join Your Campus Marketplace
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} onClick={scrollToHowItWorks}>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>


          {/* Right Section - Feature Cards */}
          <div className="relative mb-10" ref={containerRef}>
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      <ComingSoonModal open={showComingSoon} onOpenChange={setShowComingSoon} />
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => {

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotateX: 10, rotateY: 10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.95, rotate: -2 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 100 }}
      className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg transform transition-transform duration-200"
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
};


const FloatingShapes = () => {
  return (
    <main className="hidden lg:block">
      {/* Floating Shopping Cart Icon */}
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-40"
      >
        <ShoppingCart className="text-primary w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Message Icon */}
      <motion.div
        animate={{ y: [-20, 10, -20], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-1/4"
      >
        <MessageCircle className="text-secondary w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Package Icon */}
      <motion.div
        animate={{ y: [15, -10, 15], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-68 right-16"
      >
        <Package className="text-accent w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Users Icon */}
      <motion.div
        animate={{ y: [-15, 5, -15], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-24"
      >
        <Users className="text-primary w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Bell Icon */}
      <motion.div
        animate={{ y: [10, -15, 10], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-60 right-1/3"
      >
        <Bell className="text-secondary w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* New Floating Icons */}

      {/* Floating Truck Icon */}
      <motion.div
        animate={{ y: [-10, 15, -10], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/2"
      >
        <Truck className="text-accent w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Star Icon */}
      <motion.div
        animate={{ y: [10, -10, 10], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/2 left-10"
      >
        <Star className="text-primary w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Heart Icon */}
      <motion.div
        animate={{ y: [-15, 5, -15], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-1/2"
      >
        <Heart className="text-secondary w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Thumbs Up Icon */}
      <motion.div
        animate={{ y: [12, -12, 12], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-32"
      >
        <ThumbsUp className="text-accent w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Gift Icon */}
      <motion.div
        animate={{ y: [-10, 10, -10], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-1/4"
      >
        <Gift className="text-primary w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Badge Check Icon */}
      <motion.div
        animate={{ y: [10, -10, 10], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-60 right-1/3"
      >
        <BadgeCheck className="text-secondary w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Tag Icon */}
      <motion.div
        animate={{ y: [-10, 15, -10], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4"
      >
        <Tag className="text-accent w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Shield Icon */}
      <motion.div
        animate={{ y: [15, -15, 15], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-3/4"
      >
        <Shield className="text-primary w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Globe Icon */}
      <motion.div
        animate={{ y: [-12, 12, -12], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-52 right-40"
      >
        <Globe className="text-secondary w-8 h-8 drop-shadow-lg" />
      </motion.div>

      {/* Floating Calendar Icon */}
      <motion.div
        animate={{ y: [10, -10, 10], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-5 right-1/2"
      >
        <Calendar className="text-accent w-8 h-8 drop-shadow-lg" />
      </motion.div>
    </main>
  );
};

export default Hero;
