function powerOfTwo(num) {
  while (num > 1) {
    num = num / 2;
  }

  return num === 1 ? true : false;
}
