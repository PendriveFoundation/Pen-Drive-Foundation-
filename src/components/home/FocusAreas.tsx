import { ColorSection } from '../motion/ColorSection';
import { FocusAreasSticky } from './FocusAreasSticky';
import { FocusAreasStacked } from './FocusAreasStacked';
import { palette } from '../../data/site';
import { useMotionPrefs } from '../../hooks/useMotionPrefs';

export function FocusAreas() {
  const { mobile } = useMotionPrefs();

  return (
    <ColorSection
      from={palette.cream}
      to={palette.forest}
      fromText={palette.ink}
      toText={palette.cream}
    >
      {mobile ? <FocusAreasStacked /> : <FocusAreasSticky />}
    </ColorSection>
  );
}