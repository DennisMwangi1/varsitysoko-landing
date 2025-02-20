
import { Button } from "./ui/button";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="lg:text-6xl text-2xl font-light text-primary font-gochi">VARSITYSOKO</h1>
          </div>
          <div className="">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#how-it-works" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium hidden md:block">
                How It Works
              </a>
              <a href="#categories" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium hidden md:block">
                Categories
              </a>
              <a href="#why-us" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium hidden md:block">
                Why Us
              </a>
              <Button variant="default" className="ml-4">
                Start Selling
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
