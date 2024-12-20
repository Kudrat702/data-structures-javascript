// function factorial(n) {
//     if (n === 0 || n === 1 ) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Output: 120

function fact(n){
    if (n === 0 || n === 1){
        return 1;
    }else{
        return fact(n-1) * n ;
    }
}

let a = 5;
console.log(fact(a));