import React from 'react';

const RatingIcon = (props) => {

  const { num, classNameVal } = props;

  return (
    <div className="rating">
      <div
        className={classNameVal}
        id={num}
        onClick={() => props.changeStateValue('userRating', num)}>
      </div>
      <p>{props.num}</p>
    </div>
  )

}

export default RatingIcon;
