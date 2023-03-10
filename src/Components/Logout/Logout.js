import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Logout.css'
import { Button } from '@chakra-ui/react'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button 
    // className="logout-button"
    mr={'auto'}
    ml={'auto'}
    width='90%'
    colorScheme={'red'}
    onClick={
      () => logout({
        logoutParams: {
          returnTo: `${window.location.origin}/login` 
        }
      })
      }>
      Log Out
    </Button>
  );
};

export default LogoutButton;
