import { Card, Input, InputNumber, Select, Space } from "antd";
import Title from "antd/es/typography/Title";
import type { LabeledValue } from "antd/es/select";
import { titleStyle, type ISelectOption } from "../config";
import { useMemo, type ReactNode } from "react";
import { createOptions } from "../util";
import type { valueType } from "antd/es/statistic/utils";
import { observer } from "mobx-react-lite";

export interface ITab {
  tabName: string;
  states: {
    count: number;
    name: string;
    selected: ISelectOption[];
  };
  actions: {
    changeCount: (value: valueType | null) => void;
    changeName: (value: string) => void;
    changeSelect: (values: LabeledValue[]) => void;
  };
  children?: ReactNode;
}
// mobx 사용하기 위해 observer 코드로 한번 더 감쌈
export const Tab = observer(({ tabName, states, actions, children }: ITab) => {
  const options = useMemo(() => createOptions(), []);

  return (
    <Space direction="vertical">
      <Title level={5} style={titleStyle}>
        {tabName}
      </Title>
      <Card size="small" title="실제 값">
        <div>counter : {states.count}</div>
        <div>name : {states.name}</div>
        <div>
          selected :{" "}
          <ul>
            {states.selected.map((option) => (
              <li key={option.value}>{option.value}</li>
            ))}
          </ul>
        </div>
      </Card>
      {children}
      <InputNumber
        value={states.count}
        addonBefore={`counter`}
        onChange={actions.changeCount}
        max={1000}
        min={0}
      />
      <Input
        value={states.name}
        addonBefore={`name`}
        onChange={(event) => actions.changeName(event.currentTarget.value)}
      />
      <Select
        mode="multiple"
        allowClear
        labelInValue
        value={states.selected}
        onChange={actions.changeSelect}
        style={{ width: "100%" }}
        placeholder="Please select"
        options={options}
      />
    </Space>
  );
});
