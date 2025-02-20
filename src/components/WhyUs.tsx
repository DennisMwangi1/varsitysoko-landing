
import { Shield, Zap, Users, Clock } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Student Verification",
    description: "Only verified students can join, ensuring a safe community",
  },
  {
    icon: Zap,
    title: "Safe Transactions",
    description: "Secure payment system with buyer protection",
  },
  {
    icon: Users,
    title: "Direct Connections",
    description: "Connect directly with students on your campus",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Quick and convenient on-campus delivery options",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why VarsitySoko?</h2>
          <p className="text-gray-600">
            We're built specifically for university students, with features that matter to you
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass-card hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
