import HeaderLogo from "../assets/HeaderLogo.svg"; // logo
import { Link } from "react-router-dom"; // router link

// css
import "../style/header.css";
import "../style/reset.css";

function Header() {
  return (
    <div className="headerContainer">
      <div className="navigationContainer">
        <img src={HeaderLogo} className="header-logo" alt="logo" />
        <div className="header-navigation">
          <Link className="header-navigation-link" to="/">
            Accueil
          </Link>
          <Link className="header-navigation-link" to="/about">
            A Propos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
