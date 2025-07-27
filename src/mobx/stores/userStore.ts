import { action, computed, makeAutoObservable, observable } from "mobx";
import { initialUser, type ISelectOption, type UserState } from "../../config";

export class UserStore {
  @observable data: UserState = initialUser;

  constructor() {
    makeAutoObservable(this);
  }

  @action editName(value: string) {
    this.data = { ...this.data, name: value };
  }

  @action editSelected(values: ISelectOption[]) {
    this.data = { ...this.data, selected: values };
  }
  @computed get getSelectedLength() {
    return this.data.selected.length;
  }
}
