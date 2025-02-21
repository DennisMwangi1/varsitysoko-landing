
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ComingSoonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ComingSoonModal({ open, onOpenChange }: ComingSoonModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Coming Soon!</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-6">
          <div className="relative">
            {/* Blurred Dashboard Preview */}
            <div className="rounded-lg overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-6 bg-white/5 backdrop-blur-sm">
                {/* Sidebar */}
                <div className="col-span-2 space-y-4">
                  <div className="h-10 bg-gray-200/50 rounded animate-pulse"></div>
                  <div className="h-8 bg-gray-200/50 rounded animate-pulse"></div>
                  <div className="h-8 bg-gray-200/50 rounded animate-pulse"></div>
                  <div className="h-8 bg-gray-200/50 rounded animate-pulse"></div>
                </div>
                {/* Main Content */}
                <div className="col-span-10 space-y-6">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div className="h-8 w-48 bg-gray-200/50 rounded animate-pulse"></div>
                    <div className="h-10 w-32 bg-primary/20 rounded animate-pulse"></div>
                  </div>
                  {/* Grid of Items */}
                  <div className="grid grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="aspect-square bg-gray-200/50 rounded-lg animate-pulse"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold text-white">Dashboard Coming Soon!</h3>
                <p className="text-white/80">We're working hard to bring you the best campus marketplace experience.</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
