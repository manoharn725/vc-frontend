import { lazy } from "react";

const TenantHome = lazy(() => import("../pages/Home"));
const TenantDashboard = lazy(() => import("../pages/dashboard"));
const TenantSignin = lazy(() => import("../pages/auth/Signin"));
const TenantSignup = lazy(() => import("../pages/auth/Signup"));
const TenantForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));
const TenantResetPassword = lazy(() => import("../pages/auth/ResetPassword")); 
const TenantPageNotFound = lazy(() => import("../pages/PageNotFound"));

export const tenantRoutes = [
    { path: "/:tenantId/", element: <TenantHome /> },
    { path: "/:tenantId/dashboard", element: <TenantDashboard /> },
    { path: "/:tenantId/signin", element: <TenantSignin /> },
    { path: "/:tenantId/signup", element: <TenantSignup /> },
    { path: "/:tenantId/forgot-password", element: <TenantForgotPassword /> },
    { path: "/:tenantId/reset-password", element: <TenantResetPassword /> },
    { path: "*", element: <TenantPageNotFound /> }
]