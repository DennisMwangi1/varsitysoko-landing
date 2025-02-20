
import { ListChecks, Users, MessageSquare, Truck } from "lucide-react";

const steps = [
  {
    icon: ListChecks,
    title: "List Product",
    description: "Snap a photo, set your price, and list your item in minutes",
  },
  {
    icon: Users,
    title: "Find Buyers",
    description: "Connect with verified students from your campus",
  },
  {
    icon: MessageSquare,
    title: "Chat & Connect",
    description: "Communicate safely through our in-app messaging",
  },
  {
    icon: Truck,
    title: "Arrange Delivery",
    description: "Meet on campus or use our secure delivery service",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600">
            Getting started with VarsitySoko is easy. Follow these simple steps to
            buy or sell on campus.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-6 my-4 rounded-2xl glass-card hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="pt-8 text-center">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
