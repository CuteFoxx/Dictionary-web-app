import "./Header.css";
import HeaderNav from "./HeaderNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
