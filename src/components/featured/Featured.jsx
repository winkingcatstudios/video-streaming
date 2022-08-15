import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./featured.scss";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  const navigate = useNavigate();
  const toWatchPage = () => {
    navigate("/watch", { state: { video: content } });
  };

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/videos/random?type=${type}`,
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
      {type && type !== "cats" && (
        <div className="category">
          <span>{type === "oneshots" ? "Oneshots" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="other">Other</option>
            <option value="5e">D&D 5e</option>
            <option value="osr">OSR</option>
            <option value="pathfinder">Pathfinder</option>
            <option value="cypher">Cypher System</option>
            <option value="cthulhi">Call of Cthulhu</option>
            <option value="starwars">Star Wars</option>
          </select>
        </div>
      )}
      <img src={content.image} alt="" />
      <div className="info">
        <img src={content.imageTitle} alt="" />
        <div className="infoCard">
          <h1>{content.title}</h1>
          <span className="desc">{content.description}</span>
          <div className="buttons">
            <button
              className="play"
              onClick={() => {
                toWatchPage();
              }}
            >
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
    </div>
  );
}
