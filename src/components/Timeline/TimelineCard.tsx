export const TimelineCard = ({
  title,
  description,
}: {
  title: string;
  description: string[];
}) => {
  return (
    <div className="z-20 p-4 pt-4 mt-4 rounded shadow bg-gray-200 border-2 border-blue-600 col-span-3 sm:col-auto">
      <div className="flex flex-col justify-space-evenly items-center">
        <h1 className="py-2 mb-2 font-sans text-xl font-semibold text-blue-600">
          {title}
        </h1>
        {description.map((line) => {
          return (
            <div key={line}>
              <p className="font-sans text-gray-800">{line}</p>
              {line.slice(-1) === '.' && <br />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
