export const Card = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <div className="rounded shadow p-2 border-gray-200">{children}</div>;
};
