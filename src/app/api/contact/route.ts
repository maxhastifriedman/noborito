import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can change this to SendGrid, Outlook, etc.
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL, // Your personal email
      subject: `お問い合わせ: ${name}`,
      text: `名前: ${name}\nメール: ${email}\n\nメッセージ:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    
    // ❌ Do NOT use setStatus in an API route
    return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });
  }
}
