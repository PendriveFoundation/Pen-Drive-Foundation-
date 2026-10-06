import React, { useMemo } from 'react';

const N = 29;

function inFinder(x: number, y: number) {
  return x < 8 && y < 8 || x > N - 9 && y < 8 || x < 8 && y > N - 9;
}

/** Static QR artwork for the prototype — replace with the foundation's real UPI QR image. */
export function QrCode({ label }: {label: string;}) {
  const cells = useMemo(() => {
    let seed = 11;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    const out: Array<[number, number]> = [];
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (!inFinder(x, y) && rand() > 0.52) out.push([x, y]);
      }
    }
    return out;
  }, []);

  const finders: Array<[number, number]> = [
  [0, 0],
  [N - 7, 0],
  [0, N - 7]];


  return (
    <svg viewBox={`-1 -1 ${N + 2} ${N + 2}`} role="img" aria-label={label} shapeRendering="crispEdges" className="h-full w-full">
      <rect x={-1} y={-1} width={N + 2} height={N + 2} fill="#FAF7F1" />
      {cells.map(([x, y]) =>
      <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="#1B1A17" />
      )}
      {finders.map(([x, y]) =>
      <g key={`${x}-${y}`}>
          <rect x={x} y={y} width={7} height={7} fill="#1B1A17" />
          <rect x={x + 1} y={y + 1} width={5} height={5} fill="#FAF7F1" />
          <rect x={x + 2} y={y + 2} width={3} height={3} fill="#1B1A17" />
        </g>
      )}
    </svg>);

}