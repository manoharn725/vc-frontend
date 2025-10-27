import { createBrowserRouter } from "react-router-dom";
import { superAdminRoutes } from "./superAdminRoutes";
import { tenantRoutes } from "./tenantRoutes";

export const router = createBrowserRouter([
  ...superAdminRoutes,
  ...tenantRoutes
]);
