import React from 'react';

import SplashHeader from './SplashHeader';
import FormContainer from './FormContainer';

const AppContainer = () => {
  return (
    <div id="background">
      <div id="background-filter">
        <div id="container">
          <SplashHeader />
          <FormContainer />
        </div>
      </div>
    </div>
  )
}

export default AppContainer;
