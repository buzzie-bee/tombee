import { TimelineCard } from './TimelineCard';

export const TimelineElement = ({
  side,
  year,
  title,
  description,
}: {
  side: 'left' | 'right';
  year: string;
  title: string;
  description: string[];
}) => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-3">
      {side === 'left' ? (
        <TimelineCard title={title} description={description} />
      ) : (
        <div className="hidden sm:block  sm:col-auto" />
      )}
      <div className="flex flex-row justify-center items-stretch col-span-1  sm:col-auto ">
        <div className="relative h-full border-r-2 border-l-2 border-blue-600">
          <div
            className={`absolute z-30 top-1/2 left-1/2 ${
              side === 'left' ? 'ml-6' : '-ml-16'
            } -mt-3 font-sans text-lg text-gray-800  font-semibold tracking-wide`}
          >
            {year}
          </div>
          <div className="absolute z-20 top-1/2  -mt-3 -ml-3 w-6 h-6 rounded-full border-4 border-blue-600  bg-white" />
          <div
            className={`absolute z-10 top-1/2 w-44 md:w-64 -mt-0.5 ${
              side === 'left' ? '-ml-44 md:-ml-64' : ''
            } border-t-4 border-blue-600`}
          />
        </div>
      </div>
      {side === 'right' ? (
        <TimelineCard title={title} description={description} />
      ) : (
        <div />
      )}
    </div>
  );
};
