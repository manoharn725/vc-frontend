import { lazy } from "react";

const SuperAdminHome = lazy(() => import("../pages/Home"));
const SuperAdminDashboard = lazy(() => import("../pages/dashboard"));
const SuperAdminSignin = lazy(() => import("../pages/auth/Signin"));
const SuperAdminSignup = lazy(() => import("../pages/auth/Signup"));
const SuperAdminForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));
const SuperAdminResetPassword = lazy(() => import("../pages/auth/ResetPassword")); 
const SuperAdminPageNotFound = lazy(() => import("../pages/PageNotFound"));

export const superAdminRoutes = [
    { path: "/", element: <SuperAdminHome /> },
    { path: "/dashboard", element: <SuperAdminDashboard /> },
    { path: "/signin", element: <SuperAdminSignin /> },
    { path: "signup", element: <SuperAdminSignup /> },
    { path: "forgot-password", element: <SuperAdminForgotPassword /> },
    { path: "reset-password", element: <SuperAdminResetPassword /> },
    { path: "*", element: <SuperAdminPageNotFound /> }
]