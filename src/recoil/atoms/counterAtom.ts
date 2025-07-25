import { atom } from "recoil";
import { initialCount } from "../../config";

export const CounterAtom = atom<number>({
  key: "counterAtom",
  default: initialCount.value,
});
