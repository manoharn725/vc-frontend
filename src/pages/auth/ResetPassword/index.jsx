import { useState } from "react";
import withAuthLayout from "../../../hoc/withAuthLayout";
import ControlledInput from "../../../components/ControlledInput";
import Button from "../../../components/ui/Button";
import { validateResetPassword } from "../../../utils/validation/validateResetPassword";
import { api } from "../../../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialUserState = {
  newPassword: "",
  confirmPassword: "",
};

const ResetPassword = () => {
  const [resetPasswrod, setResetPassword] = useState(initialUserState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateResetPassword(resetPasswrod);
    if (!isValid) return;

    setIsLoading(true);
    try {
      const data = await api.resetPassword(resetPasswrod);
      toast.success(data.messsage);
      navigate("/signin");
    } catch (err) {
      console.log("error");
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        label={isLoading ? "loading" : "Reset Password"}
        isSecondary
        isFullWidth={true}
        className="mb-2"
      />
    </form>
  );
};
export default withAuthLayout(ResetPassword, "Reset Password");
