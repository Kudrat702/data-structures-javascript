/*console.log("Taylor Series Recursive Method");
function e(x, n) {
    // Static-like behavior using closures
    let p = 1;  // Power
    let f = 1;  // Factorial
    
    function taylorSeries(x, n) {
        if (n === 0) {
            return 1;  // Base case
        }
        
        let r = taylorSeries(x, n - 1);  // Recursive call
        p = p * x;  // Update power
        f = f * n;  // Update factorial
        return r + p / f;  // Current term + recursive sum
    }

    return taylorSeries(x, n);  // Start the recursion
}

const x = 2;  // Value of x
const n = 10; // Number of terms
console.log(e(x, n)); // Output the result
// Taylor Series Recursive Method
// 7.388994708994708
*/


//*
console.log("Taylor Series Horne's Rule");
function taylorSeriesHorner(x, n,s=1) {
    if (n === 0) {
        return s; 
    }
   s = 1 + (x / n) * s; // Apply Horner's rule formula
    return taylorSeriesHorner(x, n - 1, s); // Recursive call with n-1
}

let x = 2; // Value of x
let n = 10; // Number of terms
console.log(taylorSeriesHorner(x, n)); 

// output:
// Taylor Series Horne's Rule
// 7.388994708994709
//*/