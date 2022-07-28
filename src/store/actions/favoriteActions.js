import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL } from "../../constants/URL";

export const getFavorites = createAsyncThunk(
  "favorite/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/favorites`);
      return data;
    } catch ({ error }) {
      return rejectWithValue(error);
    }
  }
);
export const createFavorite = createAsyncThunk(
  "favorite/create",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${URL}/favorites`, arg);
      return data;
    } catch ({ error }) {
      return rejectWithValue(error);
    }
  }
);

export const updateFavorite = createAsyncThunk(
  "favorite/update",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${URL}/favorites/${arg.id}`,
        arg.formData
      );
      return data;
    } catch ({ error }) {
      return rejectWithValue(error);
    }
  }
);

export const deleteFavorite = createAsyncThunk(
  "favorite/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${URL}/favorites/${id}`);
      return id;
    } catch ({ error }) {
      return rejectWithValue(error);
    }
  }
);
