export const postUserInput = (userRating, userZip) => {

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
