import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const favoritePhotosSlice = createSlice({
  name: 'favoritePhotos',
  initialState,
  reducers: {
    setFavoritePhotos: (state,action) => {
      state = action.payload;
      return state;
    },
    addFavortiePhoto: (state, action) => {
      console.log([...state, action.payload]);
      state = [...state, action.payload];
      return state;
    },
    removeFavoritePhoto: (state,action) => {
      return state.filter(photo => photo._id === action.payload._id);
    },
  }
});

export const { 
  setFavoritePhotos, 
  addFavortiePhoto, 
  removeFavoritePhoto,
} = favoritePhotosSlice.actions;

export default favoritePhotosSlice.reducer;