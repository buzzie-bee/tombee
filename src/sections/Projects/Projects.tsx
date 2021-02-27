import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Modal } from '../../components/Modal';
import portfolioScreenshot from '../../assets/TomBeePortfolio.png';

export const Projects = () => {
  const [privateModalOpen, setPrivateModalOpen] = useState<boolean>(false);
  const popToVideoUrl =
    'https://firebasestorage.googleapis.com/v0/b/tombee.appspot.com/o/lets-pop-to-demo.mp4?alt=media&token=8dfa2add-434d-48df-8f34-1ea9b933082f';
  const MBVideoUrl =
    'https://firebasestorage.googleapis.com/v0/b/tombee.appspot.com/o/machine-builders-demo.mp4?alt=media&token=e3feb7d8-fd56-4330-8e6a-a842619f5222';
  const WBVideoUrl =
    'https://firebasestorage.googleapis.com/v0/b/tombee.appspot.com/o/window-beez-demo.mp4?alt=media&token=c1f8cd1f-f7d0-4a3f-b1ae-25c5d2a231ea';

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
          <Card>
            <div className="flex flex-col justify-evenly items-stretch">
              <div className="player-wrapper">
                <ReactPlayer
                  className="absolute top-0 left-0"
                  width="100%"
                  height="100%"
                  url={popToVideoUrl}
                  loop={true}
                  controls={true}
                />
              </div>

              <div className="py-2 font-sans text-2xl font-semibold text-blue-600">
                <a href="https://www.letspop.to" target="blank">
                  letspop.to
                </a>
              </div>
              <div className="px-2">
                A personal project utilising the Skyscanner API to improve the
                experience of searching for inspirational flight destinations.
              </div>
              <div className="py-2 font-sans text-md font-semibold text-blue-600">
                Technologies
              </div>
              <div className="px-2">
                React, Redux, Typescript, Material UI, Google cloud functions,
                Firestore (NoSQL)
              </div>
              <div className="flex flex-row justify-evenly flex-wrap mt-8 ">
                <Button
                  onClick={() => {
                    const url = 'https://github.com/buzzie-bee/lets_pop_to';
                    var win = window.open(url, '_blank');
                    win?.focus();
                  }}
                >
                  <span>Github</span>
                </Button>
                <Button
                  onClick={() => {
                    const url = 'https://www.letspop.to/';
                    var win = window.open(url, '_blank');
                    win?.focus();
                  }}
                >
                  <span>Demo</span>
                </Button>
                <Button onClick={() => {}}>
                  <span>More</span>
                </Button>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col justify-evenly items-stretch">
              <div className="flex flex-grow flex-row justify-center items-center">
                <img
                  className="shadow rounded-md w-4/5 h-auto object-stretch p-4 "
                  src={portfolioScreenshot}
                  alt="screenshot of this portfolio page"
                />
              </div>
              <div className="py-2 font-sans text-2xl font-semibold text-blue-600">
                <a href="https://www.tombee.io/" target="blank">
                  tombee.io
                </a>
              </div>
              <div className="px-2 mb-6">This portfolio page</div>

              <div className="py-2 font-sans text-md font-semibold text-blue-600">
                Technologies
              </div>
              <div className="px-2">React, Typescript, Tailwind CSS</div>
              <div className="flex flex-row justify-evenly flex-wrap mt-8 ">
                <Button
                  onClick={() => {
                    const url = 'https://github.com/buzzie-bee/tombee';
                    var win = window.open(url, '_blank');
                    win?.focus();
                  }}
                >
                  <span>Github</span>
                </Button>
                <Button
                  onClick={() => {
                    const url = 'https://www.tombee.io/';
                    var win = window.open(url, '_blank');
                    win?.focus();
                  }}
                >
                  <span>Demo</span>
                </Button>
                <Button onClick={() => {}}>
                  <span>More</span>
                </Button>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex flex-col justify-evenly items-stretch">
              <div className="player-wrapper">
                <ReactPlayer
                  className="absolute top-0 left-0"
                  width="100%"
                  height="100%"
                  url={MBVideoUrl}
                  loop={true}
                  controls={true}
                />
              </div>
              <div className="py-2 font-sans text-2xl font-semibold text-blue-600">
                <a href="https://www.machinebuilders.co.uk" target="blank">
                  machinebuilders.co.uk
                </a>
              </div>
              <div className="px-2">
                A tender platform for sourcing machine builders for factory
                automation projects.
              </div>
              <div className="py-2 font-sans text-md font-semibold text-blue-600">
                Technologies
              </div>
              <div className="px-2">
                React, Redux, Semantic UI, Google cloud functions, Firestore
                (NoSQL), Firebase Storage
              </div>
              <div className="flex flex-row justify-evenly flex-wrap mt-8 ">
                <Button
                  onClick={() => {
                    setPrivateModalOpen(true);
                  }}
                >
                  <span>Github*</span>
                </Button>
                <Button
                  onClick={() => {
                    const url = 'https://www.machinebuilders.co.uk/';
                    var win = window.open(url, '_blank');
                    win?.focus();
                  }}
                >
                  <span>Demo</span>
                </Button>
                <Button onClick={() => {}}>
                  <span>More</span>
                </Button>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col justify-evenly items-stretch">
              <div className="player-wrapper">
                <ReactPlayer
                  className="absolute top-0 left-0"
                  width="100%"
                  height="100%"
                  url={WBVideoUrl}
                  loop={true}
                  controls={true}
                />
              </div>
              <div className="py-2 font-sans text-2xl font-semibold text-blue-600">
                <a href="https://www.windowbeez.co.uk" target="blank">
                  windowbeez.co.uk
                </a>
              </div>
              <div className="px-2">
                A recurring payment platform for window cleaners powered by
                Stripe Connect - no longer active.
              </div>
              <div className="py-2 font-sans text-md font-semibold text-blue-600">
                Technologies
              </div>
              <div className="px-2">
                Ruby on Rails, PostgreSQL HTML, Bulma CSS, Stripe
              </div>
              <div className="flex flex-row justify-evenly flex-wrap mt-8">
                <Button
                  onClick={() => {
                    setPrivateModalOpen(true);
                  }}
                >
                  <span>Github*</span>
                </Button>
                <Button
                  onClick={() => {
                    const url = 'https://www.windowbeez.co.uk/';
                    var win = window.open(url, '_blank');
                    win?.focus();
                  }}
                >
                  <span>Demo</span>
                </Button>
                <Button onClick={() => {}}>
                  <span>More</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
