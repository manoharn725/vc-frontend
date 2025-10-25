import { api } from "../../utils/api";
import Button from "../../components/ui/Button";
import Topbar from "../../components/Topbar";

const Dashboard = () => {
    const handleSignout = () => {
        api.signout()
    }
  return (
    <div>
      <h1>Dashboard</h1>
      <Topbar />
    </div>
  );
};

export default Dashboard;
