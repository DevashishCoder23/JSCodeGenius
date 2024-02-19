// Question 1> => Write a function that takes a number as input and returns the factorial of that number.

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
// }

// console.log(factorial(5));

// Question 2> Write a function to sort an array of numbers in ascending order.

// Solution 1> Without using built in method.
// function ascendingOrder(arr){
//     for(let i=0; i < arr.length-1 ; i++){
//         for(let j=i+1; j < arr.length; j++){
//             if(arr[i] > arr[j]){
//                 let nextVal = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = nextVal;
//             }
//         }
//     }
//     return arr;
// }

// console.log(ascendingOrder([1,122,12,1,4,0,90,14]));

// Solution 2> By using Built in method.

// function ascendingOrder(arr) {
//   return arr.sort((a, b) => a - b);
// }

// console.log(ascendingOrder([22, 11, 9, 6, 0, 13, 55]));

// Question 3> Removing duplicate elements from an array.

// function removingDuplicateElem(arr) {
//   let duplicateRemovedArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < duplicateRemovedArr.length; j++) {
//       if (arr[i] === duplicateRemovedArr[j]) {
//         isDuplicate = true;
//         break;
//       }
//     }
//     if (!isDuplicate) {
//       duplicateRemovedArr.push(arr[i]);
//     }
//   }
//   return duplicateRemovedArr;
// }

// function removingDuplicateElem(arr) {
//   return arr.filter((ele, index) => arr.indexOf(ele) === index);
// }

// console.log(removingDuplicateElem([1, 1, 1, 2, 2, 2, 3, 1, 3, 3, 4, 4, 4]));

// Question 4 Create a function that takes an array of strings and returns the longest string.

// const findLongestString = (arr) => {
//   let longestStr = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (longestStr.length < arr[i].length) longestStr = arr[i];
//   }
//   return longestStr;
// };

// console.log(
//   findLongestString(["dev", "dshjsd", "haskjkajsassa", "s", "as", ""])
// );

// Question 5 Implement a function to find the intersection of two arrays.

// const intersectionOfAnArray = (arr1, arr2) => {
//   let intersectedArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !intersectedArr.includes(arr2[i])) {
//       intersectedArr.push(arr1[i]);
//     }
//   }
//   return intersectedArr;
// };

// console.log(
//   "Intersection of two array ===>",
//   intersectionOfAnArray([10, 20, 30, 40, 50], [30, 40, 50, 60, 70])
// );

// Question 6 Swapping two variables without using third variable.

// let a = 20;
// let b = 30;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a,b)

// Question 7 Write a function to check if a given year is a leap year.

// function checkLeapyear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// console.log(checkLeapyear(2021));

// Question 8 Write a function to reverse a string.

// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('checkingggggg'));

// Question 9 Check whether number is Prime number or not.

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(4));

// Question 10 Write a function to calculate the factorial of a number.

// function factorialOfNum(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   let result = 1;
//   for (let i = num; i > 0; i--) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorialOfNum(9));

// Question 11 To check wheher a string is palindrome or not.

// function isPalindrome(str) {
//   let strArr = str.split("");

//   for (let i = 0, j = strArr.length - 1; i <= j; i++) {
//     if (strArr[i] !== strArr[j]) {
//       return false;
//     }
//     j--
//   }
//   return true;
// }

// console.log(isPalindrome("nammmann"));

// Question 12 Write a function to check if two strings are anagrams of each other.

// function findAnagram(str1, str2) {
//   return (
//     str1.toLowerCase().split("").sort().join("") ===
//     str2.toLowerCase().split("").sort().join("")
//   );
// }

// console.log(findAnagram("devashish", "hHissaevd"));

// Question 13> Write a JavaScript program to reverse a given string. without built in mehods.

// function reverse(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverse("devashish"));
