/**
 * Navigation link item
 */
export interface NavLink {
  id: string;
  label: string;
  href: string;
}

/**
 * Trust signals shown in the hero section
 */
export interface TrustSignal {
  label: string;
  iconName: 'ShieldCheck' | 'Zap' | 'CheckCircle2' | 'Award';
}

/**
 * Hero section data definition
 */
export interface HeroData {
  eyebrow: string;
  headlinePart1: string;
  headlinePart2: string;
  headlineAccent: string;
  headline?: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
  image: string;
  imageBadge: {
    title: string;
    description: string;
  };
  trustSignals?: TrustSignal[];
  coreFocus?: Array<{
    title: string;
    iconName: string;
  }>;
}

/**
 * Practice Area item (Enterprise Practice Areas)
 */
export interface PracticeAreaItem {
  id: string;
  practiceNo: string;
  title: string;
  description: string;
  iconName: string;
  linkText: string;
  linkHref: string;
}

/**
 * Advantage benefit item
 */
export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

/**
 * How we work step item
 */
export interface WorkflowStepItem {
  step: string;
  title: string;
  milestone: string;
  description: string;
}

/**
 * Testimonial item
 */
export interface TestimonialItem {
  id: string;
  rating: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

/**
 * Strategic Partner item
 */
export interface StrategicPartnerItem {
  id: string;
  monogram: string;
  badge: string;
  name: string;
  description: string;
  specialization: string;
  logoUrl?: string;
}

/**
 * About R&G section data
 */
export interface AboutData {
  eyebrow: string;
  heading: string;
  subtitle: string;
  paragraphs: string[];
  values: Array<{
    title: string;
    description: string;
    iconName: string;
  }>;
}

/**
 * Proprietor / Founder section data
 */
export interface ProprietorData {
  eyebrow: string;
  heading: string;
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  quote: string;
  bio: string;
}

/**
 * Core pillar card item
 */
export interface PillarItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tagline?: string;
  iconName?: string;
  iconUrl?: string;
}

/**
 * Technology / Expertise pill item
 */
export interface ExpertiseItem {
  id: string;
  label: string;
  iconName: string;
}

/**
 * Integrated approach banner data
 */
export interface ApproachData {
  eyebrow: string;
  quote: string;
}

/**
 * Credential / Metric stat item
 */
export interface CredentialStat {
  id: string;
  numericValue: number;
  prefix?: string;
  suffix: string;
  label: string;
}

/**
 * Case study item
 */
export interface CaseStudyItem {
  id: string;
  category: string;
  title: string;
  description: string;
  featureTag: string;
  image: string;
  imageAlt: string;
  link: string;
}

/**
 * Strategic partner item
 */
export interface PartnerItem {
  id: string;
  role: string;
  name: string;
  description?: string;
  logoUrl: string;
}

/**
 * Contact CTA banner data
 */
export interface ContactCTAData {
  eyebrow: string;
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref: string;
}

/**
 * Global site metadata
 */
export interface SiteConfig {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  scaleBadge: string;
  phone: string;
  email: string;
  address: string;
  copyright: string;
  implementationPartner: string;
  staffingPartner: string;
  legalLinks: Array<{
    label: string;
    href: string;
  }>;
}
