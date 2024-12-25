function fibSeries(n){
    if(n <= 1){
        return n;
    }else{
        return fibSeries(n-2) + fibSeries(n-1);
    }
}

let n = 6; // index[6]=8
console.log(fibSeries(n));


/* 
The Fibonacci sequence is defined as:
fib(n)=fib(n−1)+fib(n−2)
For n=5, the Fibonacci sequence (starting from fib(0)=0 and fib(1)=1 is:
fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5

The correct computation is:
fib(5)=fib(4)+fib(3)=3+2=5

/*
function fibS(n){
    if(n<=1){
        f[n] = n;
        return n;
    }else{
        if(f[n-2] == -1){
            f[n-2] = fibS(n-2);
        }
        if(f[n-1] == -1){
            f[n-1] = fibS(n-1);
        }
        return f[n-2]+f[n-1];
    }
}
let n = 7;
let f = new Array(n + 1).fill(-1); // Initialize the memoization array with -1
console.log(fibS(n));
//output = 13
*/

/*
The .fill(-1) method initializes all elements of the array to −1.
f = [-1, -1, -1, -1, -1, -1, -1, -1];
f = [0, 1, 1, 2, 3, 5, -1, -1];

*/