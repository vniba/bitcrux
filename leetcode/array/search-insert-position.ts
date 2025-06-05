// https://leetcode.com/problems/search-insert-position/?envType=problem-list-v2&envId=array

import { test } from './util'


function searchInsert(nums: number[], target: number): number {
  let low = 0, high = nums.length - 1

  while (low <= high) {

    let mid = Math.floor((low + high) / 2)
    const val = nums[mid]

    if (target === val) return mid
    else if (target > val) low = mid + 1
    else high = mid - 1
  }

  return low
};
// searchInsert([1, 3, 5, 6], 2)

const testCases = [
  { nums: [1, 3, 5, 6], target: 5, expected: 2 },
  { nums: [1, 3, 5, 6], target: 0, expected: 0 },
  { nums: [1, 3, 5, 6], target: 2, expected: 1 },
  { nums: [1, 3, 5, 6], target: 4, expected: 2 },
  { nums: [1, 3, 5, 6], target: 7, expected: 4 },
  { nums: [1, 3, 5, 6, 10], target: 7, expected: 4 },
  { nums: [5], target: 2, expected: 0 },
  { nums: [5], target: 8, expected: 1 },
  { nums: [], target: 3, expected: 0 },
  { nums: [1], target: 1, expected: 0 },
  { nums: [1], target: 0, expected: 0 },
  { nums: [1], target: 2, expected: 1 },
  { nums: [1, 2, 3, 4, 5], target: 3, expected: 2 },
  { nums: [1, 2, 3, 4, 5], target: 6, expected: 5 },
  { nums: [1, 2, 3, 4, 5], target: -1, expected: 0 },
  { nums: [10, 20, 30, 40, 50], target: 25, expected: 2 },
  { nums: [1, 3, 5], target: 3, expected: 1 },
  { nums: [1, 2, 4, 6, 8, 10], target: 5, expected: 3 },
  { nums: [2, 5], target: 1, expected: 0 },
  { nums: [-1, 3, 5, 6], target: 0, expected: 1 }
];


test(searchInsert, testCases)
