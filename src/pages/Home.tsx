import { PageShell } from '../components/layout/PageShell';
import { HomeHero } from '../components/home/HomeHero';
import { PurposeSection } from '../components/home/PurposeSection';
import { FocusAreas } from '../components/home/FocusAreas';
import { FieldSection } from '../components/home/FieldSection';
import { ProgramsSection } from '../components/home/ProgramsSection';
import { ImpactTeaser } from '../components/home/ImpactTeaser';
import { ClosingCta } from '../components/home/ClosingCta';

/** Discovery → story → human connection → impact → action. */
export function Home() {
  return (
    <PageShell title="Empowering Communities">
      <HomeHero />
      <PurposeSection />
      <FocusAreas />
      <FieldSection />
      <ProgramsSection />
      <ImpactTeaser />
      <ClosingCta />
    </PageShell>);

}