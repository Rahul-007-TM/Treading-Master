"use server"

import { connectToMongoDB } from "@/db/mongodb"
import Lead from "@/models"
import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        const { fullname, mobile, email, state } = await request.json()
        await connectToMongoDB()
        await Lead.create({ fullname, mobile, email, state })

        // const transporter = nodemailer.createTransport({
        //     service: "gmail",
        //     auth: {
        //         user: process.env.EMAIL,
        //         pass: process.env.EMAIL_PASSWORD,
        //     },
        // });

        // const mailOptions = {
        //     from: process.env.EMAIL,
        //     to: "akashlakade2001@gmail.com",
        //     subject: "New Lead Created",
        //     text: `A new lead has been created:\n\n
        //     Full Name: ${fullname}\n
        //     Mobile: ${mobile}\n
        //     Email: ${email}\n
        //     State: ${state}`,
        // };

        // await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Lead added Successfully and email sent" }, { status: 201 });
    } catch (error) {
        console.error("Failed to add Lead or send email:", error);
        return NextResponse.json({ message: "Failed to Create Lead", error: error.message }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        await connectToMongoDB();
        const pipeline = [{ $sort: { createdAt: -1 } }]
        const leads = await Lead.aggregate(pipeline);

        if (!leads || leads.length === 0) {
            return NextResponse.json({ message: "Leads List is Empty" }, { status: 200 });
        }

        return NextResponse.json({ leads }, { status: 200 });
    } catch (error) {
        console.error("Failed to Fetch Leads:", error);
        return NextResponse.json({ message: "Failed to Fetch Leads", error: error.message }, { status: 500 });
    }
}