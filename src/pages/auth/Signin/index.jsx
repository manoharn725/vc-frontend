import { useState } from "react";
import ControlledInput from "../../../components/ControlledInput";
import Button from "../../../components/ui/Button";
import withAuthLayout from "../../../hoc/withAuthLayout";

const initialUserState = {
  userEmail: "",
  userPassword: "",
};

const Signin = () => {
  const [userLoginInfo, setUserLoginInfo] = useState(initialUserState);

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
    setUserLoginInfo((prev) => ({...prev, [name]:value}))
}
console.log(userLoginInfo)

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userLoginInfo)
    try {
      const res = await fetch("http://localhost:5000/api/users/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userLoginInfo),
      });

      const data = await res.json();
    //   console.log(data); // backend response
    setUserLoginInfo(initialUserState)
    } catch (err) {
      console.error("API error:", err);
    }
  }

  const handleNavigate = () => {
    console.log("Navigate to forgot password")
  }

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
      <p className="mb-3 text-sm text-blue-500 cursor-pointer" onClick={handleNavigate}>Forgot Password ?</p>
      <Button
        type="submit"
        label="Login"
        isSecondary
        isFullWidth={true}
        className="mb-2"
      />
    </form>
  );
};
export default withAuthLayout(Signin, 'Login');
