import { useState } from "react";
import ControlledInput from "../../../components/ControlledInput";
import withAuthLayout from "../../../hoc/withAuthLayout";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const initialUserState = {
  userEmail: "",
};

const ForgotPassword = () => {
  const [forgotPassword, setForgotPassword] = useState(initialUserState);
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

  const navigateToSignin = () => {
    navigate('/signin')
  };

  return (
    <>
    <p className="mb-3 text-sm text-gray-600 cursor-pointer">Verify your email to get password reset instructions</p>
      <form>
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
          label="Forgot Password"
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
      </form>
      <p className="text-xs text-gray-600 cursor-pointer">
        Can't remember your email? <br />
        Please contact your <b>adminstrator</b> for access.
      </p>
    </>
  );
};
export default withAuthLayout(ForgotPassword, "Forgot Password");
