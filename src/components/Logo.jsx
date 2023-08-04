import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="header__logo" to="/">
      <img src="src\assets\images\logo.svg" alt="" />
    </Link>
  );
};

export default Logo;
