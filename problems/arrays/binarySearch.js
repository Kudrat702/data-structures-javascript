function binarySearch(low,high,searchElement){
    let mid = 0;
    //let A = new Array(14);
    const A = [4,8,10,15,18,21,24,27,29,33,34,37,39,4,43];
    while(low <= high){
    mid = Math.floor((low + high)/2);

    if(searchElement == A[mid]){
        return mid;
    } else if(searchElement < A[mid]){
         high = mid -1;
    }else{
         low = mid + 1;
    }
   
}
     return -1;
}

let low = 0;
let high = 14;
let searchElement = 18;
console.log(binarySearch(low,high,searchElement));
