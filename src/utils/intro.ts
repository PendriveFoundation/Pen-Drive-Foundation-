let played = false;

/** The opening sequence plays once per visit; later page visits use the page transition instead. */
export function hasPlayedIntro(): boolean {
  return played;
}

export function markIntroPlayed(): void {
  played = true;
}