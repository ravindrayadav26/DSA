// ?Find Most Frequent Vowel and Consonant

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    const vowelFreq = {};
    const consonantFreq = {};

    for (const char of s) {
        if (vowels.has(char)) {
            vowelFreq[char] = (vowelFreq[char] || 0) + 1;
        } else {
            consonantFreq[char] = (consonantFreq[char] || 0) + 1;
        }
    }

    const vowelCounts = Object.values(vowelFreq);
    const maxVowelFreq = vowelCounts.length > 0 ? Math.max(...vowelCounts) : 0;

    const consonantCounts = Object.values(consonantFreq);
    const maxConsonantFreq =
        consonantCounts.length > 0 ? Math.max(...consonantCounts) : 0;

    return maxVowelFreq + maxConsonantFreq;
};

// --- Examples ---
// Example 1:
const s1 = "successes";
console.log(`Input: "${s1}" -> Output: ${maxFreqSum(s1)}`); // Expected: 6

// Example 2:
const s2 = "aeiaeia";
console.log(`Input: "${s2}" -> Output: ${maxFreqSum(s2)}`); // Expected: 3

// Example 3 (all consonants):
const s3 = "rhythm";
console.log(`Input: "${s3}" -> Output: ${maxFreqSum(s3)}`); // Expected: 1

// Example 4 (single character):
const s4 = "z";
console.log(`Input: "${s4}" -> Output: ${maxFreqSum(s4)}`); // Expected: 1
