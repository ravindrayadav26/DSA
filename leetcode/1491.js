// ?Average Salary Excluding the Minimum and Maximum Salary

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  let max = salary[0];
  let min = salary[0];
  let totalSum = salary[0];
  const length = salary.length - 2;

  for (let i = 1; i < salary.length; i++) {
    max = Math.max(max, salary[i]);
    min = Math.min(min, salary[i]);
    totalSum += salary[i];
  }

  return (totalSum - (max + min)) / length;
};

const salary = [40, 50, 10, 80];
console.log(average(salary));
