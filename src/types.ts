export type ActiveTab = 'home' | 'services' | 'portfolio' | 'about' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // references Lucide icon name
  detailedDescription?: string;
  features: string[];
  category: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  mockupType: 'notebook' | 'tablet' | 'smartphone';
  scope: string[];
  client: string;
  year: string;
  result: string;
  accentColor: string; // tailwind color class prefix or hex value
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  projectRelation: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details?: string[];
}

export interface Differential {
  title: string;
  description: string;
  iconName: string;
}

export interface BudgetForm {
  name: string;
  email: string;
  company: string;
  serviceInterest: string;
  projectBudget: string;
  whatsapp: string;
  briefingChallenge: string;
  briefingAudience: string;
  briefingReferences: string;
  briefingTimeline: string;
}
