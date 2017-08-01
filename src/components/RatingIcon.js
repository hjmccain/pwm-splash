import React from 'react';

const RatingIcon = (props) => {

  const { num, classNameVal } = props;

  const toggleSelected = (selected, unselected) => {
    props.changeStateValue('userRating', selected);
    props.updateIcons(selected, unselected);
  }

  return (
    <div>
      <div
        className={classNameVal}
        id={num}
        onClick={() => toggleSelected(10 - num, num)}>
      </div>
      <p>{props.num}</p>
    </div>
  )

}

export default RatingIcon;
