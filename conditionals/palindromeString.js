console.log(isPalindrome("asdfghjklkjgfdsa"));

function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] === str[j]) {
      i++,
      j--;
    } else {
      return "not Palindrom";
    }
  }
  return "palindrome";
}

