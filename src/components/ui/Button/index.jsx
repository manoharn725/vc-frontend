const Button = ({
  label,
  onClick,
  type = "button",
  isDisabled,
  isPrimary = false,
  isSecondary = false,
  isTeritary = false,
  isFullWidth = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`flex justify-center items-center gap-2.5 px-4 py-2 rounded-md transition duration-200 disabled:opacity-50 border border-gray-300 cursor-pointer text-sm sm:text-base ${
        isPrimary
          ? "bg-white hover:bg-gray-100 text-gray-700"
          : isSecondary
          ? "bg-rose-600 hover:bg-rose-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
          : isTeritary
          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
          : ""
      } ${isFullWidth ? "w-full" : ""}  ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
