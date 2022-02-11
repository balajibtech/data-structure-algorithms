/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     let len = nums.length;
//     for(let i=0;i<len;i++) {
//         for(let j=i+1;j<len,nums[i]+nums[j] === target;j++) {
//                  return [i,j];
//         }
//     }
//     return [];
// };

// var twoSum = function(nums, target) {
//     var hash = {};
//     for (let i = 0; i < nums.length; i++) {
//         var num = target - nums[i];
//         if (!(nums[i] in hash)) {
//             hash[nums[i]] = i;
//         }
//         if (num in hash && hash[num] !== i) {
//             return [hash[num], i];
//         }
//     }   
//     return [];
// };
var twoSum = function(nums, target) {
    let firstIndex, secondIndex;
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        secondIndex = nums.indexOf(diff,i+1);
        if (secondIndex > -1) {
            firstIndex = i;
            break;
        }
    }
    return [firstIndex, secondIndex]
};

const complexity = {
  "time": "O(N)",
  "space": "O(1)"
};

loadScript(twoSum,complexity);

mocha.setup("bdd");
const { assert } = chai;

describe("Two sum", () => {
  it("Shortest index", () => {
    assert.deepEqual(twoSum([1,2,4,2],6), [1,2]);
    assert.deepEqual(twoSum([1,2,4,2],6), [1,2]);
  });
  it("Shortest index with negative", () => {
    assert.deepEqual(twoSum([-1,-2,4,2],6), [2,3]);
    assert.deepEqual(twoSum([1,-2,4,2],3), [0,3]);
  });
});

mocha.run();