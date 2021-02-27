import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

import { Card } from '../../components/Card';
import { ProjectCardButtons } from './ProjectCardButtons';

interface ProjectCardProps {
  position: number;
  title: string;
  demoUrl: string;
  repoUrl: string;
  privateRepo: boolean;
  videoUrl: string;
  imageOnly: boolean;
  imageString: string;
  imageAlt: string;
  description: string;
  technologies: string;
  ideaElement: JSX.Element;
  challengesElement: JSX.Element;
  solutionsElement: JSX.Element;
  setPrivateModalOpen: (open: boolean) => void;
}

export const ProjectCard = ({
  position,
  title,
  demoUrl,
  repoUrl,
  privateRepo,
  videoUrl,
  imageOnly,
  imageString,
  imageAlt,
  description,
  technologies,
  ideaElement,
  challengesElement,
  solutionsElement,
  setPrivateModalOpen,
}: ProjectCardProps) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const calculateGridStyle = () => {
    if (!expanded) {
      return `lg:order-${position}`;
    }
    if (position <= 2) {
      return 'lg:order-first';
    }
    if (position === 3) {
      return 'lg:order-0';
    }
    if (position === 4) {
      return 'lg:order-3';
    }
  };

  return (
    <div
      ref={scrollRef}
      className={`${
        expanded
          ? `lg:col-span-2 lg:col-start-1 2xl:col-span-3 ${calculateGridStyle()} `
          : ''
      }`}
    >
      <Card>
        <div
          className={`${
            expanded
              ? 'flex flex-col justify-evenly lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-4'
              : ''
          }`}
        >
          <div
            className={`flex flex-col justify-start items-stretch ${
              expanded ? 'lg:col-auto' : ''
            }`}
          >
            {imageOnly && (
              <div className="flex flex-grow flex-row justify-center items-center">
                <img
                  className="shadow rounded-md w-4/5 h-auto object-stretch p-4 "
                  src={imageString}
                  alt={imageAlt}
                />
              </div>
            )}
            {!imageOnly && (
              <div className="player-wrapper">
                <ReactPlayer
                  light={imageString}
                  className="absolute top-0 left-0"
                  width="100%"
                  height="100%"
                  url={videoUrl}
                  loop={true}
                  controls={true}
                />
              </div>
            )}

            <div className="flex flex-row justify-center align-center">
              <div className="py-2 font-sans text-2xl font-semibold text-blue-600">
                <a href={demoUrl} target="blank">
                  {title}
                </a>
              </div>
            </div>

            <div className="px-2">{description}</div>
            <div className="py-2 font-sans text-md font-semibold text-blue-600">
              Technologies
            </div>
            <div className="px-2">{technologies}</div>
            <div className={`${expanded ? 'h-20' : 'hidden'}`} />
          </div>
          <div
            className={`${
              expanded ? '' : 'hidden'
            } flex flex-col justify-start items-stretch row-span-2 lg:row-auto`}
          >
            <div className="py-2 font-sans text-md font-semibold text-blue-600">
              Idea
            </div>
            {ideaElement}

            <div className="py-2 font-sans text-md font-semibold text-blue-600">
              Challenges
            </div>

            {challengesElement}
            <div className="py-2 font-sans text-md font-semibold text-blue-600">
              Solutions
            </div>
            {solutionsElement}
          </div>
        </div>
        <ProjectCardButtons
          repoUrl={repoUrl}
          privateRepo={privateRepo}
          scrollRef={scrollRef}
          expanded={expanded}
          setExpanded={setExpanded}
          setPrivateModalOpen={setPrivateModalOpen}
        />
      </Card>
    </div>
  );
};
