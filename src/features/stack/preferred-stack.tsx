const STACK = [
  {
    category: 'Frontend',
    items: ['React / Next.js', 'TypeScript', 'shadcn/ui', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js / NestJS', 'PostgreSQL', 'RabbitMQ / Redis', 'Zitadel / OpenFGA'],
  },
  {
    category: 'Infrastructure',
    items: ['Docker / K8s', 'AWS / GCP', 'Terraform', 'CI/CD Pipelines'],
  },
  {
    category: 'Tooling / DX',
    items: ['Turborepo', 'Vitest / Playwright', 'ESLint + Prettier', 'OpenAPI Codegen'],
  },
];

export function PreferredStack() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex flex-col gap-2">
        <div className="h-1 w-12 rounded-full bg-primary" />
        <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
          My Preferred Stack
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((group) => (
          <div key={group.category} className="flex flex-col gap-4">
            <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {group.category}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
