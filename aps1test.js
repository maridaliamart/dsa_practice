import uniqueNumber from "./aps1";

function assertEqual(actual, expected, message) {
    if (actual === expected) {
      console.log(`PASS: ${message}`);
    } else {
      console.log(`FAIL: ${message}. Expected ${expected}, but got ${actual}`);
    }
  }
  
  // Test case 1
const nums1 = [2, 2, 1];
const result1 = uniqueNumber(nums1);
assertEqual(result1, 1, 'Should return the unique number for [2, 2, 1]');

// Test case 2
const nums2 = [4, 1, 2, 1, 2];
const result2 = uniqueNumber(nums2);
assertEqual(result2, 4, 'Should return the unique number for [4, 1, 2, 1, 2]');

// Test case 3
const nums3 = [1];
const result3 = uniqueNumber(nums3);
assertEqual(result3, 1, 'Should return the unique number for [1]');