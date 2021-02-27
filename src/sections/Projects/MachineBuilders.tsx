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
      <div className="px-2 py-1">
        Having worked across the manufacturing industry for 5 years it was clear
        that there was a need for a single place where manufacturers could go to
        source machine suppliers and integrators for their projects.
      </div>
      <div className="px-2 py-1">
        We wanted to make this site operate in a similar way to trusted trader
        and upwork etc, where someone can post a project and then have machine
        builders contact them for quotes.
      </div>
    </>
  );

  const challengesElement = (
    <>
      <div className="px-2 py-1">
        This was my first big react project so having to take my basic skills
        and apply it to something at a much larger scale was a fun challenge.
      </div>
      <div className="px-2 py-1">
        We needed to make sure that the projects posted were of a high quality,
        and that the users entering them could be contacted for quotes.
      </div>
      <div className="px-2 py-1">
        This was also my first time using firebase. I had to learn how to
        implement authentication, cloud functions, firestore db, and cloud
        storage.
      </div>
      <div className="px-2 py-1">
        I also opted to use Semantic UI which had some challenges at times.
      </div>
    </>
  );

  const solutionsElement = (
    <>
      <div className="px-2 py-1">
        I continued to improve my react skills whilst making the project and I
        came across most of the common React situations. It helped me really get
        to grips with the framework and it's quirks.
      </div>
      <div className="px-2 py-1">
        Using Formik helped a lot and I managed to extend formik and semantic ui
        to create a nice multi-step form wizard. I used validation across the
        whole app to ensure that we had accurate and complete information at
        each stage.
      </div>
      <div className="px-2 py-1">
        Firebase and NoSQL was a bit of a learning curve but the documentation
        is fantastic and now I'm proficient with it, it's incredibly efficient
        when implementing MVP products that scale.
      </div>
      <div className="px-2 py-1">
        Looking back I would build this again with Sass or Tailwind as Semantic
        hasn't really been updated for a while now and it's not straightforward
        to apply custom theming. I think the end result is pretty good but it's
        definitely not perfect.
      </div>
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
      technologies="React, Redux, Semantic UI, Formik, Google cloud functions, Firestore (NoSQL), Firebase Storage"
      ideaElement={ideaElement}
      challengesElement={challengesElement}
      solutionsElement={solutionsElement}
      setPrivateModalOpen={setPrivateModalOpen}
    />
  );
};
