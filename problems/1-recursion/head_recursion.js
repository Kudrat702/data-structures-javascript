function fun(n){
    if(n > 0){
        fun(n-1);
        console.log(n);
    }
}

let a = 3;
console.log(fun(a));

// output 1 2 3 