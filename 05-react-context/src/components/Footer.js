const Footer = ({ theme, texts }) => {
  return (
    <div className={theme}>
      <h4>{texts.footerTitle}</h4>
    </div>
  );
};

export default Footer;
