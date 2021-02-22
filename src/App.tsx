import { HeroWave } from './HeroWave';
import portrait from './assets/me.jpg';
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
      <div className="container mx-auto max-w-2xl ">
        <div className="w-full flex flex-col-reverse md:grid md:grid-cols-2  md:gap-6 ">
          <div className="flex flex-row justify-center">
            <div className="sm:p-8 sm:max-w-sm  md:max-w-full">
              <h1 className="py-2 font-sans text-3xl font-semibold text-blue-theme">
                The basics
              </h1>
              <p className="py-1 text-gray-800">
                I'm originally from Blackpool, UK
              </p>
              <p className="py-1 text-gray-800">
                Currently living in Munich, Germany
              </p>
              <p className="py-1 text-gray-800">Engineer turned developer</p>
              <p className="py-1 text-gray-800">
                Passionate about problem solving
              </p>
            </div>
          </div>

          <div className="flex flex-grow flex-row justify-center items-center">
            <img
              className="rounded-full h-auto p-4 xs:max-w-xs sm:max-w-sm md:max-w-full "
              src={portrait}
              alt="portrait of me"
            />
          </div>
        </div>
      </div>

      <div className="my-12 container mx-auto max-w-2xl border-b border-black " />

      <div className="container mx-auto max-w-2xl ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="py-2 font-sans text-3xl font-semibold text-blue-theme">
            Skills
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid md:grid-cols-3  md:gap-6 ">
          <div className="flex flex-row justify-start text-left">
            <div className="w-3/5 mx-auto sm:w-full sm:p-8 sm:max-w-sm  md:max-w-full">
              <h2 className="py-2 font-sans text-2xl font-semibold text-blue-theme">
                Languages
              </h2>
              <p className="py-1 text-gray-800">Javascript</p>
              <p className="py-1 text-gray-800">Typescript</p>
              <p className="py-1 text-gray-800">HTML & CSS</p>
              <p className="py-1 text-gray-800">Python</p>
              <p className="py-1 text-gray-800">Lua</p>
            </div>
          </div>
          <div className="flex flex-row justify-start text-left">
            <div className="w-3/5 mx-auto sm:w-full  sm:p-8 sm:max-w-sm  md:max-w-full">
              <h2 className="py-2 font-sans text-2xl font-semibold text-blue-theme">
                Frameworks & Tooling
              </h2>
              <p className="py-1 text-gray-800">React</p>
              <p className="py-1 text-gray-800">Redux</p>
              <p className="py-1 text-gray-800">Firebase & Heroku</p>
              <p className="py-1 text-gray-800">Node</p>
              <p className="py-1 text-gray-800">Rest, SQL & NoSQL</p>
              <p className="py-1 text-gray-800">Flask</p>
              <p className="py-1 text-gray-800">Git & Github</p>
            </div>
          </div>
          <div className="flex flex-row justify-start text-left">
            <div className="w-3/5 mx-auto sm:w-full sm:p-8 sm:max-w-sm  md:max-w-full">
              <h2 className="py-2 font-sans text-2xl font-semibold text-blue-theme">
                Design
              </h2>
              <p className="py-1 text-gray-800">Material UI</p>
              <p className="py-1 text-gray-800">Semantic UI</p>
              <p className="py-1 text-gray-800">Tailwind</p>
              <p className="py-1 text-gray-800">Sass basics</p>
              <p className="py-1 text-gray-800"></p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="italic text-gray-800">
            I'm always looking to expand this list.
          </p>
          <p className="italic text-gray-800">
            Let me know if something is missing!
          </p>
        </div>
      </div>

      <div className="my-12 container mx-auto max-w-2xl border-b border-black " />

      <div className="container mx-auto max-w-2xl ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="py-2 font-sans text-3xl font-semibold text-blue-theme">
            Projects
          </h1>
        </div>
      </div>

      <div className="">Projects</div>
      <div className="">Timeline</div>
      <div className="">Contact</div>
    </div>
  );
};
