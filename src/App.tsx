import { Card, Input, InputNumber, Layout, Select, Space } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import { useAppSelector, useAppDispatch } from "./store-redux/hooks";
import { editCount } from "./store-redux/slices/counterSlice";
import Title from "antd/es/typography/Title";
import type { InputNumberProps } from "antd";
import {
  editName,
  editSelected,
  type ISelectOption,
} from "./store-redux/slices/userSlice";
import { createOptions } from "./util";
import { useMemo } from "react";
import type { LabeledValue } from "antd/es/select";

function App() {
  // local
  const options = useMemo(() => createOptions(), []);
  // redux
  const reduxCount = useAppSelector((state) => state.counter.value);
  const { name: reduxName, selected: reduxSelected } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();
  const titleStyle = { margin: 0 };

  const onChangeNumber: InputNumberProps["onChange"] = (value) => {
    // console.log("count changed", value);
    dispatch(editCount(value));
  };

  const onChangeName = (value: string) => {
    // console.log("name changed", value);
    dispatch(editName(value));
  };

  const onChangeSelect = (values: LabeledValue[]) => {
    console.log("select changed", values);
    const newDatas = values.map((item) => ({
      label: item.label?.toString() || "",
      value: item.value?.toString(),
    }));
    dispatch(editSelected(newDatas));
  };
  console.log(reduxSelected);
  return (
    <Layout>
      <Header />
      <Content style={{ padding: "48px" }}>
        <Layout
          style={{ background: "#fff", padding: "20px", borderRadius: 10 }}
        >
          <Space direction="vertical">
            <Title level={5} style={titleStyle}>
              Redux
            </Title>
            <Card size="small" title="실제 값">
              <p>counter : {reduxCount}</p>
              <p>name : {reduxName}</p>
              <p>
                selected :{" "}
                <ul>
                  {reduxSelected.map((option) => (
                    <li>{option.value}</li>
                  ))}
                </ul>
              </p>
            </Card>
            <InputNumber
              value={reduxCount}
              addonBefore={`counter`}
              onChange={onChangeNumber}
              max={100}
            />
            <Input
              value={reduxName}
              addonBefore={`name`}
              onChange={(event) => onChangeName(event.currentTarget.value)}
            />
            <Select
              mode="multiple"
              allowClear
              labelInValue
              // value={reduxSelected}
              onChange={onChangeSelect}
              style={{ width: "100%" }}
              placeholder="Please select"
              options={options}
            />
          </Space>
        </Layout>
      </Content>
    </Layout>
  );
}

export default App;
