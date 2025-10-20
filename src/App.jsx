import { ForgotPassword, ResetPassword, Signin, Signup } from "./pages/auth";
import "./App.css";

function App() {
  return (
    <>
      <Signin />
      <Signup />
      <ForgotPassword />
      <ResetPassword />
    </>
  );
}

export default App;
