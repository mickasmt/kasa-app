import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";

function Header() {
  return (
    <nav>
      <Link to="/">
        <img src={logo} className="kasa-logo" alt="logo" />
      </Link>

      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </nav>
  );
}

export default Header;
