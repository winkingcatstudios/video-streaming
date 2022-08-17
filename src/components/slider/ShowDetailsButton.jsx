import React from 'react';

import IconArrowDown from './../icons/IconArrowDown'
import './showDetailsButton.scss'

const ShowDetailsButton = ({ onClick }) => (
  <button onClick={onClick} className="show-details-button">
    <span>
      <IconArrowDown />
    </span>
  </button>
);

export default ShowDetailsButton;
