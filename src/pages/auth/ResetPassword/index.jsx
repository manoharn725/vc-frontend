import { useState } from "react";
import withAuthLayout from "../../../hoc/withAuthLayout";
import ControlledInput from "../../../components/ControlledInput";
import Button from "../../../components/ui/Button";

const initialUserState = {
  newPassword: "",
  confirmPassword: "",
};

const ResetPassword = () => {
  const [resetPasswrod, setResetPassword] = useState(initialUserState);

  const inputTypes = [
    {
      id: 1,
      name: "newPassword",
      label: "New Password",
      type: "text",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetPassword((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form>
      {inputTypes.map(({ id, name, label, type, placeholder, isRequired }) => (
        <ControlledInput
          key={id}
          type={type}
          name={name}
          label={label}
          value={resetPasswrod[name]}
          placeholder={placeholder}
          isRequired={isRequired}
          onChange={handleChange}
        />
      ))}
      <Button
        type="submit"
        label="Reset Password"
        isSecondary
        isFullWidth={true}
        className="mb-2"
      />
    </form>
  );
};
export default withAuthLayout(ResetPassword, "Reset Password");
