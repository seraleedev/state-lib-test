import { CounterStore } from "./counterStore";
import { UserStore } from "./userStore";

export class RootStore {
  counterStore: CounterStore;
  userStore: UserStore;

  constructor() {
    this.counterStore = new CounterStore();
    this.userStore = new UserStore();
  }
}

export const rootStore = new RootStore();
