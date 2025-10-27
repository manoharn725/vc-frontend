import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import withAuthLayout from "../../hoc/withAuthLayout";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/signin");
  };
  return (
    <div>
      <h1>Page Not Found</h1>
      <Button
        type="buttun"
        label="Go to Signin"
        isTeritary
        isFullWidth={true}
        className="my-2"
        onClick={handleNavigate}
      />
    </div>
  );
};
export default withAuthLayout(PageNotFound, "Page Not Found");
