class Array {
    constructor(elements, size, length) {
        this.A = elements; 
        this.size = size;  
        this.length = length; 
    }
}

// Function to display the elements of the array
function display(arr) {
    console.log("\nElements are:");
    for (let i = 0; i < arr.length; i++) {
        process.stdout.write(arr.A[i] + " ");
    }
    console.log(); // For a new line
}

// Function to delete an element at a specific index
function deleteElement(arr, index) {
    let x = 0; // Variable to store the deleted element
    if (index >= 0 && index < arr.length) {
        x = arr.A[index]; // Store the element to be deleted
        // Shift elements to the left to fill the gap
        for (let i = index; i < arr.length - 1; i++) {
            arr.A[i] = arr.A[i + 1];
        }
        arr.length--; 
        return x; 
    }
    return 0; // Return 0 if index is invalid
}


const arr1 = new Array([2, 3, 4, 5, 6], 10, 5);

console.log("Deleted Element:", deleteElement(arr1, 0)); // Delete element at index 0
display(arr1); 

/*output:
Deleted Element: 2

Elements are:
3 4 5 6 
*/