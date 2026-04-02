import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, company, service, message } = await req.json();

  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev", // must be verified later
      to: "global.wp.dev@gmail.com",
      subject: `New Contact Form from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Service Required: ${service}
        Message:
        ${message}
      `,
    });
    console.log("email Payload: " + JSON.stringify(response)); // replace with real email service
    return NextResponse.json({ success: true, response });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}