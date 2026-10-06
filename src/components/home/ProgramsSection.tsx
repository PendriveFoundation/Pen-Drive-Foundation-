import React from 'react';
import { ColorSection } from '../motion/ColorSection';
import { ProgramsHorizontal } from './ProgramsHorizontal';
import { ProgramsCarousel } from './ProgramsCarousel';
import { palette } from '../../data/site';
import { useMotionPrefs } from '../../hooks/useMotionPrefs';

export function ProgramsSection() {
  const { mobile, reduced } = useMotionPrefs();
  return (
    <ColorSection from={palette.forest} to={palette.terracotta} fromText={palette.cream} toText={palette.cream}>
      {mobile || reduced ? <ProgramsCarousel /> : <ProgramsHorizontal />}
    </ColorSection>);

}