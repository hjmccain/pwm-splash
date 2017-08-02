import React from 'react';

import RatingIcon from './RatingIcon';
import { makeArray } from './workerFunctions';

const IconElement = (selectedCount, unselectedCount, changeStateValue) => {
  let iconsArray = [...makeArray(selectedCount, 'selected'), ...makeArray(unselectedCount, 'unselected')];
  return iconsArray.map((e, i) => {
    return <RatingIcon
      key={i}
      num={i + 1}
      changeStateValue={changeStateValue}
      classNameVal={`rating-icon ${e}`} />
  });
}

export default IconElement;
