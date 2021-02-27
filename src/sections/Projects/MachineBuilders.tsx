import { ProjectCard } from './ProjectCard';
import MBScreenshot from '../../assets/MBscreenshot.png';

export const MachineBuilders = ({
  setPrivateModalOpen,
}: {
  setPrivateModalOpen: (open: boolean) => void;
}) => {
  const MBVideoUrl =
    'https://firebasestorage.googleapis.com/v0/b/tombee.appspot.com/o/machine-builders-demo.mp4?alt=media&token=e3feb7d8-fd56-4330-8e6a-a842619f5222';

  const ideaElement = (
    <>
      <div className="px-2 py-1">Platform to find machine builders</div>
    </>
  );

  const challengesElement = (
    <>
      <div className="px-2 py-1">
        First big react, firebase project, validation
      </div>
    </>
  );

  const solutionsElement = (
    <>
      <div className="px-2 py-1">Figured it all out</div>
    </>
  );

  return (
    <ProjectCard
      position={2}
      title="MachineBuilders.co.uk"
      demoUrl="https://www.machinebuilders.co.uk"
      repoUrl="https://github.com/buzzie-bee/"
      privateRepo={true}
      videoUrl={MBVideoUrl}
      imageOnly={false}
      imageString={MBScreenshot}
      imageAlt="Screenshot of the Machine Builders website"
      description="A tender platform for sourcing machine builders for factory automation projects."
      technologies="React, Redux, Semantic UI, Google cloud functions, Firestore (NoSQL), Firebase Storage"
      ideaElement={ideaElement}
      challengesElement={challengesElement}
      solutionsElement={solutionsElement}
      setPrivateModalOpen={setPrivateModalOpen}
    />
  );
};
