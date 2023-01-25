import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuth } from "../../Auth/withAuth";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'
import './Profile.css'

const Profile = () => {
  const { user } = useAuth0();
  const navigate = useNavigate()
  document.title = `${user.name.includes(' ') ? user.name.split(' ')[0] : user.name}'s Profile`

  return (
      <div className="profile-page-wrapper">
        <div className="profile-info-wrapper">
          <img  className="profile-page-avatar" src={user.picture} alt={user.name}/>
          <h2 className="profile-page-username">{user.name}</h2>
          <p className="profile-page-email">{user.email} {user.email_verified && '✅'}</p>
          <Button 
            className="profile-dashboard-button"
            colorScheme={'blue'}
            onClick={() => navigate('/dashboard')}>
            Dashboard
          </Button>
        </div>
      </div>
  );
};

export default withAuth(Profile);