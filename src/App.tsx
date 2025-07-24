import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import CustomMenu from "./components/Menu";
import ReduxTab from "./components/ReduxTab";
import ZustandTab from "./components/ZustandTab";

function App() {
  const [currentTab, setCurrentTab] = useState<string>("redux");

  return (
    <Layout>
      <CustomMenu currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Content style={{ padding: "48px" }}>
        <Layout
          style={{ background: "#fff", padding: "20px", borderRadius: 10 }}
        >
          {currentTab == "redux" && <ReduxTab />}
          {currentTab == "zustand" && <ZustandTab />}
        </Layout>
      </Content>
    </Layout>
  );
}

export default App;
