import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./listItem.scss";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [video, setVideo] = useState({});

  const navigate = useNavigate();
  const toWatchPage = () => {
    navigate("/watch", { state: { video: video } });
  };

  useEffect(() => {
    const getVideo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/videos/find/" + item,
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

  // const trailer =
  //   "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  // const imgThumb =
  //   "https://assets.dicebreaker.com/cyberpunk-red-roleplaying-game-jumpstart-kit.jpg/BROK/resize/844%3E/format/jpg/quality/80/cyberpunk-red-roleplaying-game-jumpstart-kit.jpg";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        toWatchPage();
      }}
    >
      <img src={video.imageThumb} alt="" />
      {isHovered && (
        <>
          <video src={video.trailerVideo} autoPlay={true} loop />
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
        </>
      )}
    </div>
  );
}
