function fun(n){
    if(n > 0){
        console.log(n);
        fun(n-1);
    }
}

module.exports = fun;