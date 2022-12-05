function superIncreasing(arr) {
  let result = true;

  arr.reduce((acc, cur) => {
    acc < cur ? true : (result = false);
    return acc + cur;
  });

  return result;
}
