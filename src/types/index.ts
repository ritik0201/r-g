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
 * Floating architecture showcase stats for hero
 */
export interface HeroPreviewData {
  commerce: {
    title: string;
    status: string;
    metricLabel: string;
    metricValue: string;
    chartLevels: number[];
  };
  aiEngine: {
    title: string;
    sla: string;
    description: string;
    pipeline: Array<{
      step: string;
      latency: string;
    }>;
  };
  growthStack: {
    title: string;
    subtitle: string;
  };
}

/**
 * Hero section data definition
 */
export interface HeroData {
  eyebrow: string;
  headline: {
    line1: string;
    line2: string;
    line3: string;
  };
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  trustSignals: TrustSignal[];
  preview: HeroPreviewData;
}

/**
 * Core pillar card item
 */
export interface PillarItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tagline: string;
  iconName: 'Code2' | 'BrainCircuit' | 'Palette' | 'TrendingUp';
}

/**
 * Technology / Expertise pill item
 */
export interface ExpertiseItem {
  id: string;
  label: string;
  iconName:
    | 'ShoppingBag'
    | 'Cpu'
    | 'Calculator'
    | 'Layers'
    | 'Bot'
    | 'BarChart3'
    | 'Palette'
    | 'Megaphone'
    | 'GraduationCap';
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
  description: string;
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
  tagline: string;
  scaleBadge: string;
  phone: string;
  email: string;
  address: string;
  copyright: string;
  legalLinks: Array<{
    label: string;
    href: string;
  }>;
}
