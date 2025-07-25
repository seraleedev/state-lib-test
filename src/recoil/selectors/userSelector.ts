import { selector } from "recoil";
import { UserAtom } from "../atoms/userAtom";

export const arrayLengthSelector = selector({
  key: "arrayLengthSelector",
  get: ({ get }) => {
    const array = get(UserAtom).selected;
    return array.length;
  },
});
