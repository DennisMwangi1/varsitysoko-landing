
import { Button } from "./ui/button";
import { ArrowRight, ShoppingBag, Users, UserCheck, ShoppingCart } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-50 to-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Buy, Sell, and Connect on Your Campus
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Your one-stop marketplace for campus essentials. Connect with fellow students, 
              find what you need, and sell what you don't.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8">
                Join Your Campus Marketplace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                {/* Shopper with cart */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <ShoppingCart className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Easy Shopping</h3>
                      <p className="text-sm text-gray-600">Find campus essentials</p>
                    </div>
                  </div>
                </div>
                {/* Community connection */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Connect & Share</h3>
                      <p className="text-sm text-gray-600">Join your campus community</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                {/* Seller with bag */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-secondary/10 rounded-full">
                      <ShoppingBag className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Sell Items</h3>
                      <p className="text-sm text-gray-600">List your products easily</p>
                    </div>
                  </div>
                </div>
                {/* Trusted buyer */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <UserCheck className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Trusted Users</h3>
                      <p className="text-sm text-gray-600">Safe and secure trading</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
