
import { Button } from "./ui/button";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary">VarsitySoko</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#how-it-works" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                How It Works
              </a>
              <a href="#categories" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Categories
              </a>
              <a href="#why-us" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
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
