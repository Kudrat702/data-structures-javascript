//Static Variable 
function number(n){
   if(!number.staticX) number.staticX = 0;
    if(n > 0){
        number.staticX++;
        return number(n-1) + number.staticX ;
    }
    return 0;
}

let a = 5;
console.log(number(a));




//number.staticX acts like a static variable.
// It is initialized to 0 only on the first call to number.