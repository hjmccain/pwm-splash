import React from 'react';
import moment from 'moment';

import pwm from '../assets/original_PWM_tag_white.png';

const timeOfDay = () => {
  let now = moment().format('HH');
  now = parseInt(now);
  let greetingTime;

  if (now >= 0 && now <= 12) { greetingTime = 'morning' }
  if (now > 12 && now < 17) { greetingTime = 'afternoon' }
  if (now >= 17 && now <= 24) { greetingTime = 'evening' }

  return `Good ${greetingTime}!`
}

const SplashHeader = (props) => {
  return (
    <div id="splash-header">
      <img src={pwm} alt="pwm logo" id="logo" />
      <h3 id="greeting" className="yellow">{timeOfDay()}</h3>
      <h2 id="tagline">Travel <span>way </span>easier with free Wi-fi.</h2>
    </div>
  )
}

export default SplashHeader;
