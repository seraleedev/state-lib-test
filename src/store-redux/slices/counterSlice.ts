import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { valueType } from "antd/es/statistic/utils";

export interface CounterState {
  value: number;
}

const initialCount: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialCount,
  reducers: {
    editCount: (state, action: PayloadAction<valueType | null>) => {
      if (action.payload == "") {
        state.value = 0;
      }
      state.value = Number(action.payload);
    },
  },
});

export default counterSlice.reducer;
export const { editCount } = counterSlice.actions;
