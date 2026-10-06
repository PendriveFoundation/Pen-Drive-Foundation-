export type Bezier = [number, number, number, number];

/** Editorial entrances — long, soft settle. */
export const EASE_OUT: Bezier = [0.16, 1, 0.3, 1];
/** Clip wipes and movement across the screen. */
export const EASE_IN_OUT: Bezier = [0.76, 0, 0.24, 1];
/** Snappy UI feedback (hover, menus, toggles). */
export const EASE_UI: Bezier = [0.23, 1, 0.32, 1];