import { useState } from "react";
import ControlledInput from "../ControlledInput";
import PasswordStrengthBar from "../ui/PasswordStrengthBar";
import { Eye, EyeOff } from "lucide-react";

const AuthInputGenerator = ({ fields, formState, onChange }) => {
  const [visibleField, setVisibleField] = useState({});

  const toggleVisibility = (name) => {
    setVisibleField((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      {fields.map(({ id, name, label, type, placeholder, isRequired }) => {
        const isPassoword = type === "password";
        const isVisible = visibleField[name] || false;
        return (
          <div key={id} className="relative mb-2">
            <ControlledInput
              type={isVisible ? "text" : type}
              name={name}
              label={label}
              value={formState[name]}
              placeholder={placeholder}
              isRequired={isRequired}
              onChange={onChange}
            />
            {isPassoword && (
              <span
                className="absolute right-3 top-9 cursor-pointer text-gray-500"
                onClick={() => toggleVisibility(name)}
              >
                {isVisible ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            )}
            {name === "createPassword" && (
              <PasswordStrengthBar password={formState[name]} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default AuthInputGenerator;
