import { makeAutoObservable } from "mobx";
import type { valueType } from "antd/es/statistic/utils";
import { initialCount } from "../../config";

export class CounterStore {
  count = initialCount.value;

  constructor() {
    makeAutoObservable(this);
  }

  editCount(value: valueType | null) {
    this.count = Number(value);
  }
}
