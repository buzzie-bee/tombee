import portrait from '../../assets/me.jpg';

export const Intro = () => {
  return (
    <div className="container mx-auto max-w-2xl ">
      <div className="w-full flex flex-col-reverse md:grid md:grid-cols-2  md:gap-6 ">
        <div className="flex flex-row justify-center">
          <div className="sm:p-8 sm:max-w-sm  md:max-w-full">
            <h1 className="py-2 font-sans text-3xl font-semibold text-blue-600">
              Hi, I'm Tom
            </h1>
            <p className="py-1 text-gray-800">
              I'm originally from Blackpool, UK
            </p>
            <p className="py-1 text-gray-800">Currently living in Germany</p>
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
  );
};
