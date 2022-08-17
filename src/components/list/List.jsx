import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

export default function List({ list }) {
  const [isMoving, setIsMoving] = useState(false);
  const [slideNumber, setSlideNumber] = useState(1);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoving(true);
    if (isMoving) {
      return;
    }
    setIsMoving(true);
    let distance = listRef.current.getBoundingClientRect().x - 70;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${296 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 50) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-296 + distance}px)`;
    }

    setTimeout(function () {
      setIsMoving(false);
    }, 1000);
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: slideNumber === 1 && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItem key={i} index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
          style={{ display: slideNumber === list.content.length && "none" }}
        />
      </div>
    </div>
  );
}
