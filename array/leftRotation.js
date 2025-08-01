// ?Left rotation by one element:
/*
@ arr=[1, 2, 3, 4, 5]
* output=[2, 3, 4, 5, 1]
!Time complexity: O(n)
*/
const array = [1, 2, 3, 4, 5];

// const first = array[0];
// for (let i = 0; i < array.length; i++) {
//   array[i] = array[i + 1];
// }
// array[array.length - 1] = first;

// console.log(array);

// ?Left rotation by two elements
/*
@ arr=[1, 2, 3, 4, 5]
* output=[3, 4, 5, 1, 2]
!Time complexity: O(n^2)
*/
/*
let k = 7;
k = k % array.length; //OPTIMIZATION: 
// let count = 0
for (let i = 1; i <= k; i++) {
  const first = array[0];
  for (let j = 0; j < array.length; j++) {
    array[j] = array[j + 1];
  }
  array[array.length - 1] = first;
  // console.log(++count);
}

console.log(array);
*/

// @Efficient way
// *1. Create a new empty array of same length
// *2. Use this formula to put values in empty array
// @formula: (i+k)%arr.length -> Left Rotation | ((array.length-k)+i)%array.length -> Right Rotation

// let k = 7
// k = k%array.length
// const newArr = new Array(array.length)

// for (let i = 0; i < array.length; i++) {
//   newArr[i] = array[(i+k)%array.length]
//   // newArr[i] = array[((array.length-k)+i)%array.length] // For right rotation
// }
// console.log(newArr);

// @Most Efficient way
// ?Block Swap Algorithm
let k = 7;
k = k % array.length;

reverse(0, k - 1);
reverse(k, array.length - 1);
reverse(0, array.length - 1);

function reverse(i, j) {
  while (i < j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    i++
    j--
  }
}

console.log(array);