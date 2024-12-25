function findMinMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min, max };
}

let array = [3, 5, 1, 8, 2, 7, 4];
let result = findMinMax(array);
console.log(`Minimum: ${result.min}, Maximum: ${result.max}`);
// Output: Minimum: 1, Maximum: 8