import { RefObject, useRef, useState } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';

import { Navigation } from './sections/Navigation/Navigation';
import { Skills } from './sections/Skills/Skills';
import { Intro } from './sections/Intro/Intro';
import { HeroWave } from './components/HeroWave';
import { Projects } from './sections/Projects/Projects';
import { Timeline } from './sections/Timeline/Timeline';
import { Contact } from './sections/Contact/Contact';
import { Divider } from './components/Divider';
import { Hero } from './sections/Hero/Hero';
import { Footer } from './sections/Footer/Footer';

export const App = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [ref, setRef] = useState<HTMLElement | RefObject<HTMLElement> | null>(
    null
  );
  const { isIntersecting } = useIntersectionObserver(ref, {
    initialIsIntersecting: true,
  });

  return (
    <div className="">
      <Navigation
        opaque={!isIntersecting}
        introRef={introRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        timelineRef={timelineRef}
        contactRef={contactRef}
      />

      <Hero />

      {/* This is for detecting when the navbar should go opaque */}
      <div ref={setRef} className="-mt-16 mb-32" />

      <div ref={introRef}>
        <Intro />
      </div>

      <Divider />
      <div ref={skillsRef}>
        <Skills />
      </div>

      <Divider />
      <div ref={projectsRef}>
        <Projects />
      </div>

      <Divider />
      <div ref={timelineRef}>
        <Timeline />
      </div>

      <Divider />
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  );
};
