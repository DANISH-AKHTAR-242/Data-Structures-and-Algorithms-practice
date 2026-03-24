// Sliding Window Technique
// The sliding window technique is a powerful algorithmic approach used to solve problems that involve finding a contiguous subarray or substring that satisfies certain conditions. It is particularly useful for optimizing the time complexity of algorithms that would otherwise require nested loops.

// The idea is to maintain a window (a range of indices) that can expand and contract as needed while iterating through the data structure. This allows us to efficiently keep track of the current state and make decisions based on it without having to re-evaluate the entire range repeatedly.

// Example: Finding the maximum sum of a subarray of size k
function maxSumSubarray(arr, k) {
  let maxSum = 0; // Initialize the maximum sum
  let currentSum = 0; // Initialize the current sum of the window
  for (let i = 0; i < arr.length; i++) {
    // Expand the window by adding the next element
    currentSum += arr[i]; // Once we have a window of size k, we can start calculating the maximum sum
    if (i >= k - 1) {
      // Check if the window has reached the required size
      maxSum = Math.max(maxSum, currentSum); // Update the maximum sum if the current sum is greater
      currentSum -= arr[i - k + 1]; // Slide the window
    }
  }
  return maxSum;
}``

let arr = [1, 2, 3, 4, 5, 6];
let k = 3;
console.log(
  "Maximum sum of a subarray of size " + k + ": " + maxSumSubarray(arr, k),
);

//anagram means two strings that contain the same characters but in a different order. For example, "listen" and "silent" are anagrams of each other. To check if two strings are anagrams, we can use the sliding window technique to count the frequency of characters in both strings and compare them.
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false; // If the lengths are different, they cannot be anagrams
  }
    let charCount = new Map(); // Create a map to count character frequencies
    for (let char of str1) {
        charCount.set(char, (charCount.get(char) || 0) + 1); // Increment the count for each character in str1  
    }
    for (let char of str2) {
        if (!charCount.has(char) || charCount.get(char) === 0) {
            return false; // If a character in str2 is not in str1 or its count is zero, they are not anagrams
        }
        charCount.set(char, charCount.get(char) - 1); // Decrement the count for each character in str2
    }
    return true; // If all counts are zero, they are anagrams
}

let str1 = "listen";
let str2 = "silent";
console.log(
  '"' + str1 + '" and "' + str2 + '" are anagrams: ' + areAnagrams(str1, str2),
);