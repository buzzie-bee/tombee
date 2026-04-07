import { z } from 'zod/v4';

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().email('Invalid email address'),
  message: z.string().trim().min(1, 'Message is required'),
});

export type ContactRequest = z.infer<typeof contactSchema>;
