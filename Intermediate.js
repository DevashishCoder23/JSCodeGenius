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

// Question 5> Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame.
function debounce(fn, delay) {
  let timeOutId;

  return function (...args) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const func = (...args) => {
  console.log("lets check debouncingggggg ", args);
};

const finalFn = debounce(func, 1000);
finalFn();
finalFn();
finalFn(1, 2, 3, 4, 5);
finalFn(4, 3, 23, 5);
finalFn(2, 9, 5, 43, 4, 2);
