import { toast } from "react-toastify";

export const validateResetPassword = ({ newPassword, confirmPassword }) => {

    if (newPassword.length < 6) {
        toast.warning("New Password must contain atleast 6 characters long");
        return false;
    }

    if (newPassword !== confirmPassword) {
        toast.warning("Password doesn't match");
        return false;
    }

    return true;
}