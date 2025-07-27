import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const menuItem: MenuItem[] = [
  { label: "Redux", key: "redux" },
  { label: "Zustand", key: "zustand" },
  { label: "Recoil", key: "recoil" },
  { label: "Jotai", key: "jotai" },
  { label: "MobX", key: "mobx" },
];

export const titleStyle = { margin: 0 };

export interface ISelectOption {
  label: string;
  value: string;
}
export interface UserState {
  name: string;
  selected: ISelectOption[];
}

export const initialUser: UserState = {
  name: "",
  selected: [],
};

export interface CounterState {
  value: number;
}

export const initialCount: CounterState = {
  value: 0,
};
