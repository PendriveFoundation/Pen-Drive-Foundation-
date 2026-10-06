import type { TeamMember, Value } from '../types/content';
import { images } from './images';

export const team: TeamMember[] = [
  {
    name: 'Dr. Rasto Mena',
    role: 'Chairman',
    bio: 'Provides leadership and guidance to Pen-Drive Foundation and its initiatives focused on education, healthcare, community development, youth empowerment and social welfare.',
    image: images.team1
  },
  {
    name: 'Hira Linggi',
    role: 'General Secretary',
    bio: 'Coordinates the Foundation’s programmes, activities and community initiatives, supporting their effective implementation and administration.',
    image: images.team2
  },
  {
    name: 'Mine Linngi',
    role: 'Treasurer',
    bio: 'Supports the Foundation’s financial administration, records and related responsibilities as Treasurer.',
    image: images.team3
  }
];

export const values: Value[] = [
  {
    title: 'Integrity',
    body: 'We believe in honesty, responsibility and transparency in our work, decisions and relationships with the communities we serve.'
  },
  {
    title: 'Equality',
    body: 'We believe every person deserves equal opportunity, dignity and access to education, development and a better future.'
  },
  {
    title: 'Empowerment',
    body: 'We work to strengthen people through education, skills, confidence and meaningful opportunities so they can become more self-reliant.'
  },
  {
    title: 'Collaboration',
    body: 'We work together with communities, volunteers, institutions and partners to create meaningful and sustainable solutions.'
  },
  {
    title: 'Innovation',
    body: 'We encourage creative and practical approaches to education, skill development, awareness and community challenges.'
  },
  {
    title: 'Sustainability',
    body: 'We focus on programmes and initiatives that create lasting positive change and strengthen communities for the future.'
  }
];