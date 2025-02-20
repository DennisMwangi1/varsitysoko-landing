
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Computer Science Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "VarsitySoko made selling my old textbooks so easy. I made back half of what I spent!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Major",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "Found my laptop and study materials at great prices. The student verification system makes it feel safe.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Campus Ambassador",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote: "As a campus ambassador, I've seen firsthand how VarsitySoko helps students save money.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
          <p className="text-gray-600">
            Hear from students who've found success on VarsitySoko
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full -translate-x-4"
                onClick={previous}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full translate-x-4"
                onClick={next}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="glass-card rounded-2xl p-8 text-center">
                      <div className="w-24 h-24 mx-auto mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-lg text-gray-600 mb-6">
                        "{testimonial.quote}"
                      </p>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
