export const checkZipValue = (zip) => {

  if (!!+zip && zip.length === 5) {
    return true;
  } else {
    return false;
  }

}
