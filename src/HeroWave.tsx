import Wave from 'react-wavify';
export const HeroWave = ({ children }: { children?: JSX.Element }) => {
  return (
    <div className="h-500">
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
              points: 5,
            }}
          />
        </div>
      </div>
    </div>
  );
};
