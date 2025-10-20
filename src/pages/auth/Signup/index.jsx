import { useState } from "react";
import ControlledInput from "../../../components/ControlledInput";
import Button from "../../../components/ui/Button";
import withAuthLayout from "../../../hoc/withAuthLayout";

const initialUserState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  createPassword: "",
  confirmPassword: "",
};

const Signup = () => {
  const [userSignupDetails, setUserSigunupDetails] = useState(initialUserState);

  const inputTypes = [
    {
      id: 1,
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your firstname",
      isRequired: true,
    },
    {
      id: 2,
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your lastname",
      isRequired: true,
    },
    {
      id: 3,
      name: "phoneNumber",
      label: "Phone Number",
      type: "text",
      placeholder: "Enter your phone number",
      isRequired: true,
    },
    {
      id: 4,
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "Enter your Email",
      isRequired: true,
    },
    {
      id: 5,
      name: "createPassword",
      label: "Create Password",
      type: "password",
      placeholder: "Create your password",
      isRequired: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your password",
      isRequired: true,
    },
  ];

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserSigunupDetails(prev => ({...prev, [name]:value}))
  }
  return (
    <form>
      {inputTypes.map(({ id, name, label, type, placeholder, isRequired }) => (
        <ControlledInput
          key={id}
          type={type}
          name={name}
          label={label}
          value={userSignupDetails[name]}
          placeholder={placeholder}
          isRequired={isRequired}
          onChange={handleChange}
        />
      ))}

      <Button
        type="submit"
        label="Sigin Up"
        isSecondary
        isFullWidth={true}
        className="mb-2"
      />
    </form>
  );
};
export default withAuthLayout(Signup, 'Sign Up');
