import React from 'react';

import pwm from '../assets/original_PWM_tag_white.png';

const SplashHeader = (props) => {
  return (
    <div id="splash-header">
      <img src={pwm} alt="pwm logo" id="logo" />
      <h3 id="greeting" className="yellow">Hi there!</h3>
      <h2 id="tagline">Travel <span>way </span>easier with free Wi-fi.</h2>
    </div>
  )
}

export default SplashHeader;
