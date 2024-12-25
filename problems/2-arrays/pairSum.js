function findPairWithSum(arr, k) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === k) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

// Example usage:
let array = [3, 5, 1, 8, 2, 7, 4];
let sum = 10;
let result = findPairWithSum(array, sum);
console.log(`Pairs with sum ${sum}:`, result);
// Output: Pairs with sum 10: [ [ 3, 7 ], [ 8, 2 ] ]

/*
//2.Sorted Array
function findPairWithSumSorted(arr, k) {
    let left = 0;
    let right = arr.length - 1;
    let pairs = [];

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === k) {
            pairs.push([arr[left], arr[right]]);
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }

    return pairs;
}

// Example usage:
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 10;
let result = findPairWithSumSorted(sortedArray, sum);
console.log(`Pairs with sum ${sum}:`, result);
// Output: Pairs with sum 10: [ [ 2, 8 ], [ 3, 7 ], [ 4, 6 ] ]
*/