import { HeroWave } from './HeroWave';

export const App = () => {
  return (
    <div className="">
      <HeroWave>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="text-white font-sans font-semibold text-8xl">
            Tom Bee
          </div>
          <div className="text-white font-sans text-4xl">Web Developer</div>
        </div>
      </HeroWave>
      <div className="">Intro to tom</div>
      <div className="">Projects</div>
      <div className="">Skills</div>
      <div className="">Timeline</div>
      <div className="">Contact</div>
    </div>
  );
};
