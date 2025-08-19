// ?Merge Sorted Array

const arr1 = [2, 5, 6];
const arr2 = [1, 3, 4, 8];
const sorted = new Array(arr1.length + arr2.length);

let i = 0;
let j = 0;
let k = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    sorted[k] = arr1[i];
    i++;
    k++;
  } else {
    sorted[k] = arr2[j];
    j++;
    k++;
  }
}

while (i < arr1.length) {
  sorted[k] = arr1[i];
  i++;
  k++;
}

while (j < arr2.length) {
  sorted[k] = arr2[j];
  j++;
  k++;
}

console.log(sorted);
