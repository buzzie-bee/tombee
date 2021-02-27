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
      <div className="px-2 py-1">
        I kept missing my Window Cleaner and felt bad about not being in when he
        came to collect his fee. After speaking to him and a few other window
        cleaners I decided to build an easy to use platform where they could
        pass cards through their customers letter boxes and have them set up
        recurring payments online.
      </div>
      <div className="px-2 py-1">
        The goal was to start with this MVP functionality and then grow the site
        to include a booking platform, route management platform, and various
        other features.
      </div>
    </>
  );

  const challengesElement = (
    <>
      <div className="px-2 py-1">
        Initially I tried building this using WordPress but the functionality
        just wasn't there. This is when I got serious and decided to really
        learn web development so I could build it myself.
      </div>
      <div className="px-2 py-1">
        This was my first real coding project so I had to really get to grips
        with HTML and CSS, learn the basics of Javascript, learn SQL/PostgreSQL
        syntax and design patterns, use my new Ruby on Rails knowledge, and get
        to grips with the MVC pattern.
      </div>
      <div className="px-2 py-1">
        I also needed to figure out which payment platform to use, I tried
        multiple subscription based providers but none of the off the shelf
        products had the functionality I was looking for.
      </div>
    </>
  );

  const solutionsElement = (
    <>
      <div className="px-2 py-1">
        After giving up on WordPress I set to work really getting to grips with
        Ruby on Rails and how to architect a web app. I mostly used resources
        available online, udemy, and had a few codementor.io sessions when I got
        stuck.
      </div>
      <div className="px-2 py-1">
        For the payment platform I opted to use Stripe as by using their stripe
        connect platform I could allow windowcleaners to create an account with
        stripe, have it linked to my platform through OAuth2, create all the
        subscription products on their stripe accounts, and then when customers
        paid on the website I could add a small fee for processing and pass the
        cleaner their intended amount of payment.
      </div>
      <div className="px-2 py-1">
        To implement this I needed to sync the database with stripe, and utilise
        web workers to carry out the heavy lifting of creating the stripe
        entries.
      </div>
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
