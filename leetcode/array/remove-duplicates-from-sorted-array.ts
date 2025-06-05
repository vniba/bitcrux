
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=problem-list-v2&envId=array.

function removeDuplicates(nums: number[]): number {

  let len = 1;
  let insertPos = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[insertPos] = nums[i]
      insertPos++
      len++
    }
  }

  return len
};
// Output: 2, nums = [1,2,_]
const res = removeDuplicates([1, 1, 2])
console.log(res);

// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
const n = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates(n), n);
