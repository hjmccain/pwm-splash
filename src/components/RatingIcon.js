import React from 'react';

const RatingIcon = (props) => {

  const { selected, classNameVal } = props;

  return (
    <div>
      <div
        className={classNameVal}
        id={selected}
        onClick={() => props.changeStateValue('userRating', selected)}>
      </div>
      <p>{props.selected}</p>
    </div>
  )

}

export default RatingIcon;
