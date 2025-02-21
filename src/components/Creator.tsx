import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Creator() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Skeleton Loader */}
              {!imageLoaded && (
                <div className="w-full h-80 bg-gray-200 animate-pulse rounded-2xl"></div>
              )}

              {/* Lazy loading image */}
              <div className="absolute lg:h-80 h-60 inset-0 bg-primary/40 rounded-2xl -rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Creator Portrait"
                className={`relative rounded-2xl shadow-xl transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet the Creator</h2>
              <p className="text-gray-600 mb-6">
                Hi, I'm Dennis Mwangi, a software developer and the founder of VarsitySoko.
                I created VarsitySoko after experiencing firsthand the challenges students face
                when trying to buy and sell items on campus. My mission is to make campus commerce
                safer, easier, and more accessible for every student.
              </p>
              <p className="mb-6 font-serif italic">
                Please email me for a demo of VarsitySoko
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-5 h-5" />
                  <span>denniskamau1803@gmail.com</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
