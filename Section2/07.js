function convertListToObject(arr) {
  return arr.reduce((acc, cur) => {
    cur.length !== 0 && !(cur[0] in acc) ? (acc[cur[0]] = cur[1]) : false;
    return acc;
  }, {});
}
