import { useReducedMotion } from 'framer-motion';
import { useIsMobile } from './useIsMobile';

/**
 * amp scales every scroll-linked movement:
 * desktop 1, mobile 0.4 (lighter), reduced motion 0 (no movement).
 */
export function useMotionPrefs() {
  const reduced = useReducedMotion() ?? false;
  const mobile = useIsMobile();
  const amp = reduced ? 0 : mobile ? 0.4 : 1;
  return { reduced, mobile, amp, lite: reduced || mobile };
}