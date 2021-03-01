import { TimelineElement } from './components/TimelineElement';
import { TimelineStop } from './components/TimelineStop';
import { useWindowSize } from '../../hooks/useWindowSize';
import { timelineEvents, TimelineEventsType } from './timelineEvents';
import { useState } from 'react';
import { Button } from '../../components/Button';

export const Timeline = () => {
  const { width } = useWindowSize();
  const [events, setEvents] = useState<TimelineEventsType>(timelineEvents);
  const [endMessages, setEndMessages] = useState<string[]>([
    'Now',
    'Time Began',
  ]);
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="max-w-7xl mx-auto px-8 mb-20 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="py-2 mb-6 font-sans text-5xl font-semibold text-blue-600">
          Timeline
        </h1>
      </div>

      <div className="flex flex-row justify-center items-center mb-8">
        <div className="flex flex-row justify-center items-center max-w-sm">
          <Button
            onClick={() => {
              setShow(!show);
            }}
          >
            <span>{show ? 'Collapse' : 'Expand'}</span>
          </Button>
          <Button
            onClick={() => {
              console.log('reversing');
              setEvents((events) => [...events].reverse());
              setEndMessages((endMessages) => [...endMessages].reverse());
            }}
          >
            <span>Reverse</span>
          </Button>
        </div>
      </div>

      {show && (
        <div className="flex flex-col justify-center">
          <TimelineStop message={endMessages[0]} />
          {events.map(({ year, title, description }, idx) => {
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
      )}
      {!show && (
        <div className="flex flex-col justify-center">
          <TimelineStop message={endMessages[0]} />
          <TimelineElement
            key={timelineEvents[0].title}
            side="right"
            year=""
            title="Things I have done"
            description={["Click 'Expand' to expand the timeline."]}
          />
          <TimelineStop message={endMessages[1]} />
        </div>
      )}
    </div>
  );
};
