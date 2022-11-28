function firstCharacter(str) {
  return str
    .split(' ')
    .map(ele => ele[0])
    .join('');
}
