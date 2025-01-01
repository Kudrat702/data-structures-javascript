function permute(s, res, A, k, length) {
    if (k === length) {
        console.log(res.join('')); // Join the array and print the result
        return;
    }

    for (let i = 0; i < length; i++) {
        if (A[i] === 0) { // Check if the current index is unused
            res[k] = s[i]; // Assign the character to the result array
            A[i] = 1; // Mark as used
            permute(s, res, A, k + 1, length); // Recursive call for the next index
            A[i] = 0; // Backtrack: unmark the index as used
        }
    }
}

// Initialize arrays and call the function
let s = ['A', 'B', 'C']; // Input string as an array
let length = s.length; // Length of the string
let res = new Array(length); // Result array to hold permutations
let A = new Array(length).fill(0); // Array to track used indices

permute(s, res, A, 0, length);

/*
function permuteString(str, l, r) {
    if (l === r) {
        console.log(str);
    } else {
        for (let i = l; i <= r; i++) {
            str = swap(str, l, i); // Swap characters
            permuteString(str, l + 1, r); // Recursively permute the remaining string
            str = swap(str, l, i); // Backtrack to original string
        }
    }
}

// Helper function to swap characters in a string
function swap(str, i, j) {
    let charArray = str.split(''); // Convert string to array
    let temp = charArray[i];      // Swap logic
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join('');    // Convert back to string
}

// Test the function
let s = "ABC";
permuteString(s, 0, s.length - 1);
*/