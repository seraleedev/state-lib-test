import { action, makeAutoObservable, observable } from "mobx";
import type { valueType } from "antd/es/statistic/utils";
import { initialCount } from "../../config";

export class CounterStore {
  @observable count = initialCount.value;

  constructor() {
    makeAutoObservable(this);
  }

  @action editCount(value: valueType | null) {
    this.count = Number(value);
  }
}
