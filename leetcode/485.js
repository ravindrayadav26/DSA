// ?Max Consecutive Ones

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let currentStreak = 0;
  let maxConsecutiveOnes = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentStreak++;
    } else {
      maxConsecutiveOnes = Math.max(maxConsecutiveOnes, currentStreak);
      currentStreak = 0;
    }
  }
  return Math.max(maxConsecutiveOnes, currentStreak);
};

const nums = [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1];
console.log(findMaxConsecutiveOnes(nums));
