import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    addConnections: (state, action) => action.payload,
    removeConnections: () => null,
    viewConnection: (state, action) => {
      return state.find((conn) => conn._id === action.payload);
    },
  },
});

export const { addConnections, removeConnections, viewConnection } =
  connectionSlice.actions;

export default connectionSlice.reducer;
