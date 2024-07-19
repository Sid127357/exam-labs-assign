import Logo from "../assets/images/logo.svg";
const Header = () => {
  return (
    <header className="header-block py-3">
      <div className="container">
        <img src={Logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
