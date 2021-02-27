import { ProjectCard } from './ProjectCard';
import popToScreenshot from '../../assets/popToScreenshot.png';

export const LetsPopTo = () => {
  const popToVideoUrl =
    'https://firebasestorage.googleapis.com/v0/b/tombee.appspot.com/o/lets-pop-to-demo.mp4?alt=media&token=8dfa2add-434d-48df-8f34-1ea9b933082f';

  const ideaElement = (
    <>
      <div className="px-2 py-1">
        When searching for holiday destinations I found it frustrating trying to
        find good deals for the days that I had in mind.
      </div>
      <div className="px-2 py-1">
        It involved a lot of manual searching to find flights departing on
        Thursdays or Fridays, returning on Sundays or Mondays, that were direct.
      </div>
      <div className="px-2 py-1">
        Manually finding flights meeting this criteria in say July could be 16
        or more manual searches. So I set out to make a site that handled all
        the heavy lifting.
      </div>
    </>
  );

  const challengesElement = (
    <>
      <div className="px-2 py-1">
        The shape of the response from the skyscanner api would involve a lot of
        processing on the client side, especially when accounting for multiple
        dates.
      </div>
      <div className="px-2 py-1">
        Getting images for the destinations via the google places api would
        quickly accumulate a very high cost. Each search could show potentially
        hundreds of images which at $7 per 1000 calls (with 2 calls required per
        image) would quickly grow to be higher than any potential affiliate
        income.
      </div>
      <div className="px-2 py-1">
        The material UI datepickers were missing a lot of the functionality I
        required.
      </div>
    </>
  );

  const solutionsElement = (
    <>
      <div className="px-2 py-1">
        I implemented some firebase cloud functions to handle the fetching and
        normalising of the data from the skyscanner api. This allowed me to
        shape the data into a format that is easy to consume on the React
        front-end.
      </div>
      <div className="px-2 py-1">
        To resolve the images issue I decided to manually select free to use
        images (with Creative Commons Licences) from Flickr. I built some python
        scripts to source a list of the possible arrival airports from
        skyscanner and then ranked them by frequency. I then created a{' '}
        <a
          className="text-blue-600 underline cursor-pointer"
          href="https://github.com/buzzie-bee/lets-pop-to-data-entry"
        >
          data entry website
        </a>{' '}
        so I could quickly select images for the various locations.
      </div>
      <div className="px-2 py-1">
        I used the custom render props of the pickers to implement bespoke
        pickers that suited my use case. I also had to heavily normalise the
        Date objects so that I could persist them in the redux store and local
        storage.
      </div>
    </>
  );

  return (
    <ProjectCard
      position={1}
      title="LetsPop.to"
      demoUrl="https://www.letspop.to"
      repoUrl="https://github.com/buzzie-bee/lets_pop_to"
      privateRepo={false}
      videoUrl={popToVideoUrl}
      imageOnly={false}
      imageString={popToScreenshot}
      imageAlt="Screenshot of the let's pop to webapp"
      description="A personal project utilising the Skyscanner API to improve the
  experience of searching for inspirational flight destinations."
      technologies="React, Redux, Typescript, Material UI, Google cloud functions,
  Firestore (NoSQL)"
      ideaElement={ideaElement}
      challengesElement={challengesElement}
      solutionsElement={solutionsElement}
      setPrivateModalOpen={(open) => {
        /* not private */
      }}
    />
  );
};
