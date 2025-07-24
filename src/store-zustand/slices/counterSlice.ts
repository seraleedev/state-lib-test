import { type valueType } from "antd/es/statistic/utils";

export interface ICounterStore {
  count: number;
  counterActions: ICounterAction;
}

interface ICounterAction {
  getCount: () => void;
  editCount: (value: valueType | null) => void;
}

export const useCounterSlice = (set: any, get: any): ICounterStore => ({
  count: 0,
  counterActions: {
    getCount: () => get(),
    editCount: (value) => {
      set((state: any) => {
        console.log(state);
        if (value == "") return;
        state.count = Number(value);
      });
    },
  },
});
