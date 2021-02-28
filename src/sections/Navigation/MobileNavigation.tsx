import { handleDownload } from '../helpers/handleDownload';
import { scrollTo } from './scrollTo';

interface MobileNavigationPropsType {
  open: boolean;
  setOpen: (open: boolean) => void;
  introRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  timelineRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const MobileNavigation = ({
  open,
  setOpen,
  introRef,
  skillsRef,
  projectsRef,
  timelineRef,
  contactRef,
}: MobileNavigationPropsType) => {
  return (
    <div className="sm:hidden relative flex flex-row justify-start items-center py-2 pl-4">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-full text-white hover:text-blue-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="sr-only">Open navigation menu</span>

        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          className="hidden h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div
        className={`${
          open ? '' : 'hidden'
        } origin-top-left absolute left-0 top-12 mt-2 w-full rounded-b-md shadow-lg py-1 bg-blue-600 bg-opacity-80 ring-1 ring-black ring-opacity-5`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <div
          className="font-sans text-gray-100 text-lg cursor-pointer rounded-md m-2 p-2 hover:bg-blue-800"
          onClick={() => {
            scrollTo(introRef);
            setOpen(false);
          }}
        >
          Intro
        </div>
        <div
          className="font-sans text-gray-100 text-lg cursor-pointer rounded-md m-2 p-2 hover:bg-blue-800"
          onClick={() => {
            scrollTo(skillsRef);
            setOpen(false);
          }}
        >
          Skills
        </div>
        <div
          className="font-sans text-gray-100 text-lg cursor-pointer rounded-md m-2 p-2 hover:bg-blue-800"
          onClick={() => {
            scrollTo(projectsRef);
            setOpen(false);
          }}
        >
          Projects
        </div>
        <div
          className="font-sans text-gray-100 text-lg cursor-pointer rounded-md m-2 p-2 hover:bg-blue-800"
          onClick={() => {
            scrollTo(timelineRef);
            setOpen(false);
          }}
        >
          Timeline
        </div>
        <div
          className="font-sans text-gray-100 text-lg cursor-pointer rounded-md m-2 p-2 hover:bg-blue-800"
          onClick={() => {
            scrollTo(contactRef);
            setOpen(false);
          }}
        >
          Contact
        </div>
        <div
          className="font-sans text-gray-100 text-lg cursor-pointer rounded-md m-2 p-2 hover:bg-blue-800"
          onClick={() => {
            const downloadUrl =
              'https://firebasestorage.googleapis.com/v0/b/tombee.appspot.com/o/Tom%20Bee%20-%20CV.pdf?alt=media&token=d5460873-ffc3-485e-8667-2ac935293898';
            handleDownload(downloadUrl, 'TomBee-CV.pdf');
          }}
        >
          CV
        </div>
      </div>
    </div>
  );
};
