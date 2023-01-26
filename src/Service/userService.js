import { constants } from '../utils/constants'

export const userService = {
  createUserIfNotExist: async function (id) {
    const body = JSON.stringify({userId: id});
    try {
      const response = await fetch(`${constants.baseUrl}/user`, {
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body,
      });

      return await response.json();
    } catch (error) {
      console.log(`Error in create user service : ${error}`);
    }
  },

  postPhotoOfUser: async function (body) {
    try {
      body = JSON.stringify(body);
      const response = await fetch(`${constants.baseUrl}/photo`, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body,
      });

      return await response.json();
    } catch (error) {
      console.log(`Error in create user service : ${error}`);
    }
  },

  getUser: async function (userId) {
    try {
      const response = await fetch(`${constants.baseUrl}/user/${userId}`);
      return await response.json();
    } catch (error) {
      console.log(`Error in getUser service : ${error}`);
    }
  },

  favoritePhoto: async function (body) {
    try {
      body = JSON.stringify(body);
      const response = await fetch(`${constants.baseUrl}/favorite`, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body,
      })
      return await response.json();
    } catch (error) {
      console.log(`Error in favoritePhoto service : ${error}`);
    }
  },

  getUserFavoritePhotos: async function (userId) {
    try {
      const response = await fetch(`${constants.baseUrl}/favorite/${userId}`);
      return await response.json();
    } catch (error) {
      console.log(`Error in getUserFavoritePhotos service : ${error}`);
    }
  }
}