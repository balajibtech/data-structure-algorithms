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
//     let len = nums.length;
//     for(let i=0;i<len;i++) {
//         let remaining = target - nums[i];
//         let index = nums.indexOf(remaining,i+1);
//         if(index > -1) return [i,index]
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
        if (secondIndex != i) {
            firstIndex = i;
            break;
        }
        temp[nums[i]] = i;
    }
    return [firstIndex, secondIndex]
};
console.log(twoSum([1,2,4,2],6));