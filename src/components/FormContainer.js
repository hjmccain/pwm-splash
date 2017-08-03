import React, { Component } from 'react';

import RatingForm from './RatingForm';
import WifiForm from './WifiForm';
import { submitResponses } from './workerFunctions';

class FormContainer extends Component {

  state = {
    userRating: null,
    zipcode: null,
    userAccept: false
  }

  changeStateValue = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    return (
      <form onSubmit={e => submitResponses(e, this.state.userAccept, this.state.userRating, this.state.zipcode)}>
        <RatingForm changeStateValue={this.changeStateValue} selected={this.state.userRating || 0} unselected={10 - (this.state.userRating)} />
        <WifiForm changeStateValue={this.changeStateValue} userAccept={this.state.userAccept} />
        <button type="Submit">Submit</button>
      </form>
    )
  }

}

export default FormContainer;
