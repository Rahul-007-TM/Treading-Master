"use server"

import { connectToMongoDB } from "@/db/mongodb"
import Lead from "@/models"
import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        const { fullname, mobile, email, state } = await request.json()
        await connectToMongoDB()
        await Lead.create({ fullname, mobile, email, state })

        return NextResponse.json({ message: "Lead added Successfully and email sent" }, { status: 201 });
    } catch (error) {
        console.error("Failed to add Lead or send email:", error);
        return NextResponse.json({ message: "Failed to Create Lead", error: error.message }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        await connectToMongoDB();
        const leads = await Lead.find();

        if (!leads || leads.length === 0) {
            return NextResponse.json({ message: "Leads List is Empty" }, { status: 200 });
        }

        return NextResponse.json({ leads }, { status: 200 });
    } catch (error) {
        console.error("Failed to Fetch Leads:", error);
        return NextResponse.json({ message: "Failed to Fetch Leads", error: error.message }, { status: 500 });
    }
}