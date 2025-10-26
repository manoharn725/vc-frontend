import { toast } from "react-toastify";

export const validateSignin = ({ userEmail, userPassword }) => {

    if (!userEmail.trim() || !userPassword.trim()) {
        toast.warning("Please fill all the required fields");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        toast.warning("Please enter a valid email address");
        return false;
    }

    if (userPassword.length < 6) {
        toast.warning("Password must contain atleast 6 characters long");
        return false;
    }

    return true;
}