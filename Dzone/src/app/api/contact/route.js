import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, phoneCode, phoneNumber, service, message } = body;

    // Validate inputs
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Name, Email, Service, and Message are required fields.' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    // Env vars are loaded automatically in Next.js from .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.mailtrap.io',
      port: parseInt(process.env.SMTP_PORT || '2525', 10),
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    });

    const targetEmail = process.env.RECEIVER_EMAIL || 'digitalinfluencerns@gmail.com';

    // Set up email data
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: targetEmail,
      subject: `New Lead Inquiry - ${service} (from Dzone Contact Form)`,
      text: `
Name: ${name}
Company: ${company || 'N/A'}
Email: ${email}
Phone: ${phoneCode || ''} ${phoneNumber || ''}
Service Requested: ${service}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
          <h2 style="color: #1b264f; border-bottom: 2px solid #2563eb; padding-bottom: 10px; margin-top: 0;">New Lead Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phoneCode || ''} ${phoneNumber || ''}</p>
          <p><strong>Service:</strong> ${service}</p>
          <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #3b82f6; margin-top: 15px; border-radius: 4px;">
            <strong style="display: block; margin-bottom: 8px;">Message:</strong>
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.5; color: #475569;">${message}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 25px 0 15px 0;" />
          <p style="font-size: 0.8rem; color: #94a3b8; text-align: center; margin: 0;">Sent automatically via Dzone Web Portal</p>
        </div>
      `,
    };

    // Send the mail
    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);

    return NextResponse.json({ success: true, message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again later.' },
      { status: 500 }
    );
  }
}
