import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import LanguageDropdown from "../LanguageDropdown";
import LanguageContext from "../../context/language";

const Header = () => {
  const counter_val = useSelector((state) => state.counter.counter_val);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid bg-primary p-2 rounded-3">
        <span
          className="navbar-brand"
          style={{ color: "white", fontSize: "25px", fontWeight: "bold" }}
        >
          Movie App
        </span>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="d-flex flex-row">
            <Link
              className="nav-link"
              to="/"
              style={{ color: "white", fontSize: "20px" }}
            >
              Movie List
            </Link>
          </div>
          <div
            className="d-flex flex-row align-items-center justify-content-center"
            style={{ position: "absolute", right: "0", marginRight: "20px" }}
          >
            <LanguageDropdown
              selectedLanguage={language}
              onSelectLanguage={setLanguage}
            />

            <FaHeart
              style={{ color: "red", fontSize: "30px", margin: "0 10px" }}
            />
            <Link
              className="nav-link"
              to="/watch-list"
              style={{ color: "white", fontSize: "20px", margin: "0 10px" }}
            >
              Watch List
            </Link>
            <span style={{ color: "white", fontSize: "20px", margin: "0 10px" }}>
              {counter_val}
            </span>

            {/* Add the link to the registration form */}
            <Link
              className="nav-link btn btn-primary"
              to="/register"
              style={{ color: "white", fontSize: "20px", margin: "0 10px" }}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
