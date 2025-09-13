import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: [], // array of connections
  reducers: {
    addConnections: (state, action) => action.payload,
    addConnection: (state, action) => {
      state.push(action.payload);
    },
    // You can also have removeConnection etc.
  },
});

export const { addConnections, addConnection } = connectionSlice.actions;
export default connectionSlice.reducer;
