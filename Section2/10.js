function insertDash(str) {
  return str
    .split('')
    .map((ele, index, arr) =>
      Number(ele) % 2 === 1 && Number(arr[index + 1]) % 2 === 1
        ? ele + '-'
        : ele,
    )
    .join('');
}
