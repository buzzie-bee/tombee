import { useState } from 'react';

import { Modal } from '../../components/Modal';
import { LetsPopTo } from './LetsPopTo';
import { MachineBuilders } from './MachineBuilders';
import { WindowBeez } from './WindowBeez';
import { TomBee } from './TomBee';

export const Projects = () => {
  const [privateModalOpen, setPrivateModalOpen] = useState<boolean>(false);

  return (
    <>
      <Modal
        open={privateModalOpen}
        onReject={() => {
          setPrivateModalOpen(false);
        }}
        onAccept={() => {
          //TODO: redirect to the contact form
          setPrivateModalOpen(false);
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="py-2 mb-4 font-sans text-5xl font-semibold text-blue-600">
            Projects
          </h1>
        </div>
        <div className="pt-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
          <LetsPopTo />
          <MachineBuilders setPrivateModalOpen={setPrivateModalOpen} />
          <WindowBeez setPrivateModalOpen={setPrivateModalOpen} />
          <TomBee />
        </div>
      </div>
    </>
  );
};
