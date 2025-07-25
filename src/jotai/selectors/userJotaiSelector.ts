import { atom } from "jotai";
import { UserJotaiAtom } from "../atoms/userJotaiAtom";

export const selectedLength = atom((get) => {
  const { selected } = get(UserJotaiAtom);
  return selected.length;
});
