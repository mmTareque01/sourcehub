// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(request: NextRequest) {
//   try {
//     console.log('calling....')
//     const { name, email, message } = await request.json();

//     if (!name || !email || !message) {
//       return NextResponse.json({ message: "Missing fields" }, { status: 400 });
//     }

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: false,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"${name}" <${email}>`,
//       to: process.env.CONTACT_TO_EMAIL,
//       subject: `New Contact Message from ${name}`,
//       text: message,
//       html: `<p><strong>Name:</strong> ${name}</p>
//              <p><strong>Email:</strong> ${email}</p>
//              <p><strong>Message:</strong> ${message}</p>`,
//     });

//     return NextResponse.json({ message: "Email sent" });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
//   }
// }



// src/app/api/contact/route.ts
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
