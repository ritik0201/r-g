import type { PracticeAreaItem, PillarItem } from '@/types';

export const practiceAreasHeading = {
  eyebrow: 'CORE CAPABILITIES',
  heading: 'Enterprise Practice Areas',
  subtitle:
    'Four interconnected practice areas delivering rigorous end-to-end consulting for expanding business ventures and mid-market enterprises.',
};

export const practiceAreasData: PracticeAreaItem[] = [
  {
    id: 'it-consultancy',
    practiceNo: 'PRACTICE 01',
    title: 'IT Consultancy',
    description:
      'End-to-end technology advisory, architecture design, cloud modernization, IT audit and actionable roadmap execution for growth.',
    iconName: 'Radio',
    linkText: 'Explore Practice',
    linkHref: '#contact',
  },
  {
    id: 'hr-staffing',
    practiceNo: 'PRACTICE 02',
    title: 'HR & Staffing',
    description:
      'Strategic talent acquisition and executive search powered by our exclusive master franchise partnership with Talent Corner HR Services.',
    iconName: 'Scale',
    linkText: 'Explore Practice',
    linkHref: '#contact',
  },
  {
    id: 'software-projects',
    practiceNo: 'PRACTICE 03',
    title: 'Software Projects',
    description:
      'Full lifecycle custom software development, modern cloud applications engineering, ERP, and e-commerce legacy modernization.',
    iconName: 'Laptop',
    linkText: 'Explore Practice',
    linkHref: '#contact',
  },
  {
    id: 'corporate-it-training',
    practiceNo: 'PRACTICE 04',
    title: 'Corporate IT Training',
    description:
      'Customized enterprise upskilling programs in modern frameworks (Python, Java, Fullstack) delivered in institutional partnership with Mikado Solutions.',
    iconName: 'GraduationCap',
    linkText: 'Explore Practice',
    linkHref: '#contact',
  },
];

// Backwards compatibility for existing pillars data
export const pillarsHeading = practiceAreasHeading;
export const pillarsData: PillarItem[] = practiceAreasData.map((item) => ({
  id: item.id,
  number: item.practiceNo.replace('PRACTICE ', ''),
  title: item.title,
  description: item.description,
  tagline: item.practiceNo,
  iconName: item.iconName,
}));
