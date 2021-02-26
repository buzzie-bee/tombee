export const scrollTo = (ref: React.RefObject<HTMLDivElement>): void => {
  if (ref.current) {
    if (ref.current.scrollHeight) {
      window.scrollTo({
        top: ref.current.offsetTop - 120,
        behavior: 'smooth',
      });
    }
  }
};
