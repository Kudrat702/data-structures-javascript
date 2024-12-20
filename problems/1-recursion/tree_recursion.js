function fun(n){
    if(n > 0){
        console.log(n);
        fun(n-1);
        fun(n-1);
    }
}

let a = 3;
fun(a);

//output : 3 2 1 1 2 1 1