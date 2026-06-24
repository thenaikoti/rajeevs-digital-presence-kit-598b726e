export type LeadMagnetCategory = 'Environmental' | 'IPR' | 'LPO';

export interface LeadMagnet {
  id: string;
  title: string;
  description: string;
  category: LeadMagnetCategory;
  ctaLabel?: string;
}

export const LEAD_MAGNETS: LeadMagnet[] = [
  {
    id: 'eia-checklist-india',
    title: 'EIA Checklist India',
    description: 'Ensure your environmental impact assessment process covers all required documentation and approvals.',
    category: 'Environmental',
    ctaLabel: 'Request Checklist',
  },
  {
    id: 'gpcb-cte-cto-guide',
    title: 'GPCB CTE/CTO Guide',
    description: 'Step-by-step reference for Consent to Establish and Consent to Operate under GPCB.',
    category: 'Environmental',
    ctaLabel: 'Request Guide',
  },
  {
    id: 'hazardous-waste-sme-guide',
    title: 'Hazardous Waste Compliance Guide',
    description: 'Handling, storage, transportation, and regulatory obligations for hazardous waste management.',
    category: 'Environmental',
    ctaLabel: 'Request Guide',
  },
  {
    id: 'industrial-water-audit-template',
    title: 'Industrial Water Audit Template',
    description: 'A practical framework for evaluating industrial water consumption and efficiency.',
    category: 'Environmental',
    ctaLabel: 'Request Template',
  },
  {
    id: 'environmental-compliance-calendar',
    title: 'Environmental Compliance Calendar',
    description: 'Stay ahead of important compliance deadlines and reporting obligations across the year.',
    category: 'Environmental',
    ctaLabel: 'Request Calendar',
  },
  {
    id: 'patent-filing-india-guide',
    title: 'Patent Filing India Guide',
    description: 'Understand the patent filing process, documentation requirements, timelines, and common mistakes.',
    category: 'IPR',
    ctaLabel: 'Request Guide',
  },
  {
    id: 'trademark-checklist-india',
    title: 'Trademark Registration Checklist',
    description: 'Ensure your trademark application is complete and accurate before filing.',
    category: 'IPR',
    ctaLabel: 'Get Checklist',
  },
  {
    id: 'design-registration-guide',
    title: 'Design Registration Starter Guide',
    description: 'Learn the process, requirements, and protection benefits of design registration.',
    category: 'IPR',
    ctaLabel: 'Request Guide',
  },
  {
    id: 'ipr-quick-reference-startups-smes',
    title: 'IPR Quick Reference for Startups & SMEs',
    description: 'A concise reference covering patents, trademarks, copyright, and trade secrets for growing businesses.',
    category: 'IPR',
    ctaLabel: 'Request Guide',
  },
  {
    id: 'lpo-services-guide',
    title: 'LPO Services Guide',
    description: 'Discover how legal process outsourcing can reduce costs and improve operational efficiency.',
    category: 'LPO',
    ctaLabel: 'Request Guide',
  },
];

export const getLeadMagnet = (id: string) =>
  LEAD_MAGNETS.find((m) => m.id === id);
