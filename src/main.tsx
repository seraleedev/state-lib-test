import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import { reduxStore } from "./redux/index.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </RecoilRoot>
  </StrictMode>
);
