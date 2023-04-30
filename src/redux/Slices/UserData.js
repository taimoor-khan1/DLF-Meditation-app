import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "User",
  initialState: { data: null },
  reducers: {
    setdata: (state, action) => {
      state.data = action.payload;
    },
    signOut: (state, action) => {
      state.data = null;
    },

  },
});

export const { setdata, signOut } = userDataSlice.actions;
export default userDataSlice.reducer;
