function letterCapitalize(str) {
  let result = '';

  for (i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ' || str[i - 1] === undefined) {
      result = result + str[i].toUpperCase();
    } else {
      result = result + str[i];
    }
  }
  return result;
}
