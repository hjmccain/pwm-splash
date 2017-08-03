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
    <label htmlFor="wifi-agreement">
      <span>
        <i className="fa fa-square-o fa-lg" id="unchecked" aria-hidden="true"></i>
        <i className="fa fa-check-square-o fa-lg" id="checked" aria-hidden="true"></i>
      </span>
      I accept PWM Wi-Fi terms & conditions
    </label>
    </div>
  )
}

export default WifiForm;
