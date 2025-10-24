import { AuthProvider } from "./context/AuthContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./AppRouter";
import "./App.css";

function App() {
  return (
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  );
}

export default App;
