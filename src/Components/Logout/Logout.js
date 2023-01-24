import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Logout.css'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button 
    className="logout-button"
    onClick={
      () => logout({
        logoutParams: {
          returnTo: `${window.location.origin}/login` 
        }
      })
      }>
      Log Out
    </button>
  );
};

export default LogoutButton;