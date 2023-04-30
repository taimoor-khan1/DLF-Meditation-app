import { createSlice } from '@reduxjs/toolkit';

export const utiltitiesSlice = createSlice({
  name: 'utiltities',
  initialState: {
    darkTheme: true,
    loading: false,
    logout: false,

  },
  reducers: {
    darktTheme: state => {
      state.darkTheme = true;
    },
    lightTheme: state => {
      state.darkTheme = false;
    },
    startLoading: state => {
      state.loading = true;
    },
    stopLoading: state => {
      state.loading = false;
    },
    logOutVisible: state => {
      state.logout = true;
    },
    logOutNotVisible: state => {
      state.logout = false;
    },

  },
});

export const {
  darktTheme,
  lightTheme,
  startLoading,
  stopLoading,
  logOutNotVisible,
  logOutVisible

} = utiltitiesSlice.actions;
export default utiltitiesSlice.reducer;
