import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import { reduxStore } from "./redux/index.ts";
import App from "./App.tsx";
import { rootStore } from "./mobx/stores/rootStore.ts";

const MobxStoreContext = createContext(rootStore);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MobxStoreContext.Provider value={rootStore}>
      <RecoilRoot>
        <Provider store={reduxStore}>
          <App />
        </Provider>
      </RecoilRoot>
    </MobxStoreContext.Provider>
  </StrictMode>
);
