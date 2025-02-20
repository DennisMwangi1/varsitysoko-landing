
import { Laptop, Shirt, BookOpen, Coffee, Wrench } from "lucide-react";
import { ShoppingScene } from "./ShoppingScene";

const categories = [
  {
    icon: Laptop,
    name: "Electronics",
    description: "Laptops, phones, and accessories",
  },
  {
    icon: Shirt,
    name: "Fashion",
    description: "Clothing, shoes, and accessories",
  },
  {
    icon: BookOpen,
    name: "Books",
    description: "Textbooks and study materials",
  },
  {
    icon: Coffee,
    name: "Food Delivery",
    description: "Campus meals and snacks",
  },
  {
    icon: Wrench,
    name: "Services",
    description: "Tutoring and student services",
  },
];

export function Categories() {
  return (
    <section id="categories" className="py-24 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Browse Categories</h2>
          <p className="text-gray-600">
            Discover everything you need for campus life in one place
          </p>
          <div className="mt-8 h-[200px] max-w-[400px] mx-auto">
            <ShoppingScene />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-2xl glass-card flex flex-col items-center justify-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <category.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 text-center">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
