import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(() => {
    const storedUser  = localStorage.getItem("authUser");
    return storedUser  ? JSON.parse(storedUser ) : null;
  });

  const [authToken, setAuthToken] = useState(() => {
    return localStorage.getItem("authToken") || "";
  });

  useEffect(() => {
    if (authUser && authToken) {
      localStorage.setItem("authUser", JSON.stringify(authUser));
      localStorage.setItem("authToken", authToken);
    } else {
      localStorage.removeItem("authUser");
      localStorage.removeItem("authToken");
    }
  }, [authUser, authToken]);

  const storeAuthData = (userData, tokenData) => {
    setAuthUser(userData);
    setAuthToken(tokenData);
  };

  const clearAuthData = () => {
    setAuthUser(null);
    setAuthToken("");
  };
 
  const isAuthenticated = !!authToken;

  const value = { authUser, authToken, storeAuthData, clearAuthData, isAuthenticated };

  return (
  <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
