export const TimelineStop = ({ message }: { message: string }) => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-3">
      <div className="hidden sm:block  sm:col-auto" />
      <div className="flex flex-row justify-center items-stretch col-span-1  sm:col-auto ">
        <div className="relative h-full border-r-2 border-l-2 border-blue-600">
          <div className="absolute z-30 top-1/2 left-1/2 -ml-20 -mt-3 font-sans text-lg text-gray-800  font-semibold tracking-wide">
            {message}
          </div>
          <div className="absolute z-20 top-1/2  -mt-3 -ml-3 w-6 h-6 rounded-full border-4 border-blue-600  bg-white" />
        </div>
      </div>
      <div />
    </div>
  );
};
