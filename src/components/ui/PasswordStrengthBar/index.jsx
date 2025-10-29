const calculateStrength = (password) => {
  let score = 0;
  if (password.length > 6) score++;
  if (password.match(/[0-9]/)) score++;
  if (password.match(/[A-Z]/)) score++;
  if (password.match(/[^A-Za-z0-9]/)) score++;
  return score;
};

const PasswordStrengthBar = ({ password }) => {
  const score = calculateStrength(password);

  const colors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500"];

  return (
    <div className="mb-2 flex gap-1">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-md ${i < score ? colors[score - 1] : "bg-gray-200"}`}
        />
      ))}
    </div>
  );
};

export default PasswordStrengthBar;
