import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice";
import { userSlice } from "./slices/userSlice";

export const reduxStore = configureStore({
  reducer: { counter: counterSlice.reducer, user: userSlice.reducer },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
export type AppStore = typeof reduxStore;
