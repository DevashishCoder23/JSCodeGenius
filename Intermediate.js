// Question 1> Implement a function to find the nth Fibonacci number.
// #ref 0,1,1,2,3,5,8,13,21,34,55

function Fibonacci(num){
    if(num ===0 || num === 1){
        return num;
    }
    let prev = 0;
    let curr = 1;
    let hold;
    let result;
    for(let i=2; i<= num; i++){
       hold= prev; 
       prev = curr;
       curr = hold + curr;
       result = curr;
    }
    return result;
}

console.log(Fibonacci(8))
