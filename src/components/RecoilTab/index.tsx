import { Tab } from "../Tab";
import type { InputNumberProps } from "antd";
import type { LabeledValue } from "antd/es/select";
import { useRecoilState, useRecoilValue } from "recoil";
import { arrayLengthSelector, CounterAtom, UserAtom } from "../../recoil";
import Paragraph from "antd/es/typography/Paragraph";

export const RecoilTab = () => {
  // recoil
  const [recoilCount, setRecoilCount] = useRecoilState(CounterAtom);
  const [recoilUser, setRecoilUser] = useRecoilState(UserAtom);
  const selectedLength = useRecoilValue(arrayLengthSelector);

  const onChangeCount: InputNumberProps["onChange"] = (value) => {
    // console.log("count changed", value);
    if (value == "") return;
    setRecoilCount(Number(value));
  };

  const onChangeName = (value: string) => {
    // console.log("name changed", value);
    setRecoilUser({ ...recoilUser, name: value });
  };

  const onChangeSelect = (values: LabeledValue[]) => {
    // console.log("select changed", values);
    const newDatas = values.map((item) => ({
      label: item.label?.toString() || "",
      value: item.value?.toString(),
    }));
    setRecoilUser({ ...recoilUser, selected: newDatas });
  };

  return (
    <Tab
      tabName="Recoil"
      states={{
        count: recoilCount,
        name: recoilUser.name,
        selected: recoilUser.selected,
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
};

export default RecoilTab;
