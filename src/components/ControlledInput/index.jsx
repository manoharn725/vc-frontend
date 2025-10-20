import { memo } from "react";

const ControlledInput = ({
  label,
  name,
  type,
  value,
  placeholder,
  isRequired,
  isReadOnly,
  isPasswordStrength = false,
  onChange,
}) => {
  return (
    <div className="mb-3 sm:mb-4 relative">
      <label
        htmlFor={name}
        className="text-left block text-[12px] sm:text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {isRequired && <span className="text-red-500"> *</span>}
      </label>
      <input
        type={type}
        name={name}  
        value={value}
        placeholder={placeholder}
        required={isRequired}
        readOnly={isReadOnly}
        onChange={onChange}
        className="w-full text-[12px] sm:text-sm px-2 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default memo(ControlledInput);
