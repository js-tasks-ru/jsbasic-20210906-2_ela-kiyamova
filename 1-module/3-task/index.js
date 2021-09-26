

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("эльвира") )

function ucFirst(str) {
  let firstLetter = str.charAt(0);
  let firstLetterUpperCase = firstLetter.toUpperCase();
  let otherLetters = str.slice(1);

  return `${firstLetterUpperCase}${otherLetters}`;
}

