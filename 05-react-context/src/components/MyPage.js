import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="my-page">
      <h2>Mi página</h2>
      <Header theme={theme} handleTheme={handleTheme} />
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default MyPage;
