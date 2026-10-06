import { images } from './images';
import type { TimelineEntry } from '../types/content';

export const timeline: TimelineEntry[] = [
{
  year: '2013',
  title: 'Foundation established',
  body: 'Sahyog Foundation is founded with a simple commitment: to work alongside communities on what matters most to them.',
  image: images.hero
},
{
  year: '2022–23',
  title: 'Education & community initiatives',
  body: 'Learning support for school children, alongside community-led initiatives in the villages we work with.',
  image: images.education
},
{
  year: '2023–24',
  title: 'Health & skill-development activities',
  body: 'Health camps and awareness sessions, together with vocational training for young women and men.',
  image: images.health
},
{
  year: '2024–25',
  title: 'Cultural & creative programmes',
  body: 'Music, dance and art workshops that give children a place to create, perform and be seen.',
  image: images.culture
},
{
  year: '2025–26',
  title: 'Continued educational initiatives',
  body: 'Deepening our education work with study materials, reading spaces and mentoring.',
  image: images.library
}];