import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const guest = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
    tls: {
      rejectUnauthorized: true,
    },
  });

  async function main() {
    const info = await transporter.sendMail({
      from: '"Wedding Invitation" <no-reply@gamil.com>',
      to: "reifaldird121@gmail.com",
      subject: "Wedding Guests 📝",
      html: `
          <ul>
              <li>Nama   : ${guest.name}</li>
              <li>Jumlah : ${guest.total}</li>
              <li>Status : ${guest.confirm}</li>
          </ul>
          `,
    });

    return `Message sent: ${info.messageId}`;
  }

  return main()
    .then((res) => NextResponse.json({ status: 200, message: res }))
    .catch((err) => NextResponse.json({ status: 400, message: err }));
}
