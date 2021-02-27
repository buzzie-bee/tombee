import { Button } from '../../components/Button';

export const ProjectCardButtons = ({
  repoUrl,
  privateRepo,
  scrollRef,
  expanded,
  setExpanded,
  setPrivateModalOpen,
}: {
  repoUrl: string;
  privateRepo: boolean;
  scrollRef: React.RefObject<HTMLDivElement>;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  setPrivateModalOpen: (open: boolean) => void;
}) => {
  return (
    <div className="flex flex-row justify-evenly flex-wrap mt-8 ">
      <Button
        onClick={() => {
          if (privateRepo) {
            setPrivateModalOpen(true);
          }
          const url = repoUrl;
          var win = window.open(url, '_blank');
          win?.focus();
        }}
      >
        <span>Github{privateRepo && '*'}</span>
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
      <Button
        onClick={() => {
          if (expanded) {
            setTimeout(() => {
              if (scrollRef.current) {
                if (scrollRef.current.offsetTop) {
                  window.scrollTo({
                    top: scrollRef.current.offsetTop - 60,
                  });
                }
              }
            }, 50);
          }
          setExpanded(!expanded);
        }}
      >
        <span>{expanded ? 'Less' : 'More'}</span>
      </Button>
    </div>
  );
};
