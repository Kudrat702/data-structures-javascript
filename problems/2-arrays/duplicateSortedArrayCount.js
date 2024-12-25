function duplicateSortedArrayCount(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            let j = i + 1;
            while (arr[j] == arr[i]) {
                j++;
            }
            console.log(`Element ${arr[i]} = ${j - i}`);
            i = j - 1; // Move `i` to the last duplicate index
        }
    }
}

let arr = [3, 5, 8, 8, 10, 12, 15, 15, 15, 20];
duplicateSortedArrayCount(arr);
// output:
// Element 8 = 2
// Element 15 = 3
// o(n) time complexity.
