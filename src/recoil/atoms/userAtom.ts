import { atom } from "recoil";
import { initialUser } from "../../config";

export const UserAtom = atom({
  key: "userAtom",
  default: initialUser,
});
