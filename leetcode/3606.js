// ?Coupon Code Validator

/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {
  const validBusinessLines = {
    electronics: 0,
    grocery: 1,
    pharmacy: 2,
    restaurant: 3,
  };
  const validCodes = [];
  for (let i = 0; i < code.length; i++) {
    if (
      code[i].match(/^\w+$/) &&
      businessLine[i] in validBusinessLines &&
      isActive[i]
    ) {
      validCodes.push({
        code: code[i],
        priority: validBusinessLines[businessLine[i]],
      });
    }
  }
  validCodes.sort(
    (a, b) => a.priority - b.priority || (a.code > b.code) - (a.code < b.code)
  );
  const sortedCodes = validCodes.map((item) => item.code);

  return sortedCodes;
};

const code = ["SAVE20", "", "PHARMA5", "SAVE@20"];
const businessLine = ["restaurant", "grocery", "pharmacy", "restaurant"];
const isActive = [true, true, true, true];

console.log(validateCoupons(code, businessLine, isActive));
