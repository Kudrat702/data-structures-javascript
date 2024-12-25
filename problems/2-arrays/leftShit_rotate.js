function leftShiftRotate(arr){
    let temp = arr[0];
    for(let i = 0; i< arr.length-1; i++){   // i = left.
        arr[i] = arr[i+1];
    }
        arr[arr.length-1] = temp;
        return arr;
}
let arr = [1,2,3,4,5];
console.log(leftShiftRotate(arr));

//output: [ 2, 3, 4, 5, 1 ]