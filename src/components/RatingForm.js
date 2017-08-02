import React from 'react';

import RatingIcon from './RatingIcon';

const RatingForm = (props) => {

  const { changeStateValue, selected, unselected } = props;

  const makeArray = (num, type) => {
    return Array
      .from(new Array(num), (val, idx) => idx)
      .map((val, idx) => {
        return type;
      });
  }

  const icons = (selectedCount, unselectedCount) => {
    let iconsArray = [...makeArray(selectedCount, 'selected'), ...makeArray(unselectedCount, 'unselected')];
    return iconsArray.map((e, i) => {
      return <RatingIcon
        key={i}
        num={i + 1}
        changeStateValue={changeStateValue}
        classNameVal={`rating-icon ${e}`} />
    });
  }

  return (
    <div id="form-container">
      <div id="rating-container">
        <p className="yellow">How would you rate your PWM experience today?</p>
        { icons(selected, unselected) }
        <p>1 being poor, 10 being excellent</p>
      </div>
      <div id="zipcode-container">
        <p className="yellow">Zip Code</p>
        <input
          id="zipcode"
          type="text"
        />
      </div>
    </div>
  )

}

export default RatingForm;
