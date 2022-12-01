function removeExtremes(arr) {
  let maxIdx = arr.reduce(
    (acc, cur, index) => (arr[acc].length <= cur.length ? index : acc),
    0,
  );
  let minIdx = arr.reduce(
    (acc, cur, index) => (arr[acc].length >= cur.length ? index : acc),
    0,
  );

  return arr.filter((ele, index) => index !== maxIdx && index !== minIdx);
}
