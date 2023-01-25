import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Navbar.css'
import { Link } from "react-router-dom";
import {AppLogo} from '../Logos/AppLogo'
import { DropDownMenu } from "../DropDownMenu/DropDownMenu";

export const Navbar = function () {
  const {user, isLoading, isAuthenticated} = useAuth0();

  useEffect(()=> {
    console.log(window.location.href)
  }, [])

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
    isAuthenticated && (
      <div className="navbar">
        <div className="navbar-title-logo" >
          <AppLogo style={{height : "100px", width: "150px"}}/>
        </div>
        <div className="navbar-profile">
          <section className="navbar-profile-user">
            <img src={user.picture} alt={user.name} className='navbar-profile-picture'/>
            <Link className="navbar-username" to={'/profile'}>{user.name}</Link>
          </section>
          <div className="navbar-logout">
            <DropDownMenu />
          </div>
        </div>
      </div>
    )
  );
}