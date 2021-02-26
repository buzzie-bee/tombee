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
                Redux
              </li>
              <li className="text-white font-sans text-xl sm:text-4xl px-2.5 py-0 flip-item text-right block">
                Javascript
              </li>
            </ul>
          </div>
          <div className="text-white font-sans text-xl h-11 m-0 p-0 sm:text-4xl">
            Developer
          </div>
        </div>
      </div>
    </HeroWave>
  );
};
