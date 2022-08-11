import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import "./featured.scss";

export default function Featured({ type }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/videos/random?type=${type}`,
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("userData")).token,
            },
          }
        );
        setContent(response.data.video[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "oneshots" ? "Oneshots" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="5e">D&D 5e</option>
            <option value="osr">OSR</option>
            <option value="pathfinder">Pathfinder</option>
            <option value="cypher">Cypher System</option>
            <option value="fate">Fate</option>
            <option value="savage">Savage Worlds</option>
            <option value="cats">Cats</option>
          </select>
        </div>
      )}
      <img src={content.image} alt="" />
      <div className="info">
        <img src={content.imageTitle} alt="" />
        <span className="desc">{content.description}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
