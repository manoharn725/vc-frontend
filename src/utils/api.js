const baseUrl = import.meta.env.VITE_BASE_URL;

export const api = {

    signin: async (credentials) => {
        const res = await fetch(`${baseUrl}/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        });
        if (!res.ok) throw new Error("signin failed");
        return res.json();
    },

    signup: async (userData) => {
        const res = await fetch(`${baseUrl}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        if (!res.ok) throw new Error("signup failed");
        return res.json();
    },

    signout: async (token) => {
        const res = await fetch(`${baseUrl}/signout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        if (!res.ok) throw new Error("Signout Failed!");
        return res.json();
    },

    forgotPassword: async (email) => {
        const res = await fetch(`${baseUrl}/forgot-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(email),
        });
        if (!res.ok) throw new Error("Email is not found!");
        return res.json();
    },

    resetPassword: async (data) => {
        const res = await fetch(`${baseUrl}/reset-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Reset failed");
        return res.json()
    }
}