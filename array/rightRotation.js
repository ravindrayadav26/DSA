// ?right rotation by one element:
/*
@ arr=[1, 2, 3, 4, 5]
* output=[5, 1, 2, 3, 4]
*/

const array = [22, 58, 96, 75, 63, 45, 5, 8];

const last = array[array.length - 1];

for (let i = array.length-1; i > 0; i--) {
    array[i] = array[i-1]
}
array[0] = last

console.log(array);
