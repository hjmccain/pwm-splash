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
    <div>
      { icons(selected, unselected) }
      <p>Postal Code</p>
      <input
        id="zipcode"
        type="text"
      />
    </div>
  )

}

export default RatingForm;
