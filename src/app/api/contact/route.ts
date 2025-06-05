import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER, // Send to yourself
    subject: `New message from ${body.name}`,
    text: body.message,
    html: `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Message:</strong></p>
      <p>${body.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
}
