// Missing one Element in Natural Number Array 
function missingOneElement(arr){
    let n = arr.length+1;
    let sumNaturalNumber = n*(n+1)/2;
    let sumArray = 0;
    for(let i = 0; i < arr.length; i++){
        sumArray += arr[i];
    }

    let missingArray = sumNaturalNumber - sumArray;
    console.log(`Missing Element ${missingArray}`);
}

 let arr = [1,2,3,4,5,6,8,9,10];
 missingOneElement(arr);
// output:
// Missing Element 7

/*
//missing unsequence element:
function missingOneUnsequenceElement(arr){
    let low = arr[0];
    let diff = low - 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]-i != diff){
            console.log(`Missing Element ${i+diff}`);
            break;
        }
    }
}
let arr = [6,7,8,9,10,11,13,14,15];
missingOneUnsequenceElement(arr);
// output:
// Missing Element 12
*/
/*
//Missing Multiple Element
function missingMultipleElement(arr){
    let low = arr[0];
    let diff = low - 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]-i != diff){
            while(diff < arr[i]-i){
                 console.log(`Missing Element ${i+diff}`);
                 diff++;
            }
        }
    }
}
let arr = [6,7,8,9,11,12,15,16,17];
missingMultipleElement(arr);
// output:
// Missing Element 10
// Missing Element 13
// Missing Element 14
*/