import { atom } from "jotai";
import { initialCount } from "../../config";

export const CounterJotaiAtom = atom(initialCount.value);
