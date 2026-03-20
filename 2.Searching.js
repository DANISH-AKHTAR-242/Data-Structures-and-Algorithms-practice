//searching in an array
//linear search algorithm -> O(n) time complexity
let arr = [1, 2, 3, 4, 5];
let target = 3;
let found = false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    found = true;
    break;
  }
}

if (found) {
  console.log("Element found!");
} else {
  console.log("Element not found!");
}
