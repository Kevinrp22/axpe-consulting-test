import { createSlice } from "@reduxjs/toolkit";
import {
  createFavorite,
  deleteFavorite,
  getFavorites,
  updateFavorite,
} from "../actions/favoriteActions";
export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: { data: null },
  reducers: {},
  extraReducers: {
    [createFavorite.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.data = [...state.data, payload];
      }
    },
    [getFavorites.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },

    [deleteFavorite.fulfilled]: (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload);
    },
    //Update necesario puntualmente debido a que no existe una db con relaciones
    [updateFavorite.fulfilled]: (state, { payload }) => {
      state.data = state.data.map((item) =>
        item.id === payload.id ? payload : item
      );
    },
  },
});

export default favoriteSlice.reducer;
