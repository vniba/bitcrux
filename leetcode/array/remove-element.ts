// https://leetcode.com/problems/remove-element/?envType=problem-list-v2&envId=array

// NOT work lol
function removeElement(nums: number[], val: number): number {

  let len = 1
  let changeInd = nums.length - 1
  for (let i = 0; i < changeInd; i++) {
    if (nums[changeInd] == val) --changeInd;
    len++

    if (val !== nums[i]) continue
    nums[i] = nums[changeInd];
    nums[changeInd] = val;
    changeInd--;
  }
  return len
};

function remove(nums: number[], val: number): number {
  let idx = 0
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] != val) {
      nums[idx] = nums[index]
      idx++;
    }
  }
  return idx
}

let nums = [3, 2, 2, 3], val = 3

// Output: 2, nums = [2,2,_,_]
// console.log(removeElement(nums, val), nums);

nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
console.log(remove(nums, val), nums);


nums = [1], val = 1

console.log(remove(nums, val), nums);
