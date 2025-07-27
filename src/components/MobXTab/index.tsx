import { Tab } from "../Tab";
import type { InputNumberProps } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import type { LabeledValue } from "antd/es/select";
import { observer } from "mobx-react-lite";
import { useMobxCounter, useMobxUser } from "../../mobx/hook/useStore";

export const MobXTab = observer(() => {
  // mobx
  const counterStore = useMobxCounter();
  const userStore = useMobxUser();
  const selectedLength = userStore.getSelectedLength;
  const onChangeCount: InputNumberProps["onChange"] = (value) => {
    // console.log("count changed", value);
    if (value == "") return;
    counterStore.editCount(value);
  };

  const onChangeName = (value: string) => {
    // console.log("name changed", value);
    userStore.editName(value);
  };

  const onChangeSelect = (values: LabeledValue[]) => {
    // console.log("select changed", values);
    const newDatas = values.map((item) => ({
      label: item.label?.toString() || "",
      value: item.value?.toString(),
    }));
    userStore.editSelected(newDatas);
  };

  return (
    <Tab
      tabName="mobX"
      states={{
        count: counterStore.count,
        name: userStore.data.name,
        selected: userStore.data.selected,
      }}
      actions={{
        changeName: onChangeName,
        changeCount: onChangeCount,
        changeSelect: onChangeSelect,
      }}
    >
      <Paragraph>선택 개수: {selectedLength}</Paragraph>
    </Tab>
  );
});
export default MobXTab;
