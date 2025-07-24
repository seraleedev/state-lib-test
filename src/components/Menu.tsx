import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { menuItem } from "../config";
import { type MenuProps } from "antd";

interface ICustomMenu {
  currentTab: string;
  setCurrentTab: (key: string) => void;
}

export const CustomMenu = ({ currentTab, setCurrentTab }: ICustomMenu) => {
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrentTab(e.key);
  };

  return (
    <Header>
      <Menu
        theme="dark"
        items={menuItem}
        mode="horizontal"
        onClick={onClick}
        selectedKeys={[currentTab]}
      />
    </Header>
  );
};

export default CustomMenu;
