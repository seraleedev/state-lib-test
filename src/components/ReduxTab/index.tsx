import { Tab } from "../Tab";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { editCount } from "../../redux/slices/counterSlice";
import type { InputNumberProps } from "antd";
import { editName, editSelected } from "../../redux/slices/userSlice";
import type { LabeledValue } from "antd/es/select";

export const ReduxTab = () => {
  // redux
  const reduxCount = useAppSelector((state) => state.counter.value);
  const { name: reduxName, selected: reduxSelected } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();

  const onChangeCount: InputNumberProps["onChange"] = (value) => {
    // console.log("count changed", value);
    dispatch(editCount(value));
  };

  const onChangeName = (value: string) => {
    // console.log("name changed", value);
    dispatch(editName(value));
  };

  const onChangeSelect = (values: LabeledValue[]) => {
    // console.log("select changed", values);
    const newDatas = values.map((item) => ({
      label: item.label?.toString() || "",
      value: item.value?.toString(),
    }));
    dispatch(editSelected(newDatas));
  };

  return (
    <Tab
      tabName="Redux"
      states={{ count: reduxCount, name: reduxName, selected: reduxSelected }}
      actions={{
        changeName: onChangeName,
        changeCount: onChangeCount,
        changeSelect: onChangeSelect,
      }}
    />
  );
};

export default ReduxTab;
