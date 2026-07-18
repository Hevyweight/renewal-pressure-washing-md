import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import twilio from "twilio";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req: Request) {
  try {
    const { name, phone, email, service, address, description } = await req.json();

    // Send email to Meir
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.MEIR_EMAIL,
      subject: `New Quote Request — ${service}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Description:</strong> ${description}</p>
      `,
    });

    // SMS temporarily disabled - Twilio verification pending
    // await twilioClient.messages.create({
    //   body: `New quote request from ${name} — ${service} at ${address}. Call: ${phone}`,
    //   from: process.env.TWILIO_PHONE,
    //   to: process.env.MEIR_PHONE!,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}