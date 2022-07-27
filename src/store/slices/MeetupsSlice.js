import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../../constants/URL";
export const meetupSlice = createSlice({
  name: "meetups",
  initialState: { data: null },
  reducers: {
    setMeetupList: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setMeetupList } = meetupSlice.actions;

export default meetupSlice.reducer;

export const fetchAllMeetups = () => (dispatch) => {
  fetch(`${URL}/meetups`)
    .then((response) => response.json())
    .then((data) => {
      dispatch(setMeetupList(data));
    })
    .catch((error) => console.log(error));
};
