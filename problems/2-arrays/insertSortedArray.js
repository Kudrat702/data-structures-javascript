//1.Insert an element in a sorted array.
function insertSortedArray(arr, element) {   //insertElement = element.
    let i = arr.length - 1;

    // Move elements of arr[0..i-1], that are greater than element, to one position ahead of their current position
    while (i >= 0 && arr[i] > element) {
        arr[i + 1] = arr[i];
        i--;
    }

    // Insert the element at the correct position
    arr[i + 1] = element;

    return arr;
}
//let arr = [1, 2, 4, 5];  // it is use for insertSortedarray and isSortes function.
//let insertElement = 3;
//console.log(insertSortedArray(arr, insertElement)); 
//Output: [1, 2, 3, 4, 5]

//2.Checking if an array is Sorted
function isSorted(arr){
   
    for(i = 0; i <arr.length-1; i++){
        if(arr[i]<arr[i+1]){
             return true;
        }else{
            return false;
        }
         
    }
}
//let arr = [1, 2, 4, 5]; 
//console.log(isSorted(arr)); 
// //Output: true.

//3.Arrange -ve on left side and +ve on right side.
function rearrange(arr){
    let i = 0;
    let j = arr.length-1;
    while(i <= j){        //i = left -ve, j = right +ve.
       if(arr[i]<0){
              i++;
       }
          if(arr[j]>0){
                j--;          
            }
            if(i<j){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j]= temp;
                
            }
        }
        return arr;
    }

let arr = [-6,3,-8,10,5,-7,-9,12,-4,2]; // it is use for only rearrange function.
console.log(rearrange(arr));
//output: [-6, -4, -8, -9, -7, 5, 10, 12,  3,  2]



