Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
 

Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104

Breakdown of solution logic:
Step 1: mergeSort function will immediately consider empty arrays and arrays of 1 element as sorted. For the rest, locate middle target with rounded average, split into two arrays with slice method and call mergeSort function on that new array. this will continue recursively until each element is contained in its own array. this is then fed into the next function, merge, which becomes what is returned for mergeSort. 
Step 2: merge function will create an empty array. while the 2 array parameters exist, the lesser of each [0] index is added to the result array while it is removed from the original argument array. this continues until one of the two argument arrays is empty and the other should have 1 last element. the last element in the array that is left is added to (the now sorted) results array as the largest element. result array is returned.