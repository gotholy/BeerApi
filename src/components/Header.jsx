import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img src="/Logo.png" alt="Beer Logo" className="Logo" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
