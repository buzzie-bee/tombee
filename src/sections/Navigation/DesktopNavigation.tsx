import { scrollTo } from './scrollTo';

interface DesktopNavigationPropsType {
  introRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  timelineRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const DesktopNavigation = ({
  introRef,
  skillsRef,
  projectsRef,
  timelineRef,
  contactRef,
}: DesktopNavigationPropsType) => {
  return (
    <div className="hidden sm:flex flex-row justify-evenly items-center py-2 ">
      <div
        className="font-sans text-gray-100 text-lg cursor-pointer hover:underline"
        onClick={() => {
          scrollTo(introRef);
        }}
      >
        Intro
      </div>
      <div
        className="font-sans text-gray-100 text-lg cursor-pointer hover:underline"
        onClick={() => {
          scrollTo(skillsRef);
        }}
      >
        Skills
      </div>
      <div
        className="font-sans text-gray-100 text-lg cursor-pointer hover:underline"
        onClick={() => {
          scrollTo(projectsRef);
        }}
      >
        Projects
      </div>
      <div
        className="font-sans text-gray-100 text-lg cursor-pointer hover:underline"
        onClick={() => {
          scrollTo(timelineRef);
        }}
      >
        Timeline
      </div>
      <div
        className="font-sans text-gray-100 text-lg cursor-pointer hover:underline"
        onClick={() => {
          scrollTo(contactRef);
        }}
      >
        Contact
      </div>
    </div>
  );
};
