import { checkZipValue } from './checkZipValue';
import { postUserInput } from './postUserInput';
import { redirect } from './redirect';

export const submitUserResponses = (e, userAccept, userRating, userZip) => {

  e.preventDefault();

  if (!userAccept) {
    alert("Please accept PWM Wifi terms & conditions.");
  } else {
    if (checkZipValue(document.getElementById('zipcode').value)) {
      postUserInput(userRating, userZip);
      redirect();
    } else {
      alert("Please enter a valid 5-digit numerical US zip code, or leave blank.")
    }
  }

}
