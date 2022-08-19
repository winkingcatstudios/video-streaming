import { ArrowDropDown, Notifications, Search, Menu, AirlineSeatFlat } from "@material-ui/icons";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import SideDrawer from "./SideDrawer";
import DrawerLinks from "./DrawerLinks";
import Backdrop from "../uiElements/Backdrop";
import { AuthContext } from "../../context/auth-context";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const auth = useContext(AuthContext);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="drawerLinks">
          <DrawerLinks />
        </nav>
      </SideDrawer>

      <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
          <div className="left">
            <button className="sideDrawerButton" onClick={openDrawerHandler}>
              <Menu className="menuIcon" />
            </button>
            <img
              src="/dice cats - white.png"
              alt=""
            />
            <h1 className="titleName">DICE CATS</h1>
            <div className="navLinks">
              <Link to="/" className="link">
                <span>Homepage</span>
              </Link>
              <Link to="/series" className="link">
                <span>Series</span>
              </Link>
              <Link to="/oneshots" className="link">
                <span>Oneshots</span>
              </Link>
              <Link to="/cats" className="link">
                <span>Cats</span>
              </Link>
              {/* <Link to="/" className="link">
                <span>New and Popular</span>
              </Link> */}
              <Link to="/myList" className="link">
                <span>My List</span>
              </Link>
            </div>
          </div>
          <div className="right">
            {/* <Search className="icon" /> */}
            <span>{auth.name}</span>
            {/* <Notifications className="icon" /> */}
            {/* <img
              src="https://upload.wikimedia.org/wikipedia/en/6/62/Kermit_the_Frog.jpg"
              alt=""
            /> */}
            <div className="profile">
              <ArrowDropDown className="icon" />
              <div className="options">
                <Link to="/settings" className="link">
                <span>Settings</span>
                </Link>

                <span onClick={auth.logout}>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
