"use server"

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"
const apiUrl = baseUrl + "/api/leads";

export const createLead = async ({ fullname, mobile, email, state }) => {
    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fullname, mobile, email, state }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'Failed to create lead');
        }
        return await res.json()
    } catch (error) {
        console.error("Failed to add Lead:", error);
        throw error;
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