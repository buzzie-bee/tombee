import { Button } from '../../components/Button';
import { HeroWave } from '../../components/HeroWave';

export const Hero = () => {
  return (
    <HeroWave>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="text-white font-sans font-semibold text-6xl sm:text-8xl">
          Tom Bee
        </div>

        <div className="flex flex-row justify-center align-start">
          <div className="overflow-hidden relative float-left inline-flex text-center h-16 pt-2.5 -mt-2.5">
            <ul className="flip-animation">
              <li className="text-white font-sans text-xl sm:text-4xl px-2.5 py-0 flip-item text-right  block">
                Web
              </li>
              <li className="text-white font-sans text-xl sm:text-4xl px-2.5 py-0 flip-item text-right block">
                React
              </li>
              <li className="text-white font-sans text-xl sm:text-4xl px-2.5 py-0 flip-item text-right block">
                Front-End
              </li>
              <li className="text-white font-sans text-xl sm:text-4xl px-2.5 py-0 flip-item text-right block">
                Full-Stack
              </li>
            </ul>
          </div>
          <div className="text-white font-sans text-xl h-11 m-0 p-0 sm:text-4xl">
            Developer
          </div>
        </div>
        <div className="">
          <Button
            onClick={() => {
              const url = 'https://github.com/buzzie-bee';
              var win = window.open(url, '_blank');
              win?.focus();
            }}
            color="white"
            hoverTextColor="blue-600"
          >
            <span>Github</span>
          </Button>
          <Button
            onClick={() => {
              const url = 'https://www.linkedin.com/in/tombee';
              var win = window.open(url, '_blank');
              win?.focus();
            }}
            color="white"
            hoverTextColor="blue-600"
          >
            <span>LinkedIn</span>
          </Button>
          <Button
            onClick={() => {
              const url =
                'https://firebasestorage.googleapis.com/v0/b/tombee.appspot.com/o/Tom%20Bee%20-%20CV.pdf?alt=media&token=d5460873-ffc3-485e-8667-2ac935293898';
              var win = window.open(url, '_blank');
              win?.focus();
            }}
            color="white"
            hoverTextColor="blue-600"
          >
            <span>CV</span>
          </Button>
        </div>
      </div>
    </HeroWave>
  );
};
