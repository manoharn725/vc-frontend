import { useState } from "react";
import withAuthLayout from "../../../hoc/withAuthLayout";
import Button from "../../../components/ui/Button";
import { validateResetPassword } from "../../../utils/validation/validateResetPassword";
import { api } from "../../../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuthInputGenerator from "../../../components/AuthInputGenerator";
import { useAuthForm } from "../../../hooks/useAuthForm";
import VerificationCodeInput from "../../../components/VerificationCodeInput";

const initialUserState = {
  verificationCode: "",
  newPassword: "",
  confirmPassword: "",
};

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { formState, handleChange, resetState } = useAuthForm(initialUserState);
  const navigate = useNavigate();

  const inputTypes = [
    {
      id: 1,
      name: "newPassword",
      label: "New Password",
      type: "password",
      placeholder: "Create new passowrd",
      isRequired: true,
    },
    {
      id: 2,
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your password",
      isRequired: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateResetPassword(formState);
    if (!isValid) return;

    setIsLoading(true);
    try {
      const data = await api.resetPassword(formState);
      navigate("/signin");
      toast.success(data.message);
      resetState();
    } catch (err) {
      console.log("error");
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-1 text-sm font-medium text-gray-700">
        Verification Code
      </label>
      <VerificationCodeInput
        length={6}
        onChange={(code) =>
          handleChange({ target: { name: "verificationCode", value: code } })
        }
      />
      <AuthInputGenerator
        fields={inputTypes}
        formState={formState}
        onChange={handleChange}
      />
      <Button
        type="submit"
        label={isLoading ? "Resetting..." : "Reset Password"}
        disabled={isLoading}
        isSecondary
        isFullWidth={true}
        className="mb-2"
      />
    </form>
  );
};
export default withAuthLayout(ResetPassword, "Reset Password");
