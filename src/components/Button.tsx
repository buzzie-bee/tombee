export const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: JSX.Element;
}) => {
  return (
    <button
      onClick={onClick}
      className="mx-auto my-2 mr-6 w-full sm:w-28 sm:my-4 border-2 border-blue-600 rounded-lg font-bold text-blue-600 px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
    >
      {children}
    </button>
  );
};
