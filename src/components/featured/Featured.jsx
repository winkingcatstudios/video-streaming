import React from "react";
import { PlayArrow, InfoOutlined } from "@material-ui/icons";

import "./featured.scss";

const Featured = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "oneshots" ? "Oneshots" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="5e">5e</option>
                    <option value="pathfinder">Pathfinder</option>
                    <option value="cthulhu">Call of Cthulhu</option>
                    <option value="osr">OSR</option>
                    <option value="cypher">Cypher System</option>
                    <option value="savage">Savage Worlds</option>
                    <option value="fate">FATE</option>
                    <option value="cats">Cats</option>
                </select>
            </div>
        )}
      <img
        src="https://usercontent.one/wp/kirileonard.com/wp-content/uploads/2020/07/LTL_the_drunken_whale_opt.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://winkingcatstudio.com/winkingcatlogo-transparent-white.png"
          alt=""
        />
        <span className="desc">
          Cras sit amet bibendum arcu, vel lacinia libero. Curabitur accumsan,
          justo vitae consequat varius, sapien metus consectetur dui, et dictum
          ligula dui nec quam. Sed molestie lorem vitae hendrerit accumsan.
          Nulla at sagittis lectus. Aliquam et magna eu nunc egestas finibus.
          Mauris tristique pellentesque massa ut pellentesque. Maecenas
          tristique nunc at egestas imperdiet. Mauris sit amet varius sem.
        </span>
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
};

export default Featured;
