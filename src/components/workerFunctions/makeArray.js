export const makeArray = (num, type) => {

  return Array
    .from(new Array(num), (val, idx) => idx)
    .map((val, idx) => {
      return type;
    });

}
