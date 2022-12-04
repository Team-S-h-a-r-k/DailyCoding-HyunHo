function readVertically(arr) {
  let longest = arr.reduce(
    (acc, cur) => (acc <= cur.length ? cur.length : acc),
    0,
  );

  let result = '';

  for (i = 0; i < longest; i++) {
    for (ele of arr) {
      ele[i] ? (result += ele[i]) : false;
    }
  }

  return result;
}
