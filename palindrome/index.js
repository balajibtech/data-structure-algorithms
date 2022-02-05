// Given a string, return true or false depending if the string
// is a palindrome.  Palindromes are words that read the same backwards
// and forwards. Make sure it is case insensitive!
// --- Examples:
//   palindrome("Madam") === true
//   palindrome("love") === false

function palindrome(str) {}
/**
 * @param {number} x
 * @return {boolean}
 */
//  var isPalindrome = function(x) {
//   if(x < 0 || typeof x !== 'number' || (x%10==0 && x!=0))
//       return false;
//   if(x < 10)
//       return true;
//   let reverse = 0;
//   while(x > reverse) {
//       reverse = parseInt((reverse*10) + (x%10));
//       x = parseInt(x/10);
//   }
//   return x === reverse || x === parseInt(reverse/10);
// };
// Complexity Analysis

// Time complexity : O(log_{10}(n))O(log 10 (n)). 
// We divided the input by 10 for every iteration, so the time complexity is O(\log_{10}(n))O(log10(n))
// Space complexity : O(1)O(1).

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Palindrome", () => {
  it('"bcb" is a palindrome', () => {
    assert.equal(palindrome("bcb"), true);
  });
  it('"   bcb" is not a palindrome', () => {
    assert.equal(palindrome(" bcb"), false);
  });
  it('"bcb   " is not a palindrome', () => {
    assert.equal(palindrome("bcb "), false);
  });
  it('"love" is not a palindrome', () => {
    assert.equal(palindrome("love"), false);
  });
  it('"699996" a palindrome', () => {
    assert.equal(palindrome("699996"), true);
  });
  it('"racecar" a palindrome', () => {
    assert.equal(palindrome("bcb"), true);
  });
  it("is case insensitive.", () => {
    assert.equal(palindrome("Trunk knurt"), true);
  });
});

mocha.run();
