
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Categories } from "@/components/Categories";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Creator } from "@/components/Creator";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <HowItWorks />
        <Categories />
        <WhyUs />
        <Testimonials />
        <Creator />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
