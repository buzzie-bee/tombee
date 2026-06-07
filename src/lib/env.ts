import { z } from 'zod/v4';

const envSchema = z
  .object({
    SMTP_HOST: z.string().min(1, 'SMTP_HOST is required'),
    SMTP_PORT: z.coerce.number().int().positive().default(587),
    SMTP_SECURE: z
      .enum(['true', 'false'])
      .default('false')
      .transform((v) => v === 'true'),
    SMTP_USER: z.string().optional(),
    SMTP_PASS: z.string().optional(),
    SMTP_FROM: z.string().email().optional(),
    CONTACT_EMAIL: z.string().email().default('hello@tombee.io'),
  })
  .refine((c) => !(c.SMTP_PORT === 465 && !c.SMTP_SECURE), {
    error:
      'SMTP_PORT 465 uses implicit TLS and requires SMTP_SECURE=true. ' +
      'For STARTTLS (port 587/25), use port 587 with SMTP_SECURE=false.',
    path: ['SMTP_SECURE'],
  })
  .refine((c) => !((c.SMTP_PORT === 587 || c.SMTP_PORT === 25) && c.SMTP_SECURE), {
    error:
      'SMTP_PORT 587/25 uses STARTTLS and requires SMTP_SECURE=false. ' +
      'For implicit TLS, use port 465 with SMTP_SECURE=true.',
    path: ['SMTP_SECURE'],
  });

export type Env = z.infer<typeof envSchema>;

let _env: Env | null = null;

/**
 * Parse and cache environment variables. Throws on invalid config.
 * Called at server startup via instrumentation.ts so missing vars
 * cause an immediate, obvious failure.
 */
export function env(): Env {
  if (!_env) {
    const result = envSchema.safeParse(process.env);
    if (!result.success) {
      const formatted = z.prettifyError(result.error);
      console.error('Invalid environment variables:\n' + formatted);
      throw new Error(`Invalid environment variables:\n${formatted}`);
    }
    _env = result.data;
  }
  return _env;
}
