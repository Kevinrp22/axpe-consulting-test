import { createSlice } from "@reduxjs/toolkit";
import {
  createMeetup,
  deleteMeetup,
  getMeetups,
  updateMeetup,
} from "../actions/meetupActions";
export const meetupSlice = createSlice({
  name: "meetups",
  initialState: { data: null, loading: false },
  reducers: {},
  extraReducers: {
    [createMeetup.pending]: (state) => {
      state.loading = true;
    },
    [createMeetup.fulfilled]: (state, { payload }) => {
      if (payload) {
        state.data = [...state.data, payload];
        state.loading = false;
      }
    },
    [createMeetup.rejected]: (state) => {
      state.loading = false;
    },
    [getMeetups.pending]: (state) => {
      state.loading = true;
    },
    [getMeetups.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    [getMeetups.rejected]: (state) => {
      state.loading = false;
    },
    [deleteMeetup.pending]: (state) => {
      state.loading = true;
    },
    [deleteMeetup.fulfilled]: (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload);
      state.loading = false;
    },
    [deleteMeetup.rejected]: (state) => {
      state.loading = false;
    },
    [updateMeetup.pending]: (state) => {
      state.loading = true;
    },
    [updateMeetup.fulfilled]: (state, { payload }) => {
      state.data = state.data.map((item) =>
        item.id === payload.id ? payload : item
      );
      state.loading = false;
    },
    [updateMeetup.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default meetupSlice.reducer;
