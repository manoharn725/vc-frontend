import { handleErrorResponse } from "./handleErrorResponse";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const api = {
    
    signin: async (credentials) => {
        const res = await fetch(`${baseUrl}/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        });
        return handleErrorResponse(res);
    },

    signup: async (userData) => {
        const res = await fetch(`${baseUrl}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });
        return handleErrorResponse(res);
    },

    signout: async (token) => {
        const res = await fetch(`${baseUrl}/signout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        return handleErrorResponse(res);
    },

    forgotPassword: async (userEmail) => {
        const res = await fetch(`${baseUrl}/forgot-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userEmail),
        });
        return handleErrorResponse(res);
    },

    resetPassword: async (data) => {
        const res = await fetch(`${baseUrl}/reset-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return handleErrorResponse(res);
    }
}