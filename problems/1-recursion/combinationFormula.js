function combFormula(n,r){
    if(r == 0 || n == r){
        return 1;
    }else{
        return combFormula(n-1,r-1) + combFormula(n-1,r);
    }
}

let n = 4;
let r = 2;
console.log(combFormula(n,r));

output:6