import { InputNumber, Layout, Space } from "antd";
import { Header, Content } from "antd/es/layout/layout";
import { useAppSelector, useAppDispatch } from "./store-redux/hooks";
import { editCount } from "./store-redux/slices/counterSlice";
import Title from "antd/es/typography/Title";
import type { InputNumberProps } from "antd";

function App() {
  // redux
  const reduxCount = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const titleStyle = { margin: 0 };

  const onChange: InputNumberProps["onChange"] = (value) => {
    console.log("changed", value);
    dispatch(editCount(value));
  };
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
            <InputNumber
              value={reduxCount}
              addonBefore={`counter: ${reduxCount}`}
              onChange={onChange}
              max={100}
            />
          </Space>
        </Layout>
      </Content>
    </Layout>
  );
}

export default App;
