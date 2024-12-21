/*
let A = [8,2,3,5,7,6,10,4];
let searchElement = 1;
for(let i = 0; i < A.length; i++){
    if(A[i] == searchElement){
        console.log(`Element ${searchElement} found at index ${i}`);
    }else{
        console.log(`Element ${searchElement} not found`);

    }
}
// output:
// Element 6 not found
// Element 6 not found
// Element 6 not found
// Element 6 not found
// Element 6 not found
// Element 6 found at index 5
// Element 6 not found
// Element 6 not found
*/

function linearSearch(A, searchElement){
  for(let i = 0; i < A.length; i++){
    if(A[i] == searchElement){
        return A[i];
    }
}   
      return -1; 
}
let A = [8,2,3,5,7,6,10,4];
let searchElement = 1;
console.log(linearSearch(A,searchElement));
