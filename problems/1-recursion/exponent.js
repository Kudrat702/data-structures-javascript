// function pow(m , n){
//     if(n == 0){
//         return 1;
//     }else{
//         return pow(m , n-1) * m;
//     }
// }

// let m = 2;
// let n = 3;
// console.log(pow(m, n));

function pow(m ,n){
    if(n == 0 ){
        return 1;
    }if( n % 2 == 0){   // even condition
        return pow(m*m , (n-1)/2);
    }else{
        return m * pow(m*m ,(n-1)/2);   //odd condition
    }
        
    }

    let m = 2;
    let n = 3;
    console.log(pow(m,n));
