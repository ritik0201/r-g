import type { TestimonialItem } from '@/types';

export const testimonialsHeading = {
  eyebrow: 'TRACK RECORD OF EXCELLENCE',
  heading: 'Verified Client Perspectives',
  subtitle:
    'Direct feedback from executives and promoters whose enterprises we have partnered with across Mumbai, Thane, and Navi Mumbai.',
};

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'rajesh-verma',
    rating: 5,
    quote:
      '“R&G fundamentally altered how we executed our core stack migration. Rather than handing us an abstract document, Mr. Sanjay Makhija personally audited our infrastructure and embedded senior Python and Magento engineering talent that delivered our phase 1 cutover in 8 weeks with zero downtime. Out-of-pocket tech costs dropped 28% in our first operating quarter.”',
    author: 'Rajesh Verma',
    role: 'Chief Operating Officer / Enterprise Logistics Group (Thane)',
    avatar: '/images/avatar-rajesh.jpg',
  },
  {
    id: 'ananya-deshmukh',
    rating: 5,
    quote:
      "“Finding qualified full-stack architects with domain knowledge in manufacturing was stalling our factory automation project. Through R&G's partnership with Talent Corner and Mikado, the talent was qualified in 14 days and delivering value in under eight weeks.”",
    author: 'Ananya Deshmukh',
    role: 'VP Technology / Real Estate & Infrastructure Consortium (Navi Mumbai)',
    avatar: '/images/avatar-ananya.jpg',
  },
];
