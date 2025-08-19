// ?Fizz Buzz

/**
 * @param {number} n
 * @return {string[]}
 */

/*
*Example 1:
        Input: n = 3
        Output: ["1","2","Fizz"]

*Example 2:
        Input: n = 5
        Output: ["1","2","Fizz","4","Buzz"]

*Example 3:
        Input: n = 15
        Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/
var fizzBuzz = function (n) {
  const str = [];
  for (let i = 0; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      str.push("FizzBuzz");
    } else if (i % 3 == 0) {
      str.push("Fizz");
    } else if (i % 5 == 0) {
      str.push("Buzz");
    } else {
      str.push(String(i));
    }
  }
  return str;
};

const n = 15;

console.log(fizzBuzz(n));
