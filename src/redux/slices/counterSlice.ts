import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { valueType } from "antd/es/statistic/utils";
import { initialCount } from "../../config";

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

export const { editCount } = counterSlice.actions;
export default counterSlice.reducer;
