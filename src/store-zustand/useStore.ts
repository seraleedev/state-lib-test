import { create } from "zustand";
import { useUserSlice, type IUserStore } from "./slices/userSlice";
import { useCounterSlice, type ICounterStore } from "./slices/counterSlice";

type IStore = IUserStore & ICounterStore;

export const useZustandStore = create<IStore>((set, get) => ({
  ...useUserSlice(set, get),
  ...useCounterSlice(set, get),
}));

export default useZustandStore;
