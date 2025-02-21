import { LucideIcon } from "lucide-react";

export type FormField = {
  label: string;
  placeholder: string;
  type: string;
  icon: LucideIcon;
  component: React.ComponentType<any>;
  validate: (value: string) => string;
};

export type Developer = {
  fullName: string;
  email: string;
  githubProfile: string;
  technicalSkills: string;
  contributionReason?: string;
};

export type Investor = {
  fullName: string;
  email: string;
  phoneNumber: string;
  company?: string;
  companyWebsite?: string;
  investmentAmount?: string;
  investmentReason?: string;
};

export type Seller = {
  fullName: string;
  email: string;
  phoneNumber: string;
  university: string;
  productToSell: string;
};
