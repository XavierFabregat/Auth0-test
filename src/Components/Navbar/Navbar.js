import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Navbar.css'
import LogoutButton from "../Logout/Logout";
import { Link } from "react-router-dom";
import {AppLogo} from '../Logos/AppLogo'

export const Navbar = function () {
  const {user, isLoading, isAuthenticated} = useAuth0();

  useEffect(()=> {
    console.log(window.location.href)
  }, [])

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  //const baseUrl = 'http://localhost:3000'


  return (
    isAuthenticated && (
      <div className="navbar">
        <div className="navbar-title-logo" >
          <AppLogo style={{height : "100px", width: "150px"}}/>
        </div>
        <div className="navbar-profile">
          {/* {(window.location.href !== `${baseUrl}/profile`) && ( */}
            <>
              <img src={user.picture} alt={user.name} className='navbar-profile-picture'/>
              <Link className="navbar-username" to={'/profile'}>{user.name}</Link>
            </>
          {/* )} */}
          <div className="navbar-logout">
            <LogoutButton />
          </div>
        </div>
      </div>
    )
  );
}