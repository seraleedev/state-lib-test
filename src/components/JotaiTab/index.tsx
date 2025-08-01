import { Tab } from "../Tab";
import type { InputNumberProps } from "antd";
import type { LabeledValue } from "antd/es/select";
import Paragraph from "antd/es/typography/Paragraph";
import { useAtom, useAtomValue } from "jotai";
import { CounterJotaiAtom, selectedLength, UserJotaiAtom } from "../../jotai";

export const JotaiTab = () => {
  // jotai
  const [jotaiCount, setJotaiCount] = useAtom(CounterJotaiAtom);
  const [jotaiUser, setJotaiUser] = useAtom(UserJotaiAtom);
  const selectedLengthJotai = useAtomValue(selectedLength);

  const onChangeCount: InputNumberProps["onChange"] = (value) => {
    // console.log("count changed", value);
    if (value == "") return;
    setJotaiCount(Number(value));
  };

  const onChangeName = (value: string) => {
    // console.log("name changed", value);
    setJotaiUser({ ...jotaiUser, name: value });
  };

  const onChangeSelect = (values: LabeledValue[]) => {
    // console.log("select changed", values);
    const newDatas = values.map((item) => ({
      label: item.label?.toString() || "",
      value: item.value?.toString(),
    }));
    setJotaiUser({ ...jotaiUser, selected: newDatas });
  };

  return (
    <Tab
      tabName="Jotai"
      states={{
        count: jotaiCount,
        name: jotaiUser.name,
        selected: jotaiUser.selected,
      }}
      actions={{
        changeName: onChangeName,
        changeCount: onChangeCount,
        changeSelect: onChangeSelect,
      }}
    >
      <Paragraph>선택 개수: {selectedLengthJotai}</Paragraph>
    </Tab>
  );
};

export default JotaiTab;
