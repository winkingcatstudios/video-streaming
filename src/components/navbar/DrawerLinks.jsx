import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import "./drawerLinks.scss";

const DrawerLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <div className="drawerLinks">
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
  );
};

export default DrawerLinks;
