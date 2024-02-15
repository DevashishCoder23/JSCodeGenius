// Question 1> Write a function that flattens a nested array.

// function flattenArray(arr) {
//   let flattened = [];

//   function addingElements(arr1) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (Array.isArray(arr1[i])) {
//         addingElements(arr1[i]);
//       } else {
//         flattened.push(arr1[i]);
//       }
//     }
//   }

//   addingElements(arr);
//   return flattened
// }

// console.log(flattenArray([1, [2, 3, [4, 5]], 6, [7, 8]]));

// Question 2> Implement a function to perform a binary search on a sorted array.

// function binarySearch(arr, eleToSearch) {
//   let low = 0;
//   let high = arr.length - 1;

//   while (low <= high) {
//     let mid = Math.round((low + high) / 2);
//     if (arr[mid] === eleToSearch) {
//       return mid;
//     } else if (arr[mid] < eleToSearch) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([2, 4, 6, 7, 9, 10, 56, 77, 88, 99], 999));
