import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Nav } from './components/layout/Nav';
import { AnimatedRoutes } from './components/layout/AnimatedRoutes';
import { markIntroPlayed } from './utils/intro';

export function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    markIntroPlayed();
  }, []);

  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen w-full bg-cream text-ink">
          <a
            href="#main"
            className="sr-only z-[80] rounded-full bg-ink px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
            
            Skip to content
          </a>
          <Nav />
          <div id="main">
            <AnimatedRoutes />
          </div>
        </div>
      </MotionConfig>
    </BrowserRouter>);

}