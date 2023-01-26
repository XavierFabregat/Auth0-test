import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritePhotos: [],
};

export const favoritePhotosSlice = createSlice({
  name: 'favoritePhotos',
  initialState,
  reducers: {
    setFavoritePhotos: (state,action) => {
      state = action.payload;
    },
    addFavortiePhoto: (state, action) => {
      state = [...state, action.payload];
    },
    removeFavoritePhoto: (state,action) => {
      state.filter(photo => photo._id === action.payload._id);
    },
  }
});

export const { 
  setFavoritePhotos, 
  addFavortiePhoto, 
  removeFavoritePhoto,
} = favoritePhotosSlice.actions;

export default favoritePhotosSlice.reducer;