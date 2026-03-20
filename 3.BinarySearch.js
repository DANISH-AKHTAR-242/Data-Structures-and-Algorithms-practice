// when we have a sorted array, we can use binary search to find the index of a target value in O(log n) time complexity

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let mid = Math.floor((low + high) / 2);

  while (low <= high) {
    if (arr[mid] === target) {
      return mid; // target found, return index
    } else if (arr[mid] < target) {
      low = mid + 1; // search in the right half
    } else {
      high = mid - 1; // search in the left half
    }
    mid = Math.floor((low + high) / 2); // update mid for the next iteration
  }
  return -1; // target not found
}

let sortedArr = [1, 2, 3, 4, 5];
let targetValue = 3;
let result = binarySearch(sortedArr, targetValue);
console.log(result); // Output: 2 (index of the target value)