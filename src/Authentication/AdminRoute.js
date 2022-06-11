import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import auth from "../Shared/firebase.init";
import Spinner from "../Shared/Spinner";


const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminloading] = useAdmin(user);

  if (loading || adminloading) {
    return <Spinner />;
  }

  if (!user || !admin) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAdmin;
