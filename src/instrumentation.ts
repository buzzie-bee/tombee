export async function register() {
  // Validate environment variables at server startup.
  // Importing dynamically so the schema only loads server-side.
  const { env } = await import('@/lib/env');
  env();
}
