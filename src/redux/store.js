import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/reducer.user";
import loading from "./reducers/reducer.loading";

const store = configureStore({
  reducer: {
    user,
    loading,
  },
});

export default store;
