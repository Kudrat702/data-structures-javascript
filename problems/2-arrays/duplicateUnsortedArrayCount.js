function duplicateUnsortedArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        if (arr[i] != -1) { // Skip already marked elements
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                    arr[j] = -1; // Mark duplicate as visited
                }
            }
            if (count > 1) {
                console.log(`Duplicate Element ${arr[i]}, Count = ${count}`);
            }
        }
    }
}

let arr = [8, 3, 6, 4, 6, 5, 6, 8, 2, 7];
duplicateUnsortedArray(arr);
//Output:
// Duplicate Element 8, Count = 2
// Duplicate Element 6, Count = 3