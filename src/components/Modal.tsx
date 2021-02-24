import { Button } from './Button';

interface ModalPropTypes {
  open: boolean;
  onReject: () => void;
  onAccept: () => void;
}

export const Modal = ({ open, onReject, onAccept }: ModalPropTypes) => {
  if (!open) {
    return <></>;
  }

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Private Repository
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    This repository is set to private. Please get in touch to
                    request access.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-2 flex flex-row">
            <Button color="gray-500" onClick={onReject}>
              <span>Later</span>
            </Button>
            <Button onClick={onAccept}>
              <span>Request</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
