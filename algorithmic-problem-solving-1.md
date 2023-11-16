Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

SEAT Method

Summarize:

have an array of ints in where each element appears twice except for one that only appears once. identify that unique element with linear time & constant extra space.
    * linear time complexity - the running time of an algorithm increases linearly with the size of the input.
    * constant extra space - the space(memory) you have taken to solve the problem doesn't depend on the input variable
max array length is 312, min array value is -312 & max array value is 312.

Examples/Edge cases:

if array length is 1?
if nums[i] = 0?

