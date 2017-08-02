import React, { Component } from 'react';

import RatingForm from './RatingForm';
import WifiForm from './WifiForm';

class FormContainer extends Component {

  state = {
    userRating: 0,
    userAccept: false
  }

  checkValue = (zip) => {
    if (!!+zip && zip.length === 5) {
      return true;
    } else {
      return false;
    }
  }

  submitResponses = (e) => {
    e.preventDefault();
    if (!this.state.userAccept) {
      alert("Please accept PWM Wifi terms & conditions.");

    } else {
      if (this.checkValue(document.getElementById('zipcode').value)) {
        this.postFormInfo();
        this.acceptWifiAgreement();
      } else {
        alert("Please enter a valid US zip code, or leave blank.")
      }
    }
  }

  postFormInfo = () => {
    console.log(
      'Post form info to DB.',
      'zipcode', document.getElementById('zipcode').value,
      'user rating', this.state.userRating
    );
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
        <RatingForm changeStateValue={this.changeStateValue} selected={this.state.userRating} unselected={10 - (this.state.userRating)} />
        <WifiForm changeStateValue={this.changeStateValue} userAccept={this.state.userAccept} />
        <button type="Submit">Submit</button>
      </form>
    )
  }

}

export default FormContainer;
