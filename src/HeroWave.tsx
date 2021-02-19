import Wave from 'react-wavify';
import { useWindowSize } from './hooks/useWindowSize';

export const HeroWave = ({ children }: { children?: JSX.Element }) => {
  const { width } = useWindowSize();

  const isMd = width >= 768;

  return (
    <div className="h-500 mb-10">
      <div className="heroGradient h-full">
        {children ? children : <></>}
        <div className="-mt-28">
          <Wave
            fill="#FFFFFF"
            paused={false}
            options={{
              height: 20,
              amplitude: 50,
              speed: 0.15,
              points: isMd ? 5 : 3,
            }}
          />
        </div>
      </div>
    </div>
  );
};
