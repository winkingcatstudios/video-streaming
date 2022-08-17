import { Link, useLocation } from "react-router-dom";
import { ArrowBackOutlined } from "@material-ui/icons";

import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const { video } = location.state;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className="videoNoCrop"
        autoPlay
        progress="true"
        controls
        controlsList="nodownload"
        src={video.fullVideo}
      />
    </div>
  );
}
