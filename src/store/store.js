import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slices/favoriteSlice";
import MeetupsSlice from "./slices/meetupsSlice";
export const store = configureStore({
  reducer: {
    favorites: favoriteSlice,
    meetups: MeetupsSlice,
  },
});
