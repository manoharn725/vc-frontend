import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const navigateToSignin = (e) => {
        e.preventDefault();
        navigate("/signin")
    }

    return(
        <div className="flex justify-between p-3">
            <h1>Welcome to Home Page</h1>
            <Button label="Sign In" isSecondary onClick={navigateToSignin} />
        </div>
    )
}

export default Home;