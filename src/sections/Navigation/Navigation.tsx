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
  return (
    <nav
      className={`fixed top-0 z-50  w-full nav-gradient ${
        opaque && 'bg-blue-600 bg-opacity-80'
      }`}
    >
      <div className="flex flex-row justify-evenly items-center py-2">
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
    </nav>
  );
};

const scrollTo = (ref: React.RefObject<HTMLDivElement>): void => {
  if (ref.current) {
    if (ref.current.scrollHeight) {
      window.scrollTo({
        top: ref.current.offsetTop - 110,
        behavior: 'smooth',
      });
    }
  }
};
