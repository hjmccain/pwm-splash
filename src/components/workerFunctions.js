export const makeArray = (num, type) => {

  return Array
    .from(new Array(num), (val, idx) => idx)
    .map((val, idx) => {
      return type;
    });

}

export const checkValue = (zip) => {

  if (!!+zip && zip.length === 5) {
    return true;
  } else {
    return false;
  }

}

export const submitResponses = (e, userAccept, userRating, userZip) => {

  e.preventDefault();

  if (!userAccept) {
    alert("Please accept PWM Wifi terms & conditions.");
  } else {
    if (checkValue(document.getElementById('zipcode').value)) {
      postFormInfo(userRating, userZip);
      acceptWifiAgreement();
    } else {
      alert("Please enter a valid 5-digit numerical US zip code, or leave blank.")
    }
  }

}

export const postFormInfo = (userRating, userZip) => {

  return fetch('/feedback', {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ rating: userRating, zipcode: userZip })
  })
  .then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res;
  });
}

export const acceptWifiAgreement = () => {

  console.log('Accept wifi agreement.');

}
