import { Link, useLocation } from "react-router-dom";
import { ArrowBackOutlined } from "@material-ui/icons";

import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const { video } = location.state;
  console.log(video);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={video.fullVideo}
      />
    </div>
  );
}
