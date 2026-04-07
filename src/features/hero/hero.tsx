import Image from 'next/image';

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="h-1 w-12 rounded-full bg-primary" />
          <h1 className="font-mono text-5xl font-bold tracking-tight md:text-7xl">Tom Bee</h1>
          <p className="font-mono text-lg text-primary">Fullstack TypeScript Engineer</p>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            {`UK-born, based in Germany. I've spent nearly a decade turning "what if?" into production - and the excitement hasn't worn off yet.`}
          </p>
        </div>

        <div className="relative aspect-square w-full max-w-xs justify-self-center md:justify-self-end">
          <Image
            src="/me.png"
            alt="Tom Bee"
            fill
            priority
            sizes="(min-width: 768px) 320px, 80vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
