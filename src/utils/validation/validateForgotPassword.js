import { toast } from "react-toastify";

export const validateForgotPassword = ({ userEmail }) => {

    if (!userEmail.trim()) {
        toast.warning("Please enter your email address");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        toast.warning("Please enter the valid email address");
        return false;
    }

    return true;
}