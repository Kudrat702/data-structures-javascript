function duplicateSortedArray(arr){
    let lastDuplicate = 0;
    for(i = 0;i<arr.length;i++){
        if(arr[i] == arr[i+1] && arr[i] != lastDuplicate){
            console.log(`Duplicate Element =  ${arr[i]}`);
            lastDuplicate = arr[i];
        }
    }
}

let arr = [3,6,8,8,10,12,15,15,15,20];
duplicateSortedArray(arr);
// output:
// Duplicate Element =  8
// Duplicate Element =  15

/*
function findDuplicates(arr) {
    let duplicates = [];
    let index = 0;
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            if (index === 0 || duplicates[index - 1] !== arr[i]) {
                duplicates[index] = arr[i];
                index++;
            }
        } else {
            seen[arr[i]] = true;
        }
    }

    return duplicates;
}

// Example usage:
let unsortedArray = [3, 5, 2, 3, 8, 2, 1, 5];
let duplicates = findDuplicates(unsortedArray);
console.log(duplicates); 
// Output: [3, 2, 5]
*/