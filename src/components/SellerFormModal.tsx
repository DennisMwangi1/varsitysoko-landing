import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { sellerFormFields } from '@/lib/utils';
import { FormField, Seller } from '@/types';
import { api } from '@/api';

interface SellerFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SellerFormModal({ open, onOpenChange }: SellerFormModalProps) {
  const [formData, setFormData] = useState(
    Object.keys(sellerFormFields).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });

    // Validate on change
    setErrors({ ...errors, [field]: sellerFormFields[field].validate(value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    // Validate all fields before submitting
    const newErrors: Record<string, string> = {};
    Object.keys(sellerFormFields).forEach((field) => {
      const error = sellerFormFields[field].validate(formData[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fix the errors before submitting.");
      return;
    }
    setLoading(true);

    try {
      const response = await api.createSeller(formData as Seller);
      if (response.status === 201) {
        toast.success("Your application has been submitted successfully!");
        onOpenChange(false);
        setFormData(
          Object.keys(sellerFormFields).reduce((acc, key) => ({ ...acc, [key]: "" }), {})
        );
      } else {
        toast.error("Failed to submit your application. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit your application. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center font-abel">
            Become a Seller
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 py-6 font-abel max-h-[80vh] overflow-auto scrollbar-hide">
          <div className="space-y-4">
            {Object.entries(sellerFormFields).map(([key, field]) => {
              return (
                <div key={key} className="space-y-2">
                  <div className='flex place-items-center gap-2'>
                    {field.icon && (
                      <field.icon className="h-6 w-6 text-gray-500" />
                    )}
                    <label htmlFor={key} className="text-sm font-medium">{field.label}</label>

                  </div>
                  <field.component
                    id={key}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[key as keyof FormField]}
                    onChange={(e) => handleChange(key, e.target.value)}
                    disabled={loading}
                  />
                  {errors[key] && (
                    <p className="text-red-500 text-sm">{errors[key]}</p>
                  )}
                </div>
              );
            })}
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin h-5 w-5" />
                Submitting...
              </div>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
