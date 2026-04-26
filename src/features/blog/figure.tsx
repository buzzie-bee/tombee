interface FigureProps {
  caption?: string;
  children: React.ReactNode;
}

export function Figure({ caption, children }: FigureProps) {
  return (
    <figure className="my-6 [&>pre]:my-0">
      {children}
      {caption ? (
        <figcaption className="mt-2 text-sm leading-relaxed text-muted-foreground italic">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
