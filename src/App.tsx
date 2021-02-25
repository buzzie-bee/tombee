import { useState } from 'react';
import { HeroWave } from './components/HeroWave';
import { Card } from './components/Card';
import { Button } from './components/Button';
import { Modal } from './components/Modal';
import { Timeline } from './sections/Timeline/Timeline';

import portrait from './assets/me.jpg';

export const App = () => {
  const [privateModalOpen, setPrivateModalOpen] = useState<boolean>(false);

  return (
    <div className="">
      <HeroWave>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="text-white font-sans font-semibold text-6xl sm:text-8xl">
            Tom Bee
          </div>
          <div className="text-white font-sans text-xl sm:text-4xl">
            Web Developer
          </div>
        </div>
      </HeroWave>
      <div className="container mx-auto max-w-2xl ">
        <div className="w-full flex flex-col-reverse md:grid md:grid-cols-2  md:gap-6 ">
          <div className="flex flex-row justify-center">
            <div className="sm:p-8 sm:max-w-sm  md:max-w-full">
              <h1 className="py-2 font-sans text-3xl font-semibold text-blue-600">
                Hi, I'm Tom
              </h1>
              <p className="py-1 text-gray-800">
                I'm originally from Blackpool, UK
              </p>
              <p className="py-1 text-gray-800">
                Currently living in Munich, Germany
              </p>
              <p className="py-1 text-gray-800">Engineer turned developer</p>
              <p className="py-1 text-gray-800">
                Passionate about problem solving
              </p>
            </div>
          </div>

          <div className="flex flex-grow flex-row justify-center items-center">
            <img
              className="rounded-full h-auto p-4 xs:max-w-xs sm:max-w-sm md:max-w-full "
              src={portrait}
              alt="portrait of me"
            />
          </div>
        </div>
      </div>

      <div className="my-12 container mx-auto max-w-2xl border-b border-black " />

      <div className="container mx-auto max-w-2xl ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="py-2 mb-4 font-sans text-5xl font-semibold text-blue-600">
            Skills
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid md:grid-cols-3  md:gap-6 ">
          <div className="flex flex-row justify-start text-left">
            <div className="w-3/5 mx-auto sm:w-full sm:p-8 sm:max-w-sm  md:max-w-full">
              <h2 className="py-2 font-sans text-2xl font-semibold text-blue-600">
                Languages
              </h2>
              <p className="py-1 text-gray-800">Javascript</p>
              <p className="py-1 text-gray-800">Typescript</p>
              <p className="py-1 text-gray-800">HTML & CSS</p>
              <p className="py-1 text-gray-800">Python</p>
              <p className="py-1 text-gray-800">Lua</p>
            </div>
          </div>
          <div className="flex flex-row justify-start text-left">
            <div className="w-3/5 mx-auto sm:w-full  sm:p-8 sm:max-w-sm  md:max-w-full">
              <h2 className="py-2 font-sans text-2xl font-semibold text-blue-600">
                Frameworks & Tooling
              </h2>
              <p className="py-1 text-gray-800">React</p>
              <p className="py-1 text-gray-800">Redux</p>
              <p className="py-1 text-gray-800">Firebase & Heroku</p>
              <p className="py-1 text-gray-800">Node</p>
              <p className="py-1 text-gray-800">Rest, SQL & NoSQL</p>
              <p className="py-1 text-gray-800">Flask</p>
              <p className="py-1 text-gray-800">Git & Github</p>
            </div>
          </div>
          <div className="flex flex-row justify-start text-left">
            <div className="w-3/5 mx-auto sm:w-full sm:p-8 sm:max-w-sm  md:max-w-full">
              <h2 className="py-2 font-sans text-2xl font-semibold text-blue-600">
                Design
              </h2>
              <p className="py-1 text-gray-800">Material UI</p>
              <p className="py-1 text-gray-800">Semantic UI</p>
              <p className="py-1 text-gray-800">Tailwind</p>
              <p className="py-1 text-gray-800">Sass</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="italic text-gray-800">
            I'm always looking to expand this list.
          </p>
          <p className="italic text-gray-800">
            Let me know if something is missing!
          </p>
        </div>
      </div>

      <div className="my-12 container mx-auto max-w-2xl border-b border-black " />

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

      <div className="max-w-7xl mx-auto px-8 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="py-2 mb-4 font-sans text-5xl font-semibold text-blue-600">
            Projects
          </h1>
        </div>
        <div className="pt-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
          <Card>
            <div className="flex flex-col justify-evenly items-center">
              <div className="bg-purple-700 w-48 h-48 rounded-full" />
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
            <div className="flex flex-col justify-evenly items-center">
              <div className="bg-blue-400 w-48 h-48 rounded-full" />
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
            <div className="flex flex-col justify-evenly items-center">
              <div className="bg-green-600 w-48 h-48 rounded-full" />
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
            <div className="flex flex-col justify-evenly items-center">
              <div className="bg-yellow-600 w-48 h-48 rounded-full" />
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

      <div className="my-12 container mx-auto max-w-2xl border-b border-black " />

      <Timeline />

      <div className="h-96" />

      <div className="">Contact</div>
    </div>
  );
};
