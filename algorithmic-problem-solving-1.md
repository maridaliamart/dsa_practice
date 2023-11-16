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


Analyze:
Want to find a way to compare two numbers without having to record/use memory -- google search resulted in XOR operator.

"The XOR (exclusive OR) operator is a bitwise operation. It takes two binary numbers as input and performs the following operation on each pair of corresponding bits:

If the bits are different, the result is 1.
If the bits are the same, the result is 0."

Plan/theory:
result = 0. 
while iterating through the array in a loop, xor is used on each element with result and is then set as the new value for result.
this means that the first answer will always reflect the number that it was used on (xor 'a' with zero will always equal 'a'). the next number will be xor with the new value of result. if it is the same number, the new result value is 0. if different, result is 1. 
it effectively cancels out duplicate elements and identifies the unique value since xor with a different value will equal itself. 
final value of result should be unique element.

