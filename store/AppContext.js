import { createContext, useState } from "react";

export const AppContext = createContext({
  LANG: "id",
  TOKEN: "",
  NOTIFICATION: 0,
  setLang: () => {},
  setToken: () => {},
  setNotification: () => {},
});

const AppProvider = ({ children }) => {
  const [LANG, setLang] = useState("id");
  const [TOKEN, setToken] = useState("");
  const [NOTIFICATION, setNotification] = useState(0);

  return (
    <AppContext.Provider
      value={{ LANG, TOKEN, NOTIFICATION, setLang, setToken, setNotification }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
