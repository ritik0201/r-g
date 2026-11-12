import type { AboutData, ProprietorData } from '@/types';

export const aboutData: AboutData = {
  eyebrow: 'ABOUT US',
  heading: 'About R&G',
  subtitle: 'Outcome-driven consulting with partner-enabled execution.',
  paragraphs: [
    'R&G Consultancy Services is a proprietor-led consulting firm founded by Mr. Sanjay Makhija. We began with IT consultancy and expanded into HR consultancy, software project delivery, and IT training.',
    'Our approach is simple: define clear success metrics, engage senior consultants hands-on, and leverage trusted partners to deliver faster, reliable results.',
  ],
  values: [
    {
      title: 'Vision',
      description:
        'To be the most dependable consulting partner for practical technology and people solutions.',
      iconName: 'Eye',
    },
    {
      title: 'Mission',
      description:
        'Design, implement, and scale secure, efficient, and sustainable solutions across IT and HR.',
      iconName: 'Rocket',
    },
    {
      title: 'Values',
      description: 'Accountability • Clarity • Partnership • Impact',
      iconName: 'Scale',
    },
    {
      title: 'Teamwork',
      description:
        'Collaborating with trusted experts to ensure every project achieves measurable success.',
      iconName: 'Users',
    },
  ],
};

export const proprietorData: ProprietorData = {
  eyebrow: 'LEADERSHIP',
  heading: 'Meet the Proprietor',
  name: 'Mr. Sanjay Makhija',
  title: 'Founder & Proprietor',
  image: '/images/sanjay-makhija.jpeg',
  imageAlt: 'Mr. Sanjay Makhija - Founder of R&G Consultancy Services',
  quote:
    '“Our commitment is simple: every project must deliver measurable value. We don’t just advise; we commit to the outcome.”',
  bio: 'With extensive experience in both technology and talent management, Mr. Makhija founded R&G to deliver solutions built on clarity and accountability, leveraging strategic partnerships to offer comprehensive, high-quality services.',
};
