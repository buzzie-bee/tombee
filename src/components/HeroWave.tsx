export const HeroWave = ({ children }: { children?: JSX.Element }) => {
  return (
    <div className="h-500 mb-10">
      <div className="heroGradient h-full">
        {children ? children : <></>}
        <div className="-mt-28"></div>
      </div>
    </div>
  );
};
