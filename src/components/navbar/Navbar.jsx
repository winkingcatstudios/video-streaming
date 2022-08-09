import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://winkingcatstudio.com/winkingcatlogo-transparent-white.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/oneshots" className="link">
            <span>Oneshots</span>
          </Link>
          <Link to="/" className="link">
            <span>New and Popular</span>
          </Link>
          <Link to="/" className="link">
            <span>My List</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              {/* <Link to="/" className="link"> */}
              <span>Settings</span>
              {/* </Link> */}
              {/* <Link to="/" className="link"> */}
              <span>Logout</span>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
