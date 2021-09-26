function factorial(n) {
  if (n == 0) { return 1; }
  let i = 1;
  while (n > 0) { i *= n--; }
  return i;
}


  let result = 1;
  if (n === 0 || n === 1) {
    return result;
  }

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}
