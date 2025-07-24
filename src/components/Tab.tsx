import { Card, Input, InputNumber, Select, Space } from "antd";
import Title from "antd/es/typography/Title";
import { type ISelectOption } from "../store-redux/slices/userSlice";
import type { LabeledValue } from "antd/es/select";
import { titleStyle } from "../config";
import { useMemo } from "react";
import { createOptions } from "../util";
import type { valueType } from "antd/es/statistic/utils";

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
}

export const Tab = ({ tabName, states, actions }: ITab) => {
  const options = useMemo(() => createOptions(), []);

  return (
    <Space direction="vertical">
      <Title level={5} style={titleStyle}>
        {tabName}
      </Title>
      <Card size="small" title="실제 값">
        <p>counter : {states.count}</p>
        <p>name : {states.name}</p>
        <p>
          selected :{" "}
          <ul>
            {states.selected.map((option) => (
              <li>{option.value}</li>
            ))}
          </ul>
        </p>
      </Card>
      <InputNumber
        value={states.count}
        addonBefore={`counter`}
        onChange={actions.changeCount}
        max={100}
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
        onChange={actions.changeSelect}
        style={{ width: "100%" }}
        placeholder="Please select"
        options={options}
      />
    </Space>
  );
};
