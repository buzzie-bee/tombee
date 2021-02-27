import { ProjectCard } from './ProjectCard';
import WBScreenshot from '../../assets/WBscreenshot.png';

export const WindowBeez = ({
  setPrivateModalOpen,
}: {
  setPrivateModalOpen: (open: boolean) => void;
}) => {
  const WBVideoUrl =
    'https://firebasestorage.googleapis.com/v0/b/tombee.appspot.com/o/window-beez-demo.mp4?alt=media&token=c1f8cd1f-f7d0-4a3f-b1ae-25c5d2a231ea';

  const ideaElement = (
    <>
      <div className="px-2 py-1">Platform to pay cleaners</div>
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
      position={3}
      title="WindowBeez.co.uk"
      demoUrl="https://www.windowbeez.co.uk"
      repoUrl="https://github.com/buzzie-bee/"
      privateRepo={true}
      videoUrl={WBVideoUrl}
      imageOnly={false}
      imageString={WBScreenshot}
      imageAlt="Screenshot of the Window Beez website"
      description="A recurring payment platform for window cleaners powered by Stripe Connect - no longer active."
      technologies="Ruby on Rails, PostgreSQL HTML, Bulma CSS, Stripe, Heroku"
      ideaElement={ideaElement}
      challengesElement={challengesElement}
      solutionsElement={solutionsElement}
      setPrivateModalOpen={setPrivateModalOpen}
    />
  );
};
