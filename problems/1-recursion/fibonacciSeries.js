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
n=7
fib = fib(n-2)+fib(n-1)
    = fib(6-1)+fib(6-2)
    =5+4
    = 9
*/
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
let f = new Array(n + 1).fill(-1); /// Initialize the memoization array with -1
console.log(fibS(n));
//output = 13
*/

/*
The .fill(-1) method initializes all elements of the array to −1.
f = [-1, -1, -1, -1, -1, -1, -1, -1];
f = [0, 1, 1, 2, 3, 5, -1, -1];

*/