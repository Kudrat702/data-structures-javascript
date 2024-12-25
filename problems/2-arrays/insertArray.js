class Array {
    constructor(elements, size, length) {
        this.A = elements;
        this.size = size;
        this.length = length;
    }
}

function insert(arr, index, x) {
    if (index >= 0 && index <= arr.length) {
        for (let i = arr.length; i > index; i--) {
            arr.A[i] = arr.A[i - 1];
        }
        arr.A[index] = x;
        arr.length++;
    }
}

function display(arr) {
    console.log(arr.A.slice(0, arr.length));
}

const arr1 = new Array([2, 3, 4, 5, 6], 10, 5);
insert(arr1, 0, 12);
display(arr1);

//output: [ 12, 2, 3, 4, 5, 6 ]