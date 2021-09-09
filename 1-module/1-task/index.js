function factorial(n) {
  if (n == 0) {return 1;}
  let i = 1;
  while (n > 0) {i *= n--;}
  return i;
}

let number = +prompt('Введите число', '');
alert(factorial(number));


