import { TimelineElement } from './components/TimelineElement';
import { TimelineStop } from './components/TimelineStop';
import { useWindowSize } from '../../hooks/useWindowSize';
import { timelineEvents } from './timelineEvents';

export const Timeline = () => {
  const { width } = useWindowSize();

  return (
    <div className="max-w-7xl mx-auto px-8 mb-20 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="py-2 mb-14 font-sans text-5xl font-semibold text-blue-600">
          Timeline
        </h1>
      </div>
      <div className="flex flex-col justify-center">
        <TimelineStop message={''} />
        {timelineEvents.map(({ year, title, description }, idx) => {
          let side: 'right' | 'left' = 'right';
          if (width > 639) {
            side = idx % 2 === 0 ? 'right' : 'left';
          }
          return (
            <TimelineElement
              key={title}
              side={side}
              year={year}
              title={title}
              description={description}
            />
          );
        })}
        <TimelineStop message={'Time Began'} />
      </div>
    </div>
  );
};
