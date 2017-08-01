import React, { Component } from 'react';

import RatingForm from './RatingForm';
import WifiForm from './WifiForm';

class FormContainer extends Component {

  state = {
    userRating: 0,
    userZip: null,
    userAccept: false
  }

  submitResponses = (e) => {
    e.preventDefault();
    if (this.state.userAccept) {
      this.postFormInfo();
      this.acceptWifiAgreement();
    } else {
      alert("Please accept PWM Wifi terms & conditions.");
    }
  }

  postFormInfo = () => {
    console.log('Post form info to DB.');
  }

  acceptWifiAgreement = () => {
    console.log('Accept wifi agreement.');
  }

  changeStateValue = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.submitResponses}>
        <RatingForm changeStateValue={this.changeStateValue} selected={this.state.userRating} unselected={10 - (this.state.userRating + 1)} />
        <WifiForm changeStateValue={this.changeStateValue} userAccept={this.state.userAccept} />
        <button type="Submit">Submit</button>
      </form>
    )
  }

}

export default FormContainer;
