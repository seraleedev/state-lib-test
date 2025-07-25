import { type valueType } from "antd/es/statistic/utils";
import { initialCount } from "../../config";

export interface ICounterStore {
  count: number;
  counterActions: ICounterAction;
}

interface ICounterAction {
  getCount: () => void;
  editCount: (value: valueType | null) => void;
}

export const useCounterSlice = (set: any, get: any): ICounterStore => ({
  count: initialCount.value,
  counterActions: {
    getCount: () => get(),
    editCount: (value) => {
      if (value == "") return;
      set((state: ICounterStore) => ({
        ...state,
        count: Number(value),
      }));
    },
  },
});
