import { TimelineElement } from '../../components/Timeline/TimelineElement';
import { timelineEvents } from './timelineEvents';

export const Timeline = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="py-2 mb-4 font-sans text-5xl font-semibold text-blue-600">
          Timeline
        </h1>
      </div>
      <div className="flex flex-col justify-center">
        {timelineEvents.map(({ year, title, description }, idx) => {
          return (
            <TimelineElement
              side={idx % 2 === 0 ? 'right' : 'left'}
              year={year}
              title={title}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
};
