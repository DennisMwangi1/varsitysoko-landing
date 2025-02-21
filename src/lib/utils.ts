import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";
import { FormField } from "@/types";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  FileText,
  Github,
  Code,
  Building,
  Globe,
  DollarSign,
} from "lucide-react";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sellerFormFields: Record<string, FormField> = {
  fullName: {
    label: "Full Name",
    placeholder: "Enter your full name",
    type: "text",
    component: Input,
    icon: User,
    validate: (value: string) => {
      if (!value.trim()) return "Full Name is required";
      if (value.length < 3) return "Full Name must be at least 3 characters";
      if (!/^[A-Za-z\s]+$/.test(value))
        return "Full Name can only contain letters and spaces";
      return "";
    },
  },
  email: {
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
    component: Input,
    icon: Mail,
    validate: (value: string) => {
      if (!value.trim()) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Please enter a valid email address";
      return "";
    },
  },
  phoneNumber: {
    label: "Phone Number",
    placeholder: "Enter your phone number",
    type: "tel",
    component: Input,
    icon: Phone,
    validate: (value: string) => {
      if (!value.trim()) return "Phone number is required";
      if (!/^\d+$/.test(value)) return "Phone number must contain only digits";
      if (value.length < 10 || value.length > 15)
        return "Phone number must be between 10-15 digits";
      return "";
    },
  },
  university: {
    label: "University/Campus",
    placeholder: "Enter your university name",
    type: "text",
    component: Input,
    icon: GraduationCap,
    validate: (value: string) => {
      if (!value.trim()) return "University name is required";
      if (value.length < 3)
        return "University name must be at least 3 characters";
      return "";
    },
  },
  productToSell: {
    label: "Tell us about what you'd like to sell",
    placeholder:
      "Describe the items or services you're interested in selling...",
    type: "textarea",
    component: Textarea,
    icon: FileText,
    validate: (value: string) => {
      if (!value.trim()) return "Description is required";
      if (value.length < 20) return "Please provide at least 20 characters";
      return "";
    },
  },
};

export const developerFormFields: Record<string, FormField> = {
  fullName: {
    label: "Full Name",
    placeholder: "Enter your full name",
    type: "text",
    component: Input,
    icon: User,
    validate: sellerFormFields.fullName.validate,
  },
  email: {
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
    component: Input,
    icon: Mail,
    validate: sellerFormFields.email.validate,
  },
  githubProfile: {
    label: "GitHub Profile",
    placeholder: "Enter your GitHub profile URL",
    type: "url",
    component: Input,
    icon: Github,
    validate: (value: string) => {
      if (!value.trim()) return "GitHub profile URL is required";
      if (!/^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_-]+\/?$/.test(value))
        return "Enter a valid GitHub profile URL";
      return "";
    },
  },
  technicalSkills: {
    label: "Technical Skills",
    placeholder: "E.g., React, Node.js, Tailwind",
    type: "text",
    component: Input,
    icon: Code,
    validate: (value: string) => {
      if (!value.trim()) return "Technical skills are required";
      if (value.length < 3) return "Please provide at least 3 characters";
      return "";
    },
  },
  contributionReason: {
    label: "Why do you want to contribute?",
    type: "textarea",
    placeholder: "Tell us why you're excited about VarsitySoko...",
    component: Textarea,
    icon: FileText,
    validate: (value: string) => {
      if (value && value.length < 20)
        return "Please provide at least 20 characters";
      return "";
    },
  },
};

export const investorFormFields: Record<string, FormField> = {
  fullName: sellerFormFields.fullName,
  email: sellerFormFields.email,
  phoneNumber: sellerFormFields.phoneNumber,
  company: {
    label: "Company",
    placeholder: "Company (Optional)",
    type: "text",
    component: Input,
    icon: Building,
    validate: (value: string) => {
      if (value.length > 0 && value.length < 3)
        return "Company name must be at least 3 characters";
      return "";
    },
  },
  companyWebsite: {
    label: "Company Website",
    placeholder: "Company website (Optional)",
    type: "url",
    component: Input,
    icon: Globe,
    validate: (value: string) => {
      if (value && !/^https?:\/\/(www\.)?[^\s@]+\.[^\s@]+$/.test(value))
        return "Please enter a valid website URL";
      return "";
    },
  },
  investmentAmount: {
    label: "Investment Amount",
    placeholder: "Investment amount (indicate currency)",
    type: "string",
    component: Input,
    icon: DollarSign,
    validate: () => "",
  },
  investmentReason: {
    label: "Why do you want to invest?",
    type: "textarea",
    placeholder: "Tell us why you're excited about VarsitySoko...",
    component: Textarea,
    icon: FileText,
    validate: (value: string) => {
      if (value && value.length < 10)
        return "Please provide at least 10 characters";
      return "";
    },
  },
};
