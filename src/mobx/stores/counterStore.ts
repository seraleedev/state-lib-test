import { makeAutoObservable } from "mobx";
import { initialCount } from "../../config";
import type { valueType } from "antd/es/statistic/utils";

export class CounterStore {
  count: number = initialCount.value;

  constructor() {
    makeAutoObservable(this);
  }

  editCount(value: valueType | null) {
    if (value == "") return;
    this.count == Number(value);
  }
}
