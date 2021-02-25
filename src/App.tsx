import { HeroWave } from './components/HeroWave';
import { Projects } from './sections/Projects/Projects';
import { Timeline } from './sections/Timeline/Timeline';

import { Contact } from './sections/Contact/Contact';
import { Skills } from './sections/Skills/Skills';
import { Intro } from './sections/Intro/Intro';
import { useRef } from 'react';

export const App = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="">
      <Navigation
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
      <button
        onClick={() => {
          scrollTo(introRef);
        }}
      >
        Test
      </button>
    </div>
  );
};

const scrollTo = (ref: React.RefObject<HTMLDivElement>): void => {
  if (ref.current) {
    if (ref.current.scrollHeight) {
      window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  }
};
