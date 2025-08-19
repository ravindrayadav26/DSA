// ?Find Pivot Index

// arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sumLeft = 0;
  let sumRight = nums.reduce((acc, current) => acc + current, 0);

  for (let i = 0; i < nums.length; i++) {
    sumRight -= nums[i];
    if (sumLeft === sumRight) {
      return i;
    }
    sumLeft += nums[i];
  }
  return -1;
};

const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
