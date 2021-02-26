import { useRef, useState } from 'react';
import { useOnClickOutside } from '../../hooks/useClickOutside';
import { DesktopNavigation } from './DesktopNavigation';
import { MobileNavigation } from './MobileNavigation';

interface NavigationPropsType {
  opaque: boolean;
  introRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  timelineRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}
export const Navigation = ({
  opaque,
  introRef,
  skillsRef,
  projectsRef,
  timelineRef,
  contactRef,
}: NavigationPropsType) => {
  const [open, setOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    if (open) {
      setOpen(false);
    }
  };

  useOnClickOutside({ ref: navRef, handler: handleClickOutside });

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 z-50  w-full nav-gradient ${
        (opaque || open) && 'bg-blue-600 bg-opacity-80'
      }`}
    >
      <DesktopNavigation
        introRef={introRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        timelineRef={timelineRef}
        contactRef={contactRef}
      />
      <MobileNavigation
        open={open}
        setOpen={setOpen}
        introRef={introRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        timelineRef={timelineRef}
        contactRef={contactRef}
      />
    </nav>
  );
};
