"use server"

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"
const apiUrl = baseUrl + "/api/leads";
const mailUrl = baseUrl + "/api/mail";

export const createLead = async ({ fullname, mobile, email, state }) => {
    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fullname, mobile, email, state }),
        });
        const responseData = await res.json();
        await fetch(mailUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fullname, mobile, email, state }),
        });
        return responseData;
    } catch (error) {
        console.error("Failed to add Lead:", error);
    }
}

export const getLeads = async () => {
    try {
        const res = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!res.ok) {
            throw new Error(res);
        }
        const data = await res.json();
        return {
            ok: res.ok,
            todos: data.todos,
        };
    } catch (error) {
        console.error("Failed to Fetch Todos:", error);
        throw new Error('Failed to Fetch Todos');
    }
};