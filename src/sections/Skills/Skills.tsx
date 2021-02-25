export const Skills = () => {
  return (
    <div className="container mx-auto max-w-2xl ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="py-2 mb-4 font-sans text-5xl font-semibold text-blue-600">
          Skills
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid md:grid-cols-3  md:gap-6 ">
        <div className="flex flex-row justify-start text-left">
          <div className="w-3/5 mx-auto sm:w-full sm:p-8 sm:max-w-sm  md:max-w-full">
            <h2 className="py-2 font-sans text-2xl font-semibold text-blue-600">
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
            <h2 className="py-2 font-sans text-2xl font-semibold text-blue-600">
              Frameworks & Tooling
            </h2>
            <p className="py-1 text-gray-800">React</p>
            <p className="py-1 text-gray-800">Redux</p>
            <p className="py-1 text-gray-800">Firebase & Heroku</p>
            <p className="py-1 text-gray-800">Node</p>
            <p className="py-1 text-gray-800">Rest APIs</p>
            <p className="py-1 text-gray-800">SQL & NoSQL DBs</p>
            <p className="py-1 text-gray-800">Flask</p>
            <p className="py-1 text-gray-800">Git & Github</p>
          </div>
        </div>
        <div className="flex flex-row justify-start text-left">
          <div className="w-3/5 mx-auto sm:w-full sm:p-8 sm:max-w-sm  md:max-w-full">
            <h2 className="py-2 font-sans text-2xl font-semibold text-blue-600">
              Design
            </h2>
            <p className="py-1 text-gray-800">Material UI</p>
            <p className="py-1 text-gray-800">Semantic UI</p>
            <p className="py-1 text-gray-800">Tailwind</p>
            <p className="py-1 text-gray-800">Sass</p>
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
  );
};
