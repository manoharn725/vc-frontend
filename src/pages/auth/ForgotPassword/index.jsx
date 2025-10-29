import { useState } from "react";
import withAuthLayout from "../../../hoc/withAuthLayout";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { validateForgotPassword } from "../../../utils/validation/validateForgotPassword";
import { toast } from "react-toastify";
import { api } from "../../../utils/api";
import AuthInputGenerator from "../../../components/AuthInputGenerator";
import { useAuthForm } from "../../../hooks/useAuthForm";

const initialUserState = {
  userEmail: "",
};

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { formState, handleChange, resetState } = useAuthForm(initialUserState);
  const navigate = useNavigate();

  const inputTypes = [
    {
      id: 1,
      name: "userEmail",
      label: "Email",
      type: "text",
      placeholder: "Enter your Email",
      isRequired: true,
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateForgotPassword(formState);
    if (!isValid) return;

    setIsLoading(true);

    try {
      const data = await api.forgotPassword(formState);
      navigate("/reset-password");
      toast.success(data.message);
      resetState();
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToSignin = () => {
    navigate("/signin");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-3 text-sm text-gray-600 cursor-pointer">
        Verify your email to get password reset instructions
      </p>
      <AuthInputGenerator
        fields={inputTypes}
        formState={formState}
        onChange={handleChange}
      />
      <Button
        type="submit"
        label={isLoading ? "Sending..." : "Forgot Password"}
        disabled={isLoading}
        isSecondary
        isFullWidth={true}
        className="mb-2"
      />
      <Button
        type="button"
        label="Back"
        isTeritary
        isFullWidth={true}
        className="mb-3"
        onClick={navigateToSignin}
      />
      <p className="text-xs text-gray-600 cursor-pointer">
        Can't remember your email? <br />
        Please contact your <b>adminstrator</b> for access.
      </p>
    </form>
  );
};
export default withAuthLayout(ForgotPassword, "Forgot Password");
