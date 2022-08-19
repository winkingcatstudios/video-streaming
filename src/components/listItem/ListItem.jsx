import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  ExpandMore
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import InfoModal from "../../components/uiElements/InfoModal";
import "./listItem.scss";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [video, setVideo] = useState({});
  const [moreInfo, setMoreInfo] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getVideo = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/videos/find/` + item,
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
            },
          }
        );
        setVideo(response.data.video);
      } catch (err) {
        console.log(err);
      }
    };
    getVideo();
  }, [item]);

  const toWatchPage = () => {
    navigate("/watch", { state: { video: video } });
  };

  const handleMoreInfo = () => {
    navigate("/watch", { state: { video: video } });
  }

  const handleHover = (toggle) => {
    if (toggle) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  };

  const handleMoreInfoOn = () => {
    setMoreInfo(true);
  };

  const handleMoreInfoOff = (e) => {
    e.preventDefault();
    setMoreInfo(false);
  };

  return (
    <React.Fragment>
      {moreInfo && <InfoModal content={video} onClear={handleMoreInfoOff} onPlay={toWatchPage} />}
      <div
        className="listItem"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        // onClick={() => {
        //   toWatchPage();
        // }}
      >
        {!isHovered && <img src={video.imageThumb} alt="" />}
        {isHovered && (
          <React.Fragment>
            <img onClick={toWatchPage} src={video.imageThumb} alt="" />
            <div className="itemInfo">
              <div className="iconsInfo">
                <PlayArrow onClick={toWatchPage} className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ExpandMore onClick={handleMoreInfoOn} className="icon" />
                {/* <ThumbDownOutlined className="icon" />
                <ThumbDownOutlined className="icon" /> */}
                <div className="yearAndRating">
                  <span className="year">{video.year}</span>
                  <span className="limit">{video.ageLimit}+</span>
                </div>
              </div>
              <div className="itemInfoTop"></div>
              <h1 className="title">{video.title}</h1>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

// {video.ageLimit !== 0 && (
//   <span className="limit">{video.ageLimit}</span>
// )}

{
  /* {isHovered && (
          <React.Fragment>
            {/* <img src={video.imageThumb} alt="" /> */
}
//     <div className="itemInfo">
//       <div className="icons">
//         <PlayArrow className="icon" />
//         <Add className="icon" />
//         <ThumbUpAltOutlined className="icon" />
//         <ThumbDownOutlined className="icon" />
//       </div>
//       <div className="itemInfoTop">
//         {video.ageLimit !== 0 && (
//           <span className="limit">{video.ageLimit}</span>
//         )}
//         <span>{video.year}</span>
//       </div>
//       <h1 className="desc">{video.title}</h1>
//       <div className="desc">{video.description}</div>
//       <div className="genre">Genre: {video.genre}</div>
//     </div>
//   </React.Fragment>
// )} */}
