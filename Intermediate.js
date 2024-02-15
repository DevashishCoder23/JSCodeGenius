// Question 1> Implement a function to find the nth Fibonacci number.
// #ref 0,1,1,2,3,5,8,13,21,34,55

// function Fibonacci(num){
//     if(num ===0 || num === 1){
//         return num;
//     }
//     let prev = 0;
//     let curr = 1;
//     let hold;
//     let result;
//     for(let i=2; i<= num; i++){
//        hold= prev;
//        prev = curr;
//        curr = hold + curr;
//        result = curr;
//     }
//     return result;
// }

// console.log(Fibonacci(8))

// Question 2> Curring convert below function to curring.

// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(12, 34, 23));

// function sum(a){
//     return (b) => {
//         return (c) => {
//             return a+b+c;
//         }
//     }
// }

// console.log(sum(12)(23)(44));

// Infinite curring.

// const sum = (a) => {
//   return (b) => {
//     if (!b) {
//       return a;
//     }
//     return sum(a + b);
//   };
// };

// console.log(sum(2)(3)());

// Question 3> Implement a function to reverse words in a sentence.

// function reverseWordFromSentence(para) {
//   return para.split(" ").reverse().join(" ");
// }

// console.log(
//   reverseWordFromSentence("Implement a function to reverse words in a sentence")
// );

// Question 4> Shuffle an array.

// function ShuffleAnArray(arr){
//  return arr.sort((a,b) => Math.random() - 0.5);
// }

// console.log(ShuffleAnArray([12,44,3,32,55,23,55,77]))
