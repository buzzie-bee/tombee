import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactSchema } from '@/lib/schemas/contact';
import { env } from '@/lib/env';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0]?.message ?? 'Invalid input.';
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const { name, email, message } = result.data;
    const config = env();

    const hasAuth = config.SMTP_USER && config.SMTP_PASS;

    const transporter = nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: config.SMTP_PORT,
      secure: config.SMTP_SECURE,
      ...(hasAuth && {
        auth: {
          user: config.SMTP_USER,
          pass: config.SMTP_PASS,
        },
      }),
    });

    await transporter.sendMail({
      from: `"tombee.io" <${config.SMTP_FROM ?? config.SMTP_USER}>`,
      to: config.CONTACT_EMAIL,
      replyTo: email,
      subject: `Contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 },
    );
  }
}
