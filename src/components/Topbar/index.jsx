import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../utils/api";
import Button from "../ui/Button";
import { toast } from "react-toastify";

const Topbar = () => {
  const { authToken, clearAuthData } = useAuth();
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      const data = await api.signout(authToken);
      console.log(data, authToken)
      clearAuthData();
      toast.success(data.message);
      navigate("/signin");
    } catch (err) {
      console.log("Signout error:", err);
      toast.error(err);
    }
  };

  return (
    <section className="flex justify-between px-3 py-2 bg-blue-500">
      <img src="" alt="Logo" />
      <Button label="Signout" isSecondary onClick={handleSignout} />
    </section>
  );
};
export default Topbar;
