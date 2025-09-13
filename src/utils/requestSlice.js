import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: { data: [] }, // state as an object with data array
  reducers: {
    addRequests: (state, action) => action.payload, // expects entire payload with data property
    removeRequest: (state, action) => {
      return {
        ...state,
        data: state.data.filter((r) => r._id !== action.payload),
      };
    },
  },
});

export const { addRequests, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
