const Main = ({ theme, texts, auth }) => {
  return (
    <div className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <p>{texts.mainContent}</p>
    </div>
  );
};

export default Main;
