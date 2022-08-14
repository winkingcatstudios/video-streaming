import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./comingSoon.scss";

export default function ComingSoon() {
  return (
    <div className="comingSoon">
      <div className="info">
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
}
