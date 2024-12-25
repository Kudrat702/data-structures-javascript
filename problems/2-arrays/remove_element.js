let array = [0,1,2,3,4,5,6,7,8];

//1.pop() method to delete the last element of the array.
array.pop();
console.log("Delete Last Element = " + array);

//output : Delete Last Element = 0,1,2,3,4,5,6,7  '8 is deleted'.

//2.shift() method to delete the first element of the array.
array.shift();
console.log("Delete First Element = " + array);

//output: Delete First Element = 1,2,3,4,5,6,7  '0 is deleted'.

//3.splice() method to delete the element at a Specific index.
array.splice(2,1); //delete 1 element stating from index 2 .
console.log("Delete 3 at index 2 = " + array);

//output: Delete 3 at index 2 = 1,2,4,5,6,7 '3 is deleted'.

//4.delete() method to delete the element at a specific index. It leaves undefined in the array.
delete array[2];
console.log('Delete 4 at index 2 = ' + array);
//output: Delete 4 at index 2 = 1,2,undefined,5,6,7 '4 is deleted'.