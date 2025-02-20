
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Creator() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Creator Portrait"
                className="relative rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet the Creator</h2>
              <p className="text-gray-600 mb-6">
                Hi, I'm Sarah Kamau, a computer science graduate from the University of Nairobi. 
                I created VarsitySoko after experiencing firsthand the challenges students face 
                when trying to buy and sell items on campus. My mission is to make campus commerce 
                safer, easier, and more accessible for every student.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>sarah@varsitysoko.com</span>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="mt-8 p-6 rounded-xl bg-primary-50 border border-primary/10">
                <h3 className="font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  "To create a trusted marketplace where every university student can easily and safely 
                  trade within their campus community, fostering sustainable consumption and financial 
                  independence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
