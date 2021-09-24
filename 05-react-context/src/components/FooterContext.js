import { useContext } from "react";
import LanguageContext from "../context/LanguageProvider";
import ThemeContext from "../context/ThemeProvider";

const FooterContext = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    <div className={theme}>
      <h4>{texts.footerTitle}</h4>
    </div>
  );
};

export default FooterContext;
