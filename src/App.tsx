import { createContext, useContext } from "react";
import { ComplaintBox } from "./ComplaintBox";
import { RootStore } from "./store";
import { Instance } from "mobx-state-tree";
import { ThemeConfig } from "@surya-digital/leo-reactjs-material-ui";
import { lightTheme } from "./lightColorTokens";
import { darkTheme } from "./darkColorTokens";

const MSTContext = createContext<null | Instance<typeof RootStore>>(null);

export const useRootStore = () => {
  const rootStore = useContext(MSTContext);
  if (rootStore === null) throw new Error("Root Store is null.");
  return rootStore;
};

const App = () => {
  const rootStore = RootStore.create({
    name: "",
    mail: "",
    complaint: "",
    nameError: false,
    mailError: false,
    complaintError: false,
    usersArr: [],
  });
  return (
    <ThemeConfig currentTheme={"light"} themes={[lightTheme, darkTheme]}>
      <MSTContext.Provider value={rootStore}>
        <ComplaintBox />
      </MSTContext.Provider>
    </ThemeConfig>
  );
};

export default App;
