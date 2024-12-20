function fun(n){
    if(n > 100){
        return n - 10;
    }else{
        return fun(fun(n+11));
    }
}

let n = 91;
console.log(fun(n));


