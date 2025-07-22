import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";

export const reduxStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
export type AppStore = typeof reduxStore;
