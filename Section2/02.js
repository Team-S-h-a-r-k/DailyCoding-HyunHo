function computeWhenDouble(interestRate) {
  let principal = 100;
  let year = 0;

  while (principal < 200) {
    year++;
    principal = principal * (1 + interestRate / 100);
  }

  return year;
}
