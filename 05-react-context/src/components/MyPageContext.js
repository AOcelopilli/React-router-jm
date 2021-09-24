import { AuthProvider } from "../context/AuthProvider";
import { LanguageProvider } from "../context/LanguageProvider";
import { ThemeProvider } from "../context/ThemeProvider";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const MyPageContext = () => {
  return (
    <div className="my-page">
      <h2>Mi página</h2>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;
