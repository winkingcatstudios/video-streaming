import React from "react";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";

import "./listItem.scss";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://assets.dicebreaker.com/cyberpunk-red-roleplaying-game-jumpstart-kit.jpg/BROK/resize/844%3E/format/jpg/quality/80/cyberpunk-red-roleplaying-game-jumpstart-kit.jpg"
        alt=""
      />
      {isHovered && (
        <React.Fragment>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow />
              <Add />
              <ThumbUpAltOutlined />
              <ThumbDownOutlined />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>2022</span>
            </div>
            <div className="desc">
              Cras sit amet bibendum arcu, vel lacinia libero. Curabitur
              accumsan, justo vitae consequat varius, sapien metus consectetur
              dui, et dictum ligula dui nec quam. Sed molestie lorem vitae
              hendrerit accumsan.
            </div>
            <div className="genre">5e</div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
