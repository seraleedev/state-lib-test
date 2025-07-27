import { useContext, createContext } from "react";
import { rootStore } from "../stores/rootStore";

const mobxStoreContext = createContext(rootStore);

export const useMobxStore = () => useContext(mobxStoreContext);
export const useMobxCounter = () => useMobxStore().counterStore;
export const useMobxUser = () => useMobxStore().userStore;
