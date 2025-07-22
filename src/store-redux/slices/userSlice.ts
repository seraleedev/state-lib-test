import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  selected: { [key: string]: string }[];
}

const initialUser: UserState = {
  name: "",
  selected: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    editName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { editName } = userSlice.actions;
