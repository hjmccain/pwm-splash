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

export const submitResponses = (e, userAccept, userRating) => {
  e.preventDefault();
  if (!userAccept) {
    alert("Please accept PWM Wifi terms & conditions.");
  } else {
    if (checkValue(document.getElementById('zipcode').value)) {
      postFormInfo(userRating);
      acceptWifiAgreement();
    } else {
      alert("Please enter a valid US zip code, or leave blank.")
    }
  }
}

export const postFormInfo = (userRating) => {
  console.log(
    'Post form info to DB.',
    'zipcode', document.getElementById('zipcode').value,
    'user rating', userRating
  );

  return fetch('/feedback', {
    method: 'post',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ userRating })
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
