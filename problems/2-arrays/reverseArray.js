function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

 for(left = 0; left<right; left++, right--) {
        // Swap elements
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

    }
    return arr;
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); 
// Output: [5, 4, 3, 2, 1]