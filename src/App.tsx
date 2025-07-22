import { useState } from "react";
import { Button, Layout } from "antd";
import { Header, Content } from "antd/es/layout/layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Header />
      <Content style={{ padding: "48px" }}>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </Content>
    </Layout>
  );
}

export default App;
