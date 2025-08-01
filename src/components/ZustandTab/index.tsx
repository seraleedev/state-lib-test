import { Tab } from "../Tab";
import type { InputNumberProps } from "antd";
import type { LabeledValue } from "antd/es/select";
import useZustandStore from "../../zustand/useStore";

export const ZustandTab = () => {
  // zustand
  const zustandCount = useZustandStore((state) => state.count);
  const { name: zustandName, selected: zustandSelected } = useZustandStore(
    (state) => state.data
  );
  const { editCount } = useZustandStore((state) => state.counterActions);
  const { editName, editSelected } = useZustandStore(
    (state) => state.userActions
  );

  const onChangeCount: InputNumberProps["onChange"] = (value) => {
    // console.log("count changed", value);
    editCount(value);
  };

  const onChangeName = (value: string) => {
    //console.log("name changed", value);
    editName(value);
  };

  const onChangeSelect = (values: LabeledValue[]) => {
    // console.log("select changed", values);
    const newDatas = values.map((item) => ({
      label: item.label?.toString() || "",
      value: item.value?.toString(),
    }));
    editSelected(newDatas);
  };

  return (
    <Tab
      tabName="Zustand"
      states={{
        count: zustandCount,
        name: zustandName,
        selected: zustandSelected,
      }}
      actions={{
        changeName: onChangeName,
        changeCount: onChangeCount,
        changeSelect: onChangeSelect,
      }}
    />
  );
};

export default ZustandTab;
