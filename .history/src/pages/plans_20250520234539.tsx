// src/types/plans.ts
export type PlanItem = {
  name: string;
  price: number;
  type: 'service' | 'add-on' | 'bundle';
  premium?: boolean;
};

export type BundleApplied = {
  name: string;
  message: string;
  icon: React.ReactNode;
};

export const baseServices: PlanItem[] = [
  { name: 'Standard Finance', price: 23000, type: 'service' },
  { name: 'ESG Starter', price: 18000, type: 'service' },
  { name: 'Smart Hire', price: 20000, type: 'service' },
  { name: 'Process Review', price: 27000, type: 'service' },
];

export const premiumServices: PlanItem[] = [
  { name: 'Finance+ Forecasting', price: 38000, type: 'service', premium: true },
  { name: 'ESG+ Reporting', price: 38000, type: 'service', premium: true },
  { name: 'Ops+ Optimization', price: 46000, type: 'service', premium: true },
  { name: 'Talent Insights Pro', price: 33000, type: 'service', premium: true },
];

export const addOns: PlanItem[] = [
  { name: 'Real-time ESG Dashboard', price: 5000, type: 'add-on' },
  { name: 'AI Resume Parser', price: 3000, type: 'add-on' },
  { name: 'Custom Tax Filing Templates', price: 7500, type: 'add-on' },
  { name: 'Dedicated Support Rep', price: 15000, type: 'add-on' },
];