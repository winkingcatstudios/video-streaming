import React from 'react';

import IconArrowDown from './../icons/IconArrowDown'
import './slideButton.scss'

const SlideButton = ({ onClick, type }) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
    <span>
      <IconArrowDown />
    </span>
  </button>
);

export default SlideButton;