import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from '../../pages/Home';
import { About } from '../../pages/About';
import { Impact } from '../../pages/Impact';
import { Gallery } from '../../pages/Gallery';
import { Donate } from '../../pages/Donate';
import { Contact } from '../../pages/Contact';
import { Volunteer } from '../../pages/Volunteer';

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>);

}