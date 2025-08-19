// ?Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function (digits) {
//   const integer = Number(digits.join(""));
//   //   const string = String(integer);
//   //   const result = [];

//   //   for (let i = 0; i < string.length; i++) {
//   //     result.push(Number(string[i]))
//   //   }

//   return integer;
// };

const digits = [1, 2, 3];
// const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

// console.log(plusOne(digits));

// The correct solution
var plusOne = function (digits) {
  const n = digits.length;

  // Iterate from the last digit to the first
  for (let i = n - 1; i >= 0; i--) {
    // Increment the current digit
    digits[i]++;

    // If the digit is less than 10, we are done.
    if (digits[i] < 10) {
      return digits;
    }

    // Otherwise, it was a 9, which became 10. Set it to 0 and carry over.
    digits[i] = 0;
  }

  // If we are here, it means all digits were 9's (e.g., [9, 9, 9])
  // We need to add a 1 at the beginning.
  digits.unshift(1);
  return digits;
};
console.log(plusOne(digits));
