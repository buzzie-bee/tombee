import { RefObject, useRef, useState } from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';

import { Navigation } from './sections/Navigation/Navigation';
import { Skills } from './sections/Skills/Skills';
import { Intro } from './sections/Intro/Intro';
import { HeroWave } from './components/HeroWave';
import { Projects } from './sections/Projects/Projects';
import { Timeline } from './sections/Timeline/Timeline';
import { Contact } from './sections/Contact/Contact';

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

      <HeroWave>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="text-white font-sans font-semibold text-6xl sm:text-8xl">
            Tom Bee
          </div>
          <div className="text-white font-sans text-xl sm:text-4xl">
            Web Developer
          </div>
        </div>
      </HeroWave>
      <div ref={setRef} className="-mt-16 mb-32" />

      <div ref={introRef}>
        <Intro />
      </div>

      <div className="my-12 container mx-auto max-w-2xl border-b border-black " />

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div className="my-12 container mx-auto max-w-2xl border-b border-black " />

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div className="my-12 container mx-auto max-w-2xl border-b border-black " />
      <div ref={timelineRef}>
        <Timeline />
      </div>

      <div className="mt-28 mb-12 container mx-auto max-w-2xl border-b border-black " />
      <div ref={contactRef}>
        <Contact />
      </div>

      <div className="h-96" />
    </div>
  );
};
