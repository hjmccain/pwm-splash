import React from 'react';

const WifiForm = (props) => {

  const { changeStateValue, userAccept } = props;

  return (
    <div>
      <input
        type="checkbox"
        onClick={() => changeStateValue('userAccept', !userAccept)}
      />
    <p>Accept PWM Wifi terms & conditions</p>
    </div>
  )
}

export default WifiForm;
