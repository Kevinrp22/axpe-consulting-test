import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../constants/URL";
export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: { data: null },
  reducers: {
    addFavorite: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    removeFavorite: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    setFavoriteList: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite, setFavoriteList } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;

export const fetchAllFavorites = () => (dispatch) => {
  fetch(`${URL}/favorites`)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setFavoriteList(data));
    })
    .catch((error) => console.log(error));
};

export const createFavorite = (item) => (dispatch) => {
  fetch(`${URL}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(addFavorite(data));
    })
    .catch((error) => console.log(error));
};

export const deleteFavorite = (itemId) => (dispatch) => {
  fetch(`${URL}/favorites/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  dispatch(removeFavorite(itemId));
};
