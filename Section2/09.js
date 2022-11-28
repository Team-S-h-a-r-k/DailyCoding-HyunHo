function ABCheck(str) {
  return /a...b/i.test(str) || /b...a/i.test(str);
}
