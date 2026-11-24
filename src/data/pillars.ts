import type { PracticeAreaItem, PillarItem } from '@/types';

export const practiceAreasHeading = {
  eyebrow: 'CORE CAPABILITIES',
  heading: 'Enterprise Practice Areas',
  subtitle:
    'Four interconnected disciplines delivering systemic capability, resilient infrastructure, and qualified human capital.',
};

export const practiceAreasData: PracticeAreaItem[] = [
  {
    id: 'it-consultancy',
    practiceNo: 'ADVISORY 01',
    title: 'IT Consultancy',
    description:
      'Comprehensive technology roadmapping, enterprise cloud modernization, IT audit, and organizational cyber posture optimization.',
    iconName: 'Radio',
    linkText: 'Explore Practice',
    linkHref: '/services#it-consultancy',
  },
  {
    id: 'hr-staffing',
    practiceNo: 'ADVISORY 02',
    title: 'HR & Staffing',
    description:
      'Strategic human capital acquisition, senior executive recruitment, specialized tech talent pools, and talent lifecycle alignment.',
    iconName: 'Scale',
    linkText: 'Explore Practice',
    linkHref: '/services#hr-staffing',
  },
  {
    id: 'software-projects',
    practiceNo: 'ADVISORY 03',
    title: 'Software Projects',
    description:
      'Full lifecycle custom software development, mission-critical application engineering, API architectures, and legacy migrations.',
    iconName: 'Laptop',
    linkText: 'Explore Practice',
    linkHref: '/services#software-projects',
  },
  {
    id: 'corporate-it-training',
    practiceNo: 'ADVISORY 04',
    title: 'Corporate IT Training',
    description:
      'Customized technical upskilling curriculums, enterprise DevSecOps workshops, executive digital literacy, and team certifications.',
    iconName: 'GraduationCap',
    linkText: 'Explore Practice',
    linkHref: '/services#corporate-training',
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
