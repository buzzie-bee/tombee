export const Contact = () => {
  return (
    <div className="container mx-auto max-w-2xl px-2 ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="py-2 mb-4 font-sans text-5xl font-semibold text-blue-600">
          Contact
        </h1>
      </div>
      <div className="my-4 flex flex-col justify-between space-y-1 items-baseline">
        <p>Are you looking for a new hardworking member of your team?</p>
        <p>Do you have a project that I can help with?</p>
        <p>Something else you want to know?</p>
        <p className="py-2 font-sans font-semibold">
          Don't hesitate to get in touch!
        </p>
      </div>

      <h1 className="py-1 mb-4 font-sans text-2xl font-semibold text-blue-600">
        Get in touch:
      </h1>

      <div className="grid grid-cols-3 max-w-sm gap-y-4">
        <div className="font-sans font-semibold">Email:</div>
        <div className="col-span-2">
          <a
            className="underline text-blue-600 hover:text-blue-800"
            href="mailto:tom@tombee.io?subject=Hey Tom"
            target="blank"
          >
            tom@tombee.io
          </a>
        </div>
        <div className="font-sans font-semibold">Linked In:</div>
        <div className="col-span-2">
          <a
            className="underline text-blue-600 hover:text-blue-800"
            href="https://www.linkedin.com/in/tombee"
            target="blank"
          >
            linkedin.com/in/tombee
          </a>
        </div>
        <div className="font-sans font-semibold">Github:</div>
        <div className="col-span-2">
          <a
            className="underline text-blue-600 hover:text-blue-800"
            href="https://github.com/buzzie-bee/"
            target="blank"
          >
            github.com/buzzie-bee/
          </a>
        </div>
      </div>
    </div>
  );
};
