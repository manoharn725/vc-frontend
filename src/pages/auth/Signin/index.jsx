import { useState } from "react";
import Button from "../../../components/ui/Button";
import withAuthLayout from "../../../hoc/withAuthLayout";
import { useAuth } from "../../../context/AuthContext";
import { api } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validateSignin } from "../../../utils/validation/validateSignin";
import AuthInputGenerator from "../../../components/AuthInputGenerator";
import { useAuthForm } from "../../../hooks/useAuthForm";

const initialUserState = {
  userEmail: "",
  userPassword: "",
};

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { storeAuthData } = useAuth();
  const { formState, handleChange, resetForm } = useAuthForm(initialUserState);
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
    {
      id: 2,
      name: "userPassword",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      isRequired: true,
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateSignin(formState);
    if (!isValid) return;
    console.log(formState);
    setIsLoading(true);

    try {
      const data = await api.signin(formState);
      storeAuthData(data.user, data.token);
      navigate("/dashboard");
      toast.success(data.message);
      resetForm();
    } catch (err) {
      toast.error(err.message);
      console.error("API error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateToForgotPassword = () => {
    navigate("/forgot-password");
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthInputGenerator
        fields={inputTypes}
        formState={formState}
        onChange={handleChange}
      />

      <p
        className="mb-3 text-sm text-blue-500 cursor-pointer"
        onClick={navigateToForgotPassword}
      >
        Forgot Password ?
      </p>
      <Button
        type="submit"
        label={isLoading ? "Logging in..." : "Login"}
        disabled={isLoading}
        isSecondary
        isFullWidth={true}
        className="mb-3"
      />
      <p className="text-center text-sm">
        Do you have an account ?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={navigateToSignup}
        >
          Sign up
        </span>
      </p>
    </form>
  );
};
export default withAuthLayout(Signin, "Login");
