function findDuplicates(arr) {
    let duplicates = [];
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] ) {
            if (index === 0 || duplicates[index - 1] !== arr[i]) {
                duplicates [index] = arr[i];
                index++;
            }
        }
    }
    return duplicates;
}

// Example usage:
let sortedArray = [1, 2, 2, 3, 4, 4, 5];
let duplicates = findDuplicates(sortedArray);
console.log(duplicates); 
// Output: [2, 4]