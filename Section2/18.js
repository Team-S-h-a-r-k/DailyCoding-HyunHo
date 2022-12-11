function numberSearch(str) {
  return str.length
    ? Math.round(
        [...str].reduce(
          (acc, cur) => (Number(cur) ? acc + Number(cur) : acc),
          0,
        ) / [...str].filter(e => Number.isNaN(Number(e))).length,
      )
    : 0;
}
