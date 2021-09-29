
function getMinMax(string) { // Реализуйте функцию, которая принимает строку с числами и возвращает объект, содержащий минимальное и максимальное значения чисел из этой строки.
  let returnValue = string
   .split(" ")
   .filter((i) => isFinite(i))
   .map((i) => +i);

  return {min: Math.min(...returnValue),
          max: Math.max(...returnValue)}
}
 
const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';


console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }


