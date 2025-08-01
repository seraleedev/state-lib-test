import { atom } from "recoil";
import { initialUser, type UserState } from "../../config";

export const UserAtom = atom<UserState>({
  key: "userAtom",
  default: initialUser,
});
