import React from 'react';

const WifiForm = (props) => {

  const { changeStateValue, userAccept } = props;

  return (
    <div id="wifi-container">
      <input
        id="wifi-agreement"
        type="checkbox"
        onClick={() => changeStateValue('userAccept', !userAccept)}
      />
    <p>I accept PWM Wi-Fi terms & conditions</p>
    </div>
  )
}

export default WifiForm;
