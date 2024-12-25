function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
    let k = 0;

    // Traverse both arrays and insert smaller element from arr1 or arr2
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray[k] = arr1[i];
            i++;
        } else {
            mergedArray[k] = arr2[j];
            j++;
        }
        k++;
    }

    // Store remaining elements of arr1
    while (i < arr1.length) {
        mergedArray[k] = arr1[i];
        i++;
        k++;
    }

    // Store remaining elements of arr2
    while (j < arr2.length) {
        mergedArray[k] = arr2[j];
        j++;
        k++;
    }

    return mergedArray;
}

// Example usage:
let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];
let mergedArray = mergeSortedArrays(array1, array2);
console.log(mergedArray); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8]