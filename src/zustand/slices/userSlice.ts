import { initialUser, type ISelectOption, type UserState } from "../../config";

export interface IUserStore {
  data: UserState;
  userActions: IUserAction;
}

interface IUserAction {
  getData: () => void;
  editName: (value: string) => void;
  editSelected: (values: ISelectOption[]) => void;
}

export const useUserSlice = (set: any, get: any): IUserStore => ({
  data: initialUser,
  userActions: {
    getData: () => get(),
    editName: (value) => {
      set((state: IUserStore) => {
        const edited = {
          ...state,
          data: {
            ...state.data,
            name: value,
          },
        };

        return edited;
      });
    },
    editSelected: (values) => {
      set((state: IUserStore) => {
        const edited = {
          ...state,
          data: {
            ...state.data,
            selected: values,
          },
        };

        return edited;
      });
    },
  },
});
