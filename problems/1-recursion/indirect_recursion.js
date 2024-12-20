function funA(n){
    if(n > 0){
        console.log(n);
        funB(n-1);
    }
}

function funB(n){
    if(n > 1){
        console.log(n);
        funA(n/2);
    }
}

let a = 20;
console.log(funA(a));

/*
Output:  
20
19
9.5
8.5
4.25
3.25
1.625
*/