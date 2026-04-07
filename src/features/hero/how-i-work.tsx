export function HowIWork() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="h-1 w-12 rounded-full bg-primary" />
          <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">How I Work</h2>
        </div>

        <div className="flex flex-col gap-6 text-muted-foreground">
          <p>
            I&apos;m passionate about problem solving. I&apos;m at my happiest when I&apos;m deep in
            a tricky problem, engineering a robust solution.
          </p>
          <p>
            I build full stack web applications in close collaboration with clients, working
            together to ship the best possible solutions.
          </p>
          <p>
            When building I focus on developer velocity by building great tooling for shipping clean
            code fast, architecting systems that scale effortlessly, designing great UX to delight
            users, and keeping feedback loops tight so we&apos;re always building the right thing.
          </p>
        </div>
      </div>
    </section>
  );
}
