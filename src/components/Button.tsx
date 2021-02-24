export const Button = ({
  onClick,
  children,
  color = 'blue-600',
}: {
  onClick: () => void;
  children: JSX.Element;
  color?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`mx-auto my-2 mr-6 w-full sm:w-28 sm:my-4 border-2 border-${color} rounded-lg font-bold text-${color} px-4 py-2 transition duration-300 ease-in-out hover:bg-${color} hover:text-white`}
    >
      {children}
    </button>
  );
};
