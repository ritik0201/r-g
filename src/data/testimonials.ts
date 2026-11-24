import type { TestimonialItem } from '@/types';

export const testimonialsHeading = {
  eyebrow: 'INSTITUTIONAL VALIDATION',
  heading: 'Verified Client Perspectives',
  subtitle:
    'Direct accounts from executive directors and technology leadership across the Mumbai Metropolitan Region.',
};

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'rajesh-verma',
    rating: 5,
    quote:
      '“R&G fundamentally altered how we executed our core ERP migration. Rather than handing us an ivory-tower document, Sanjay\'s team placed the exact technical leads we needed and held weekly governance reviews. Our downtime was reduced to zero during cutover.”',
    author: 'Rajesh Varma',
    role: 'Chief Operating Officer, Varma Logistics Group (Thane)',
    avatar: '/images/avatar-rajesh.jpg',
  },
  {
    id: 'ananya-deshmukh',
    rating: 5,
    quote:
      '“Finding qualified full-stack architects with domain knowledge in manufacturing was stalling our factory automation project. Through their partnership with Talent Corner and Mikado, R&G built and upskilled a 14-person engineering wing in under eight weeks.”',
    author: 'Ananya Deshmukh',
    role: 'VP Technology, Apex Industrial Technologies (Navi Mumbai)',
    avatar: '/images/avatar-ananya.jpg',
  },
];
