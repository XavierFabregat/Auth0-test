import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuth } from "../../Auth/withAuth";
import { useNavigate } from "react-router-dom";
import './Profile.css'

const Profile = () => {
  const { user } = useAuth0();
  const navigate = useNavigate()
  console.log(user);

  return (
      <div className="profile-page-wrapper">
        <div className="profile-info-wrapper">
          <img  className="profile-page-avatar" src={user.picture} alt={user.name}/>
          <h2 className="profile-page-username">{user.name}</h2>
          <p className="profile-page-email">{user.email} {user.email_verified && '✅'}</p>
          <button 
            className="profile-dashboard-button"
            onClick={() => navigate('/dashboard')}>
            Dashboard
          </button>
        </div>
      </div>
  );
};

export default withAuth(Profile);