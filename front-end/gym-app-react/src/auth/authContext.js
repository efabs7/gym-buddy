import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  setUserInStorage,
  clearUserFromStorage,
  getUserFromStorage,
  getIsLoggedInFromStorage,
} from "./storage";
import { deCode } from "../helpers/deCode";
export const authContext = createContext({});

const Provider = authContext.Provider;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  //   const [isLoggedIn, setIsLoggedIn] = useState(getIsLoggedInFromStorage());
  //for now we use
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //fpr now also admin set to true
  const [isAdmin, setIsAdmin] = useState(true);
  const userToken = getUserFromStorage();
  const userId = deCode(userToken);

  const getIsAdmin = (id) => {
    //here we will do things to get whether admin
    // axios.get(process.env.REACT_API_PORT)
    //   .then((resp) => {
    //     const userInfo = resp;
    //     if (userInfo.email == "albus@albus.com") {
    //       setIsAdmin(true);
    //     } else {
    //       setIsAdmin(false);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  getIsAdmin(userId);

  const logUserIn = (userid) => {
    setIsLoggedIn(true);
    setUserInStorage(userid);

    setTimeout(() => {
      navigate("/");
    }, 600);
  };

  const logUserOut = () => {
    setIsLoggedIn(false);
    clearUserFromStorage();
    navigate("/login");
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    logUserIn,
    logUserOut,
    isAdmin,
    setIsAdmin,
    userId,
    getIsAdmin,
    userToken,
  };
  return <Provider value={value}>{children}</Provider>;
};
