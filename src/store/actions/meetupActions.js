import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../constants/URL";
import { deleteFavorite, updateFavorite } from "../actions/favoriteActions";

export const getMeetups = createAsyncThunk(
  "meetup/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/meetups`);
      return data;
    } catch ({ error }) {
      return rejectWithValue(error);
    }
  }
);
export const createMeetup = createAsyncThunk(
  "meetup/create",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${URL}/meetups`, arg);
      return data;
    } catch ({ error }) {
      return rejectWithValue(error);
    }
  }
);

export const updateMeetup = createAsyncThunk(
  "meetup/update",
  async (arg, { rejectWithValue, getState, dispatch }) => {
    const { favorites } = getState();
    const existFav = favorites.data?.some((fav) => fav.id === arg.id);
    if (existFav) {
      dispatch(updateFavorite({ id: arg.id, formData: arg.formData }));
    }
    try {
      const { data } = await axios.put(
        `${URL}/meetups/${arg.id}`,
        arg.formData
      );
      return data;
    } catch ({ error }) {
      return rejectWithValue(error);
    }
  }
);

export const deleteMeetup = createAsyncThunk(
  "meetup/delete",
  async (id, { rejectWithValue, getState, dispatch }) => {
    const { favorites } = getState();
    const existFav = favorites.data?.some((fav) => fav.id === id);
    if (existFav) {
      dispatch(deleteFavorite(id));
    }
    try {
      await axios.delete(`${URL}/meetups/${id}`);
      return id;
    } catch ({ error }) {
      return rejectWithValue(error);
    }
  }
);
