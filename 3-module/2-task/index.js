let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((i) => i >= a && i <= b);
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered );
console.log( arr );