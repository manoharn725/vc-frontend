import { useState } from "react";
import ControlledInput from "../../../components/ControlledInput";
import withAuthLayout from "../../../hoc/withAuthLayout";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { validateForgotPassword } from "../../../utils/validation/validateForgotPassword";
import { toast } from "react-toastify";
import { api } from "../../../utils/api";

const initialUserState = {
  userEmail: "",
};

const ForgotPassword = () => {
  const [forgotPassword, setForgotPassword] = useState(initialUserState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const inputType = [
    {
      id: 1,
      name: "userEmail",
      label: "Email",
      type: "text",
      placeholder: "Enter your Email",
      isRequired: true,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForgotPassword((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateForgotPassword(forgotPassword);
    if (!isValid) return;

    setIsLoading(true);

    try {
      const data = await api.forgotPassword(forgotPassword);
      toast.success(data.message);
      navigate("/reset-password");
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
      {inputType.map(({ id, name, label, type, placeholder, isRequired }) => (
        <ControlledInput
          key={id}
          name={name}
          label={label}
          type={type}
          value={forgotPassword[name]}
          placeholder={placeholder}
          isRequired={isRequired}
          onChange={handleChange}
        />
      ))}
      <Button
        type="submit"
        label={isLoading ? "loading" : "Forgot Password"}
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
