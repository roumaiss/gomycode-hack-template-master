import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";

const store = configureStore({
  reducer: {
    user: user,
  },
});

export default store;