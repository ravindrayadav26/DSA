// ?Selection Sort

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

const arr = [21, 85, 36, 42, 15, 1, 62, 45]; // [1,15,21,36,42,45,62,85]
console.log(selectionSort(arr));
