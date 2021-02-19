import { HeroWave } from './HeroWave';

export const App = () => {
  return (
    <div className="">
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
      <div className="md:container md:mx-auto ">
        <div className="w-full grid grid-cols-2 gap-4 ">
          <div className="">
            <h1 className="py-2 font-sans text-3xl font-semibold">
              All about Me
            </h1>
            <p className="py-1">I'm originally from Blackpool, UK.</p>
            <p className="py-1">Currently I'm living in Munich, Germany</p>
            <p className="py-1">
              I used to be a Factory Automation Engineering Consultant but found
              a real passion in coding and web development.
            </p>
            <p className="py-1">
              I thrive when solving challenges and coming up with effective
              solutions for business needs.
            </p>
            <p className="py-1">
              I really enjoy taking concepts from initial development through to
              production.
            </p>
            <p className="py-1"></p>
          </div>

          <div className="flex flex-grow flex-col justify-center items-center ">
            Image will go here
          </div>
        </div>
      </div>
      <div className="py-4" />

      <div className="">Projects</div>
      <div className="">Skills</div>
      <div className="">Timeline</div>
      <div className="">Contact</div>
    </div>
  );
};
