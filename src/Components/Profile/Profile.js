import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuth } from "../../Auth/withAuth";
import { useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import './Profile.css';
import { Photo } from "../Photo/Photo";
import { useDispatch } from 'react-redux'
import { setFavoritePhotos } from "../../redux/slices/favoritePhotosSlice";
import { userService } from "../../Service/userService";

const Profile = () => {

  const favoritePhotos = useSelector(state => state.favoritePhotos);
  const { user } = useAuth0();
  const dispatch = useDispatch();
  
  useEffect(() => {
    (async function () {
      const favoritePhotosUser = await userService.getUserFavoritePhotos(user.sub)
      dispatch(setFavoritePhotos(favoritePhotosUser));
    })()
  }, []);

  const navigate = useNavigate()
  document.title = `${user.name.includes(' ') ? user.name.split(' ')[0] : user.name}'s Profile`;


  return (
      <div className="profile-page-wrapper">
        <section className="profile-favorite-photos">
          {favoritePhotos.length 
          ? favoritePhotos.map(photo => <Photo photo={photo}/>)
          : <></>}
        </section>
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