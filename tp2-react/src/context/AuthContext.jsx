import { createContext, useState } from "react";

export const AuthContext = createContext();

const getStoredUser = () => {
  if (typeof window === "undefined") return null;

  const localUser = localStorage.getItem("user");
  if (localUser) {
    return JSON.parse(localUser);
  }

  const sessionUser = sessionStorage.getItem("user");
  if (sessionUser) {
    return JSON.parse(sessionUser);
  }

  return null;
};

const getStoredToken = () => {
  if (typeof window === "undefined") return null;

  return localStorage.getItem("token") || sessionStorage.getItem("token") || null;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getStoredUser());
  const [token, setToken] = useState(() => getStoredToken());

  const login = (userData, userToken, rememberMe = false) => {
    setUser(userData);
    setToken(userToken);

    const primaryStorage = rememberMe ? localStorage : sessionStorage;
    const secondaryStorage = rememberMe ? sessionStorage : localStorage;

    primaryStorage.setItem("token", userToken);
    primaryStorage.setItem("user", JSON.stringify(userData));
    secondaryStorage.removeItem("token");
    secondaryStorage.removeItem("user");
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
