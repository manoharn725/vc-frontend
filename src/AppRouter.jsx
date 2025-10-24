import { createBrowserRouter } from "react-router-dom";
import { ForgotPassword, ResetPassword, Signin, Signup } from "./pages/auth";
import PageNotFound from "./pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
