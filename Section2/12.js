function findBugInApples(arr) {
  return arr.reduce(
    (acc, cur, index) =>
      cur.indexOf('B') === -1 ? acc : [...acc, index, cur.indexOf('B')],
    [],
  );
}
