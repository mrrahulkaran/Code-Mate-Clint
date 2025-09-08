import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { addUser, removeUser, setUser } = feedSlice.actions;
export default feedSlice.reducer;
