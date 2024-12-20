function fun(n){
    if(n> 0){
        console.log(n);
        fun(n-1);   // operation : last & caaling itself 
    }
}

let a = 3;
fun(a);

//OutpUt: 3 2 1