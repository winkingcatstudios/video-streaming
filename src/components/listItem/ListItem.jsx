import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./listItem.scss";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [video, setVideo] = useState({});

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

  const handleHover = (toggle) => {
    if (toggle) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  };

  // return (
  //   <div
  //     className="listItem"
  //     style={{ left: isHovered && index * 288 - 35 + index * 8 }}
  //     onMouseEnter={() => handleHover(true)}
  //     onMouseLeave={() => handleHover(false)}
  //     onClick={() => {
  //       toWatchPage();
  //     }}
  //   >
  //     <img src={video.imageThumb} alt="" />
  //     {isHovered && (
  //       <React.Fragment>
  //         {/* <video src={video.trailerVideo} autoPlay={true} loop /> */}
  //         <div className="itemInfo">
  //           <div className="icons">
  //             <PlayArrow className="icon" />
  //             <Add className="icon" />
  //             <ThumbUpAltOutlined className="icon" />
  //             <ThumbDownOutlined className="icon" />
  //           </div>
  //           <div className="itemInfoTop">
  //             {video.ageLimit !== 0 && (
  //               <span className="limit">{video.ageLimit}</span>
  //             )}
  //             <span>{video.year}</span>
  //           </div>
  //           <h1 className="desc">{video.title}</h1>
  //           <div className="desc">{video.description}</div>
  //           <div className="genre">Genre: {video.genre}</div>
  //         </div>
  //       </React.Fragment>
  //     )}
  //   </div>
  // );

  return (
    <React.Fragment>
      <div
        className="listItem"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        onClick={() => {
          toWatchPage();
        }}
      >
        {!isHovered && <img src={video.imageThumb} alt="" />}
        {isHovered && (
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              {video.ageLimit !== 0 && (
                <span className="limit">{video.ageLimit}</span>
              )}
              <span>{video.year}</span>
            </div>
            <h1 className="desc">{video.title}</h1>
            <div className="desc">{video.description}</div>
            <div className="genre">Genre: {video.genre}</div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
