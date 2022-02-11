// Given a integer, return true or false depending if the number
// is a palindrome.  Palindromes are integer that read the same backwards
// and forwards. Make sure it is positive integer!
// --- Examples:
//   palindrome(121) === true
//   palindrome(123) === false

/**
 * @param {number} x
 * @return {boolean}
 */

function palindrome(x) {
  //To check: Type = Number, Only positive number, No ending with 0, Not a float number
  if(typeof x !== 'number' || x < 0 || (x%10==0 && x!=0) || x%1!==0)
    return false;
  if(x < 10)
    return true;
  let reverse = 0;
  while(x > reverse) {
    reverse = parseInt((reverse*10) + (x%10));
    x = parseInt(x/10);
  }
  return x === reverse || x === parseInt(reverse/10);
}
// Complexity Analysis

// Time complexity : O(log_{10}(n))O(log 10 (n)). 
// We divided the input by 10 for every iteration, so the time complexity is O(\log_{10}(n))O(log10(n))
// Space complexity : O(1).

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

describe("Palindrome Integer", () => {
  it('"121" is a palindrome', () => {
    assert.equal(palindrome(121), true);
  });
  it('"   123" is not a palindrome', () => {
    assert.equal(palindrome( 123), false);
  });
  it('"012343210 " is a palindrome', () => {
    assert.equal(palindrome(012343210), false);
  });
  it('"-1234567" is not a palindrome', () => {
    assert.equal(palindrome(-1234567), false);
  });
  it('"699996" a not palindrome', () => {
    assert.equal(palindrome("699996"), false);
  });
  it('"199999999999991" a palindrome', () => {
    assert.equal(palindrome(199999999999991), true);
  });
  it("0.1234567 is not palindrome.", () => {
    assert.equal(palindrome(0.1234567), false);
  });
});

mocha.run();
