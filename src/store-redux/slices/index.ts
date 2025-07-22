import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { userSlice } from "./userSlice";

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  user: userSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
