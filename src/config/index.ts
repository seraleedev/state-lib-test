import type { MenuProps } from "antd";
import { useMemo } from "react";
import { createOptions } from "../util";

type MenuItem = Required<MenuProps>["items"][number];

export const menuItem: MenuItem[] = [
  { label: "Redux", key: "redux" },
  { label: "Zustand", key: "zustand" },
  { label: "Recoil", key: "recoil" },
  { label: "Jotai", key: "jotai" },
];

// export const options = useMemo(() => createOptions(), []);
export const titleStyle = { margin: 0 };
