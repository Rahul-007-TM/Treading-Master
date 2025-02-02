"use server"

import nodemailer from "nodemailer"

export default async function POST(req, res) {
    const { fullname, mobile, email, state } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: "akashlakade2001@gmail.com",
        subject: "New Lead Created",
        text: `A new lead has been created:\n\n
        Full Name: ${fullname}\n
        Mobile: ${mobile}\n
        Email: ${email}\n
        State: ${state}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email." });
    }
}
