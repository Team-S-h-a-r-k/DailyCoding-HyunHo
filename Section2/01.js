function transformFirstAndLast(arr) {
  return arr.reduce((acc, cur, index) => {
    index === 0 ? (acc[cur] = arr[arr.length - 1]) : false;
    return acc;
  }, {});
}
