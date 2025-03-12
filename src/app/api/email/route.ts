import QueryEmail from "@/components/email/QueryEmail";
import { render } from "@react-email/components";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const {
    name,
    country,
    street,
    city,
    postcode,
    phoneNumber,
    email,
    subject,
    message,
  } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.google.com",
    secure: true,
    service: "Gmail",
    port: 25,
    auth: {
      user: process.env.GOOGLE_ID!,
      pass: process.env.GOOGLE_PASS!,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    // Send mail with defined transport object

    const emailHtml = render(
      QueryEmail({
        name: name as string,
        country: country,
        street: street,
        city: city,
        postcode: postcode,
        phoneNumber: phoneNumber,
        email: email,
        subject: subject,
        message: message,
      })
    );
    let info = await transporter.sendMail({
      from: ` <${name}>`, // sender address
      to: "info@jollypipes.in", // list of receivers
      subject: "New Contact Form Submission", // Subject line
      html: await emailHtml, // html body
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
