import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload 
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;  
      state.isAuthenticated = false;
    },
    setUserType(state, action) {
      state.user.type = action.payload;
    },
  },
});

export const { login, logout, setUserType } = userSlice.actions;
export default userSlice.reducer;
