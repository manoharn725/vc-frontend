import { useRef } from "react";

const VerificationCodeInput = ({ length = 6, onChange }) => {
  const inputRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); // allow only digits
    if (!value && index > 0) {
      inputRef.current[index - 1].focus();
    } else if (value && index < length - 1) {
      inputRef.current[index + 1].focus();
    }

    const allValues = inputRef.current.map((input) => input.value).join("");
    onChange(allValues);
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-start gap-2 mb-4">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          ref={(el) => (inputRef.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          required={true}
          className="w-10 h-10 text-center text-lg font-semibold border rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );
};

export default VerificationCodeInput;
