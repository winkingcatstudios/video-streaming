import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./myList.scss";
import List from "../../components/list/List";
import ComingSoon from "../../components/comingSoon/ComingSoon";

const MyList = () => {
  

  return (
    <div className="myList">
      <Navbar />
      <ComingSoon />
    </div>
  );
};

export default MyList;
