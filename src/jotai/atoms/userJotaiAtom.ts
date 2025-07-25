import { atom } from "jotai";
import { initialUser } from "../../config";

export const UserJotaiAtom = atom({
  ...initialUser
});
