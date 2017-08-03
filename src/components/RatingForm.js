import React, { Component } from 'react';

import IconElement from './IconElement';

const RatingForm = (props) => {

  const { changeStateValue, selected, unselected } = props;

  const handleChange = (event) => {
    changeStateValue('zipcode', event.target.value);
  }

  return (
    <div id="form-container">
      <div id="rating-container">
        <p className="yellow">How would you rate your PWM experience today?</p>
        { IconElement(selected, unselected, changeStateValue) }
        <p id="rating-description">1 being poor, 10 being excellent</p>
      </div>
      <div id="zipcode-container">
        <p className="yellow">Zip Code</p>
        <input
          id="zipcode"
          type="text"
          onChange={handleChange}
        />
      </div>
    </div>
  )

}

export default RatingForm;
