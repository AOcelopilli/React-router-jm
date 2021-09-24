import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import LanguageContext from "../context/LanguageProvider";
import ThemeContext from "../context/ThemeProvider";

const MainContext = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);
  const { auth } = useContext(AuthContext);

  return (
    <div className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <p>{texts.mainContent}</p>
    </div>
  );
};

export default MainContext;
