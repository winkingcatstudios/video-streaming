import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./settings.scss";
import List from "../../components/list/List";
import ComingSoon from "../../components/comingSoon/ComingSoon";

const Settings = () => {
  

  return (
    <div className="settings">
      <Navbar />
      <ComingSoon />
    </div>
  );
};

export default Settings;
