import { configureStore } from '@reduxjs/toolkit';
import favororitePhotosReducer from './slices/favoritePhotosSlice'

export const store = configureStore({
  reducer: {
    favoritePhotos: favororitePhotosReducer,
  },
})