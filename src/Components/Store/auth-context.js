import React from "react";
import { useState } from "react";
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logOut: () => {},
});
export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;
  const loginHandler = (token) => [setToken(token)];
  const logOutHandler = () => {
    setToken(null);
  };
  const contextValue = {
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logOut: logOutHandler,
    token: token,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;