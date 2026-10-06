import { images } from './images';
import type { Program } from '../types/content';

export const programs: Program[] = [
{
  slug: 'education-support',
  number: '01',
  title: 'Education Support',
  category: 'Education',
  summary: 'After-school learning, study materials and mentoring for children who need a steady start.',
  image: images.education
},
{
  slug: 'health-camps',
  number: '02',
  title: 'Community Health Camps',
  category: 'Health',
  summary: 'Check-ups and health awareness sessions organised with local doctors and volunteers.',
  image: images.health
},
{
  slug: 'skill-development',
  number: '03',
  title: 'Skill Development',
  category: 'Skills',
  summary: 'Practical training in tailoring, digital literacy and livelihood skills for young people.',
  image: images.skills
},
{
  slug: 'cultural-programmes',
  number: '04',
  title: 'Cultural & Creative Programmes',
  category: 'Culture',
  summary: 'Music, dance and art workshops that celebrate local traditions and give children a stage.',
  image: images.culture
},
{
  slug: 'community-initiatives',
  number: '05',
  title: 'Community Initiatives',
  category: 'Community',
  summary: 'Meetings, reading drives and volunteer efforts shaped by what residents ask for.',
  image: images.community
}];