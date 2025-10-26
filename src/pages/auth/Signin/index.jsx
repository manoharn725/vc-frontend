import { useState } from "react";
import ControlledInput from "../../../components/ControlledInput";
import Button from "../../../components/ui/Button";
import withAuthLayout from "../../../hoc/withAuthLayout";
import { useAuth } from "../../../context/AuthContext";
import { api } from "../../../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validateSignin } from "../../../utils/validation/validateSignin";

const initialUserState = {
  userEmail: "",
  userPassword: "",
};

const Signin = () => {
  const [userLoginInfo, setUserLoginInfo] = useState(initialUserState);
  const [isLoading, setIsLoading] = useState(false);
  const { storeAuthData } = useAuth();
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


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateSignin(userLoginInfo)
    if (!isValid) return;
    console.log(userLoginInfo);
    setIsLoading(true);
    
    try {
      const data = await api.signin(userLoginInfo);
      console.log(data);
      toast.success(data.message);
      storeAuthData(data.user, data.token);
      //   console.log(data); // backend response
      setUserLoginInfo(initialUserState);
      navigate("/dashboard");
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
      {inputTypes.map(({ id, name, label, type, placeholder, isRequired }) => (
        <ControlledInput
          key={id}
          type={type}
          name={name}
          label={label}
          value={userLoginInfo[name]}
          placeholder={placeholder}
          isRequired={isRequired}
          onChange={handleChange}
        />
      ))}
      <p
        className="mb-3 text-sm text-blue-500 cursor-pointer"
        onClick={navigateToForgotPassword}
      >
        Forgot Password ?
      </p>
      <Button
        type="submit"
        label={isLoading ? "Logging in..." : "Login"}
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
