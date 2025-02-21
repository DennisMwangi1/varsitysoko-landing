
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface CallToActionProps {
  setShowSellerForm: (value: boolean) => void;
}
export function CallToAction({ setShowSellerForm }: CallToActionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join VarsitySoko Today</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start buying and selling on your campus marketplace. It takes less than
            2 minutes to get started.
          </p>
          <Button size="lg" className="text-lg px-8" onClick={() => setShowSellerForm(true)}>
            Start Selling Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-semibold mb-2">Is VarsitySoko free?</h3>
              <p className="text-gray-600">
                Yes, it's completely free to join and list items. We only charge a
                small fee when you make a sale.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do I get verified?</h3>
              <p className="text-gray-600">
                Just sign up with your student email and we'll verify your account
                instantly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is it safe?</h3>
              <p className="text-gray-600">
                We verify all users and provide secure payment options to ensure
                safe transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
