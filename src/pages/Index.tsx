import { motion } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Categories } from "@/components/Categories";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Creator } from "@/components/Creator";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import VisionMission from '@/components/VisionMission';
import { SellerFormModal } from '@/components/SellerFormModal';
import { useState } from 'react';
import { InvestorFormModal } from '@/components/InvestorFormModal';
import { DeveloperFormModal } from '@/components/DeveloperFormModal';
import ContributorsGrid from '@/components/ContributorsGrid';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 }, // Start slightly lower
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Index = () => {
  const [showSellerForm, setShowSellerForm] = useState(false);
  const [showInvestorForm, setShowInvestorForm] = useState(false);
  const [showDeveloperForm, setShowDeveloperForm] = useState(false);

  return (
    <div className="min-h-screen">
      <NavBar setShowSellerForm={setShowSellerForm} />
      <main>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Hero />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <HowItWorks />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Categories />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <WhyUs />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Testimonials />
        </motion.div>

        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <VisionMission setShowInvestorForm={setShowInvestorForm} setShowDeveloperForm={setShowDeveloperForm} />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <CallToAction setShowSellerForm={setShowSellerForm} />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Creator />
        </motion.div>
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <ContributorsGrid />
        </motion.div>
        <SellerFormModal open={showSellerForm} onOpenChange={setShowSellerForm} />
        <InvestorFormModal open={showInvestorForm} onOpenChange={setShowInvestorForm} />
        <DeveloperFormModal open={showDeveloperForm} onOpenChange={setShowDeveloperForm} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
