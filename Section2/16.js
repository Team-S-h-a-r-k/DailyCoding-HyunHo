function isIsogram(str) {
  const obj = {};

  for (ele of str.toLowerCase()) {
    if (ele in obj) return false;
    obj[ele] = 1;
  }

  return true;
}
