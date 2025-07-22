import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ISelectOption {
  label: string;
  value: string;
}
export interface UserState {
  name: string;
  selected: ISelectOption[];
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
    editSelected: (state, action: PayloadAction<ISelectOption[]>) => {
      state.selected = action.payload;
    },
  },
});

export const { editName, editSelected } = userSlice.actions;
export default userSlice.reducer;
