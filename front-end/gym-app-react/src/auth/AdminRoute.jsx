import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "./authContext";

export const AdminRoute = ({ children }) => {
  const { isAdmin } = useContext(authContext);

  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
};
