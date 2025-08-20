// ?Count Items Matching a Rule

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    switch (ruleKey) {
      case "type":
        if (item[0] === ruleValue) {
          count++;
        }
        break;
      case "color":
        if (item[1] === ruleValue) {
          count++;
        }
        break;
      case "name":
        if (item[2] === ruleValue) {
          count++;
        }
        break;
    }
  }
  return count;
};

const items = [
    ["phone", "pink", "pixel"],
    ["computer", "pink", "lenovo"],
    ["phone", "gold", "pink"],
  ],
  ruleKey = "name",
  ruleValue = "pink";

console.log(countMatches(items, ruleKey, ruleValue));

// $More Compact solutions
// #1. Using Object for the Index
/*
var countMatches = function (items, ruleKey, ruleValue) {
  // Map ruleKey to the correct index
  const keyIndex = {
    type: 0,
    color: 1,
    name: 2,
  };

  const index = keyIndex[ruleKey];
  let count = 0;

  for (const item of items) {
    // Using a for...of loop for slightly cleaner syntax
    if (item[index] === ruleValue) {
      count++;
    }
  }

  return count;
};
*/

// #Using filter()
/*
var countMatches = function (items, ruleKey, ruleValue) {
  const keyIndex = {
    type: 0,
    color: 1,
    name: 2,
  }[ruleKey]; // A more compact way to get the index

  // Filter the array to keep only matching items, then return the length of the result.
  return items.filter((item) => item[keyIndex] === ruleValue).length;
};
*/