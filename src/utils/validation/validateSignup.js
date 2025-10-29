import { toast } from "react-toastify";

export const validateSignup = ({ firstName, lastName, phoneNumber, userEmail, createPassword, confirmPassword }) => {

    if (!firstName.trim() || !lastName.trim() || !phoneNumber.trim() || !userEmail.trim() || !createPassword.trim() || !confirmPassword.trim()) {
        toast.warning("Please fill all the required fields");
        return false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber) || phoneNumber.lastName == 10) {
        toast.warning("Please Enter a valid 10-digit phone number");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        toast.warning("Please enter a valid email address");
        return false;
    }

    if (createPassword.length < 6) {
        toast.warning("Password must contain atleast 6 charcters long");
        return false;
    }

    // ✅ Strong password rule: uppercase, lowercase, number, special char
    const strongPasswordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;

    if (!strongPasswordRegex.test(createPassword)) {
        toast.warning(
            "Password must include at least 1 uppercase, 1 lowercase, 1 number, and 1 special character"
        );
        return false;
    }

    if (createPassword !== confirmPassword) {
        toast.warning("Password doesn't match");
        return false;
    }

    return true;
}