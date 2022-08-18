import React from "react";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  ExpandMore,
} from "@material-ui/icons";

import Modal from "./Modal";
import Button from "../formElements/Button";
import "./infoModal.scss";

const ErrorModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header={props.content.title}
      show={!!props.content}
      footer={<Button onClick={props.onClear}>Play</Button>}
    >
      <div className="infoContainer">
        <img onClick={props.onPlay} src={props.content.imageThumb} alt="" />
        <div className="iconsInfo">
          <PlayArrow onClick={props.onPlay} className="icon" />
          <Add className="icon" />
          <ThumbUpAltOutlined className="icon" />
          {/* <ExpandMore onClick={handleMoreInfo} className="icon" /> */}
          {/* <ThumbDownOutlined className="icon" />
                <ThumbDownOutlined className="icon" /> */}
          <div className="yearAndRating">
            <span className="year">{props.content.year}</span>
            <span className="limit">{props.content.ageLimit}+</span>
          </div>
        </div>
        <div className="itemInfoTop"></div>
        <h1 className="title">{props.content.title}</h1>
      </div>
    </Modal>
  );
};

export default ErrorModal;
