import { ProjectCard } from './ProjectCard';
import portfolioScreenshot from '../../assets/TomBeePortfolio.png';

export const TomBee = () => {
  const ideaElement = (
    <>
      <div className="px-2 py-1">
        I wanted to create a clean and minimalist portfolio site which showed
        off some of my larger projects and mentioned the various work and
        development experiences.
      </div>
    </>
  );

  const challengesElement = (
    <>
      <div className="px-2 py-1">
        Trying to balance having the essential info as well as further details
        which I found interesting was tricky. How can you summarise a whole life
        on a single page?
      </div>
      <div className="px-2 py-1">
        Traditionally I would have used react-router and had several pages for
        the different sections of information, but I had to try and make it all
        work smoothly on a single page.
      </div>
      <div className="px-2 py-1">
        This was my also my first time using tailwind.
      </div>
    </>
  );

  const solutionsElement = (
    <>
      <div className="px-2 py-1">
        I think I've managed to find a balance between the essential info and
        the extra details. Expanding this card to find out more about this
        project is one example of this.
      </div>
      <div className="px-2 py-1">
        I implemented a scroll based navigation bar using useRef and dynamically
        changed the background of the bar depending on whether it had cleared
        the hero image or not.
      </div>
      <div className="px-2 py-1">
        If you know CSS then tailwind is fairly easy to pick up. At first I was
        not a fan of having huge classNames but now I'm used to it it's quite
        easy to work with.
      </div>
    </>
  );

  return (
    <ProjectCard
      position={4}
      title="TomBee.io"
      demoUrl="https://www.tombee.io"
      repoUrl="https://github.com/buzzie-bee/tombee"
      privateRepo={false}
      videoUrl=""
      imageOnly={true}
      imageString={portfolioScreenshot}
      imageAlt="Screenshot of this portfolio page"
      description="This portfolio page."
      technologies="React, Typescript, Tailwind CSS"
      ideaElement={ideaElement}
      challengesElement={challengesElement}
      solutionsElement={solutionsElement}
      setPrivateModalOpen={(open) => {
        /* not private */
      }}
    />
  );
};
