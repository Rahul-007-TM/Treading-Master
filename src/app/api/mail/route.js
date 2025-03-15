import nodemailer from "nodemailer";

export async function POST(request) {
    // Parse the JSON body
    const body = await request.json()
    const { fullname, mobile, email, state } = body;

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
        return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ message: "Failed to send email." }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
