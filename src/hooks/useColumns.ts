import { useEffect, useState } from 'react';

function getColumns(): number {
  if (typeof window === 'undefined') return 3;
  if (window.matchMedia('(min-width: 1024px)').matches) return 3;
  if (window.matchMedia('(min-width: 640px)').matches) return 2;
  return 1;
}

export function useColumns(): number {
  const [cols, setCols] = useState<number>(getColumns);

  useEffect(() => {
    const onResize = () => setCols(getColumns());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return cols;
}