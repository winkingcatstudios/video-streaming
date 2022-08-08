import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React, { useState } from "react";

import "./navBar.scss";

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
          <span>Homepage</span>
          <span>Series</span>
          <span>Oneshots</span>
          <span>New and Popular</span>
          <span>My List</span>
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
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
