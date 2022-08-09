import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({type}) {
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
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
}
