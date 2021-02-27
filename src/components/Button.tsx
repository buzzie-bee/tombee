export const Button = ({
  onClick,
  children,
  color = 'blue-600',
  hoverTextColor = 'white',
}: {
  onClick: () => void;
  children: JSX.Element;
  color?: string;
  hoverTextColor?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`mx-auto my-2 mr-3 ml-3 w-full sm:w-28 sm:my-4 border-2 border-${color} rounded-lg font-bold text-${color} px-4 py-2 transition duration-300 ease-in-out hover:bg-${color} hover:text-${hoverTextColor}`}
    >
      {children}
    </button>
  );
};
